import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-Legalis2-removebg-preview.png";

const Navigation = () => {
  return (
    <header role="banner">
      <div className="container">
        <nav role="navigation" aria-label="principale">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
              title="Accueil"
            >
              <li>
                <p>Accueil</p>
              </li>
            </NavLink>
            <NavLink
              to="/blog"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
              title="Blog"
            >
              <li>
                <p>Blog</p>
              </li>
            </NavLink>

            <NavLink
              to="/tarifs"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
              title="Tarifs"
            >
              <li>
                <p>Tarifs</p>
              </li>
            </NavLink>
          </ul>
        </nav>

        <div className="logo">
          <img src={Logo} alt="" />
          <a href="index.html" className="brand">
            LEGALIS<span>Cabinet de Conseil</span>
          </a>
        </div>

        <div className="headerRight">
          <p>
            Nous contacter : <br />
            Assistance 7j/7 24h/24
          </p>
          <ul className="contact">
            <li>
              <a href="tel:0601312152" alt="Appeler">
                <i className="fa-solid fa-phone "></i>
              </a>
            </li>

            <li>
              <a
                href="mailto:legal_formalite@outlook.fr"
                alt="Envoyer un email"
              >
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/33601312152"
                alt="Envoyer un message WhatsApp"
              >
                <i className="fa-brands fa-whatsapp "></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
