import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-8rb64xpkjhd0p5np.us.auth0.com"
      clientId="WMt4ec0pNbwmi3p6B7rGr1fxAMN6yuDH"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
      <Router>
        <App />
      </Router>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
