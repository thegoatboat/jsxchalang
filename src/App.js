import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
