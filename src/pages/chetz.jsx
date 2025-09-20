import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { chetzlogo } from "../assets";
import { organizations, events } from "../constants";

import Navbar from "./navbar";

const chetz = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto bg-white">
      <Navbar />
      <div className={`${styles.padding} pt-24`}>
        <div className="text-center">
          <h1 className={`${styles.sectionHeadText} mb-2 text-black`}>chetz</h1>
          <p className={`${styles.sectionSubText} mb-8`}>
            A global learning space where curiosity meets action.
          </p>
        </div>
      </div>
      <div className={`${styles.padding} bg-gray-50 py-12`}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-7xl mx-auto">
          <div className="flex-1">
            <p className="text-secondary text-[17px] leading-[30px]">
              chetz is a student-led nonprofit organization founded in October
              2020 to connect Japanese students with diverse cultures during the
              COVID-19 pandemic. Rooted in the belief that global understanding
              starts with communication, chetz creates online spaces where
              students can engage, grow, and inspire each other. Our core
              programs include Language Exchange, English Learning Support, and
              Study Abroad Counseling. We also host collaborative events and
              study sessions with fellow student organization, building bridges
              not just across cultures, but across communities.
            </p>
          </div>
          <div className="lg:w-48 w-full">
            <img
              src={chetzlogo}
              alt="chetz logo"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.padding} py-12`}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={textVariant()}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
          </motion.div>
          <p className="text-secondary text-[17px] leading-[30px]">
            Our vision is to{" "}
            <strong className="text-primary">
              serve as a bridge between Japan and the world
            </strong>
            , encouraging young people to expand their perspectives through
            cultural and language exchange.
          </p>
        </div>
      </div>

      <div className={`${styles.padding} bg-gray-50 py-12`}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={textVariant()}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Story</h2>
          </motion.div>
          <p className="text-secondary text-[17px] leading-[30px]">
            In 2020, when the COVID-19 pandemic forced me to return to Japan
            from my high school abroad in Canada, I felt a strong desire to stay
            connected with the world. At the same time, tools like Zoom became
            more accessible, opening up new possibilities for online
            interaction. This inspired me to launch chetz as a completely online
            platform, enabling global participation regardless of location. At
            the beginning, I managed everything by myself—promotion,
            recruitment, website development, and operations. Over time, we grew
            into a diverse team of over 20 members from 6 different countries.
            Although all of our members were high school students, we welcomed
            anyone regardless of age or experience, as long as they shared our
            passion.
          </p>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariant()}>
            <h2 className="text-3xl font-bold mb-4 text-center text-primary">
              Events
            </h2>
          </motion.div>

          <div className="text-center mb-8">
            <p className="text-secondary text-[17px] leading-[30px] max-w-4xl mx-auto">
              chetz provides a flexible space where volunteers can lead
              activities based on their own skills and experiences. We
              intentionally do not limit ourselves to a specific field, allowing
              for a wide range of volunteer-led events, including:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {events.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-secondary text-[17px] leading-[30px] max-w-4xl mx-auto">
              All of our activities are conducted online, making it easy to
              participate from anywhere. Whether you're new to volunteering or
              have limited time, chetz offers opportunities to contribute at
              your own pace.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.padding} bg-gray-50 py-12`}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={textVariant()}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Impact</h2>
          </motion.div>
          <ul className="list-disc list-inside space-y-2 text-secondary text-[17px] leading-[30px]">
            <li>
              Recruited <strong className="text-primary">20+ members</strong>{" "}
              from 6 countries
            </li>
            <li>
              Collaborated with{" "}
              <strong className="text-primary">10+ organizations</strong>{" "}
              worldwide
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariant()}>
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              Our Collaborations
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-28 flex items-center justify-center p-3">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold text-center px-2">
                    {org.name}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center h-28 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 text-sm font-semibold bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              and more...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(chetz);
