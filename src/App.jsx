import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  About,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Awards,
  Works,
} from "./components";
import { Projects, Experience } from "./pages";

const LandingPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Awards />
      <Works />
      <Feedbacks />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
