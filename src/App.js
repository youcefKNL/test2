import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CGV from "./pages/ConditionsGenerales";
import MentionsLegales from "./pages/MentionsLegales";
import PaymentSucces from "./pages/PaymentSucess";
import CookieConsentPopup from "./components/CookieConsentPopup";
import Cookies from "js-cookie";

import { useLocation } from "react-router-dom";
import CookieIcon from "./components/CookiesComponent";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import PolitiqueDeConfidentialite from "./pages/PolitiqueConfidentialté";
import MouseEffect from "./components/MouseEffect";
import Tarifs from "./pages/Tarifs";
import SectionCreerEntreprise from "./pages/SectionCreerEntreprise";
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
  useEffect(() => {
    console.log(
      "%cBienvenue dans la console ! 🎉",
      "color: gold; background: black; font-size: 20px; padding: 10px;"
    );
    console.log(
      "%cSi vous êtes ici, vous devez être un·e développeur·se génial·e.",
      "color: black; background: gold; font-size: 16px; padding: 8px;"
    );
    console.log(
      "%cSi vous avez besoin d'aide pour donner vie à vos projets, contactez-nous à [votre email ou site Web].",
      "color: gold; background: black; font-size: 16px; padding: 8px;"
    );
    console.log(
      "%cLaissez la magie du code opérer ! 💻✨",
      "color: gold; background: black; font-size: 20px; padding: 10px;"
    );
  }, []);
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
      <MouseEffect />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions+generales" element={<CGV />} />
        <Route path="/mentions+legales" element={<MentionsLegales />} />
        <Route path="/politique+cookies" element={<PolitiqueCookies />} />
        <Route path="/creer+entreprise" element={<SectionCreerEntreprise />} />
        <Route
          path="/politique+confidentialité"
          element={<PolitiqueDeConfidentialite />}
        />
        {/* <Route
          path="/payment+success{CHECKOUT_SESSION_ID}"
          element={<PaymentSucces />}
        /> */}
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/payment+success" element={<PaymentSucces />} />
      </Routes>
      <ScrollToAnchor />

      <CookieConsentPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showCookieConsent={showCookieConsent} // Passez l'état showCookieConsent
        setShowCookieConsent={setShowCookieConsent} // Passez la fonction de mise à jour de l'état showCookieConsent
      />
      <CookieIcon showPopup={showPopup} setShowPopup={setShowPopup} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
