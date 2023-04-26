import "./footer.css";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Matthieu</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              À propos
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projets
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.github.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <AiFillInstagram />
          </a>
        </div>
        <span className="footer__copy">
          &#160; Matthieu Tricoire. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
