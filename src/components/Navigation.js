import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-Legalis2-removebg-preview.png";

const Navigation = () => {
  const email = process.env.REACT_APP_EMAIL;
  const portable = process.env.REACT_APP_PORTABLE;
  const portableSansPremierChiffre = portable.slice(1);

  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = document.querySelector(".contact");
      if (window.scrollY < lastScroll) {
        contactElement.style.top = "0";
      } else {
        contactElement.style.top = "-60px";
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);
  return (
    <header role="banner" id="banner">
      <div className="container">
        <nav role="navigation" aria-label="principale">
          <ul className="linkPage">
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
              to="/avis"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
              title="Avis"
            >
              <li>
                <p>Avis</p>
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
          <img src={Logo} alt="" className="logoLegalis" />
          <a href="index.html" className="brand">
            LEGALIS<span>Cabinet de Conseil</span>
          </a>
        </div>

        <div className="headerRight">
          <ul className="contact">
            <p>
              💬 Nous contacter :
              {/* <br />
              🗂️ Assistance 7j/7 24h/24 */}
            </p>
            <li>
              <a href={`tel:${portable}`} alt="Appeler">
                <i className="fa-solid fa-phone "></i>
              </a>
            </li>

            <li>
              <a href={`mailto:${email}`} alt="Envoyer un email">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/33${portableSansPremierChiffre}`}
                alt="Envoyer un message WhatsApp"
                target="_blank"
                rel="noreferrer noopener"
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
