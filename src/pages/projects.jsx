import { motion } from "framer-motion";

import { styles } from "../styles";
import { readmore } from "../assets";
import { SectionWrapper } from "../hoc";
import { works } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PostCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl flex w-full my-5">
        {/* Left Column: Image */}
        <div className="w-1/3 h-auto relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-3 right-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              <img
                src={readmore}
                alt="readmore"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-2/3 ml-5">
          <h3 className="text-black font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I WORKED ON SO FAR...</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          By blending creativity with data-driven insights, I create targeted
          campaigns and user-centered websites to deliver measurable marketing
          results.
        </motion.p>
      </div>

      <div className="mt-20 p-5 gap-7">
        {works.map((highlight, index) => (
          <PostCard key={`post-${index}`} index={index} {...highlight} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
