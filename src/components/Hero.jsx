import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { heroTexts } from "../constants";

const Hero = ({ loading }) => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className="text-[#80ffdb]">Chieri</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            <TypeAnimation
              sequence={heroTexts}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>
        </motion.div>
      </div>
      <div className="absolute xs:bottom-10 bottom:32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2">
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
    </section>
  );
};

export default Hero;
