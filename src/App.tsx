import "./App.css";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import { en } from "./assets/data";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
      <Header />
      <AboutMe about={en.about} />
      <Experience experience={en.experience} />
      <Education education={en.education} />
      <Skill skill={en.skill} />
      <Contact />
      <Footer footer={en.footer} />
      <DarkModeToggle />
    </div>
  );
}

export default App;
