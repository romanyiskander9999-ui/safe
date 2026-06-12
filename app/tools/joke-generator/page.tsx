"use client";

import { useState } from "react";
import { RefreshCw, Copy, Heart } from "lucide-react";

interface Joke {
  id: number;
  type: "single" | "twopart";
  joke?: string;
  setup?: string;
  delivery?: string;
  category: string;
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("Any");
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [favorites, setFavorites] = useState<Joke[]>([]);

  const categories = [
    "Any",
    "General",
    "Programming",
    "Knock-knock",
    "Spooky",
    "Christmas",
  ];

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    setLiked(false);
    setCopied(false);

    try {
      const categoryParam = category === "Any" ? "Any" : category;
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${categoryParam}?format=json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data: Joke = await response.json();
      setJoke(data);
    } catch (err) {
      setError("Failed to load joke. Please try again.");
      console.error("Error fetching joke:", err);
    } finally {
      setLoading(false);
    }
  };

  const getJokeText = () => {
    if (!joke) return "";
    if (joke.type === "single") {
      return joke.joke || "";
    } else {
      return `${joke.setup}\n\n${joke.delivery}`;
    }
  };

  const copyToClipboard = () => {
    const jokeText = getJokeText();
    navigator.clipboard.writeText(jokeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addToFavorites = () => {
    if (joke && !favorites.some((fav) => fav.id === joke.id)) {
      setFavorites([...favorites, joke]);
      setLiked(true);
    } else if (joke) {
      setFavorites(favorites.filter((fav) => fav.id !== joke.id));
      setLiked(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">😂 Joke Generator</h1>
          <p className="text-blue-100 text-lg">Powered by JokeAPI</p>
        </div>

        {/* Category Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Select Category:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`py-2 px-3 rounded-lg font-medium transition-all ${
                  category === cat
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Joke Display */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin">
                <RefreshCw className="w-10 h-10 text-blue-500" />
              </div>
              <span className="ml-3 text-gray-600 font-medium">Loading joke...</span>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500 text-lg font-semibold mb-4">❌ {error}</p>
              <button
                onClick={fetchJoke}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Try Again
              </button>
            </div>
          ) : joke ? (
            <div className="space-y-6">
              {/* Joke Content */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
                {joke.type === "single" ? (
                  <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
                    {joke.joke}
                  </p>
                ) : (
                  <div className="space-y-4">
                    <p className="text-xl text-gray-800 font-semibold">
                      {joke.setup}
                    </p>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <p className="text-2xl text-blue-600 font-bold">
                        {joke.delivery}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Category Badge */}
              <div className="flex justify-center">
                <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                  📁 {joke.category}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  <Copy className="w-5 h-5" />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>

                <button
                  onClick={addToFavorites}
                  className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                    liked
                      ? "bg-red-500 text-white"
                      : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={liked ? "currentColor" : "none"}
                  />
                  <span>{liked ? "Liked" : "Like"}</span>
                </button>

                <button
                  onClick={fetchJoke}
                  disabled={loading}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg font-medium transition-all disabled:opacity-50"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Next</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">👇 Click the button below to get started!</p>
            </div>
          )}
        </div>

        {/* Get Joke Button */}
        {!joke || !loading ? (
          <button
            onClick={fetchJoke}
            disabled={loading}
            className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 text-xl"
          >
            {joke ? "🔄 Get Another Joke" : "🤭 Get a Joke"}
          </button>
        ) : null}

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ❤️ My Favorites ({favorites.length})
            </h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {favorites.map((fav) => (
                <div
                  key={fav.id}
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setJoke(fav)}
                >
                  <p className="text-gray-700 text-sm">
                    {fav.type === "single"
                      ? fav.joke?.substring(0, 80) + "..."
                      : fav.setup?.substring(0, 80) + "..."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-blue-100 rounded-lg p-4 text-blue-800">
          <p className="text-sm text-center">
            💡 <strong>Tip:</strong> Different categories have different types of jokes.
            Try Programming category for some laughs!
          </p>
        </div>
      </div>
    </div>
  );
}
