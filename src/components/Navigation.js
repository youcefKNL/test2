import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header role="banner">
      <div className="container">
        <nav role="navigation" aria-label="principale">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
              title="Acceuil"
            >
              <li>
                <p>Acceuil</p>
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
          <a href="index.html" class="brand">
            LEGALIS<span>Cabinet de Conseil</span>
          </a>
        </div>

        <div className="headerRight">
          <p>
            Nous contacter : <br />
            Assistance 7j/7 24h/24
          </p>
          <ul class="contact">
            <li>
              <a href="tel:0601312152" alt="Appeler">
                <i class="fa-solid fa-phone "></i>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/33601312152"
                alt="Envoyer un message WhatsApp"
              >
                <i class="fa-brands fa-whatsapp "></i>
              </a>
            </li>

            <li>
              <a
                href="mailto:legal_formalite@outlook.fr"
                alt="Envoyer un email"
              >
                <i class="fa-regular fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
