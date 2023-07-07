import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="programs__header">
        <span className="stroke-text">escolha</span>
        <span>o seu</span>
        <span className="stroke-text">treino</span>
      </div>
      <div className="programs__categories">
        {programsData.map((program, i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="category__button">
              <span>Comece agora</span>
              <img src={RightArrow} alt="flecha apontando para a direita" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
