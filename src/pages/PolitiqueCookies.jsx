import React from "react";
import Collapse from "../components/Collapse";
import { NavLink } from "react-router-dom";

const PolitiqueCookies = () => {
  return (
    <section className="politiqueCookies">
      <h1>POLITIQUE EN MATIÈRE DE COOKIES</h1>
      <p>
        La présente politique, la "Politique en matière de cookies", a pour
        objectif de fournir des informations claires, simples et exhaustives aux
        utilisateurs du site actuel, désignés comme "l'Utilisateur" ou
        "vous/votre/vos". Elle vise à expliquer comment "Legalis" ou "nous",
        utilise les cookies sur son site web, appelé ci-après le "Site". Un
        cookie désigne un ensemble d'informations stockées sur l'appareil de
        l'Utilisateur lors de sa navigation sur le Site. Le déploiement de
        cookies publicitaires et/ou de mesure d'audience est soumis à votre
        consentement. Pour cette raison, un bandeau de cookies est placé en bas
        de notre site, vous permettant à tout moment d'accepter, de
        personnaliser ou de refuser l'installation de ces cookies. Vous avez
        également la possibilité de modifier vos préférences à tout moment en
        utilisant notre gestionnaire de cookies ou les paramètres de votre
        navigateur. Quel type de cookies utilisons-nous ? Pour quelles finalités
        ?
      </p>

      <Collapse
        title="I. Des cookies strictement nécessaires
"
      >
        <p>
          Ces cookies sont indispensables pour assurer le bon déroulement des
          opérations liées aux services et produits offerts sur notre site. Ils
          sont essentiels pour activer les fonctionnalités de base du site,
          telles que la mémorisation des informations que vous avez entrées dans
          un formulaire. En cas de refus de l'installation de ces cookies,
          certaines de ces fonctionnalités ne seront plus disponibles, ce qui
          pourrait affecter l'efficacité du site.
        </p>
      </Collapse>
      <Collapse title="II. Des cookies de performance">
        <p>
          Ces cookies sont employés pour recueillir des informations anonymes
          dans un but statistique. Ils nous permettent de quantifier l'audience
          du Site et d'analyser la manière dont les visiteurs naviguent sur
          celui-ci, notamment en comptant le nombre de visiteurs par page, en
          mesurant le temps passé sur chaque page, en identifiant les zones où
          les visiteurs cliquent, entre autres données. De plus, ces cookies
          sont utiles pour repérer des problèmes de navigation et d'autres
          éventuelles difficultés. Ils contribuent ainsi à l'amélioration de
          notre Site et de votre expérience de navigation.
        </p>
      </Collapse>
      <Collapse title="III. Des cookies de personnalisation ou de fonctionnalité">
        <p>
          Ces cookies ont pour fonction de mémoriser vos préférences, paramètres
          et choix de contenu sur le Site (tels que la langue ou les options de
          personnalisation). Ils sont conçus pour personnaliser votre expérience
          de navigation en adaptant les contenus du Site en fonction de vos
          préférences. Si vous décidez de refuser ces cookies, cela pourrait
          entraîner la désactivation de certaines fonctionnalités et une
          éventuelle perturbation du fonctionnement de certaines pages du Site.
        </p>
      </Collapse>
      <Collapse title="IV. Spécificité des cookies de partage">
        <p>
          Ces cookies sont spécifiquement associés à l'utilisation des boutons
          de partage de pages du Site sur les réseaux sociaux tels que LinkedIn,
          entre autres. Ces boutons de partage vous permettent de partager
          directement une page du Site sur le réseau social correspondant.
          Lorsque vous cliquez sur l'un de ces boutons de partage sur un réseau
          social, un ou plusieurs cookies sont déposés sur votre appareil
          (ordinateur, smartphone, tablette) par le réseau social en question.
          Il est important de noter que nous n'avons ni accès ni contrôle sur
          ces cookies tiers, qui peuvent être de nature analytique, liés à la
          performance ou au ciblage. Nous vous recommandons de consulter les
          sites web de ces tiers pour obtenir davantage d'informations sur leurs
          cookies et pour comprendre comment les gérer.
        </p>
      </Collapse>
      <Collapse
        title="V. Réglage et blocage des cookies via notre gestionnaire de cookies
"
      >
        <p>
          La liste complète des cookies que nous utilisons est accessible via
          notre outil de gestion dédié. Vous avez la liberté de les désactiver à
          tout moment. Cependant, nous tenons à vous informer que certains de
          ces cookies sont essentiels pour garantir le bon fonctionnement du
          Site. Par conséquent, il est fortement déconseillé de les désactiver,
          car cela pourrait impacter négativement votre expérience de navigation
          sur le site.
        </p>
      </Collapse>
      <Collapse title="VI. Réglage et blocage des cookies via vos paramètres de navigation">
        <p>
          Vous avez également la possibilité de contrôler les cookies en
          utilisant les paramètres de votre navigateur. Bien que la plupart des
          navigateurs soient initialement configurés pour accepter les cookies,
          vous avez le choix de les accepter tous, de les refuser
          systématiquement, ou encore de sélectionner ceux que vous acceptez en
          fonction de l'émetteur. De plus, vous pouvez configurer votre
          navigateur pour accepter ou refuser les cookies de manière sélective
          avant leur installation. Vous avez également la faculté de supprimer
          régulièrement les cookies de votre appareil en utilisant les
          fonctionnalités de votre navigateur. Il est important de noter que
          l'utilisation de cookies ou de technologies similaires par des sites
          web tiers ou des fournisseurs de contenu publicitaire est régie par
          leur propre politique de confidentialité en matière de cookies. <br />{" "}
          Pour faciliter la gestion des cookies, la CNIL (Commission Nationale
          Informatique et Liberté) met à votre disposition un logiciel de
          gestion des cookies que vous pouvez télécharger gratuitement sur son
          site Internet à l'adresse suivante :
          https://www.cnil.fr/vos-droits/vos-traces/les-cookies/, &nbsp;
          <NavLink
            to="https://www.cnil.fr/vos-droits/vos-traces/les-cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cliquez ici pour en savoir plus 🔗.
          </NavLink>
          <br />
          Pour la gestion des cookies et la personnalisation de vos préférences,
          veuillez noter que la configuration de chaque navigateur est unique.
          Les instructions détaillées pour effectuer ces réglages se trouvent
          généralement dans le menu d'aide de votre navigateur. Vous y trouverez
          des informations sur la manière de modifier vos préférences en matière
          de cookies selon votre choix personnel. N'hésitez pas à consulter le
          menu d'aide de votre navigateur spécifique pour obtenir des directives
          précises sur la gestion des cookies. Cela vous permettra de
          personnaliser votre expérience de navigation conformément à vos
          préférences en matière de confidentialité. <br /> A titre d’exemple :
          <ul>
            <li>
              {" "}
              Pour Internet Explorer™ :
              <NavLink
                to="https://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici pour en savoir plus 🔗.
              </NavLink>
            </li>
            <li>
              Pour Safari™ :
              <NavLink
                to="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici pour en savoir plus 🔗.
              </NavLink>{" "}
            </li>
            <li>
              Pour Chrome™:
              <NavLink
                to="https://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici pour en savoir plus 🔗.
              </NavLink>{" "}
            </li>
            <li>
              Pour Firefox™ :
              <NavLink
                to="https://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici pour en savoir plus 🔗.
              </NavLink>{" "}
            </li>
          </ul>
        </p>
      </Collapse>
      <Collapse title="VII. Paramétrage du système d’exploitation de votre smartphone">
        <p>
          Vous avez la possibilité de contrôler le dépôt des cookies sur votre
          smartphone dans les règles du système d’exploitation. <br />
          Sur iOS :
          <NavLink
            to="https://support.apple.com/fr-fr/HT201265"
            target="_blank"
            rel="noopener noreferrer"
          >
            cliquez ici pour en savoir plus 🔗.
          </NavLink>{" "}
          <br />
          Sur Android :
          <NavLink
            to="https://support.google.com/chrome/topic/3434352"
            target="_blank"
            rel="noopener noreferrer"
          >
            cliquez ici pour en savoir plus 🔗.
          </NavLink>{" "}
        </p>
      </Collapse>
      <Collapse title="VIII. Gérez vous-même vos préférences cookies sur le Site">
        <p>
          Lorsque vous vous connectez au Site, vous disposerez de la liberté de
          prendre une décision éclairée concernant l'acceptation ou le rejet des
          cookies. Vous avez la possibilité de modifier votre choix à tout
          moment en cliquant sur l'icone cookies 🍪 en bas à gauche de votre
          écran. <br /> Veuillez noter que cette politique en matière de cookies
          a été mise en ligne le 1er septembre 2023.
        </p>
      </Collapse>
    </section>
  );
};

export default PolitiqueCookies;
