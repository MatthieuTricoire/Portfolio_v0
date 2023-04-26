import { FC, CSSProperties } from "react";
import { IProject } from "./Data";

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { AiOutlineArrowRight, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

interface ProjectProps {
  project: IProject;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="portfolio__card">
      <Carousel
        className="portfolio__carousel"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {project.images.map((image) => {
          return (
            <img
              src={image}
              alt=""
              className="portfolio__img"
              key={project.id}
            />
          );
        })}
      </Carousel>
      <h3 className="portfolio__title">{project.title}</h3>
      {/* <div className="portfolio__techno">
        {project.icons?.map((icon) => icon)}
      </div> */}

      <div className="portfolio__link">
        <a
          href={project.git}
          className="portfolio__button portfolio__button-git"
        >
          <AiFillGithub />
        </a>
        {project.live && (
          <a href="#" className="portfolio__button">
            Demo <AiOutlineArrowRight className="portfolio__button-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
