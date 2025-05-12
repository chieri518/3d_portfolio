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
          In a quiet corner of my room, with nothing more than an idea and a
          deep sense of purpose,
          <strong> chetz </strong> was born. No members. No resources. Just me —
          and a question I couldn’t ignore:
        </p>
        <blockquote className="italic my-4 pl-4 border-l-4 border-blue-400">
          "What if young people across borders could unite to tackle the world’s
          most pressing challenges together?"
        </blockquote>
        <p>
          I didn’t have a playbook. But I had a mission — and that was enough to
          start.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          💡 Building the Foundation
        </h2>
        <p>
          I began by reaching out to friends, classmates, and anyone who would
          listen. I created a simple message:
        </p>
        <blockquote className="italic my-4 pl-4 border-l-4 border-green-400">
          "You don’t have to wait to make a difference. Join me."
        </blockquote>
        <p>
          From the first meeting with just two attendees, to late-night
          brainstorming sessions over Zoom,
          <strong> chetz </strong> took shape. Each person who joined brought
          new energy and perspective. Slowly, the circle widened.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🌐 Going Global</h2>
        <p>
          What started as a passion project in my local community evolved into a
          global movement. We built our first online campaign — and it reached
          students in five countries. We collaborated with educators, social
          innovators, and student leaders worldwide.
        </p>
        <p className="mt-2 font-semibold">
          From 0 to over 20 members in 6 countries, <strong>chetz</strong>{" "}
          became a network of changemakers united by purpose.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🤝 What We Stand For</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Youth-Driven:</strong> We believe young people aren’t just
            the leaders of tomorrow — we’re the leaders of now.
          </li>
          <li>
            <strong>Globally Connected:</strong> Diversity isn’t just welcomed —
            it’s our strength.
          </li>
          <li>
            <strong>Action-Oriented:</strong> We don’t just talk about change.
            We build it.
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🌟 Events</h2>
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
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Our Impact</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Hosted [insert #] global workshops</li>
          <li>Launched [insert #] student-led initiatives</li>
          <li>Partnered with organizations in [insert continents/countries]</li>
          <li>Featured in [media/publications if any]</li>
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
