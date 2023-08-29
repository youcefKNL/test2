import React from "react";
import Cookies from "js-cookie";

const CookieConsentPopup = ({
  showPopup,
  setShowPopup,
  showCookieConsent, // Recevez l'état showCookieConsent
  setShowCookieConsent, // Recevez la fonction de mise à jour de l'état showCookieConsent
}) => {
  const handleAccept = () => {
    Cookies.set("cookies-LEGALIS-Consent", "accepted", { expires: 365 });
    setShowPopup(false);
    setShowCookieConsent(false); // Mettez à jour l'état showCookieConsent
    setShowPopup(false); // Masquer la pop-up après acceptation
  };

  const handleDecline = () => {
    Cookies.set("cookies-LEGALIS-Consent", "declined", { expires: 365 });
    setShowPopup(false);
    setShowCookieConsent(false); // Mettez à jour l'état showCookieConsent
    setShowPopup(false); // Masquer la pop-up après refus
  };
  if (!showPopup) {
    return null;
  }

  return (
    <div className="cookie-popup">
      <p>
        En poursuivant votre navigation sur ce site, vous acceptez l'utilisation
        des cookies.
      </p>
      <div className="cookie-popup-buttons">
        <button className="cookie-popup-button accept" onClick={handleAccept}>
          Accepter
        </button>
        <button className="cookie-popup-button decline" onClick={handleDecline}>
          Refuser
        </button>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
