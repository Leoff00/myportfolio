import "./index.css";
import { projectsCardsSet } from "@/dataset";

function ProjectsCards() {
  return (
    <>
      {projectsCardsSet.map((data, index) => (
        <div key={index} className="projectContainer">
          <div className="projectHeaderContainer">
            <h3 className="projectTitle">{data.projectTitle}</h3>
            <p>Ferramentas utilizadas: </p>
            <div key={index} className="projectsIconsContainer">
              {data.iconUrl?.map((img, index) => (
                <img key={index} id="projectsIcon" src={img} alt={data.alt} />
              ))}
            </div>
          </div>
          <div className="projectsBodyContainer">
            <p>{data.description}</p>
            <div className="projectsFooterContainer">
              {data.repoLink === "Privado" ? (
                <>
                  <p>Link do repositório: </p>
                  <p>{data.repoLink} 🚫</p>
                </>
              ) : (
                <>
                  <p>Link do repositório: </p>
                  <a href={data.repoLink} target="_blank">
                    <img src={data.repoIcon} alt="github icon" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;
