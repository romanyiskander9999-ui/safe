"use client";

import Link from "next/link";
import { Laugh, Code, Zap } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

const tools: Tool[] = [
  {
    id: "joke-generator",
    name: "Joke Generator",
    description: "Get random jokes from various categories using JokeAPI",
    icon: <Laugh className="w-8 h-8" />,
    path: "/tools/joke-generator",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "coming-soon-1",
    name: "Coming Soon",
    description: "More tools are on the way...",
    icon: <Zap className="w-8 h-8" />,
    path: "#",
    color: "from-green-500 to-blue-500",
  },
  {
    id: "coming-soon-2",
    name: "Coming Soon",
    description: "More tools are on the way...",
    icon: <Code className="w-8 h-8" />,
    path: "#",
    color: "from-orange-500 to-red-500",
  },
];

export default function ToolsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              🛠️ Tools & Utilities
            </h1>
            <p className="text-gray-600 text-lg">
              Useful tools for work and entertainment
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool) => (
              <div key={tool.id} className="group">
                <Link href={tool.path}>
                  <div
                    className={`h-full bg-gradient-to-br ${tool.color} rounded-xl shadow-lg p-6 text-white cursor-pointer transform transition-all hover:shadow-2xl hover:scale-105 ${
                      tool.path === "#" ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="mb-4">{tool.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
                    <p className="text-white/90">{tool.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Fast & Reliable
                  </h3>
                  <p className="text-gray-600">
                    Instant results powered by external APIs
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🎨</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Beautiful Design
                  </h3>
                  <p className="text-gray-600">
                    Intuitive and modern user interface
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">💾</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Save Favorites
                  </h3>
                  <p className="text-gray-600">
                    Keep track of your favorite results
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Fully Responsive
                  </h3>
                  <p className="text-gray-600">
                    Works seamlessly on all devices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* API Info */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              🔬 Using External APIs
            </h3>
            <p className="text-blue-800 mb-3">
              Our tools leverage powerful external APIs to provide real-time,
              reliable data:
            </p>
            <ul className="text-blue-800 space-y-2">
              <li>
                ✅ <strong>JokeAPI</strong> - Fetches jokes from multiple
                categories
              </li>
              <li>✅ <strong>Free & Open</strong> - No authentication required</li>
              <li>
                ✅ <strong>High Quality</strong> - Curated content from trusted
                sources
              </li>
              <li>
                ✅ <strong>Rate Limited</strong> - Reasonable usage limits to
                ensure reliability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
