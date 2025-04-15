import { memo, useState, useEffect, useRef } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { uif, steamhouse } from "../constants";
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

const UIF = () => {
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
        <motion.div
          variants={fadeIn("", "", 0.5, 1)}
          className="xs:w-[250px] w-full"
        >
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
        </motion.div>
      </div>
      <STEAMHouseGallery />
      <img
        src={steamhousewide}
        alt="steamhouse"
        className="w-full h-full object-contain"
      />
    </section>
  );
};

export default SectionWrapper(UIF);
