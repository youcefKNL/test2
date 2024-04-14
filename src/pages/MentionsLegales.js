import React from "react";
import { NavLink } from "react-router-dom";
import AccordLogo from "../assets/emoji3d/accord-3d-icon.png";
const MentionsLegales = () => {
  const email = process.env.REACT_APP_EMAIL;
  const portable = process.env.REACT_APP_PORTABLE;
  const siret = process.env.REACT_APP_SIRET;
  const tva = process.env.REACT_APP_TVA;

  return (
    <section id="mentionsLégales">
      <h1>
        <img src={AccordLogo} alt="geste de la main pour un accord" />{" "}
        &nbsp;Mentions légales
      </h1>
      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l’économie numérique, il est précisé aux utilisateurs du
        site
        <NavLink to="/" title="Page d'acceuil">
          <strong> cabinetlegalis.fr </strong>
        </NavLink>
        l’identité des différents intervenants dans le cadre de sa réalisation
        et de son suivi.
      </p>

      <h2>Identité</h2>
      <p>
        Le site cabinetlegalis.fr est édité par la société LEGALIS, société par
        actions simplifiée à associée unique au capital de 100 euros, dont le
        siège social est situé 9 rue du jasmin, 91000 evry, immatriculée au
        Registre du Commerce et des Sociétés d'EVRY sous le numéro {siret}&nbsp;
        et dont le numéro TVA est {tva}.
      </p>

      <h2> Responsable de publication</h2>
      <p>
        Monsieur Khenichil Youcef, Président de LEGALIS Cabinet de conseil SASU
      </p>

      <h2>Hébergeur</h2>
      <p>
        Le site cabinetlegalis.fr est hébergé par la société HOSTINGER, dont le
        siège social est situé HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos
        Street, 6023 Larnaca, Chypre, joignable par le moyen suivant :
        <NavLink
          to="https://www.hostinger.fr/contact"
          title="Allez sur Hostinger"
          target="_blank"
        >
          <strong> https://www.hostinger.fr/contact.</strong>
        </NavLink>
      </p>
      <h2> Nous contacter</h2>
      <p>
        Par email : {email} <br /> Par téléphone : {portable}
      </p>

      <h2>En savoir plus</h2>
      <p>
        Information fourni par Bercy, cliquez pour en savoir plus sur les
        <NavLink
          to="https://www.economie.gouv.fr/entreprises/site-internet-mentions-obligatoires#"
          title="Consulter les  mentions légales"
          target="_blank"
        >
          <strong> mentions légales obligatoires.</strong>
        </NavLink>
      </p>
    </section>
  );
};

export default MentionsLegales;
