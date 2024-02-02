import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/layout/navbar";
import Container from "./components/layout/container";

import Home from "./components/pages/home"
import Sobremim from "./components/pages/sobremim";
import Projetos from "./components/pages/projetos"
import Contato from "./components/pages/contato"

function App() {


  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    let widthUpdated = () => {
      setWidthScreen(window.innerWidth)
    }

    window.addEventListener('resize', widthUpdated)

    return () => {
      window.removeEventListener('resize', widthUpdated)
    };
  }, []);


  return (
    <Router>

      <Navbar widthScreen={widthScreen} />

      <Container>

        <Routes>

          <Route exact path="/" element={<Home widthScreen={widthScreen} />}></Route>
          <Route path="/sobremim" element={<Sobremim widthScreen={widthScreen} />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/contato" element={<Contato />}></Route>

        </Routes>

      </Container>

    </Router>
  );
}

export default App;
