import { useState } from "react";
import "./header.css";

import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineSend,
  AiOutlineClose,
} from "react-icons/ai";
import { MdExpandCircleDown } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";

const Header = () => {
  // change background header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header?.classList.add("scroll-header");
    } else {
      header?.classList.remove("scroll-header");
    }
  });

  // manage mobile menu displau
  const [menuVisible, setMenuVisible] = useState(false);

  // manage nav item actived
  const [activeNav, setActiveNav] = useState<string>("#home");

  // Go to #tag and close mobile menu
  const handleLinkToAndClose = (tag: string) => {
    setActiveNav(tag);

    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Matthieu.
        </a>
        <div className={menuVisible ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleLinkToAndClose("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <AiOutlineHome className="nav__icon" />
                Accueil
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => handleLinkToAndClose("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <BsPerson className="nav__icon" />À propos
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => handleLinkToAndClose("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <AiOutlineUnorderedList className="nav__icon" />
                Compétences
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#education"
                onClick={() => handleLinkToAndClose("#education")}
                className={
                  activeNav === "#education"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <AiOutlineUnorderedList className="nav__icon" />
                Mon parcours
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => handleLinkToAndClose("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBriefcase className="nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleLinkToAndClose("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <AiOutlineSend className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>

          <AiOutlineClose
            className="nav__close"
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          />
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <MdExpandCircleDown />
        </div>
      </nav>
    </header>
  );
};

export default Header;
