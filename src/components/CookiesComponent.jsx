import React from "react";

const CookieIcon = ({ showPopup, setShowPopup }) => {
  const handleCookieClick = () => {
    setShowPopup(true);
  };
  

  return (
    <section className={`cookie-icon ${showPopup ? "hidden" : "visible"}`}>
      <button onClick={handleCookieClick} title="Personnaliser les préférences de cookies">🍪</button>
    </section>
  );
};

export default CookieIcon;
