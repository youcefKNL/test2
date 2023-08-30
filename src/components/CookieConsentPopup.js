// import React from "react";
// import Cookies from "js-cookie";
// import { NavLink } from "react-router-dom";

// const CookieConsentPopup = ({
//   showPopup,
//   setShowPopup,
//   showCookieConsent, // Recevez l'état showCookieConsent
//   setShowCookieConsent, // Recevez la fonction de mise à jour de l'état showCookieConsent
// }) => {
//   const handleAccept = () => {
//     Cookies.set("cookies-LEGALIS-Consent", "accepted", { expires: 365 });
//     setShowPopup(false);
//     setShowCookieConsent(false); // Mettez à jour l'état showCookieConsent
//     setShowPopup(false); // Masquer la pop-up après acceptation
//   };

//   const handleDecline = () => {
//     Cookies.set("cookies-LEGALIS-Consent", "declined", { expires: 365 });
//     setShowPopup(false);
//     setShowCookieConsent(false); // Mettez à jour l'état showCookieConsent
//     setShowPopup(false); // Masquer la pop-up après refus
//   };
//   if (!showPopup) {
//     return null;
//   }

//   return (
//     <div className="cookieContainer">
//       <div className="cookie-popup">
//         <h3> Gestion des cookies LEGALIS Cabinet de Conseil</h3>
//         <button className="cookie-popup-button decline" onClick={handleDecline}>
//           Continuer sans accepter
//         </button>
//         <p>
//           Nous utilisons des cookies pour optimiser votre expérience utilisateur
//           et pour améliorer nos contenus. Vous pouvez personnaliser et modifier
//           vos choix à tout moment.
//           <br />
//           <NavLink to="/politique-confidentialite">
//             Consulter notre politique de confidentialité
//           </NavLink>
//         </p>

//         <div className="cookie-popup-buttons">
//           <button
//             className="cookie-popup-button decline"
//             onClick={handleDecline}
//           >
//             Refuser
//           </button>
//           <button className="cookie-popup-button accept" onClick={handleAccept}>
//             Accepter
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieConsentPopup;
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CookieConsentPopup = ({
  showPopup,
  setShowPopup,
  showCookieConsent,
  setShowCookieConsent,
}) => {
  const [customizeCookies, setCustomizeCookies] = useState(false);
  const [googleAnalytics, setGoogleAnalytics] = useState(true);
  const [otherCookies, setOtherCookies] = useState(false);

  const handleAcceptAll = () => {
    Cookies.set("cookies-LEGALIS-Consent", "accepted", { expires: 365 });
    setShowPopup(false);
    setShowCookieConsent(false);

    // Suivi de l'événement d'acceptation de tous les cookies
    // window.gtag("event", "accept_all_cookies", {
    //   event_category: "Cookies",
    // });
  };
  const handleDeclineAll = () => {
    Cookies.set("cookies-LEGALIS-Consent", "declined", { expires: 365 });
    setShowPopup(false);
    setShowCookieConsent(false); // Mettez à jour l'état showCookieConsent
    setShowPopup(false); // Masquer la pop-up après refus
  };

  const handleCustomize = () => {
    setCustomizeCookies(true);
  };

  const handleFinishCustomizing = () => {
    Cookies.set("cookies-LEGALIS-Consent", "accepted", { expires: 365 });
    setShowPopup(false);
    setShowCookieConsent(false);

    // Suivi de l'événement d'acceptation personnalisée des cookies
    // window.gtag("event", "accept_customized_cookies", {
    //   event_category: "Cookies",
    // });
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="cookieContainer">
      <div className="cookie-popup">
        {customizeCookies ? (
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
              <span className="toggle-label">Google Analytics</span>
            </div>

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
              <span className="toggle-label">Autres cookies</span>
            </div>

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
                to="/politique-confidentialite"
                title="Consulter la politique de confidentialité"
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
      </div>
    </div>
  );
};

export default CookieConsentPopup;
