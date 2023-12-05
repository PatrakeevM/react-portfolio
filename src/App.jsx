import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects/Projects";
import "./styles/App.scss";
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      {/* <Projects /> */}
      <ProjectInfo />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
