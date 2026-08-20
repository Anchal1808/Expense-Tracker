// React library imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// BrowserRouter is used for client-side routing
import { BrowserRouter } from "react-router-dom";

// Global CSS
import "./index.css";

// Main App component
import App from "./App.jsx";

// Render the React application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter enables navigation between pages */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);