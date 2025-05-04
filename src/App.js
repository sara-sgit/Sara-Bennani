import styled, { ThemeProvider } from "styled-components";
import { lightTheme, lightThemeTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import Videos from "./components/sections/Videos";
import { useState } from "react";

// 🔧 Clean gradient background
const Body = styled.div`
  background-color: #f9f9f9; // soft off-white for subtle depth
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;


const Wrapper = styled.div`
  padding-bottom: 100px;
  background: transparent; // no additional background clutter
  width: 100%;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Experience />
                <Education />
                <Testimonials/>
                <Contact/>
                <Videos/>
              </Wrapper>
              <Footer />
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
