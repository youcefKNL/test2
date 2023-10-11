import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
import ShadowJsText from "./components/ShadowJavaScriptText";
import Cookie from "./components/Cookie";
import { AnimatePresence } from "framer-motion";
import Page404 from "./pages/Page404";
import ContactUs from "./pages/ContactUs";

function App() {
  const location = useLocation();
  return (
    <>
      <ShadowJsText />
      <ScrollToTop />
      <MouseEffect />
      <Navigation />
      <Cookie />

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact+us" element={<ContactUs />} />
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
