import "./index.css";
import { dataSet, CardProps } from "../../dataset";
import { Fade } from "react-awesome-reveal";

function Techs() {
  return (
    <>
      <Fade big cascade damping={0.5}>
        <section className="strip">
          <div className="techTitle">
            <h1>Techs: </h1>
          </div>
          <div className="columnContainer">
            <Fade big cascade damping={0.25}>
              {dataSet.map((data) => (
                <div className="dataImgContainer">
                  <p>{data.title}</p>
                  <img src={data.imageUrl} alt={data.alt} />
                </div>
              ))}
            </Fade>
          </div>
        </section>
      </Fade>
    </>
  );
}

export default Techs;
