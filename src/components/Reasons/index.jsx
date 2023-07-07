import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <section className="reasons" id="reasons">
      <div className="reasons__left">
        <img src={image1} alt="pessoa malhando" />
        <img src={image2} alt="pessoa malhando" />
        <img src={image3} alt="pessoa malhando" />
        <img src={image4} alt="pessoa malhando" />
      </div>

      <div className="reasons__right">
        <span className="reasons__right-why">Algumas razões para</span>

        <div>
          <span className="stroke-text">Você </span>
          <span>escolher nossa academia</span>
        </div>

        <div className="reasons__right-details">
          <div>
            <img src={tick} alt="sinal de certo de um checklist" />
            <span>Mais de 100 instrutores prontos para te auxiliar.</span>
          </div>
          <div>
            <img src={tick} alt="sinal de certo de um checklist" />
            <span>suporte personalizado e humanizado.</span>
          </div>
          <div>
            <img src={tick} alt="sinal de certo de um checklist" />
            <span>1° mensalidade grátis para novos membros.</span>
          </div>
          <div>
            <img src={tick} alt="sinal de certo de um checklist" />
            <span>Descontos incríveis com os nossos parceiros.</span>
          </div>
        </div>
        <span className="reasons__right-partners">Nossos parceiros</span>

        <div className="reasons__right-images">
          <img src={nb} alt="new balance logo" />
          <img src={adidas} alt="adidas logo" />
          <img src={nike} alt="nike logo" />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
