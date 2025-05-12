import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";

import { TypeAnimation } from "react-type-animation";
import { heroTexts } from "../constants";

const Name = ({ loading }) => {
  return (
    <section className="relative w-full mx-auto">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h1 className={`${styles.heroHeadText} text-secondary`}>
          Hi, I'm <span className="pink-text-gradient">Chieri</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2`}>
          <TypeAnimation
            sequence={heroTexts}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <>
      <Name />
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          With years of marketing experience creating digital experiences that
          elevate brand impact and drive audience growth, I bring a strategic
          and creative approach to every project. I leverage innovative
          strategies tailored to diverse audiences, drawing on perspectives
          gained from living in four countries and working across cultures.🌍
          <br />
          Feel free to explore my projects and get in touch at{" "}
          <a
            href="mailto:chieriabe518@gmail.com"
            className="animate-text bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-black"
          >
            chieriabe518@gmail.com
          </a>
          . <br />
          I'm always open to new opportunities and collaborations! <br />
          <br />
          This website was made with NextJS and React:)
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px]"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-black text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              <img src={social.icon} alt={social.id} />
            </a>
          ))}
        </div>
        <a
          href="document/Resume_CA.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-primary px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-black px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </a>
      </motion.div>
      <div className="w-full flex justify-center items-center ">
        <a href="#Highlights">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About);
