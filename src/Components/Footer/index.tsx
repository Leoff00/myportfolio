import "./index.css";

function Footer() {
  return (
    <>
      <footer className="portfolioFooter">
        <div className="footerTextContainer">
          <p>Leonardo Ferreira | Copyright © 2023</p>
        </div>
        <div className="separator"></div>
        <div className="footerLinkContainer">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/10doNvF-0z6y7u_rTI2sXfyHqCvfQfKNe/view?usp=drive_link"
          >
            Meu currículo
          </a>
          <a href="#Header">Voltar ao topo</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
