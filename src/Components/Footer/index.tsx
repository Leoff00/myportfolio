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
            href="https://drive.google.com/file/d/1id2RXKF52D0NgWX1PmO0R2kg9OmaRsoQ/view?usp=sharing"
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
