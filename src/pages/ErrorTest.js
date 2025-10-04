import React from "react";

export default function ErrorTest() {
  // This will deliberately throw an error to test the ErrorBoundary
  throw new Error("This is a test error from /error-test route!");
}
