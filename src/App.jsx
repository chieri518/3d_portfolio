import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About, Feedbacks, Hero, Awards, Features } from "./components";
import { Projects, Experience, Navbar } from "./pages";
import { Analytics } from "@vercel/analytics/react";

const LandingPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Features />
      <Awards />
      <Feedbacks />
    </>
  );
};

const ExperiencePage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <Experience />
    </>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <Projects />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
