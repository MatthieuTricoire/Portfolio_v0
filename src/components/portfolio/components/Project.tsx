import { FC } from "react";
import { IProject } from "./Data";

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { AiOutlineArrowRight, AiFillGithub } from "react-icons/ai";

interface ProjectProps {
  project: IProject;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="portfolio__card">
      {project.images.length > 1 ? (
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
      ) : (
        <img src={project.images[0]} className="portfolio__img" alt="" />
      )}

      <h3 className="portfolio__title">{project.title}</h3>
      <div className="portfolio__techno">
        {project.icons?.map((icon) => (
          <div>{icon}</div>
        ))}
      </div>
      <p className="portfolio__description">{project.description}</p>

      <div className="portfolio__link">
        <a
          href={project.git}
          className="portfolio__button portfolio__button-git"
        >
          <AiFillGithub />
        </a>
        {project.live && (
          <a href={project.liveUrl} className="portfolio__button">
            Demo <AiOutlineArrowRight className="portfolio__button-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
