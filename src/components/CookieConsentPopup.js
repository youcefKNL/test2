import React, { useState } from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/img/logo-Legalis.png";

//*******************************************************************************************************

const CookieConsentPopup = ({
  showPopup,
  setShowPopup,
  setShowCookieConsent,
}) => {
  const [customizeCookies, setCustomizeCookies] = useState(false);
  // const [otherCookies, setOtherCookies] = useState(false);
  const [googleAnalytics, setGoogleAnalytics] = useState(false);
  const cookieOptions = {
    expires: 365,
    secure: true, // Transmettre uniquement via HTTPS
    sameSite: "strict", // Limiter le partage des cookies aux requêtes du même site
    // httpOnly: true, // Empêcher l'accès via JavaScript
  };

  //************************************Accepter tous les cookie
  const handleAcceptAll = () => {
    // Configurez les options sécurisées pour les cookies
    Cookies.set(
      "cookies-LEGALIS-Consent",
      "All Cookies Accepted",
      cookieOptions
    );
    setShowPopup(false);
    setShowCookieConsent(false); // Masquer la fenêtre contextuelle après acceptation

    // Suivi de l'événement d'acceptation de tous les cookies
    window.gtag("event", "accept_all_cookies", {
      event_category: "Cookies",
    });
  };

  //************************************Continuer sans accepter
  const handleDeclineAll = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      if (cookieName.startsWith("_ga")) {
        Cookies.remove(cookieName);
      }
    }); // Supprimer le cookie Google Analytics

    Cookies.set(
      "cookies-LEGALIS-Consent",
      "ALL Cookies declined",
      cookieOptions
    );
    setShowPopup(false);
    setShowCookieConsent(false); // Mettez à jour l'état showCookieConsent
    setShowPopup(false); // Masquer la pop-up après refus
    setGoogleAnalytics(true);
  };

  const handleCustomize = () => {
    setCustomizeCookies(true);
  };

  //************************************Personnalisation des Cookies
  const handleFinishCustomizing = () => {
    const googleAnalyticsAccepted = googleAnalytics; // Vérifiez si l'utilisateur a accepté Google Analytics

    if (googleAnalyticsAccepted) {
      Cookies.set(
        "cookies-LEGALIS-Consent",
        "GoogleAnalytics Cookie accepted",
        cookieOptions
      );
      setShowPopup(false);
      setShowCookieConsent(false);
      setGoogleAnalytics(true);
      // Envoyer un événement d'acceptation personnalisée des cookies
      window.gtag("event", "accept_customized_cookies", {
        event_category: "Cookies",
      });
    } else {
      Object.keys(Cookies.get()).forEach((cookieName) => {
        if (cookieName.startsWith("_ga")) {
          Cookies.remove(cookieName);
        }
      }); // Supprimer le cookie Google Analytics
      Cookies.set(
        "cookies-LEGALIS-Consent",
        "GoogleAnalytics Cookie declined",
        cookieOptions
      );
      setShowPopup(false);
      setShowCookieConsent(false);
    }
  };

  if (!showPopup) {
    return null;
  }

  //*******************************************************************************************************

  return (
    <section className="cookieContainer">
      <div className="cookie-popup">
        {customizeCookies ? (
          //************************************ Modale 2

          <div className="modal2">
            <h3>Expérience utilisateur 🤩 </h3>
            <p>
              Les cookies servent à améliorer votre expérience. Nous
              enregistrons les informations que vous avez bien voulu nous
              confier afin d’adapter notre site à vos besoins et à votre profil.
              Nous vous permettons de prolonger l’expérience quand vous quittez
              notre site, en vous proposant des annonces personnalisées.
            </p>

            <div className="toggle-wrapper">
              <div className="toggle checkcross">
                <input
                  id="googleAnalytics"
                  type="checkbox"
                  checked={googleAnalytics}
                  onChange={() => setGoogleAnalytics(!googleAnalytics)}
                />
                <label className="toggle-item" htmlFor="googleAnalytics">
                  <div className="check"></div>
                </label>
              </div>
              <span>
                Permet d'analyser les statistiques de consultation de notre site
              </span>
              <FontAwesomeIcon icon={faCircleQuestion} />
              <span className="toggle-label">Google Analytics</span>
            </div>
            {/* 
            <div className="toggle-wrapper">
              <div className="toggle checkcross">
                <input
                  id="checkcross"
                  type="checkbox"
                  checked={otherCookies}
                  onChange={() => setOtherCookies(!otherCookies)}
                />
                <label className="toggle-item" htmlFor="checkcross">
                  <div className="check"></div>
                </label>
              </div>
              <span></span>
              <span className="toggle-label">Autres cookies</span>
            </div> */}

            <div className="cookie-popup-buttons">
              <button
                className="cookie-popup-button accept"
                onClick={handleAcceptAll}
              >
                J'accepte tout
              </button>
              <button
                className="cookie-popup-button"
                onClick={handleFinishCustomizing}
              >
                Terminer
              </button>
            </div>
          </div>
        ) : (
          //************************************ Modale 1

          <div className="modal1">
            <h3>
              🍪 Gestion des cookies 🍪 <br />
              LEGALIS Cabinet de Conseil
            </h3>
            <button
              className="cookie-popup-button decline"
              onClick={handleDeclineAll}
              title=" Pour une expérience personnalisée et sans interruption, nous vous
                encourageons à accepter nos cookies. Cela nous permet de vous proposer
                des contenus pertinents et de vous offrir un service de qualité. Merci"
            >
              Continuer sans accepter
            </button>
            <br />
            <p>
              Nous utilisons des cookies pour optimiser votre expérience
              utilisateur et pour améliorer nos contenus. Vous pouvez
              personnaliser et modifier vos choix à tout moment.
              <br /> Consulter notre &nbsp;
              <NavLink
                to="/politique+confidentialité"
                title="Consulter la politique de confidentialité"
                onClick={() => setShowPopup(false)}
              >
                politique de confidentialité
              </NavLink>
            </p>
          </div>
        )}

        <div className="cookie-popup-buttons">
          {!customizeCookies && (
            <>
              <button
                className="cookie-popup-button accept"
                onClick={handleAcceptAll}
              >
                J'accepte tout
              </button>
              <button
                className="cookie-popup-button customize"
                onClick={handleCustomize}
              >
                Personnaliser
              </button>
            </>
          )}
          {customizeCookies && (
            <button
              className="cookie-popup-button back"
              onClick={() => setCustomizeCookies(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
        </div>
        <div className="footerPopUp">
          powered by <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CookieConsentPopup;
