import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
