import React from "react";
import CookieIcon3d from "../assets/emoji3d/cookie-icon.png";

const CookieIcon = ({ showPopup, setShowPopup }) => {
  const handleCookieClick = () => {
    setShowPopup(true);
  };

  return (
    <section className={`cookie-icon ${showPopup ? "hidden" : "visible"}`}>
      <button
        onClick={handleCookieClick}
        title="Personnaliser les préférences de cookies"
      >
        <img src={CookieIcon3d} alt="cookies en 3d" />
      </button>
    </section>
  );
};

export default CookieIcon;
