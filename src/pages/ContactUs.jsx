import React from "react";

import Form from "../components/Form";

const ContactUs = () => {
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
            <i className="fa-brands fa-whatsapp "></i>Nous contacter
          </button>
        </li>
        <li className="phoneContact">
          Telephone
          <button>
            {" "}
            <i className="fa-solid fa-phone "></i>Nous contacter
          </button>
        </li>
        <li className="mailContact">
          Mail
          <button>
            {" "}
            <i className="fa-regular fa-envelope"></i>Nous contacter
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
