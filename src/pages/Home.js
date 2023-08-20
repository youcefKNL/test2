import React from "react";

const Home = () => {
  return (
    <section>
      <div className="intro">
        <h1>
          Simplifiez Vos Démarches Administratives avec Legalis : Expertise et
          Accompagnement Intégral, Même pour les Dossiers les Plus Complexes"
        </h1>
        <p>
          Chez Legalis, nous sommes bien plus qu'un simple cabinet de conseil.
          Notre mission est de vous offrir un accompagnement complet tout au
          long de la vie de votre entreprise, en mettant à votre disposition
          notre expertise inégalée. Même face à des dossiers administratifs
          complexes ou perplexe, nous vous apportons une assistance
          personnalisée, garantissant que chaque étape de votre formalité soit
          gérée avec professionnalisme et soin. Simplifiez vos démarches
          administratives d'entreprise en faisant confiance à notre service
          d'accompagnement expert, qui vous permettra de naviguer avec succès à
          travers les défis administratifs tout en restant concentré sur le
          développement de votre activité.
        </p>
      </div>
      <h2>Sérénité administrative: votre parcours pris en charge de A à Z </h2>
      <div className="services">
        <div className="card createBuisnessCard">
          <h3>Créer mon entreprise</h3>
          <div className="details">
            <ul>
              <li>Personne physique</li>
              <li>Personne morale </li>
              Contactez-nous
            </ul>
          </div>
        </div>
        <div className="card modifyBuisnessCard">
          <h3>Modifier mes statuts</h3>
          <div className="details">
            Formalités modificatives statutaires et/ou non statutaires.
            Contactez-nous
          </div>
        </div>
        <div className="card closeBuisnessCard">
          <h3>Fermer mon entreprise</h3>
          <div className="details">
            Radiation par clôture de liquidation,par transmission universelle du
            patrimoine... Contactez-nous
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
