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
import CookieIcon from "./components/CookiesComponent";
import PolitiqueCookies from "./pages/PolitiqueCookies";

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

    if (
      cookiesConsent === "All Cookies Accepted" ||
      cookiesConsent === "GoogleAnalytics Cookie accepted"
    ) {
      setShowPopup(false);
    } else if (
      cookiesConsent === "ALL Cookies declined" ||
      cookiesConsent === "GoogleAnalytics Cookie declined"
    ) {
      Object.keys(Cookies.get()).forEach((cookieName) => {
        if (cookieName.startsWith("_ga")) {
          Cookies.remove(cookieName);
        }
      }); // Supprimer le cookie Google Analytics
      setShowPopup(false); // Ne pas afficher la pop-up dans ce cas non plus
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
        <Route path="/politique+cookies" element={<PolitiqueCookies />} />
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

      <CookieIcon showPopup={showPopup} setShowPopup={setShowPopup} />
    </BrowserRouter>
  );
}

export default App;
