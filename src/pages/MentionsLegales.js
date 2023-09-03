import React from "react";
import { NavLink } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <section id="mentionsLégales">
      <h1>Mentions légales</h1>
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
        actions simplifiée à associée unique au capital de 1 euros, dont le
        siège social est situé 9 rue du jasmin, 91000 evry, immatriculée au
        Registre du Commerce et des Sociétés de Paris sous le numéro 814 428 785
        et dont le numéro TVA est FR24814428785.
      </p>

      <h2> Responsable de publication</h2>
      <p>
        Monsieur Khenichil Youcef, Président de LEGALIS Cabinet de conseil SASU
      </p>

      <h2>Hébergeur</h2>
      <p>
        Le site cabinetlegalis.fr est hébergé par la société Amazon Web Services
        LLC Adresse: P.O. Box 81226, Seattle, WA 98108-1226
      </p>

      <h2> Nous contacter</h2>
      <p>
        Par email : support@cabinetlegalis.fr Par téléphone : 01.xx.xx.xx.xx
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
