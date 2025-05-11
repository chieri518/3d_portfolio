import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { chetzlogo } from "../assets";

import Navbar from "./navbar";

const chetz = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Navbar />
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>chetz</h1>
        <p className={styles.sectionSubText}>
          @ Hasso Plattner Institute of Design at Stanford University
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <UIFGallery />
      </div>
      <h2 className={styles.sectionHeadText}>About UIF</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <p className="text-secondary text-[17px] max-w-4xl leading-[30px]">
          The University Innovation Fellows (UIF) is a global program that
          empowers university students to become change agents at their schools
          by fostering innovation, entrepreneurship, creativity, and design
          thinking. Supported by Stanford University's d.school, Fellows
          collaborate with faculty, peers, and campus leaders to improve
          learning experiences and drive institutional change. The program
          includes a 6-week intensive training, year-round mentorship, and a
          chance to attend a Silicon Valley Meetup at Stanford. With over 2,900
          Fellows from 300+ schools worldwide, UIF is shaping the future of
          higher education through student-led impact.
        </p>
        <a
          href="https://universityinnovationfellows.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={uiflogo}
            alt="uiflogo"
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(chetz);
