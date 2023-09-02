import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flexList">
        <div className="list1">
          <h4>Services</h4>
          <ul>
            <li>Création d’entreprise</li>
            <li>Modification d’entreprise</li>
            <li>Fermeture d’entreprise</li>
            <li>Toutes les démarches & Tarifs</li>
          </ul>
        </div>
        <div className="list2">
          <h4>Liens utiles</h4>
          <ul>
            <li>Guides juridiques</li>
            <li>Questions fréquentes</li>
            <li>Contactez-nous</li>
            <li>Moyens de paiement</li>
          </ul>
        </div>
        <div className="list3">
          <h4>Légal</h4>
          <ul>
            <li>
              <NavLink
                to="/conditions+generales"
                title="Consulter les conditions générales"
              >
                Conditions générales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentions+legales#mentionsLégales"
                title="Consulter les  mentions légales"
              >
                Mentions légales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/politique+confidentialité#h1"
                title="Consulter  la politique de confidentialité"
              >
                Politique de confidentialité
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/politique+cookies"
                title="Consulter  la politique en matière de cookies"
              >
                Politique en matière de cookies
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="list4">
          <h4>À propos</h4>
          <ul>
            <li>
              📬 Legalis Cabinet de Conseil
              <br />9 rue du Jasmin <br />
              91000 Evry
            </li>
            <li>
              {" "}
              <NavLink to="mailto:support@cabinetlegalis.fr">
                📧 support@cabinetlegalis.fr
              </NavLink>
            </li>
            <li>📞 06 xx xx xx xx</li>
          </ul>
        </div>
      </div>
      <div className="disclaimer">
        <p>
          Informations importantes sur les services fournis par Legalis. Legalis
          n'est pas un cabinet d'avocats ni un cabinet d'expertise comptable.
          Conformément à la réglementation applicable, Legalis propose
          uniquement des informations de nature administrative et permet aux
          utilisateurs de générer des actes juridiques en utilisant des modèles
          préétablis. L'utilisation du service est soumis à nos conditions
          générales.Il est conseillé de faire appel à un avocat pour valider vos
          documents avant de les utiliser ainsi que pour toute question
          juridique.L'utilisation du service est soumis à nos conditions
          générales
        </p>

        <p>-Cabinet de conseil LEGALIS SASU- © 2023. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
