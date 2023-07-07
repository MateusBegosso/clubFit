import React from "react";
import "./Hero.css";
import Header from "../Header";
import Heart from "../../assets/heart.png";
import Athlete from "../../assets/hero_image.png";
import Athlete_Back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 2.5 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <section className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="hero__left">
        <Header />
        <div className="hero__left-animation-ad">
          <motion.div
            initial={{ left: mobile ? "145px" : "190px" }}
            whileInView={{ left: "11px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>A melhor academia da região</span>
        </div>

        <div className="hero__title">
          <div>
            <span>Alcance</span>
            <span> os seus</span>
          </div>
          <div>
            <span className="stroke-text">Objetivos</span>
          </div>
          <div className="hero__subtitle">
            <span>
              Vamos te ajudar a alcançar a qualidade de vida que você merece!
            </span>
          </div>
        </div>
        <div className="hero__left-info">
          <div>
            <span>
              <NumberCounter start={75} end={100} delay="4" preFix="+" />
            </span>
            <span>instrutores</span>
          </div>
          <div>
            <span>
              <NumberCounter start={720} end={800} delay="4" preFix="+" />
            </span>
            <span>membros</span>
          </div>
          <div>
            <span>
              <NumberCounter start={12} end={20} delay="4" preFix="+" />
            </span>
            <span>academias</span>
          </div>
        </div>

        <div className="hero__buttons">
          <button className="btn">Vamos Começar</button>
          <button className="btn">Saiba Mais</button>
        </div>
      </div>
      <div className="hero__right">
        <button className="btn">Junte-se Hoje</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "2rem" }}
          transition={{ ...transition, type: "tween" }}
          className="hero__right-heart"
        >
          <img src={Heart} alt="imagem coração" />
          <span>Frequência Cardíaca</span>
          <span>
            <NumberCounter start={80} end={116} delay="4" />
            bpm
          </span>
        </motion.div>

        <img src={Athlete} alt="imagem atleta" className="hero__image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "27rem" }}
          transition={{ ...transition, type: "tween" }}
          src={Athlete_Back}
          alt="imagem de fundo"
          className="hero__image-back"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "29rem" }}
          transition={{ ...transition, type: "tween" }}
          className="hero__right-calories"
        >
          <img src={Calories} alt="imagem calorias" />
          <div>
            <span>Calorias Queimadas</span>
            <span>
              <NumberCounter start={180} end={220} delay="4" /> kcal
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
