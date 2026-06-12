import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SafePlay',
  description: 'Digital safety platform for children',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
