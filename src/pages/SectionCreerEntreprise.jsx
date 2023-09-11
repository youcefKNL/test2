import React from "react";
import interogationLogo from "../assets/emoji3d/ideogram-removebg-preview (3).png";
import ServiceClientIcon3d from "../assets/emoji3d/service-client2.png";

function SectionCreerEntreprise() {
  return (
    <section className="sectionCreerEntreprise">
      <h1>
        <img src={interogationLogo} alt="" />
        Comment Créer une Entreprise
      </h1>
      <div className="intro">
        <img src={ServiceClientIcon3d} alt="" />
        <p>
          Bienvenue dans notre guide complet sur la création d'une entreprise
          avec Legalis. <br /> Que vous soyez un entrepreneur débutant ou un
          professionnel expérimenté, nous sommes là pour vous accompagner à
          chaque étape du processus. <br /> La création d'une entreprise est une
          étape passionnante, et il est essentiel de comprendre les différentes
          options de statuts juridiques disponibles pour choisir celui qui
          convient le mieux à votre projet.
        </p>
      </div>
      <main>
        <h2>📋 Les Statuts Juridiques Possibles</h2>
        <p>
          La première étape pour créer une entreprise est de choisir le statut
          juridique qui vous convient le mieux. Voici une liste des statuts
          juridiques les plus courants :
        </p>
        <ol>
          <li>
            👉
            <strong>Auto-Entrepreneur :</strong>
            Le statut d'auto-entrepreneur est idéal pour les travailleurs
            indépendants et les petites activités. Il offre une simplicité et
            une fiscalité avantageuse.
          </li>
          <li>
            👉
            <strong>Entreprise Individuelle :</strong>
            L'entreprise individuelle est la forme la plus simple d'entreprise,
            où vous êtes le seul propriétaire et responsable de toutes les
            activités.
          </li>
          <li>
            👉
            <strong>
              EURL (Entreprise Unipersonnelle à Responsabilité Limitée) :
            </strong>
            Une EURL est similaire à l'entreprise individuelle, mais avec une
            responsabilité limitée au capital social.
          </li>
          <li>
            👉
            <strong>SARL (Société à Responsabilité Limitée) :</strong>
            Une SARL est une entreprise détenue par deux personnes ou plus, avec
            une responsabilité limitée au capital social.
          </li>
          <li>
            👉
            <strong>SA (Société Anonyme) :</strong>
            Une SA est une entreprise avec un capital social divisé en actions.
            Elle est adaptée aux entreprises cotées en bourse.
          </li>
          <li>
            👉
            <strong>SAS (Société par Actions Simplifiée) :</strong>
            Une SAS est similaire à une SA, mais avec plus de flexibilité dans
            la gestion et moins d'exigences légales.
          </li>
        </ol>{" "}
        <h2>✏️ Le Processus de Création</h2>
        <p>
          Une fois que vous avez choisi votre statut juridique, le processus de
          création d'entreprise implique généralement les étapes suivantes :
        </p>
        <ol>
          <li> 👉 Choisissez un nom d'entreprise unique.</li>
          <li> 👉 Rédigez les statuts de votre entreprise.</li>
          <li>
            {" "}
            👉 Effectuez les formalités d'immatriculation auprès des autorités
            compétentes.
          </li>
          <li> 👉 Ouvrez un compte bancaire professionnel.</li>
          <li> 👉 Obtenez les licences et autorisations nécessaires.</li>
          <li> 👉 Commencez votre activité et développez votre entreprise.</li>
        </ol>
        <h2>🤔 Choisir le Statut</h2>
        <p>
          Choisissez le Statut Adapté à Votre Projet Avant de créer votre
          entreprise, il est essentiel de déterminer le statut juridique qui
          convient le mieux à votre projet, en tenant compte de votre activité,
          de vos objectifs financiers, et de votre tolérance au risque. Peu
          importe le statut que vous choisissez, la création d'une entreprise
          est une étape importante. <br /> Chez Legalis, nous sommes là pour
          vous aider à réussir. Commencez dès aujourd'hui et transformez votre
          idée en une entreprise prospère. La création d'entreprise peut sembler
          complexe, mais Legalis est là pour vous accompagner à chaque étape du
          processus.
        </p>
        <h2>📞 Contactez-Nous</h2>
        <p>
          Si vous avez des questions ou avez besoin d'assistance pour créer
          votre entreprise, n'hésitez pas à nous contacter. <br /> Nous sommes
          là pour vous aider à réussir. <br /> Chez Legalis, nous croyons que
          chaque entreprise a le potentiel de prospérer. <br /> Commencez votre
          voyage entrepreneurial avec nous dès aujourd'hui !
        </p>
      </main>
    </section>
  );
}

export default SectionCreerEntreprise;
