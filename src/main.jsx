
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Auth0Provider
    domain="dev-i2bme31vn7zbshl4.us.auth0.com"
    clientId="GuHVaFET639Bux7s5G4qym016TTAFlA4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
 
</StrictMode>
);

