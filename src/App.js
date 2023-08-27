import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CGV from "./pages/ConditionCGV";
import MentionsLegales from "./components/MentionsLegales.js";
import PaymentSucces from "./components/PaymentSucess";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.slice(1); // Retirer le #
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return null;
}

function App() {
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
        {/* //<Route path="*" element={<Page404 />} /> */}
      </Routes>
      <ScrollToAnchor /> {/* Ajoutez cette ligne */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
