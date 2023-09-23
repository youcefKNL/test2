import React from "react";
import { NavLink } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccesContainer">
      {/* Conteneur pour les confettis */}
      <div className="wrapper">
        {Array.from({ length: 150 }, (_, i) => (
          <div key={i} className={`confetti-${i}`}></div>
        ))}
      </div>

      <div className="paymentSuccesContainerContent">
        <h2>Merci pour votre confiance !</h2>

        {/* Animation SVG */}
        <svg
          width="115px"
          height="115px"
          viewBox="0 0 133 133"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="check-group"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <circle
              id="filled-circle"
              fill="#07b481"
              cx="66.5"
              cy="66.5"
              r="54.5"
            />
            <circle
              id="white-circle"
              fill="#FFFFFF"
              cx="66.5"
              cy="66.5"
              r="55.5"
            />
            <circle
              id="outline"
              stroke="#07b481"
              strokeWidth="4"
              cx="66.5"
              cy="66.5"
              r="54.5"
            />
            <polyline
              id="check"
              stroke="#FFFFFF"
              strokeWidth="5.5"
              points="41 70 56 85 92 49"
            />
          </g>
        </svg>
        {/* Fin de l'animation SVG */}

        <p>Votre paiement a été traité avec succès.</p>
        <div className="loader">
          <svg
            className="svg
            "
            version="1.1"
            id="L2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <circle
              fill="none"
              stroke="#aa9166"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="50"
              cy="50"
              r="48"
            />
            <line
              fill="none"
              strokeLinecap="round"
              stroke="#aa9166"
              strokeWidth="6"
              strokeMiterlimit="10"
              x1="50"
              y1="50"
              x2="85"
              y2="50.5"
            >
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </line>
            <line
              fill="none"
              strokeLinecap="round"
              stroke="#aa9166"
              strokeWidth="6"
              strokeMiterlimit="10"
              x1="50"
              y1="50"
              x2="49.5"
              y2="74"
            >
              <animateTransform
                attributeName="transform"
                dur="15s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </line>
          </svg>

          <p>TOP CHRONO pour le traitement de votre dossier</p>
        </div>

        <p>
          Un e-mail de confirmation va vous être envoyé à l'adresse e-mail
          fournie lors du paiement.
        </p>
        <NavLink to="/" className="link">
          Retour à l'accueil
        </NavLink>
      </div>

      {/* Conteneur pour les confettis */}
      {/* <div className="confetti-container"></div> */}
    </section>
  );
};

export default PaymentSuccess;
