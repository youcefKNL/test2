import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CGV from "./pages/ConditionsGenerales";
import MentionsLegales from "./components/MentionsLegales";
import PaymentSucces from "./components/PaymentSucess";
import CookieConsentPopup from "./components/CookieConsentPopup";
import Cookies from "js-cookie";

import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.slice(1);
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return null;
}

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesConsent = Cookies.get("cookies-LEGALIS-Consent");
    if (cookiesConsent === "accepted" || cookiesConsent === "declined") {
      setShowPopup(false);
    } else {
      setShowPopup(true); // Afficher la pop-up lors de la première visite
    }
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions+generales" element={<CGV />} />
        <Route path="/mentions+legales" element={<MentionsLegales />} />
        <Route
          path="/payment+success{CHECKOUT_SESSION_ID}"
          element={<PaymentSucces />}
        />
      </Routes>
      <ScrollToAnchor />
      <Footer />
      <CookieConsentPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showCookieConsent={showCookieConsent} // Passez l'état showCookieConsent
        setShowCookieConsent={setShowCookieConsent} // Passez la fonction de mise à jour de l'état showCookieConsent
      />
      <div className={`cookie-icon ${showPopup ? "hidden" : "visible"}`}>
        <button onClick={() => setShowPopup(true)}>🍪</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
