import { useEffect } from "react";

function ShadowHtmlText() {
  useEffect(() => {
    console.log(
      "%cBienvenue dans la console ! 🎉",
      "color: gold; background: black; font-size: 20px; padding: 10px;"
    );
    console.log(
      "%cSi vous êtes ici, vous devez être un·e développeur·se génial·e.",
      "color: black; background: gold; font-size: 16px; padding: 8px;"
    );
    console.log(
      "%cSi vous avez besoin d'aide pour donner vie à vos projets, contactez-nous à [votre email ou site Web].",
      "color: gold; background: black; font-size: 16px; padding: 8px;"
    );
    console.log(
      "%cLaissez la magie du code opérer ! 💻✨",
      "color: gold; background: black; font-size: 20px; padding: 10px;"
    );
  }, []);
}

export default ShadowHtmlText;
