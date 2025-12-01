import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import {
  chetzlogo,
  group1,
  group2,
  workshop1,
  workshop2,
  workshop3,
  manabity1,
  manabity2,
  meeting1,
  meeting2,
  meeting3,
  langexch1,
  langexch2,
  seminar1,
  seminar2,
} from "../assets";
import { organizations, events } from "../constants";

import Navbar from "./navbar";

const photoSlides = [
  {
    image: group1,
    alt: "Language exchange group session",
    caption: "Language Exchange Community",
  },
  {
    image: group2,
    alt: "chetz team group photo",
    caption: "Volunteer Team & Community",
  },
  {
    image: workshop2,
    alt: "Ikkadanan workshop session",
    caption: "Ikkadanan Workshop Series",
  },
  {
    image: workshop3,
    alt: "Ikkadanran workshop breakout",
    caption: "Small-Group Workshop Activities",
  },
  {
    image: manabity1,
    alt: "Manabity program session",
    caption: "Manabity Learning Support",
  },
  {
    image: manabity2,
    alt: "Manabity students collaborating",
    caption: "Students Learning Together",
  },
  {
    image: meeting1,
    alt: "Online planning meeting",
    caption: "Online Planning Meeting",
  },
  {
    image: meeting2,
    alt: "Program operations discussion",
    caption: "Program Operations & Coordination",
  },
  {
    image: meeting3,
    alt: "Casual team catch-up",
    caption: "Casual Team Catch-up",
  },
  {
    image: langexch1,
    alt: "Casual team catch-up",
    caption: "Casual Team Catch-up",
  },
  {
    image: langexch2,
    alt: "Casual team catch-up",
    caption: "Casual Team Catch-up",
  },
  {
    image: seminar1,
    alt: "Casual team catch-up",
    caption: "Casual Team Catch-up",
  },
  {
    image: seminar2,
    alt: "Casual team catch-up",
    caption: "Casual Team Catch-up",
  },
];

const PhotoSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photoSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = photoSlides[index];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[4320/3042]">
        <img
          src={current.image}
          alt={current.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/55 text-white px-4 py-3 text-xs sm:text-sm">
          {current.caption}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {photoSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

const TimelinePhase = ({ phase, title, date, children, highlight = false }) => {
  return (
    <div className={`relative flex gap-8`}>
      {/* Timeline Connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
            highlight ? "bg-orange-500" : "bg-blue-500"
          }`}
        >
          {phase}
        </div>
        <div className="w-1 flex-grow bg-gray-300 mt-4 min-h-[100px]"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        {/* Title and Date */}
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm font-medium text-gray-500">{date}</p>
        </div>

        {/* Children Content */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            highlight ? "bg-blue-50 border-2 border-blue-200" : "bg-white"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

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
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>

          <p className="text-secondary text-[17px] leading-[30px]">
            To{" "}
            <strong className="text-primary">
              serve as a bridge between Japan and the world
            </strong>
            , encouraging young people to expand their perspectives through
            cultural and language exchange.
          </p>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Story</h2>

          <p className="text-secondary text-[17px] leading-[30px]">
            In 2020, the COVID-19 pandemic forced me back to Japan from high
            school in Canada, cutting me off from the world that had shaped me.
            I thought about all the students stuck in similar situations—feeling
            like their futures were limited by quarantine and rigid school
            systems. I wanted them to know that wasn't true. I believed that
            broadening perspective opens up possibilities, that hearing about
            different parts of the world could help them dream beyond their
            current constraints. Within hours, I built a website offering
            one-on-one English lessons and study-abroad consulting. <br />
            Within a week, I realized I had it backwards. If I wanted to truly
            open up possibilities for students, they needed to hear <i>
              many
            </i>{" "}
            stories, not just mine, but from peers across borders who each had
            different experiences and dreams. So I pivoted entirely. Instead of
            teaching students, I created a space where they could learn{" "}
            <i>with</i> each other and discover the possibilities waiting for
            them. That shift became chetz: a peer-to-peer language exchange
            community where students connect across borders to share their
            cultures, languages, and lived experiences.
          </p>
        </div>
      </div>
      <div className={`${styles.padding} py-12`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Impact</h2>

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
            <li>
              <strong className="text-primary">40+ participants</strong> per
              event (started with ~10)
            </li>
            <li>
              <strong className="text-primary">5+ years</strong> sustained
              operation -{" "}
              <strong className="text-primary">still running today!</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Our Collaborations
          </h2>

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
        {/* THE JOURNEY - TIMELINE */}
        <section className="journey-section py-20">
          <div className="container mx-auto px-6 py-6 bg-gray-50">
            <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
              The Journey
            </h2>

            <div className="space-y-16">
              <TimelinePhase
                phase="1"
                title="Beginning of chetz"
                date="October 2020"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  <ul className="list-disc list-inside text-secondary text-[17px] lg:w-[70%] leading-[30px]">
                    <li>Week 1: Created name, website and logo → pivot</li>
                    <li>Week 2-3: Recruited co-founder and first volunteers</li>
                    <li>
                      Week 4: First language exchange event with ~10 people
                      (friends + members)
                    </li>
                  </ul>

                  <img
                    src={langexch1}
                    alt="First language exchange event"
                    className="lg:w-[30%] w-full h-auto object-contain"
                  />
                </div>
              </TimelinePhase>

              {/* Phase 2 */}
              <TimelinePhase
                phase="2"
                title="Scaling the Organization"
                date="Nov 2020 - Feb 2021"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-30">Systems Built:</h4>
                    <ul className="list-disc list-inside space-y-2 text-secondary">
                      <li>Training materials & onboarding</li>{" "}
                      <li>Slack channels (internal + external)</li>
                      <li>Branding guide</li>
                      <li>CRM tracking system</li>
                      <li>Multi-platform marketing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      Growth Strategy:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-secondary">
                      <li>Strategic cold outreach</li>
                      <li>Partnerships with other social organizations</li>
                      <li>
                        Network effect → Organizations started reaching out to
                        us
                      </li>
                      <li>Recruited more students as the organization grew</li>
                    </ul>
                  </div>
                </div>
              </TimelinePhase>

              {/* Phase 3 */}
              <TimelinePhase
                phase="3"
                title="Cultural Transformation"
                date="March 2021"
                highlight={true}
              >
                <div className="space-y-6">
                  {/* The Problem */}
                  <p className="font-semibold text-lg mb-3 text-gray-800">
                    The Problem:
                  </p>
                  <ul className="list-disc list-inside text-secondary text-[17px] leading-[30px]">
                    <li>Team commitment dropped as organization grew</li>
                    <li>
                      Members ghosting meetings, not delivering tasks, being
                      flaky
                    </li>
                    <li>More responsibilities fell on me</li>
                  </ul>
                  {/* The Solution */}
                  <p className="font-semibold text-lg mb-3 text-gray-800">
                    The Solution:
                  </p>
                  <ul className="list-disc list-inside text-secondary text-[17px] leading-[30px]">
                    <li>
                      Conducted 1-on-1 conversations with every member. Asked:
                      What do you <em>want</em> to do?
                    </li>
                    <li>
                      Realigned team roles, set clear expectations and goals.
                    </li>
                  </ul>
                  <p className="font-semibold text-lg mb-3 text-gray-800">
                    Leadership Shift & Results:
                  </p>
                  <ul className="list-disc list-inside text-secondary text-[17px] leading-[30px]">
                    <li>
                      Leadership shift from trying to teach/control to trusting
                      members and giving them real ownership.
                    </li>
                    <li>
                      Culture transformed overnight from formal and stressful to
                      collaborative and empowering.
                    </li>
                    <li>
                      Team became genuine friends (never met in person, but kept
                      a LINE group open all day).
                    </li>
                    <li>
                      Members began taking initiative: hosting programs
                      independently and suggesting new ideas.
                    </li>
                    <li>
                      Everyone could trust each other and no longer needed you
                      to finish tasks.
                    </li>
                  </ul>
                </div>
              </TimelinePhase>

              {/* Phase 4 */}
              <TimelinePhase
                phase="4"
                title="Sustainable Handoff"
                date="August 2021"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      Selection Process:
                    </h4>
                    <p className="text-gray-700">
                      Identified successor who took initiative - independently
                      recruiting new members without being asked. Taught through
                      shadowing, not instruction. Transferred knowledge, not
                      control.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="font-bold text-lg mb-3 text-gray-800">
                      The Result:
                    </p>
                    <p className="text-gray-700 mb-3">
                      Most founder-led student organizations die when the
                      founder leaves.
                    </p>
                    <p className="text-xl font-bold text-blue-500">
                      chetz is still running 5 years later.
                    </p>
                  </div>
                </div>
              </TimelinePhase>
            </div>
          </div>
        </section>

        <div className={`${styles.padding} py-10`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-primary">
              Events
            </h2>

            <div className="text-center mb-8">
              <p className="text-secondary text-[17px] leading-[30px] max-w-4xl mx-auto">
                chetz provides a flexible space where volunteers can lead
                activities based on their own skills and experiences. We
                intentionally do not limit ourselves to a specific field,
                allowing for a wide range of volunteer-led events, including:
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

            <div className="mt-12 py-10 ">
              <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                Photo Highlights
              </h3>
              <p className="text-secondary text-[15px] leading-[26px] max-w-3xl mx-auto mb-6 text-center">
                A few snapshots from language exchanges, workshops, and fun
                moments!
              </p>
              <PhotoSlideshow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(chetz);
