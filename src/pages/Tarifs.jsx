import React from "react";

const Tarifs = () => {
  return (
    <section className="tarifs">
      <h1>Tarification : création et gestion de société</h1>
      <p>
        "Nous sommes fiers de proposer les prix les plus compétitifs du marché,,
        car nous reconnaissons que certains dossiers peuvent être plus complexes
        que d'autres. C'est pourquoi nous mentionnons 'à partir de' dans nos
        tarifs pour refléter la nature variable de certaines prestations
        administratives, car chaque dossier peut présenter des besoins
        spécifiques avec une transparence totale. Nos frais administratifs sont
        strictement basés sur les coûts réels supportés par l'administration
        publique, sans aucun gonflement artificiel."
      </p>
      <div className="cardPrice">
        <div className="creationEntreprise card">
          <h2>Création d’entreprise</h2>
          <ul>
            <li>
              <span className="title">Création d’Auto-Entreprise</span>
              <span className="price">
                À partir de 50€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création d’EI </span>
              <span className="price">
                À partir de 50€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de SAS</span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">Création de SASU</span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de SARL </span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de EURL</span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de SCI </span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de Société Civile </span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de SELAS</span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>{" "}
            <li>
              <span className="title">Création de SELARL </span>
              <span className="price">
                À partir de 150€ + frais administratifs
              </span>
            </li>
          </ul>
        </div>
        <div className="modificationStatuts card">
          <h2>Modification de statuts</h2>
          <ul>
            <li>
              <span className="title">Changement de siège social</span>
              <span className="price">
                À partir de 99€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">Changement de dirigeant </span>
              <span className="price">
                À partir de 99€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">Changement d’objet social</span>
              <span className="price">
                À partir de 99€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">Changement de dénomination</span>
              <span className="price">
                À partir de 99€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">
                Changement de situation du dirigeant
              </span>
              <span className="price">
                À partir de 99€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">
                Déclaration du registre des bénéficiaires effectifs (RBE){" "}
              </span>
              <span className="price">
                À partir de 69€ + frais administratifs
              </span>
            </li>
            <li>
              <span className="title">Modification d’Auto-Entreprise </span>
              <span className="price">
                À partir de 50€ sans frais administratifs
              </span>
            </li>
          </ul>
        </div>
        <div className="Dissolution-liquidation card">
          <h2>Dissolution-liquidation</h2>
          <li>
            <span className="title">Dissolution de SAS-SASU</span>
            <span className="price">
              À partir de 99€ + frais administratifs
            </span>
          </li>
          <li>
            <span className="title">Dissolution de SARL-EURL</span>
            <span className="price">
              À partir de 99€ + frais administratifs
            </span>
          </li>
          <li>
            <span className="title">Dissolution de SCI</span>
            <span className="price">
              À partir de 99€ + frais administratifs
            </span>
          </li>
          <li>
            <span className="title">Radiation d’auto-entreprise</span>
            <span className="price">
              À partir de 50€ sans frais administratifs
            </span>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
