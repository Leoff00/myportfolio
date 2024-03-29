import "./index.css";
import me from "@/assets/me.jpeg";
import { Fade } from "react-awesome-reveal";

function Profile() {
  return (
    <>
      <Fade big cascade duration={1000}>
        <section className="profileSection">
          <div className="profileContainer">
            <section className="titleContainer">
              <h4>Olá, me chamo Leonardo Ferreira. 👋</h4>
              <p>
                Seja bem-vindo ao meu portfolio! Sou desenvolvedor full-stack &
                full-cycle atualmente especializado no ecossistema Javascript e
                Golang com foco em criar aplicações digitais para solucionar
                problemas do cotidiano.
              </p>
            </section>
            <section className="avatarSection">
              <img src={me} alt="Leonardo Ferreira" />
            </section>
          </div>
        </section>
      </Fade>
    </>
  );
}

export default Profile;
