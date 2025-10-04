import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-700">{this.state.error?.message}</p>
          <a
            href="/"
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Go Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
