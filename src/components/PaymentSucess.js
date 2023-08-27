import React from "react";
import { NavLink } from "react-router-dom";

const paymentSucess = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Merci pour votre confiance !</h2>
        <p>Votre paiement a été traité avec succès.</p>
        <p>TOP CHRONO pour le traitement de votre dossier</p>
        <p>Un e-mail de confirmation va vous être envoyé à l'adresse e-mail.</p>
        <NavLink
          to="/"
          style={styles.link}
          className="link"
          activeClassName="active"
        >
          Retour à l'accueil
        </NavLink>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    background: "#f5f5f5",
  },
  content: {
    background: "white",
    padding: "20px 20px 0 20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  link: {
    display: "inline-block",
    background: "#aa9166",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    margin: "5%",
    transition: "all 0.3s ease",
  },
  linkHover: {
    background: "white",
    color: "#aa9166",
  },
};

export default paymentSucess;
