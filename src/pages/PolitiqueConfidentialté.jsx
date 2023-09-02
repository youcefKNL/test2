import React from "react";
import Collapse from "../components/Collapse";
import { NavLink } from "react-router-dom";

const PolitiqueDeConfidentialite = () => {
  return (
    <section className="politiqueDeConfidentialite">
      <h1>Politique de confidentialité</h1>
      <div className="intro">
        Chez Legalis, nous attachons une grande importance au respect de votre
        vie privée ! La protection et la confidentialité de vos données
        personnelles sont des priorités absolues pour nous. Vos données
        personnelles seront traitées avec la plus grande confidentialité et
        uniquement aux fins de nos services, sauf si vous en décidez autrement.
      </div>
      <h2>🤝 Notre Engagement </h2>
      <p>
        Nous respectons votre vie privée et vos choix. Vous avez la possibilité
        d'arrêter de recevoir nos communications à tout moment. Nous nous
        engageons à faciliter l'exercice de vos droits en tant qu'utilisateur.
        Lorsque nous faisons appel à des prestataires externes, nous choisissons
        avec soin ceux qui partagent également notre engagement en matière de
        protection des données personnelles. Cette Politique est complétée par :
        <ul>
          <li>
            <NavLink
              to="/mentions+legales"
              title="Consulter nos mentions légales"
            >
              👉 Nos mentions légales
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/politique+cookies"
              title="Consulter notre politique en matière de
              cookies"
            >
              👉 Notre politique en matière de cookies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/conditions+generales"
              title="Consulter nos conditions générales"
            >
              👉 Nos conditions générales
            </NavLink>
          </li>
        </ul>
      </p>

      <Collapse title="I. Quelques définitions">
        <p>
          <ul>
            <li>
              <strong>« Données à caractère personnel »</strong> :Cela fait
              référence à toutes les informations relatives à une personne
              physique ou morale identifiée ou identifiable. Une personne
              identifiable est une personne qui peut être directement ou
              indirectement identifiée, notamment par le biais d'un nom, d'un
              numéro d'identification, de données de localisation, d'un
              identifiant en ligne ou d'autres éléments spécifiques liés à son
              identité physique, psychologique, économique, culturelle ou
              sociale. -
            </li>
            <li>
              <strong>« Loi Informatique et Liberté »</strong> : Il s'agit de la
              Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux
              fichiers et aux libertés, accessible en ligne&nbsp;
              <NavLink
                to="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460"
                target="_blank"
                rel="noopener noreferrer"
              >
                ici 🔗
              </NavLink>
            </li>
            <li>
              <strong>« Politique »</strong> :Cette politique en matière de
              Protection des Données à caractère personnel.
            </li>
            <li>
              <strong>« Responsable de traitement »</strong> :Il s'agit de la
              personne physique ou morale, de l'autorité publique, du service ou
              de tout autre organisme qui, seul ou en collaboration avec
              d'autres, détermine les finalités et les moyens du traitement des
              données.
            </li>
            <li>
              <strong>« RGPD »</strong> :Il s'agit du RÈGLEMENT (UE) 2016/679 DU
              PARLEMENT EUROPÉEN ET DU CONSEIL du 27 avril 2016, accessible en
              ligne&nbsp;
              <NavLink
                to="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32016R0679&from=FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                ici 🔗
              </NavLink>
            </li>
            <li>
              <strong>« Services »</strong> :L'ensemble des prestations fournies
              par la Société et accessibles via le Site.
            </li>
            <li>
              <strong>« Site »</strong> : Le site internet de Legalis, qui
              permet aux utilisateurs d'accéder aux Services, disponible à
              l'adresse suivante : &nbsp;
              <NavLink to="/" target="_blank" rel="noopener noreferrer">
                www.cabinetlegalis.fr
              </NavLink>
            </li>

            <li>
              <strong>« Sous-Traitant »</strong> : Il s'agit de la personne
              physique ou morale, de l'autorité publique, du service ou de tout
              autre organisme qui traite des Données à caractère personnel pour
              le compte du Responsable du Traitement.
            </li>
            <li>
              <strong>« Traitement(s) »</strong> :Il s'agit de toutes les
              opérations effectuées ou non à l'aide de procédés automatisés sur
              des données à caractère personnel, telles que la collecte,
              l'enregistrement, l'organisation, la structuration, la
              conservation, l'adaptation, la modification, l'extraction, la
              consultation, l'utilisation, la communication par transmission, la
              diffusion, la mise à disposition, le rapprochement ou
              l'interconnexion, la limitation, l'effacement ou la destruction.{" "}
            </li>
            <li>
              <strong>« Utilisateur »</strong> :Toute personne physique ou
              morale qui accède au Site.
            </li>

            <li>
              <strong>« Données à caractère personnel: »</strong> : Les données
              à caractère personnel désignent toute information permettant
              d'identifier directement ou indirectement une personne physique.
              Cela peut inclure des informations telles que le nom, l'adresse
              e-mail, l'adresse IP, etc.
            </li>
            <li>
              <strong>« Collecte de données »</strong> : Expliquez comment vous
              collectez les données à caractère personnel des utilisateurs, que
              ce soit via des formulaires, des cookies, des analyses, etc.
            </li>
          </ul>
        </p>
        <ul></ul>
        {/* Ajoutez d'autres informations relatives à la collecte de données ici */}
      </Collapse>

      <Collapse title="II. Identité du Responsable de Traitement">
        <p>
          Les Données à caractère personnel sont collectées par Legalis, une
          société par actions simplifiée unipersonnelle, immatriculée au
          Registre du Commerce et des Sociétés d'Evry sous le numéro 814 428
          785, dont le siège social est situé au 9, rue du Jasmin, 91000
          Évry-Courcouronnes. Nous sommes déterminés à assurer la meilleure
          protection possible de vos Données à caractère personnel en conformité
          avec le RGPD (Règlement Général sur la Protection des Données) et la
          Loi Informatique et Libertés. Pour toute information sur la protection
          des Données à caractère personnel, vous pouvez également consulter le
          site de la Commission Nationale de l'Informatique et des Libertés
          &nbsp;
          <NavLink
            to="https://www.cnil.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr 🔗
          </NavLink>
        </p>
      </Collapse>

      <Collapse title="III. Les Données à Caractère Personnel que nous collectons">
        <p>
          Nous collectons et traitons les Données à caractère personnel que vous
          nous fournissez directement via le Site ou par d'autres moyens de
          communication. Nous pouvons également collecter des données
          personnelles vous concernant auprès de tiers autorisés, dans le
          respect de la législation applicable. Les types de Données à caractère
          personnel que nous collectons peuvent inclure, sans toutefois s'y
          limiter : - Votre nom et prénom. - Votre adresse e-mail. - Votre
          adresse postale. - Votre numéro de téléphone. - Votre date de
          naissance. - Votre numéro d'identification fiscale ou autre
          information fiscale. - Vos informations de paiement. - Vos
          informations professionnelles, telles que le nom de votre entreprise
          et votre poste. - Les informations relatives à votre utilisation du
          Site et de nos Services, y compris votre adresse IP, votre navigateur
          web, votre historique de navigation et vos préférences de
          communication.
        </p>
        {/* Ajoutez des informations sur la sécurité des données ici */}
      </Collapse>

      <Collapse title="IV. Pourquoi nous collectons vos Données à Caractère Personnel">
        <p>
          Nous collectons et traitons vos Données à caractère personnel dans le
          but de fournir nos Services, de répondre à vos demandes, de
          personnaliser votre expérience sur le Site, d'assurer la sécurité et
          la conformité de nos Services, de vous informer sur nos produits et
          services, de mener des enquêtes et des analyses statistiques, de vous
          envoyer des communications marketing, de gérer notre relation client,
          et de respecter nos obligations légales. Nous ne collectons pas de
          Données à caractère personnel de manière excessive par rapport aux
          finalités pour lesquelles elles sont collectées.
        </p>
      </Collapse>

      <Collapse title="V. Les Bases Juridiques du Traitement de Vos Données à Caractère Personnel">
        <p>
          Nous traitons vos Données à caractère personnel sur la base de
          différentes bases juridiques, notamment :
          <ul>
            <li>
              - Votre consentement : Lorsque vous nous avez donné votre
              consentement pour le traitement de vos Données à caractère
              personnel à des fins spécifiques, nous traitons vos données
              conformément à ce consentement. Vous pouvez retirer votre
              consentement à tout moment en nous contactant à l'adresse indiquée
              ci-dessous.{" "}
            </li>
            <li>
              - L'exécution d'un contrat : Nous traitons vos Données à caractère
              personnel lorsque cela est nécessaire à l'exécution d'un contrat
              auquel vous êtes partie ou à la prise de mesures précontractuelles
              à votre demande.{" "}
            </li>
            <li>
              - L'obligation légale : Nous pouvons être tenus de traiter vos
              Données à caractère personnel pour respecter des obligations
              légales auxquelles nous sommes soumis.
            </li>
            <li>
              {" "}
              - L'intérêt légitime : Nous pouvons traiter vos Données à
              caractère personnel lorsque cela est nécessaire pour les intérêts
              légitimes poursuivis par Legalis ou par un tiers, sauf si vos
              intérêts ou vos droits et libertés fondamentaux prévalent sur ces
              intérêts.
            </li>
          </ul>
          <span>
            Contactez-nous à l'adresse :{" "}
            <NavLink to="mailto:support@cabinetlegalis.fr">
              📧 support@cabinetlegalis.fr
            </NavLink>
          </span>
        </p>
      </Collapse>

      <Collapse title="VII. Comment nous utilisons vos Données à Caractère Personnel">
        <p>
          Nous utilisons vos Données à caractère personnel pour les finalités
          suivantes :
          <ul>
            <li>
              - Fourniture de nos Services : Pour vous fournir les Services que
              vous avez demandés, répondre à vos questions et demandes, gérer
              votre compte utilisateur, traiter vos paiements et vous fournir un
              support client.{" "}
            </li>
            <li>
              {" "}
              - Personnalisation de votre expérience : Pour personnaliser votre
              expérience sur le Site, vous fournir des informations pertinentes
              et améliorer nos Services en fonction de vos préférences et de
              votre comportement en ligne.{" "}
            </li>
            <li>
              {" "}
              - Communication avec vous : Pour vous informer sur nos produits,
              services, promotions et offres spéciales, et vous envoyer des
              communications marketing (avec votre consentement lorsque cela est
              requis par la loi).{" "}
            </li>
            <li>
              {" "}
              - Sécurité et conformité : Pour assurer la sécurité de nos
              Services, prévenir et détecter la fraude, l'abus ou toute activité
              illégale, et garantir la conformité à nos obligations légales.{" "}
            </li>
            <li>
              {" "}
              - Enquêtes et analyses : Pour mener des enquêtes, des analyses
              statistiques et des recherches pour améliorer nos Services,
              développer de nouveaux produits et services, et mieux comprendre
              les besoins de nos utilisateurs.
            </li>
          </ul>
        </p>
      </Collapse>
      <Collapse title="VIII. Comment nous partageons vos Données à Caractère Personnel">
        <p>
          Nous pouvons partager vos Données à caractère personnel avec les
          catégories de destinataires suivantes :
          <ul>
            <li>
              - Fournisseurs de services : Nous pouvons partager vos Données à
              caractère personnel avec des prestataires de services tiers qui
              nous aident à fournir nos Services, tels que des prestataires de
              paiement, des fournisseurs d'hébergement web, des fournisseurs de
              services de messagerie, etc. Nous exigeons que ces tiers traitent
              vos données conformément à nos instructions et dans le respect de
              cette Politique de Confidentialité.{" "}
            </li>
            <li>
              - Partenaires commerciaux : Nous pouvons partager vos Données à
              caractère personnel avec nos partenaires commerciaux lorsque cela
              est nécessaire pour fournir nos Services, améliorer nos produits
              et services, ou à des fins marketing, avec votre consentement
              lorsque cela est requis par la loi.{" "}
            </li>
            <li>
              {" "}
              - Autorités gouvernementales et légales : Nous pouvons être tenus
              de divulguer vos Données à caractère personnel aux autorités
              gouvernementales, aux forces de l'ordre ou à d'autres tiers
              lorsque cela est nécessaire pour se conformer à la loi ou à une
              procédure légale, pour protéger nos droits légaux ou pour prévenir
              la fraude ou d'autres activités illégales.{" "}
            </li>
            <li>
              {" "}
              - Transferts d'entreprises : Dans le cas où Legalis serait
              impliqué dans une fusion, une acquisition, une vente d'actifs ou
              toute autre transaction commerciale, vos Données à caractère
              personnel peuvent être transférées à des tiers dans le cadre de
              cette transaction.
              <strong>
                <br />
                Nous ne vendrons jamais vos Données à caractère personnel à des
                tiers.
              </strong>
            </li>
          </ul>
        </p>
      </Collapse>
      <Collapse title="IX. Transferts Internationaux de Données à Caractère Personnel">
        <p>
          Dans le cadre de la fourniture de nos Services, vos Données à
          caractère personnel peuvent être transférées à des destinataires
          situés en dehors de l'Espace Économique Européen (EEE) ou de votre
          pays de résidence. Dans de tels cas, nous prendrons des mesures pour
          nous assurer que vos Données à caractère personnel bénéficient d'un
          niveau de protection adéquat, conformément à la réglementation
          applicable en matière de protection des données.
        </p>
      </Collapse>
      <Collapse title="X. Vos Droits en Matière de Données à Caractère Personnel">
        <p>
          Vous avez le droit de :
          <ul>
            <li>
              - Accéder à vos Données à caractère personnel : Vous pouvez
              demander une copie de vos Données à caractère personnel que nous
              détenons.{" "}
            </li>
            <li>
              {" "}
              - Rectifier vos Données à caractère personnel : Vous pouvez
              demander la correction de vos Données à caractère personnel
              inexactes ou incomplètes.{" "}
            </li>
            <li>
              {" "}
              - Effacer vos Données à caractère personnel : Vous pouvez demander
              la suppression de vos Données à caractère personnel dans certaines
              circonstances.{" "}
            </li>
            <li>
              {" "}
              - Limiter le traitement : Vous pouvez demander la limitation du
              traitement de vos Données à caractère personnel dans certaines
              situations.{" "}
            </li>
            <li>
              {" "}
              - Objection au traitement : Vous pouvez vous opposer au traitement
              de vos Données à caractère personnel dans certaines circonstances.{" "}
            </li>
            <li>
              {" "}
              - Portabilité des données : Vous avez le droit de recevoir vos
              Données à caractère personnel dans un format structuré, couramment
              utilisé et lisible par machine, et de les transmettre à un autre
              responsable du traitement.{" "}
            </li>
            <li>
              - Retirer votre consentement : Si nous traitons vos Données à
              caractère personnel sur la base de votre consentement, vous avez
              le droit de retirer ce consentement à tout moment. Pour exercer
              l'un de ces droits, veuillez nous contacter à l'adresse indiquée
              ci-dessous. Nous répondrons à votre demande conformément à la
              réglementation applicable en matière de protection des données.
            </li>
          </ul>
        </p>
      </Collapse>
      <Collapse title="XI. Conservation de vos Données à Caractère Personnel">
        <p>
          Nous conserverons vos Données à caractère personnel aussi longtemps
          que nécessaire pour atteindre les finalités pour lesquelles elles ont
          été collectées, y compris pour respecter nos obligations légales,
          résoudre les litiges, maintenir la sécurité, prévenir la fraude et
          respecter nos accords contractuels.
        </p>
      </Collapse>
      <Collapse title="XII. Sécurité de vos Données à Caractère Personnel">
        <p>
          Nous mettons en place des mesures de sécurité techniques et
          organisationnelles appropriées pour protéger vos Données à caractère
          personnel contre la perte, l'accès non autorisé, la divulgation,
          l'altération ou la destruction. Cependant, aucun système de sécurité
          n'est infaillible, et nous ne pouvons garantir la sécurité absolue de
          vos données.
        </p>
      </Collapse>
      <Collapse title="XIII. Modifications de cette Politique de Confidentialité">
        <p>
          Nous pouvons mettre à jour cette Politique de Confidentialité de temps
          à autre pour refléter les changements apportés à nos pratiques de
          traitement des données. Toute modification sera publiée sur le Site,
          et la date de la dernière révision sera mise à jour. Nous vous
          encourageons à consulter régulièrement cette Politique de
          Confidentialité pour rester informé des pratiques de traitement de vos
          Données à caractère personnel.
        </p>
      </Collapse>
      <Collapse title="XIV. Comment Nous Contacter">
        <p>
          Si vous avez des questions, des préoccupations ou des demandes
          concernant cette Politique de Confidentialité ou le traitement de vos
          Données à caractère personnel, veuillez nous contacter à l'adresse
          suivante : Contactez-nous à l'adresse :{" "}
          <NavLink to="mailto:support@cabinetlegalis.fr">
            📧 support@cabinetlegalis.fr
          </NavLink>
          <br />
          Nous ferons de notre mieux pour répondre à vos préoccupations dans les
          plus brefs délais.
          <br /> Cette Politique de Confidentialité a été mise à jour pour la
          dernière fois le 1er septembre 2023.
        </p>
      </Collapse>
    </section>
  );
};

export default PolitiqueDeConfidentialite;
