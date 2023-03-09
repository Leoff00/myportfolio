import "./index.css";
import { dataSet } from "../../dataset";
import { Fade } from "react-awesome-reveal";

function Techs() {
  return (
    <>
      <section className="strip">
        <div className="techTitle">
          <h1>Techs: </h1>
        </div>
        <div className="columnContainer">
          <Fade big cascade damping={0.1}>
            {dataSet.map((data, index) => (
              <div key={index} className="dataImgContainer">
                <p>{data.title}</p>
                <img id="icons" src={data.imageUrl} alt={data.alt} />
              </div>
            ))}
          </Fade>
        </div>
      </section>
    </>
  );
}

export default Techs;
