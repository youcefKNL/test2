import React from "react";
import Image from "../assets/img/ideogram-removebg-preview (3).png";
// import Image2 from "../assets/img/ideogram-removebg-preview (4).png";
import Image3 from "../assets/img/ideogram-removebg-preview (5).png";
import { NavLink } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

const Page404 = () => {
  return (
    <AnimatedPage>
      <section className="pageNotFound">
        <div className="left">
          <img src={Image3} alt="" />
        </div>
        <div className="right">
          <div className="imgConatainer">
            <img src={Image} alt="" />
          </div>
          <p>
            Pour le moment, il n'y a pas grand chose ici. <br /> Un tour sur
            la&nbsp;
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
              title="Accueil"
            >
              page d'acceuil
            </NavLink>
            &nbsp;pourrait vous aider à retrouver votre route.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Page404;
