import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About, Feedbacks, Awards, Highlights, LinkedIn } from "./components";
import { Projects, Experience, UIF, Navbar, NotFound, JobHunt } from "./pages";
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
      <LinkedIn />
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

const JobHuntPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <JobHunt />
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
        <Route path="/jobhunt" element={<JobHuntPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
