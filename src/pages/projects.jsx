import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { readmore } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, tasks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import Navbar from "./navbar";

const ProjectDetails = ({ overview, challenges, learnings }) => {
  return (
    <div className="mt-8 p-5 bg-secondary rounded-2xl">
      <h3 className="text-white font-semibold text-[20px]">Project Details</h3>

      {/* Overview Section */}
      <div className="mt-4">
        <h4 className="text-primary font-bold text-[18px]">Overview</h4>
        <p className="text-white text-[15px] mt-2 leading-[24px]">
          {tasks.overview}
        </p>
      </div>

      {/* Challenges and Solutions Section */}
      <div className="mt-4">
        <h4 className="text-primary font-bold text-[18px]">
          Challenges and Solutions
        </h4>
        <p className="text-white text-[15px] mt-2 leading-[24px]">
          {challenges}
        </p>
      </div>

      {/* Learning Outcomes Section */}
      <div className="mt-4">
        <h4 className="text-primary font-bold text-[18px]">
          Learning Outcomes
        </h4>
        <p className="text-white text-[15px] mt-2 leading-[24px]">
          {learnings}
        </p>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Description of the projects....
        </motion.p>
      </div>
      <ProjectDetails
        overview={tasks.overview}
        challenges={tasks.challenges}
        learnings={tasks.learnings}
      />
    </>
  );
};

export default SectionWrapper(Works, "");
