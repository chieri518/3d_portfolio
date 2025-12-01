import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About, Feedbacks, Highlights, LinkedIn, Footer } from "./components";
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

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const LandingPage = () => {
  return (
    <Layout>
      <About />
      <Highlights />
      <LinkedIn />
      <Feedbacks />
    </Layout>
  );
};

const ExperiencePage = () => {
  return (
    <Layout>
      <Experience />
    </Layout>
  );
};

const ProjectsPage = () => {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
};

const UIFPage = () => {
  return (
    <Layout>
      <UIF />
    </Layout>
  );
};

const ChetzPage = () => {
  return (
    <Layout>
      <Chetz />
    </Layout>
  );
};

const NECXPage = () => {
  return (
    <Layout>
      <NECX />
    </Layout>
  );
};

const JobHuntPage = () => {
  return (
    <Layout>
      <JobHunt />
    </Layout>
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
