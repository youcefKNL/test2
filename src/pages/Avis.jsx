import React, { useEffect, useState } from "react";
import needYou from "../assets/emoji3d/needYou.png";

const Avis = () => {
  const [temoignages, setTemoignages] = useState([]);

  useEffect(() => {
    fetch("./avis.json")
      .then((response) => response.json())
      .then((data) => setTemoignages(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des témoignages : ",
          error
        )
      );
  }, []);

  return (
    <section className="avis">
      <h2>
        "De nombreux particuliers et professionnels, nous ont fait confiance
        pour résoudre rapidement des situations délicates!
        <br />
        <span>Pourquoi pas vous ?"</span>
      </h2>
      <span className="needYou">
        <img src={needYou} alt="" />
      </span>
      <h3>*Témoignages recueillis sur des sites d'avis en ligne.</h3>
      <div className="vertical-marquee">
        <div className="vertical-marquee__blurred vertical-marquee__blured--top"></div>

        <div className="vertical-marquee__slider">
          <div className="vertical-marquee__panel vertical-marquee__panel-1">
            {temoignages.map((temoignage, index) => (
              <div key={index} className="vertical-marquee__card">
                <p className="vertical-marquee__card-text">
                  <span className="vertical-marquee__quotes">"</span>
                  {temoignage.commentaire}
                  <span className="vertical-marquee__quotes">"</span>
                </p>
                <p className="vertical-marquee_card-author">{temoignage.nom}</p>
                <p className="vertical-marquee_card-sources">
                  <img
                    className="source"
                    src={temoignage.source}
                    alt="Logo source"
                  />

                  <span className="stars">
                    {Array.from({ length: temoignage.stars }, (_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avis;
