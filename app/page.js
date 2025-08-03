import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Head>
        <title>AI Tools Recommendation Hub</title>
        <meta
          name="description"
          content="Discover the best AI-powered tools for productivity, marketing, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to AI Tools Hub
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We help freelancers and teams discover the best productivity tools
          using AI-based suggestions. Our platform is launching soon. Stay
          tuned!
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Coming Soon Features</h2>
          <ul className="text-left text-gray-600 list-disc pl-6">
            <li>AI-powered product recommendations</li>
            <li>Tool comparisons and reviews</li>
            <li>Exclusive affiliate deals</li>
          </ul>
        </div>
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        &copy; 2025 AI Tools Hub. All rights reserved.
      </footer>
    </div>
  );
}
