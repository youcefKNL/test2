// import React, { useEffect, useState } from "react";
// import CookieConsentPopup from "./CookieConsentPopup";
// import CookieIcon from "./CookiesComponent";
// import Cookies from "js-cookie";

// const Cookie = () => {
//   const [showCookieConsent, setShowCookieConsent] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const cookiesConsent = Cookies.get("cookies-LEGALIS-Consent");

//     if (
//       cookiesConsent === "All Cookies Accepted" ||
//       cookiesConsent === "GoogleAnalytics Cookie accepted"
//     ) {
//       setShowPopup(false);
//     } else if (
//       cookiesConsent === "ALL Cookies declined" ||
//       cookiesConsent === "GoogleAnalytics Cookie declined"
//     ) {
//       Object.keys(Cookies.get()).forEach((cookieName) => {
//         if (cookieName.startsWith("_ga")) {
//           Cookies.remove(cookieName);
//         }
//       }); // Supprimer le cookie Google Analytics
//       setShowPopup(false); // Ne pas afficher la pop-up dans ce cas non plus
//     } else {
//       setShowPopup(true); // Afficher la pop-up lors de la première visite
//     }
//   }, []);
//   return (
//     <>
//       <CookieConsentPopup
//         showPopup={showPopup}
//         setShowPopup={setShowPopup}
//         showCookieConsent={showCookieConsent} // Passez l'état showCookieConsent
//         setShowCookieConsent={setShowCookieConsent} // Passez la fonction de mise à jour de l'état showCookieConsent
//       />
//       <CookieIcon showPopup={showPopup} setShowPopup={setShowPopup} />
//     </>
//   );
// };

// export default Cookie;

import React, { useEffect, useState } from "react";
import CookieConsentPopup from "./CookieConsentPopup";
import CookieIcon from "./CookiesComponent";
import Cookies from "js-cookie";

const Cookie = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesConsent = Cookies.get("cookies-LEGALIS-Consent");

    const showPopupAfterDelay = () => {
      setShowPopup(true);
    };

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
      // Afficher la pop-up après un délai de 10 secondes lors de la première visite
      setTimeout(showPopupAfterDelay, 15000);
    }
  }, []);

  return (
    <>
      <CookieConsentPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showCookieConsent={showCookieConsent} // Passez l'état showCookieConsent
        setShowCookieConsent={setShowCookieConsent} // Passez la fonction de mise à jour de l'état showCookieConsent
      />
      <CookieIcon showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default Cookie;
