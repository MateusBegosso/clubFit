import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            height: "fit-content",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="menu mobile"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => setMenuOpened(false)}
            className="header__menu-item"
          >
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programas
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Sobre
            </Link>
          </li>
          <li
            onClick={() => setMenuOpened(false)}
            className="header__menu-item"
          >
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Planos
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Nossos clientes
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
