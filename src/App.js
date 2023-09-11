import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MentionsLegales from "./pages/MentionsLegales";
import PaymentSucces from "./pages/PaymentSucess";
import Tarifs from "./pages/Tarifs";
import SectionCreerEntreprise from "./pages/SectionCreerEntreprise";
import SectionModificationStatut from "./pages/SectionModificationStatut";
import SectionFermetureEntreprise from "./pages/SectionFermetureEntreprise";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import PolitiqueDeConfidentialite from "./pages/PolitiqueConfidentialté";

import MouseEffect from "./components/MouseEffect";
import ConditionCGV from "./pages/ConditionsGenerales";
import ScrollToTop from "./components/ScrollToTop";
import ShadowHtmlText from "./components/ShadowHtmlText";
import Cookie from "./components/Cookie";

function App() {
  // const [showCookieConsent, setShowCookieConsent] = useState(true);
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const cookiesConsent = Cookies.get("cookies-LEGALIS-Consent");

  //   if (
  //     cookiesConsent === "All Cookies Accepted" ||
  //     cookiesConsent === "GoogleAnalytics Cookie accepted"
  //   ) {
  //     setShowPopup(false);
  //   } else if (
  //     cookiesConsent === "ALL Cookies declined" ||
  //     cookiesConsent === "GoogleAnalytics Cookie declined"
  //   ) {
  //     Object.keys(Cookies.get()).forEach((cookieName) => {
  //       if (cookieName.startsWith("_ga")) {
  //         Cookies.remove(cookieName);
  //       }
  //     }); // Supprimer le cookie Google Analytics
  //     setShowPopup(false); // Ne pas afficher la pop-up dans ce cas non plus
  //   } else {
  //     setShowPopup(true); // Afficher la pop-up lors de la première visite
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <ShadowHtmlText />
      <MouseEffect />
      <Navigation />
      <ScrollToTop />
      <Cookie />
      <Routes>
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

      {/* <CookieConsentPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showCookieConsent={showCookieConsent} // Passez l'état showCookieConsent
        setShowCookieConsent={setShowCookieConsent} // Passez la fonction de mise à jour de l'état showCookieConsent
      />
      <CookieIcon showPopup={showPopup} setShowPopup={setShowPopup} /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
