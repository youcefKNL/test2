import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Confettis from "./Confetti";

const Form = () => {
  //  Pour pouvoir utiliser les reference d un formulaire
  const form = useRef();

  const [showModal, setShowModal] = useState(false);

  const [showConfetti, setshowConfetti] = useState(false);

  // *****************Arrête les confettis après 2 secondes
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setshowConfetti(false);
      }, 6000);

      // Nettoyer le timer si le composant est démonté
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessError = document.querySelector(".form-message-error");
    const formMessSuccess = document.querySelector(".form-message-sucess");
    // const formConfetti = document.querySelector(".formulaire");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_EMAILJS,
        process.env.REACT_APP_TEMPLATE_EMAILJS,
        form.current,
        process.env.REACT_APP_ID_EMAILJS
      )
      .then(
        (result) => {
          //   console.log(result.text);
          // Reset les input direct
          form.current.reset();
          formMessSuccess.innerHTML = "<p class='success'>Message envoyé !</p>";
          setshowConfetti(true);

          setTimeout(() => {
            formMessSuccess.innerHTML = "";
          }, 10000);
          handleCloseModal();
        },
        (error) => {
          //   console.log(error.text);
          formMessError.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          //   setTimeout(() => {
          //     formMessError.innerHTML = "";
          //   }, 2500);
        }
      );
  };

  return (
    <div className="formulaire">
      <h2>Nous contacter via un Formulaire</h2>
      <div className="form-message-sucess"></div>
      <label className="btn-open" htmlFor="frmContactForm">
        <i className="far fa-envelope" />
        <span className="ml-half">Nous contacter</span>
      </label>
      <input type="checkbox" id="frmContactForm" onClick={handleOpenModal} />
      {showModal && (
        <div className="contact-modal">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-wrapper">
                <h2 className="p-none m-none mb-quarter text-white">
                  <i className="far fa-envelope"></i>
                  <span className="ml-half">Nous contacter</span>
                </h2>
                <div className="contact-section">
                  <div className="form-item">
                    <input
                      id="txtFullName"
                      type="text"
                      placeholder="Votre Nom"
                      name="name"
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="txtFullName" className="lbl-floating">
                      Votre Nom
                    </label>
                    <i className="icon fas fa-user"></i>
                  </div>
                  <div className="form-item">
                    <input
                      id="txtEmail"
                      type="email"
                      placeholder="Votre E-Mail"
                      name="email"
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="txtEmail" className="lbl-floating">
                      Votre E-Mail
                    </label>
                    <i className="icon fas fa-at"></i>
                  </div>
                  <div className="form-item">
                    <textarea
                      id="txtContent"
                      placeholder="Ecrivez votre message ici"
                      rows="5"
                      name="message"
                      required
                    ></textarea>
                    <label htmlFor="txtContent" className="lbl-floating">
                      Ecrivez votre message ici
                    </label>
                    <i className="icon far fa-comment"></i>
                  </div>
                </div>
                <div className="contact-section text-right">
                  <label htmlFor="frmContactForm" className="contact-cancel">
                    <i className="fas fa-times-circle"></i>
                    <span className="ml-quarter">Annuler</span>
                  </label>
                  <button type="submit" className="btn-open ml-whole">
                    <i className="far fa-paper-plane"></i>
                    <span className="ml-half">Envoyer</span>
                  </button>
                </div>
                <div className="form-message-error"></div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Conteneur pour les confettis */}
      {showConfetti && (
        <Confettis
          showConfetti={showConfetti}
          setshowConfetti={setshowConfetti}
        />
      )}
    </div>
  );
};

export default Form;
