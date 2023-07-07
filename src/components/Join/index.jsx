import React from "react";
import "./Join.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lf202s4",
        "template_4eaq6nh",
        form.current,
        "2FOzHN1zdu_2xsL-s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="join">
      <div className="join__left">
        <hr />
        <div>
          <span className="stroke-text">pronto</span>
          <span>para</span>
        </div>
        <div>
          <span>subir</span>
          <span className="stroke-text">de nível?</span>
        </div>
      </div>
      <div className="join__right">
        <form ref={form} className="join__right-email" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="exemplo@email.com"
          />
          <button className="btn join__right-btn">Comece agora</button>
        </form>
      </div>
    </section>
  );
};

export default Join;
