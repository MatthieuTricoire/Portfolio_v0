import React, { useEffect, useState } from "react";

// Data import
import { IProject, IProjectFilter, projectsData } from "./Data";
import { projectsNav } from "./Data";
import Project from "./Project";

const Projects = () => {
  const [filter, setFilter] = useState<IProjectFilter>({ name: "Tous" });
  const [projects, setProjects] = useState<IProject[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    console.log("refresh use effect");
    if (filter.name === "Tous") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === filter.name;
      });
      setProjects(newProjects);
    }
  }, [filter]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    if (target && target.textContent) {
      setFilter({ name: target.textContent });
      setActive(index);
    }
  };

  return (
    <>
      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              className={`${
                active === index ? `active--portfolio` : ""
              } portfolio__item`}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="portfolio__container container grid">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
