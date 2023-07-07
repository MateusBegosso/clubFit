import React from "react";
import "./Testimonials.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 2.5 };
  const [select, setSelect] = useState(0);
  const testimonialLength = testimonialsData.length;

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__left">
        <span>Depoimentos</span>
        <span className="stroke-text">O que dizem</span>
        <span>sobre nós</span>
        <motion.span
          key={select}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[select].review}
        </motion.span>
        <div>
          <span className="testimonials__left-name">
            {testimonialsData[select].name}
          </span>
          <span> - {testimonialsData[select].status}</span>
        </div>
      </div>
      <div className="testimonials__right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={select}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[select].image}
          alt="imagem do cliente"
        />
        <div className="testimonials__right-arrows">
          <img
            onClick={() =>
              select === 0
                ? setSelect(testimonialLength - 1)
                : setSelect((prev) => prev - 1)
            }
            src={leftArrow}
            alt="seta esquerda"
          />
          <img
            onClick={() =>
              select === testimonialLength - 1
                ? setSelect(0)
                : setSelect((prev) => prev + 1)
            }
            src={rightArrow}
            alt="seta direita"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
