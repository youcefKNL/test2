import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flexList">
        <div className="list1">
          <h4>Services juridiques</h4>
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
            <li>Charte avocats</li>
          </ul>
        </div>
        <div className="list3">
          <h4>ddd</h4>
          <ul>
            <li>Conditions générales</li>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
            <li>Contactez-nous</li>
            <li>Moyens de paiement</li>
          </ul>
        </div>
        <div className="list4">
          <h4>À propos</h4>
          <ul>
            <li>
              Cabinet de Conseil <br />
              Legalis SASU <br />9 rue du Jasmin <br />
              91000 Evry
            </li>
            <li>support@cabinetlegalis.fr</li>
            <li>06 xx xx xx xx</li>
          </ul>
        </div>
      </div>
      <div className="disclaimer">
        <p>
          Informations importantes sur les services fournis par Legalis :
          Legalis est développé par Yolaw SAS, RCS Paris n° 753 892 926. Legalis
          n'est pas un cabinet d'avocats ni un cabinet d'expertise comptable.
          Conformément à la réglementation applicable, Legalis permet aux
          utilisateurs de créer eux-mêmes des actes juridiques à partir de
          modèles. L'utilisation du service est soumis à nos conditions
          générales. Conformément au Règlement Général sur la Protection des
          Données (RGPD), vous disposez d'un droit d'accès aux données
          personnelles vous concernant et d'un droit de rectification ainsi
          qu'un droit d'opposition à leur diffusion sur le Site.Pour nous
          contacter : support@cabinetlegalis.fr ou Yolaw SAS, 50 rue
          d'Hauteville, 75010 Paris, téléphone : 01 76 39 00 60.
        </p>
        <br />
        <p>
          LegalPlace n'est pas un cabinet d'avocats. Conformément à la
          réglementation en vigueur, LegalPlace fournit uniquement de
          l'information juridique, un logiciel permettant de générer des
          documents juridiques sur la base de modèles, un service de formalités
          d'entreprises et un service de mise en relation avec des
          professionnels de services aux entreprises. Il est conseillé de faire
          appel à un avocat pour valider vos documents avant de les utiliser
          ainsi que pour toute question juridique. Consultez nos conditions
          générales.
        </p>

        <p>-Cabinet de conseil LEGALIS SASU- © 2023. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
