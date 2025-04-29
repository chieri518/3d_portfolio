import { memo, useState, useEffect, useRef } from "react";
import cn from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  uif,
  steamhouse,
  uiftimeline,
  uifprojects,
  meetup,
} from "../constants";
import { uiflogo, steamhousewide } from "../assets";

import Navbar from "./navbar";

function UIFGallery() {
  const ref = useRef();

  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: `${window.innerHeight}px 0px`,
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex overflow-x-hidden overflow-y-visible w-auto"
    >
      <div
        className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        <UIFImages />
      </div>
    </div>
  );
}

function STEAMHouseGallery() {
  const ref = useRef();

  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: `${window.innerHeight}px 0px`,
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex overflow-x-hidden overflow-y-visible w-auto"
    >
      <div
        className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        <STEAMHouseImages />
      </div>
    </div>
  );
}

function MeetupGallery() {
  const ref = useRef();

  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: `${window.innerHeight}px 0px`,
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex overflow-x-hidden overflow-y-visible w-auto"
    >
      <div
        className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        <MeetupImages />
      </div>
    </div>
  );
}

const UIFImages = memo(function UIFImages() {
  const images = [...uif, ...uif];
  return (
    <>
      {images.map(({ src }, i) => (
        <div
          key={i}
          className={cn(
            `group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative`
          )}
        >
          <div
            className={cn(
              "h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300",
              i % 2 === 0
                ? "rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl"
                : "group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-2deg]"
            )}
          >
            <img
              src={src}
              className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
            />
          </div>
        </div>
      ))}
    </>
  );
});

const ProjectCard = ({ title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-fit mx-auto"
  >
    <div className="bg-primary rounded-[20px] py-5 px-12 flex flex-col justify-center items-center">
      <h3 className="text-black text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
);

const MeetupCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-4 md:p-5 rounded-2xl flex flex-col md:flex-row w-full my-5">
        <div className="w-full md:w-1/3 h-auto relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-5">
          <h3 className="text-black font-bold text-[20px] md:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[15px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const UIFCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: experience.color, color: "#000000" }}
    contentArrowStyle={{ borderRight: "7px solid #77ddf9" }}
    iconStyle={{ display: "none" }}
  >
    <div>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.week}
      </p>
      <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
    </div>
    <p className="text-black text-[14px] pl-1 tracking-wider">
      {experience.paragraph}
    </p>
  </VerticalTimelineElement>
);

const STEAMHouseImages = memo(function STEAMHouseImages() {
  const images = [...steamhouse, ...steamhouse];
  return (
    <>
      {images.map(({ src }, i) => (
        <div
          key={i}
          className={cn(
            `group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative`
          )}
        >
          <div
            className={cn(
              "h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300",
              i % 2 === 0
                ? "rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl"
                : "group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-2deg]"
            )}
          >
            <img
              src={src}
              className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
            />
          </div>
        </div>
      ))}
    </>
  );
});
const MeetupImages = memo(function MeetupImages() {
  const images = [...meetup, ...meetup];
  return (
    <>
      {images.map(({ src }, i) => (
        <div
          key={i}
          className={cn(
            `group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative`
          )}
        >
          <div
            className={cn(
              "h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300",
              i % 2 === 0
                ? "rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl"
                : "group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-2deg]"
            )}
          >
            <img
              src={src}
              className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
            />
          </div>
        </div>
      ))}
    </>
  );
});

const UIF = () => {
  const [activeTab, setActiveTab] = useState("STEAM");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="relative w-full h-screen mx-auto">
      <Navbar />
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>
          University Innovation Fellowship
        </h1>
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
      <h2 className={styles.sectionHeadText}>Six-Week Training Overview</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {uiftimeline.map((experience, index) => (
            <UIFCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <h2 className={styles.sectionHeadText}>The 2022 UIF Projects</h2>
      <div className="flex justify-center gap-5 flex-wrap mt-5">
        <a
          onClick={() => handleTabClick("STEAM")}
          className={`cursor-pointer ${
            activeTab === "STEAM" ? "text-blue-500" : ""
          }`}
        >
          <ProjectCard title="STEAM House" />
        </a>
        <a
          onClick={() => handleTabClick("PM")}
          className={`cursor-pointer ${
            activeTab === "PM" ? "text-blue-500" : ""
          }`}
        >
          <ProjectCard title="Project Management" />
        </a>
      </div>
      <div className="tab-content mt-5">
        {activeTab === "STEAM" && (
          <div id="STEAM" className="tab-pane fade in active">
            <h3>{uifprojects.title}</h3>

            <p>
              The strategic plan emerged from the challenge of sustaining the
              Innovation Center—originally launched by Menlo College’s inaugural
              UIF cohort in 2017—beyond the tenure of its founders. <br />
              <br />
              Our goal was to develop the center into a premier, inclusive
              community hub on campus while preserving future cohorts' ability
              to pursue their own impactful projects. Through extensive
              exploration of key operational components—such as funding,
              governance, programming, training, equipment maintenance,
              scheduling, marketing, and alignment with college values—we
              crafted a multi-year strategic plan.
              <br />
              <br /> This plan is intentionally aligned with Menlo College’s
              broader strategic vision and centers on student engagement,
              inclusion, and creative exploration across all disciplines,
              including the arts. This year, we took a pivotal step by stocking
              the maker space and beginning program implementation. <br />
              <br />
              The center now features a variety of tools, including small and
              large FDM 3D printers, 3D pens, a Glowforge laser cutter, a Cricut
              cutter, sewing, and button-making machines, a soldering station,
              VR headsets, both PC and Mac computers, gaming setups, and
              large-format printers. Programming that redefines creativity to
              include mindset and design thinking is also underway. <br />
              <br />
              In April, we hosted a Grand Reopening to showcase the center’s new
              capabilities. Students, faculty, and staff engaged with hands-on
              demos and left with custom 3D-printed souvenirs, generating
              excitement for future workshops.
            </p>
            <img
              loading="lazy"
              src={steamhousewide}
              alt="steamhouse"
              className="w-full h-full object-contain"
            />
            <STEAMHouseGallery />
          </div>
        )}
        {activeTab === "PM" && (
          <div id="PM" className="tab-pane fade">
            <p>
              The Project Management Course at Menlo College offers a hands-on
              learning experience where students work on real-world projects,
              such as organizing events like Techstars Startup Weekend and
              TEDxMenloCollege. It’s open to students from all majors, bridging
              theory with practical skills, and preparing students for future
              careers by teaching industry-relevant project management skills.
              For Menlo College, the course boosts visibility, sustains large
              campus events, and enhances the overall educational experience.
              The course will be credit-bearing and promoted through various
              channels, with a syllabus developed in collaboration with faculty
              and aligned with key events.
            </p>
          </div>
        )}
      </div>
      <h2 className={styles.sectionHeadText}>UIF Silicon Valley Meetup</h2>
      <MeetupGallery />
    </section>
  );
};

export default SectionWrapper(UIF);
