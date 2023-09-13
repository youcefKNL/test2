import React from "react";
import CadenasLogo from "../assets/emoji3d/cadenas-3d-icon.png";
import ServiceClientIcon3d from "../assets/emoji3d/service-client2.png";

const SectionFermetureEntreprise = () => {
  return (
    <div>
      <section className="sectionFermerEntreprise">
        <h1>
          <img src={CadenasLogo} alt="" />
          La Fermeture d'Entreprise
        </h1>
        <div className="intro">
          <div className="wrapperImg">
            <div class="right "></div>
            <div class="left "></div>
            <div class="middle zoomer">
              <img src={ServiceClientIcon3d} alt="" />
            </div>
          </div>

          <div>
            <h2>🔒 Facilitez la Fermeture de Votre Entreprise !!</h2>
            La fermeture d'une entreprise peut être une tâche complexe et
            exigeante sur le plan administratif. <br /> Chez Legalis, nous nous
            spécialisons dans la fourniture de services d'assistance
            administrative pour simplifier le processus de fermeture
            d'entreprise. <br /> Nous comprenons les défis auxquels les
            entrepreneurs sont confrontés lorsqu'ils prennent la décision de
            fermer leur entreprise, et nous sommes là pour vous aider à naviguer
            à travers chaque étape avec efficacité et conformité.
          </div>
        </div>
        <main>
          <h2>🤲 Nos Services d'Assistance Administrative Incluent :</h2>
          <ol>
            <li>
              👉
              <strong> Préparation des Documents :</strong> Nous vous aidons à
              rassembler tous les documents nécessaires pour la fermeture, y
              compris les formulaires administratifs, les rapports financiers et
              les déclarations fiscales.
            </li>
            <li>
              👉
              <strong> Coordination avec les Autorités :</strong> Legalis gère
              les communications avec les autorités gouvernementales et s'assure
              que tous les documents requis sont soumis dans les délais.
            </li>
            <li>
              👉
              <strong> Gestion des Créanciers :</strong> Nous vous assistons
              dans la communication avec les créanciers et dans la gestion du
              règlement des dettes de l'entreprise.
            </li>
            <li>
              👉
              <strong> Finalisation des Comptes :</strong> Nous veillons à la
              clôture correcte des comptes de l'entreprise, y compris le
              paiement des impôts et des frais restants.
            </li>
            <li>
              👉
              <strong> Conseils Personnalisés :</strong> Notre équipe est à
              votre disposition pour répondre à vos questions et vous fournir
              des conseils administratifs adaptés à votre situation.
            </li>
          </ol>

          <p>
            <strong>Un Processus de Fermeture sans Souci 😌</strong>
            <br />
            En choisissant Legalis pour l'assistance administrative de la
            fermeture de votre entreprise, vous bénéficiez d'une expertise
            dédiée pour vous aider à gérer les aspects administratifs avec
            précision. Notre objectif est de vous libérer des tâches
            administratives stressantes afin que vous puissiez vous concentrer
            sur la transition en toute tranquillité.
            <br />
            Si vous avez décidé de fermer votre entreprise, n'hésitez pas à nous
            contacter. Nous sommes là pour vous accompagner tout au long du
            processus administratif, vous assurant que tout est en ordre et
            conforme aux réglementations en vigueur.
          </p>
        </main>
      </section>
    </div>
  );
};

export default SectionFermetureEntreprise;
