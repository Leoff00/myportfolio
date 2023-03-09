import "./index.css";
import ProjectsCards from "./ProjectsCards";

function Projects() {
  return (
    <>
      <div className="outerHeaderTitleContainer">
        <h2 className="outerHeaderTitle">Projetos: </h2>
      </div>
      <section className="projectContainerBox">
        <ProjectsCards />
      </section>
    </>
  );
}

export default Projects;
