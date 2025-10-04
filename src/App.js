import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import ErrorBoundary from "./pages/ErrorBoundary";
import ErrorTest from "./pages/ErrorTest";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/error-test" element={<ErrorTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </ErrorBoundary>
  );
}
