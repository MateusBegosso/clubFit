import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <section className="plans">
      <div className="blur blur-p1"></div>
      <div className="blur blur-p2"></div>
      <div className="programs__header">
        <span className="stroke-text">Comece</span>
        <span>sua</span>
        <span className="stroke-text">Jornada</span>
      </div>

      <div className="plans__types">
        {plansData.map((plan, i) => (
          <div className="plans__plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>R$ {plan.price}</span>

            <div className="plans__features">
              {plan.features.map((feature, i) => (
                <div className="plans__features-feature">
                  <img
                    src={whiteTick}
                    alt="sinal de certo branco de um checklist"
                  />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>Veja mais benefícios &gt;</span>
            </div>
            <button className="btn">Comece agora</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
