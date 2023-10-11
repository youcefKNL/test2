import React from "react";

import Form from "../components/Form";

const ContactUs = () => {
  /*******************************************************************/
  const email = process.env.REACT_APP_EMAIL;
  const portable = process.env.REACT_APP_PORTABLE;
  let portableAvecEspaces = "";
  // Ajouter un espace après chaque paire de chiffres
  for (let i = 0; i < portable.length; i += 2) {
    portableAvecEspaces += portable.slice(i, i + 2);
    if (i + 2 < portable.length) {
      portableAvecEspaces += " ";
    }
  }
  /*******************************************************************/
  return (
    <div className="contact">
      <ul className="contact-grid">
        <li className="WhatsApp">
          <p>
            Privilégier WhatsApp comme moyen de communication, Envoyez-nous des
            messages écris, vocaux ou appelez-nous!
          </p>
          <button>
            {" "}
            <i className="fa-brands fa-whatsapp "></i>Nous contacter <br />
            {portableAvecEspaces}
          </button>
        </li>
        <li className="phoneContact">
          Telephone
          <button>
            {" "}
            <i className="fa-solid fa-phone "></i>Nous contacter <br />
            {portableAvecEspaces}
          </button>
        </li>
        <li className="mailContact">
          Mail
          <button>
            {" "}
            <i className="fa-regular fa-envelope"></i>Nous contacter <br />{" "}
            {email}
          </button>
        </li>
        <li>
          <Form />
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
