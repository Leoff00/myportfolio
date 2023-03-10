import "./index.css";
import { SocialLinks } from "../../dataset";
import mailbox from "../../assets/icons/mailbox.png";

function Header() {
  return (
    <header id="Header">
      <section className="emailSection">
        <div className="mailboxCircle">
          <img src={mailbox} alt="mailbox" />
        </div>
        <a href="mailto:leoferreiracontatos@gmail.com">
          leoferreiracontatos@gmail.com
        </a>
      </section>
      <section className="linkSection">
        <a href={SocialLinks.linkedin} aria-hidden="false" target="_blank">
          Linkedin
        </a>
        <b>/</b>
        <a href={SocialLinks.github} aria-hidden="false" target="_blank">
          Github
        </a>
        <b>/</b>
        <a href={SocialLinks.discord} aria-hidden="false" target="_blank">
          Discord
        </a>
      </section>
    </header>
  );
}

export default Header;
