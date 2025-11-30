import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { necx } from "../constants";

import Navbar from "./navbar";

const NECX = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Navbar />
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>NEC X</h1>
      </motion.div>
      <section className="overview">
        <h3>Overview</h3>

        <div className="subsection">
          <h4>Context</h4>
          <p>
            NEC X is a Silicon Valley-based venture studio backed by NEC
            Corporation, running a multi-phase accelerator program connecting
            early-stage startups with corporate resources, mentorship, and
            investment opportunities.
          </p>
          <a
            href="https://www.nec-x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={necx}
              alt="necxlogo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        <div className="subsection">
          <h4>My Role & Journey</h4>
          <p className="role-timeline">
            Marketing & Program Specialist • June 2023 - Present
          </p>
          <p className="role-progression">Event Volunteer → Contractor</p>
          <p>
            I started as an event volunteer, contributing video content and
            social media support. After founding my marketing agency, I
            formalized my role to manage marketing strategy and program
            operations across multiple cohorts.
          </p>
        </div>

        <div className="subsection">
          <h4>Key Contributions</h4>
          <ul>
            <li>
              Reactivated <strong>dormant Facebook presence</strong> with
              Japanese-language content, bridging Silicon Valley innovation with
              NEC's Japanese corporate network
            </li>
            <li>
              Designed and executed <strong>paid LinkedIn ad campaigns</strong>{" "}
              for program awareness and event promotion
            </li>
            <li>
              Managed <strong>220-attendee flagship event</strong> including
              registration systems, cold outreach, venue coordination, and
              day-of logistics
            </li>
            <li>
              Coordinated <strong>full accelerator operations</strong> across
              3-phase program: scheduling, documentation, platform management,
              and founder support
            </li>
            <li>
              Created <strong>comprehensive video library</strong> (100+
              recordings with summaries) for founder reference and mentor
              evaluation
            </li>
          </ul>
        </div>
      </section>

      <section className="marketing-community">
        <h3>Marketing & Community Building</h3>

        <div className="subsection">
          <h4>Challenge: Reaching a Bilingual, Cross-Pacific Audience</h4>
          <p>
            NEC X operates at the intersection of Japanese corporate innovation
            and Silicon Valley startup culture. When I joined, marketing focused
            primarily on English-language LinkedIn content, missing
            opportunities to engage Japanese stakeholders and showcase the
            program's unique corporate-startup bridge.
          </p>
        </div>

        <div className="subsection">
          <h4>My Approach</h4>

          <div className="approach-section">
            <h5>Reactivating Facebook for Japanese Audience</h5>
            <ul>
              <li>
                Translated and adapted LinkedIn content for Facebook, creating
                Japanese-language presence after years of account dormancy
              </li>
              <li>
                Framed content to resonate with Japanese business culture while
                maintaining startup energy
              </li>
              <li>
                Established consistent posting cadence to signal program
                activity and credibility
              </li>
            </ul>
          </div>

          <div className="approach-section">
            <h5>Paid LinkedIn Campaign Management</h5>
            <ul>
              <li>
                Designed ad campaigns targeting startup founders for events and
                program applications
              </li>
              <li>
                Tracked full funnel: impressions → engagement → click-through →
                event registration
              </li>
              <li>
                Managed budget allocation and optimized targeting based on
                performance data
              </li>
            </ul>
          </div>

          <div className="approach-section">
            <h5>Event Marketing & Outreach</h5>
            <ul>
              <li>
                Created registration pages (Luma/Eventbrite) with approval
                workflows
              </li>
              <li>
                Cold-outreached startups aligned with event themes to invite
                pitches
              </li>
              <li>Designed promotional graphics and presentation materials</li>
              <li>
                Coordinated cross-channel promotion (social ads, email, direct
                outreach)
              </li>
            </ul>
          </div>
        </div>

        <div className="subsection results">
          <h4>Results:</h4>
          <ul>
            <li>
              Successfully promoted and filled <strong>220-person event</strong>{" "}
              with qualified attendees
            </li>
            <li>
              Maintained active social presence across{" "}
              <strong>two languages and two platforms</strong>
            </li>
            <li>
              Currently supporting <strong>Batch 15 applications</strong> after
              managing multiple successful cohorts
            </li>
          </ul>
        </div>
      </section>

      <section className="program-operations">
        <h3>Community Engagement & Program Operations</h3>

        <div className="subsection">
          <h4>Coordinating a Multi-Phase Accelerator Ecosystem</h4>
          <p>
            Beyond marketing, I became the operational backbone for NEC X's
            accelerator program, which runs twice yearly and spans three phases:
          </p>
          <ul>
            <li>
              <strong>Phase 1:</strong> Workshops, mentorship sessions, customer
              discovery → pitch evaluation
            </li>
            <li>
              <strong>Phase 2:</strong> Advanced workshops with in-person
              intensives (weeks 1 & 4) → pitch → investment consideration
            </li>
            <li>
              <strong>Phase 3:</strong> Investment support and corporate
              partnership development
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h4>My Responsibilities</h4>

          <div className="responsibility-section">
            <h5>Founder Support & Documentation</h5>
            <ul>
              <li>
                Managed video platform: invited founders, uploaded 10+
                recordings daily, wrote session summaries
              </li>
              <li>
                Created searchable library of 100+ workshop recordings, slides,
                and mentor feedback
              </li>
              <li>
                Enabled founders to revisit key lessons and mentors to track
                progress over time
              </li>
            </ul>
          </div>

          <div className="responsibility-section">
            <h5>Scheduling & Logistics Coordination</h5>
            <ul>
              <li>
                Built Calendly systems for pitch sessions across multiple mentor
                and VC schedules
              </li>
              <li>
                Managed application pipeline: reviewed submissions, coordinated
                selection discussions
              </li>
              <li>
                Scheduled one-on-one mentor sessions and group workshops across
                distributed timezones
              </li>
            </ul>
          </div>

          <div className="responsibility-section">
            <h5>In-Person Event Execution</h5>
            <ul>
              <li>
                Coordinated SF flagship event: venue, catering, registration,
                presentation materials, note-takers
              </li>
              <li>
                Managed day-of logistics for 220 attendees including founders,
                investors, corporate partners, and mentors
              </li>
              <li>
                Created smooth experience that balanced networking time with
                structured programming
              </li>
            </ul>
          </div>

          <div className="responsibility-section">
            <h5>Workshop Participation</h5>
            <ul>
              <li>
                Attended design thinking, customer discovery, and ICP interview
                workshops alongside founders
              </li>
              <li>
                Provided feedback during exercises and observed VC pitch
                evaluations
              </li>
              <li>
                Gained firsthand exposure to startup evaluation criteria:
                customer traction, realistic projections, founder coachability
              </li>
            </ul>
          </div>
        </div>

        <div className="subsection impact">
          <h4>Impact:</h4>
          <ul>
            <li>
              <strong>Supported 15+ startups per cohort</strong> through
              multi-month program journey
            </li>
            <li>
              <strong>Bridged cultural contexts:</strong> translated not just
              language but business norms between Japanese corporate and Silicon
              Valley startup ecosystems
            </li>
            <li>
              <strong>Enabled scalable mentorship:</strong> documentation
              systems allowed mentors to engage meaningfully with founder
              progress without attending every session
            </li>
            <li>
              <strong>Created operational consistency:</strong> standardized
              processes for scheduling, documentation, and communication that
              allowed program leadership to focus on strategic relationships
            </li>
          </ul>
        </div>
      </section>

      <section className="learnings">
        <h3>What This Experience Taught Me</h3>

        <div className="learning-item">
          <h4>Marketing requires cultural fluency</h4>
          <p>
            Managing bilingual content showed me that effective marketing isn't
            just translation—it's understanding what resonates in each cultural
            context. Japanese stakeholders needed different framing than Silicon
            Valley founders, even when discussing the same program.
          </p>
        </div>

        <div className="learning-item">
          <h4>Community building is relationship infrastructure</h4>
          <p>
            The accelerator's value came from both structured learning and
            network access. My role was creating the
            infrastructure—documentation, scheduling, communication systems—that
            let meaningful relationships form between founders, mentors, and
            investors.
          </p>
        </div>

        <div className="learning-item">
          <h4>Operations excellence amplifies impact</h4>
          <p>
            By systematizing documentation and coordination, I freed up program
            leadership to focus on high-value activities: founder coaching,
            mentor relationship development, and corporate partnership strategy.
            Good operations make good strategy possible.
          </p>
        </div>
      </section>
    </section>
  );
};

export default SectionWrapper(NECX);
