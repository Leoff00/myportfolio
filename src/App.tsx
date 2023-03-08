import { Fade } from "react-awesome-reveal";
import CardProjects from "./Components/CardProjects";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import ProfileAndTechSection from "./Components/ProfileAndTechSection";
import Techs from "./Components/Techs";

function App() {
  return (
    <>
      <Header />
      <ProfileAndTechSection>
        <Profile />
        <Techs />
        <CardProjects />
      </ProfileAndTechSection>
    </>
  );
}

export default App;
