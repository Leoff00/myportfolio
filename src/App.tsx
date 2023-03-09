import Projects from "./Components/Projects";
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
        <Projects />
      </ProfileAndTechSection>
    </>
  );
}

export default App;
