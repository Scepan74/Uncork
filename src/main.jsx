import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./Components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* whole App is inside context provider so that context is accessible to all */}
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
