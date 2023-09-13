import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

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
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <ShadowHtmlText />
      <ScrollToTop />
      <MouseEffect />
      <Navigation />
      <Cookie />

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/conditions+generales" element={<ConditionCGV />} />
          <Route path="/mentions+legales" element={<MentionsLegales />} />
          <Route path="/politique+cookies" element={<PolitiqueCookies />} />
          <Route
            path="/creer+entreprise"
            element={<SectionCreerEntreprise />}
          />
          <Route
            path="/modification+statut"
            element={<SectionModificationStatut />}
          />
          <Route
            path="/fermeture+entreprise"
            element={<SectionFermetureEntreprise />}
          />
          <Route
            path="/politique+confidentialité"
            element={<PolitiqueDeConfidentialite />}
          />
          <Route path="/payment+success" element={<PaymentSucces />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
