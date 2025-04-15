import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About, Feedbacks, Awards, Highlights } from "./components";
import { Projects, Experience, UIF, Navbar } from "./pages";
import { Analytics } from "@vercel/analytics/react";

const LandingPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <About />
      <Highlights />
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

const UIFPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <UIF />
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
        <Route path="/uif" element={<UIFPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
