import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
import SectionModificationStatut from "./pages/SectionModificationStatut";
import SectionFermetureEntreprise from "./pages/SectionFermetureEntreprise";
import ConditionCGV from "./pages/ConditionsGenerales";
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
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route
          path="/payment+success{CHECKOUT_SESSION_ID}"
          element={<PaymentSucces />}
        /> */}
        {/* <Route path="/tarifs" element={<Tarifs />} /> */}
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="page" timeout={500}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/tarifs"
          element={
            <TransitionGroup>
              <CSSTransition key="tarifs" classNames="page" timeout={500}>
                <Tarifs />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        {/* <Route path="/conditions+generales" element={<CGV />} /> */}

        <Route
          path="/conditions+generales"
          element={
            <TransitionGroup>
              <CSSTransition
                key="conditions+generales"
                classNames="page"
                timeout={500}
              >
                <ConditionCGV />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/mentions+legales"
          element={
            <TransitionGroup>
              <CSSTransition
                key="mentions+legales"
                classNames="page"
                timeout={500}
              >
                <MentionsLegales />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/politique+cookies"
          element={
            <TransitionGroup>
              <CSSTransition
                key="politique+cookies"
                classNames="page"
                timeout={500}
              >
                <PolitiqueCookies />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/creer+entreprise"
          element={
            <TransitionGroup>
              <CSSTransition
                key="creer+entreprise"
                classNames="page"
                timeout={500}
              >
                <SectionCreerEntreprise />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/modification+statut"
          element={
            <TransitionGroup>
              <CSSTransition
                key="modification+statut"
                classNames="page"
                timeout={500}
              >
                <SectionModificationStatut />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/fermeture+entreprise"
          element={
            <TransitionGroup>
              <CSSTransition
                key="fermeture+entreprise"
                classNames="page"
                timeout={500}
              >
                <SectionFermetureEntreprise />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/politique+confidentialité"
          element={
            <TransitionGroup>
              <CSSTransition
                key="politique+confidentialité"
                classNames="page"
                timeout={500}
              >
                <PolitiqueDeConfidentialite />
              </CSSTransition>
            </TransitionGroup>
          }
        />
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
