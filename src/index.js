import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

const rootElement = document.getElementById("root");

// Vérifie si React Snap est en train de pré-rendre la page
if (rootElement.hasChildNodes() && window.snapSaveState) {
  // Si oui, utilise hydrate pour réhydrater l'application (liaison avec le HTML pré-rendu)
  hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
} else {
  // Si ce n'est pas le cas, utilise render pour un rendu normal
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}
