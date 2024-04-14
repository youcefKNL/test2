import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import Form from "../components/Form";

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

  const handleCopy = () => {
    alert("📝 Contact copié avec succès 👍! 📝");
  };
  /*******************************************************************/
  return (
    <section className="contact">
      <ul className="contact-grid">
        <li className="WhatsApp">
          🚀 WhatsApp 🚀
          <CopyToClipboard text={portableAvecEspaces} onCopy={handleCopy}>
            <button>
              <i className="fa-brands fa-whatsapp "></i> {portableAvecEspaces}
            </button>
          </CopyToClipboard>
        </li>
        <li className="phoneContact">
          📱 Telephone 📱
          <CopyToClipboard text={portableAvecEspaces} onCopy={handleCopy}>
            <button>
              <i className="fa-solid fa-phone "></i>
              {portableAvecEspaces}
            </button>
          </CopyToClipboard>
        </li>
        <li className="mailContact">
          📧 Mail 📧
          <CopyToClipboard text={email} onCopy={handleCopy}>
            <button>
              <i className="fa-regular fa-envelope"></i>
              {email}
            </button>
          </CopyToClipboard>
        </li>
        {/* <li>
          <Form />
        </li> */}
      </ul>
    </section>
  );
};

export default ContactUs;
