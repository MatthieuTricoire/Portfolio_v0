import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/matthieu-tricoire-1b410972/"
        className="home__social-icon"
        target={"_blank"}
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/MatthieuTricoire"
        className="home__social-icon"
        target={"_blank"}
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com/matthieutricoire/"
        className="home__social-icon"
        target={"_blank"}
      >
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default Social;
