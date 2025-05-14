import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { styles } from "../styles";
import { experiences, awards } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Navbar from "./navbar";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#eafbff", color: "#000000" }}
    contentArrowStyle={{ borderRight: "7px solid #77ddf9" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc c-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-black text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const AwardCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transform transition-transform hover:scale-105">
        <div className="relative h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-center items-center inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-0 hover:opacity-100">
            <div className="text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-[14px]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Experience = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-10">
      <Navbar />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far...</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Awards</h2>
      </motion.div>
      <div className="mt-10">
        <Slider {...sliderSettings}>
          {awards.map((award, index) => (
            <AwardCard key={`award-${index}`} index={index} {...award} />
          ))}
        </Slider>
      </div>
      <div className="h-20" />
    </section>
  );
};

export default SectionWrapper(Experience, "work");
