import "./index.css";

interface CardProjectProps {
  imgUrl: string;
  alt: string;
  title: string;
  description: string;
}

function CardProjects({ title, imgUrl, alt, description }: CardProjectProps) {
  return (
    <>
      <div className="cardContainer">
        <div className="cardFrame">
          <div className="whitespace"></div>
          <section className="cardImageContainer">
            <img className="cardIcon" src={imgUrl} alt={alt} />
          </section>
          <footer>
            <h4 className="cardFooterTitle">{title}</h4>
            <p className="cardFooterDescription">{description}</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default CardProjects;
