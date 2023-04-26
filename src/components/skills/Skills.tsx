import "./skills.css";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Design from "./components/Design";
import Others from "./components/Others";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Mes compétences</h2>
      <span className="section__subtitle">Mon niveau technique</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Others />
      </div>
    </section>
  );
};

export default Skills;
