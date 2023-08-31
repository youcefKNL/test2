import React from "react";

const CookieIcon = ({ showPopup, setShowPopup }) => {
  const handleCookieClick = () => {
    setShowPopup(true);
  };

  return (
    <div className={`cookie-icon ${showPopup ? "hidden" : "visible"}`}>
      <button onClick={handleCookieClick} title="Personnaliser les préférences de cookies">🍪</button>
    </div>
  );
};

export default CookieIcon;
