import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { chetzlogo, langexch1 } from "../assets";
import { organizations, events } from "../constants";

import Navbar from "./navbar";

const TimelinePhase = ({
  phase,
  title,
  date,
  side,
  children,
  highlight = false,
}) => {
  const isRight = side === "right";

  return (
    <div
      className={`relative flex ${
        isRight ? "flex-row-reverse" : "flex-row"
      } gap-8`}
    >
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
            highlight ? "bg-orange-50 border-2 border-orange-200" : "bg-white"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, subtext }) => (
  <div className="bg-white p-4 rounded-lg shadow text-center">
    <div className="text-sm text-gray-600 mb-1">{label}</div>
    <div className="text-xl font-bold text-gray-900">{value}</div>
    <div className="text-xs text-gray-500">{subtext}</div>
  </div>
);

// Component: Learning Card
const LearningCard = ({ icon, title, content }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-700 italic leading-relaxed">"{content}"</p>
  </div>
);

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
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Story</h2>

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
      {/* THE JOURNEY - TIMELINE */}
      <section className="journey-section py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
            The Journey
          </h2>

          <div className="space-y-16">
            {/* Phase 1 */}
            <TimelinePhase
              phase="1"
              title="The Spontaneous Start"
              date="October 2020"
              side="left"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <ul className="list-disc list-inside text-secondary text-[17px] lg:w-[70%] leading-[30px]">
                  <li>5pm on a random October afternoon</li>
                  <li>Solo website creation → pivot within 3 weeks</li>
                  <li>First event: 10 people (friends + members)</li>
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
              title="Building the Machine"
              date="Nov 2020 - Feb 2021"
              side="right"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    Systems Built:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Comprehensive branding guide</li>
                    <li>✅ CRM tracking system</li>
                    <li>✅ Multi-platform marketing</li>
                    <li>✅ Slack channels (internal + external)</li>
                    <li>✅ Training materials & onboarding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    Growth Strategy:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🎯 Strategic university outreach</li>
                    <li>🤝 University of Alberta, Sophia, Waseda</li>
                    <li>📈 Network effect → Universities reached out to us</li>
                  </ul>
                </div>
              </div>
            </TimelinePhase>

            {/* Phase 3 - Crisis */}
            <TimelinePhase
              phase="3"
              title="The Crisis & Cultural Transformation"
              date="March 2021"
              side="left"
              highlight={true}
            >
              <div className="space-y-6">
                {/* The Problem */}
                <div className="bg-gray-800 text-white p-6 rounded-lg">
                  <p className="text-lg">
                    Team commitment dropped. Half weren't engaged. I was doing
                    everything myself—teaching people what to do, finishing
                    their tasks, controlling outcomes.
                  </p>
                </div>

                {/* The Solution */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-lg mb-3 text-gray-800">
                    The Solution:
                  </p>
                  <p className="text-gray-700">
                    Conducted 1-on-1 conversations with every member. Asked:
                    What do you <em>want</em> to do?
                  </p>
                </div>

                {/* Case Study Card */}
                <div className="bg-white border-2 border-orange-300 rounded-lg p-6 shadow-lg">
                  <h4 className="font-bold text-xl mb-4 text-orange-600">
                    CASE STUDY: The Illustration Artist
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">❌</span>
                      <p className="text-gray-700">
                        <strong>Assigned:</strong> Create promotional
                        illustrations
                        <span className="text-gray-500 italic">
                          {" "}
                          (stressed, ghosting meetings)
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✅</span>
                      <p className="text-gray-700">
                        <strong>Shifted:</strong> English learning + programs
                        team
                        <span className="text-green-600 italic">
                          {" "}
                          (became most committed member)
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="font-semibold text-gray-800">
                        INSIGHT: Match people to their genuine interests, not
                        just their capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Transformation Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard
                    label="Team size"
                    value="20 → 10"
                    subtext="Cut half"
                  />
                  <MetricCard
                    label="Engagement"
                    value="⬆️ 100%"
                    subtext="Committed"
                  />
                  <MetricCard
                    label="Culture"
                    value="Collaborative"
                    subtext="Empowered"
                  />
                  <MetricCard
                    label="Duration"
                    value="Overnight"
                    subtext="Transformation"
                  />
                </div>
              </div>
            </TimelinePhase>

            {/* Phase 4 */}
            <TimelinePhase
              phase="4"
              title="Sustainable Handoff"
              date="August 2021"
              side="right"
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
                    Most founder-led student organizations die when the founder
                    leaves.
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    chetz is still running 5 years later.
                  </p>
                </div>
              </div>
            </TimelinePhase>
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}
      <section className="learnings-section py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Key Learnings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LearningCard
              icon="🤝"
              title="Trust Empowers Better Than Control"
              content="I shifted from teaching people what to do to creating an environment where they could succeed. The team transformed overnight when given agency aligned with genuine interests."
            />
            <LearningCard
              icon="🎯"
              title="Mission Clarity Protects Quality"
              content="Refused 'easy wins'—celebrity speakers, gift cards—that would compromise our peer-to-peer community values."
            />
            <LearningCard
              icon="⚙️"
              title="Systems Enable Scale"
              content="Documentation, processes, and culture-building allowed the organization to outlive founder involvement. Still operating 5 years later without founder."
            />
          </div>
        </div>
      </section>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary">
            Events
          </h2>

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
