import { Contact } from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";



function App() {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
