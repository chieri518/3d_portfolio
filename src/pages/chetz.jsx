import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { chetzlogo } from "../assets";
import { organizations, events } from "../constants";

import Navbar from "./navbar";

const chetz = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Navbar />{" "}
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>chetz</h1>
        <p className={styles.sectionSubText}>
          A global learning space where curiosity meets action.
        </p>{" "}
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <p className="text-secondary text-[17px] max-w-4xl leading-[30px]">
          chetz is a student-led nonprofit organization founded in October 2020
          to connect Japanese students with diverse cultures during the COVID-19
          pandemic. Rooted in the belief that global understanding starts with
          communication, chetz creates online spaces where students can engage,
          grow, and inspire each other. Our core programs include Language
          Exchange, English Learning Support, and Study Abroad Counseling. We
          also host collaborative events and study sessions with fellow student
          organization, building bridges not just across cultures, but across
          communities.
        </p>
        <img
          src={chetzlogo}
          alt="chetzlogo"
          className="w-[200px] object-contain"
        />
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          🚀 The Beginning of a Vision
        </h2>
        <p>
          Our vision is to{" "}
          <strong>serve as a bridge between Japan and the world</strong>,
          encouraging young people to expand their perspectives through cultural
          and language exchange.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💡 Our Story</h2>
        <p>
          In 2020, when the COVID-19 pandemic forced me to return to Japan from
          my high school abroad in Canada, I felt a strong desire to stay
          connected with the world. At the same time, tools like Zoom became
          more accessible, opening up new possibilities for online interaction.
          This inspired me to launch Chetz as a completely online platform,
          enabling global participation regardless of location. At the
          beginning, I managed everything by myself—promotion, recruitment,
          website development, and operations. Over time, we grew into a diverse
          team of over 20 members from 6 different countries. Although all of
          our members were high school students, we welcomed anyone regardless
          of age or experience, as long as they shared our passion.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🌟 Events</h2>
        <p className="mt-2 mb-4">
          chetz provides a flexible space where volunteers can lead activities
          based on their own skills and experiences. We intentionally do not
          limit ourselves to a specific field, allowing for a wide range of
          volunteer-led events, including:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img src={item.image} alt={item.name} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 mb-4">
          All of our activities are conducted online, making it easy to
          participate from anywhere. Whether you're new to volunteering or have
          limited time, Chetz offers opportunities to contribute at your own
          pace.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Our Impact</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Recruited 20+ members from 6 countries</li>
          <li>Collaborated with 10+ organizations worldwide</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🌟 Our Collaborations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {organizations.map((org, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <img
                src={org.logo}
                alt={org.name}
                className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {org.name}
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 text-sm font-semibold">
            and more...
          </div>
        </div>
      </section>
    </section>
  );
};

export default SectionWrapper(chetz);
