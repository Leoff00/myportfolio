import Projects from "@/Components/Projects";
import Header from "@/Components/Header";
import Profile from "@/Components/Profile";
import Techs from "@/Components/Techs";
import Footer from "@/Components/Footer";
import ProfileAndTechSection from "@/Components/ProfileAndTechSection";

function App() {
  return (
    <>
      <Header />
      <ProfileAndTechSection>
        <Profile />
        <Techs />
        <Projects />
        <Footer />
      </ProfileAndTechSection>
    </>
  );
}

export default App;
