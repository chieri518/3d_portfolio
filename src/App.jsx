import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About, Feedbacks, Highlights, LinkedIn } from "./components";
import {
  Projects,
  Experience,
  UIF,
  Chetz,
  NECX,
  Navbar,
  NotFound,
  JobHunt,
} from "./pages";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const LandingPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <About />
      <Highlights />
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

const ChetzPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <Chetz />
    </>
  );
};

const NECXPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <NECX />
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
        <Route path="/chetz" element={<ChetzPage />} />
        <Route path="/necx" element={<NECXPage />} />
        <Route path="/jobhunt" element={<JobHuntPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
