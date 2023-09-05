// import React, { useEffect } from "react";

// function MouseEffect() {
//   useEffect(() => {
//     const mouses = document.querySelectorAll(".mouse");

//     const handleMouseMove = (e) => {
//       mouses.forEach((mouse) => {
//         mouse.style.top = e.clientY + "px";
//         mouse.style.left = e.clientX + "px";

//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       // Nettoyez l'écouteur d'événements lorsque le composant est démonté
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []); // Le tableau vide signifie que cela s'exécute une seule fois à l'initialisation

//   return <div className="mouse"></div>;
// }

// export default MouseEffect;

// import React, { useEffect, useState } from "react";

// function MouseEffect() {
//   const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         top: e.clientY + window.scrollY,
//         left: e.clientX + window.scrollX,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="mouse"
//       style={{ top: mousePosition.top + "px", left: mousePosition.left + "px" }}
//     ></div>
//   );
// }

// export default MouseEffect;

import React, { useEffect, useState } from "react";

function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        top: e.clientY + window.scrollY,
        left: e.clientX + window.scrollX,
      });
    };

    const handleTouchMove = (e) => {
      // Obtenir la position du premier doigt en mouvement
      const touch = e.touches[0];
      setMousePosition({
        top: touch.clientY + window.scrollY,
        left: touch.clientX + window.scrollX,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className="mouse"
      style={{ top: mousePosition.top + "px", left: mousePosition.left + "px" }}
    ></div>
  );
}

export default MouseEffect;
