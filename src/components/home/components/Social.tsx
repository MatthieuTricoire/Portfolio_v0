import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.github.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default Social;
