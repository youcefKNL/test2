import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import ServiceClientLegalis from "../assets/img/ideogram__42_-removebg-preview.png";
// import IconCreation from "../assets/emoji3d/3dicon-create-transformed-removebg-preview.png";

const Home = () => {
  return (
    <AnimatedPage>
      <section className="home">
        <div className="intro">
          <h1>
            Simplifiez Vos Démarches Administratives avec Legalis : Expertise et
            Accompagnement Intégral, Même pour les Dossiers les Plus Complexes.
          </h1>
          <div className="introContent">
            <img src={ServiceClientLegalis} alt="" />
            <p>
              Chez Legalis, nous sommes bien plus qu'un simple cabinet de
              conseil. Notre mission est de vous offrir un accompagnement
              complet tout au long de la vie de votre entreprise, en mettant à
              votre disposition notre expertise inégalée. Même face à des
              dossiers administratifs complexes ou perplexe, nous vous apportons
              une assistance personnalisée, garantissant que chaque étape de
              votre formalité soit gérée avec professionnalisme et soin.
              Simplifiez vos démarches administratives d'entreprise en faisant
              confiance à notre service d'accompagnement expert, qui vous
              permettra de naviguer avec succès à travers les défis
              administratifs tout en restant concentré sur le développement de
              votre activité.
            </p>
          </div>
        </div>
        <h2>
          Sérénité administrative: votre parcours pris en charge de A à Z{" "}
        </h2>
        <div className="services">
          <NavLink to="/creer+entreprise" className="card createBuisnessCard">
            <h3>Créer mon entreprise</h3>
            {/* <img src={IconCreation} alt="" /> */}
            <div className="details">
              En savoir plus &nbsp;
              <FontAwesomeIcon icon={faAnglesRight} shake />
            </div>
          </NavLink>
          <NavLink
            to="/modification+statut"
            className="card modifyBuisnessCard"
          >
            <h3>Modifier mes statuts</h3>
            {/* <img src={IconCreation} alt="" /> */}
            <div className="details">
              En savoir plus &nbsp;
              <FontAwesomeIcon icon={faAnglesRight} shake />
            </div>
          </NavLink>
          <NavLink
            to="/fermeture+entreprise"
            className="card closeBuisnessCard"
          >
            <h3>Fermer mon entreprise</h3>
            {/* <img src={IconCreation} alt="" /> */}
            <div className="details">
              En savoir plus &nbsp;
              <FontAwesomeIcon icon={faAnglesRight} shake />
            </div>
          </NavLink>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
