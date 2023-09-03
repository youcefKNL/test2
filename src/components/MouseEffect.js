import Logo from "../assets/logo-Legalis2-removebg-preview.png";
import React, { useEffect } from "react";

function MouseEffect() {
  useEffect(() => {
    const mouses = document.querySelectorAll(".mouse");

    const handleMouseMove = (e) => {
      mouses.forEach((mouse) => {
        mouse.style.top = e.clientY + "px";
        mouse.style.left = e.clientX + "px";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Nettoyez l'écouteur d'événements lorsque le composant est démonté
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Le tableau vide signifie que cela s'exécute une seule fois à l'initialisation

  const mouseStyle = {
    position: "fixed",
    width: "30px", // Vous pouvez ajuster la largeur selon vos besoins
    height: "30px", // Vous pouvez ajuster la hauteur selon vos besoins
    borderRadius: "50%",
    transform: "translate(20%, 20%)",
    background: `url(${Logo}) center/cover`, // Correction ici : utilisez (${Logo}) pour inclure la variable Logo
    transition: "d0.3s",
  };

  return <div className="mouse" style={mouseStyle}></div>;
}

export default MouseEffect;
