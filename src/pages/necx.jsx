import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { necx } from "../assets";

import Navbar from "./navbar";

const NECX = () => {
  return (
    <>
      <section
        className={`relative w-full min-h-screen mx-auto bg-white ${styles.paddingY}`}
      >
        <Navbar />
        <div
          className={`${styles.paddingX} max-w-6xl mx-auto flex flex-col gap-12 pt-10 pb-20`}
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-xs md:text-sm">
            Venture Studio · Silicon Valley · Japan
          </p>
          <h1 className={styles.sectionHeadText}>NEC X</h1>
          <p className="text-secondary max-w-2xl text-[16px] leading-relaxed md:text-[18px]">
            Marketing, community, and program operations across a multi-phase
            deep-tech accelerator.
          </p>

          <section className="overview">
            <div className="rounded-2xl bg-white/80 shadow-md border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <h2 className={styles.sectionHeadText}>About NEC X</h2>
                <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
                  NEC X is a Silicon Valley-based venture studio backed by NEC
                  Corporation, running a multi-phase accelerator program
                  connecting early-stage startups with corporate resources,
                  mentorship, and investment opportunities.
                </p>
              </div>

              <a
                href="https://www.nec-x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-40 w-28 flex-shrink-0 self-center md:self-start"
              >
                <img
                  src={necx}
                  alt="NEC X logo"
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </a>
            </div>
          </section>

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

          <div className="subsection mt-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Contributions
            </h4>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
              <ul className="space-y-3 text-secondary text-[16px] leading-[26px] list-disc list-inside">
                <li>
                  Reactivated <strong>dormant Facebook presence</strong> with
                  Japanese-language content, bridging Silicon Valley innovation
                  with NEC's Japanese corporate network
                </li>
                <li>
                  Designed and executed{" "}
                  <strong>paid LinkedIn ad campaigns</strong> for program
                  awareness and event promotion
                </li>
                <li>
                  Managed <strong>220-attendee flagship event</strong> including
                  registration systems, cold outreach, venue coordination, and
                  day-of logistics
                </li>
                <li>
                  Coordinated <strong>full accelerator operations</strong>{" "}
                  across 3-phase program: scheduling, documentation, platform
                  management, and founder support
                </li>
                <li>
                  Created <strong>comprehensive video library</strong> (100+
                  recordings with summaries) for founder reference and mentor
                  evaluation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="marketing-community bg-gray-50 py-16 mt-4">
          <div
            className={`${styles.paddingX} max-w-6xl mx-auto flex flex-col gap-12`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing &amp; Community Building
              </h3>
              <p className="text-secondary text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]">
                How I connected a bilingual, cross-Pacific audience to a
                deep-tech accelerator through targeted content, paid campaigns,
                and events.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
              <div className="subsection bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 space-y-4">
                <h4 className="text-2xl font-semibold text-gray-900">
                  Challenge: Reaching a Bilingual, Cross-Pacific Audience
                </h4>
                <p className="text-secondary text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]">
                  NEC X operates at the intersection of Japanese corporate
                  innovation and Silicon Valley startup culture. When I joined,
                  marketing focused primarily on English-language LinkedIn
                  content, missing opportunities to engage Japanese stakeholders
                  and showcase the program's unique corporate-startup bridge.
                </p>
              </div>

              <div className="subsection bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Results
                </h4>
                <ul className="space-y-3 text-secondary text-[16px] leading-[26px]">
                  <li>
                    Successfully promoted and filled{" "}
                    <strong>220-person event</strong> with qualified attendees
                  </li>
                  <li>
                    Maintained active social presence across{" "}
                    <strong>two languages and two platforms</strong>
                  </li>
                  <li>
                    Currently supporting <strong>Batch 15 applications</strong>{" "}
                    after managing multiple successful cohorts
                  </li>
                </ul>
              </div>
            </div>

            <div className="subsection bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                My Approach
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="approach-section flex flex-col gap-3">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Reactivating Facebook for Japanese Audience
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Translated and adapted LinkedIn content for Facebook,
                      creating Japanese-language presence after years of account
                      dormancy
                    </li>
                    <li>
                      Framed content to resonate with Japanese business culture
                      while maintaining startup energy
                    </li>
                    <li>
                      Established consistent posting cadence to signal program
                      activity and credibility
                    </li>
                  </ul>
                </div>

                <div className="approach-section flex flex-col gap-3">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Paid LinkedIn Campaign Management
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Designed ad campaigns targeting startup founders for
                      events and program applications
                    </li>
                    <li>
                      Tracked full funnel: impressions → engagement →
                      click-through → event registration
                    </li>
                    <li>
                      Managed budget allocation and optimized targeting based on
                      performance data
                    </li>
                  </ul>
                </div>

                <div className="approach-section flex flex-col gap-3">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Event Marketing &amp; Outreach
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Created registration pages (Luma/Eventbrite) with approval
                      workflows
                    </li>
                    <li>
                      Cold-outreached startups aligned with event themes to
                      invite pitches
                    </li>
                    <li>
                      Designed promotional graphics and presentation materials
                    </li>
                    <li>
                      Coordinated cross-channel promotion (social ads, email,
                      direct outreach)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="program-operations py-16">
          <div
            className={`${styles.paddingX} max-w-6xl mx-auto flex flex-col gap-10`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Engagement &amp; Program Operations
              </h3>
              <p className="text-secondary text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]">
                Beyond marketing, I became the operational backbone for NEC X's
                accelerator program, which runs twice yearly and spans three
                phases.
              </p>
            </div>

            <div className="subsection bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Coordinating a Multi-Phase Accelerator Ecosystem
              </h4>
              <p className="text-secondary text-[16px] md:text-[17px] leading-[28px] md:leading-[30px] mb-6">
                Beyond marketing, I became the operational backbone for NEC X's
                accelerator program, which runs twice yearly and spans three
                phases:
              </p>
              <ul className="space-y-3 text-secondary text-[15px] leading-[24px]">
                <li>
                  <strong>Phase 1:</strong> Workshops, mentorship sessions,
                  customer discovery → pitch evaluation
                </li>
                <li>
                  <strong>Phase 2:</strong> Advanced workshops with in-person
                  intensives (weeks 1 &amp; 4) → pitch → investment
                  consideration
                </li>
                <li>
                  <strong>Phase 3:</strong> Investment support and corporate
                  partnership development
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                My Responsibilities
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div className="responsibility-section bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    Founder Support &amp; Documentation
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Managed video platform: invited founders, uploaded 10+
                      recordings daily, wrote session summaries
                    </li>
                    <li>
                      Created searchable library of 100+ workshop recordings,
                      slides, and mentor feedback
                    </li>
                    <li>
                      Enabled founders to revisit key lessons and mentors to
                      track progress over time
                    </li>
                  </ul>
                </div>

                <div className="responsibility-section bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    Scheduling &amp; Logistics Coordination
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Built Calendly systems for pitch sessions across multiple
                      mentor and VC schedules
                    </li>
                    <li>
                      Managed application pipeline: reviewed submissions,
                      coordinated selection discussions
                    </li>
                    <li>
                      Scheduled one-on-one mentor sessions and group workshops
                      across distributed timezones
                    </li>
                  </ul>
                </div>

                <div className="responsibility-section bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    In-Person Event Execution
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Coordinated SF flagship event: venue, catering,
                      registration, presentation materials, note-takers
                    </li>
                    <li>
                      Managed day-of logistics for 220 attendees including
                      founders, investors, corporate partners, and mentors
                    </li>
                    <li>
                      Created smooth experience that balanced networking time
                      with structured programming
                    </li>
                  </ul>
                </div>

                <div className="responsibility-section bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    Workshop Participation
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                    <li>
                      Attended design thinking, customer discovery, and ICP
                      interview workshops alongside founders
                    </li>
                    <li>
                      Provided feedback during exercises and observed VC pitch
                      evaluations
                    </li>
                    <li>
                      Gained firsthand exposure to startup evaluation criteria:
                      customer traction, realistic projections, founder
                      coachability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="subsection impact">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Impact
              </h4>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px]">
                  <li>
                    <strong>Supported 15+ startups per cohort</strong> through
                    multi-month program journey
                  </li>
                  <li>
                    <strong>Bridged cultural contexts:</strong> translated not
                    just language but business norms between Japanese corporate
                    and Silicon Valley startup ecosystems
                  </li>
                  <li>
                    <strong>Enabled scalable mentorship:</strong> documentation
                    systems allowed mentors to engage meaningfully with founder
                    progress without attending every session
                  </li>
                  <li>
                    <strong>Created operational consistency:</strong>
                    standardized processes for scheduling, documentation, and
                    communication that allowed program leadership to focus on
                    strategic relationships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="learnings bg-gray-50 py-16 mt-4">
          <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              What This Experience Taught Me
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="learning-item bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Marketing requires cultural fluency
                </h4>
                <p className="text-secondary text-[15px] leading-[24px]">
                  Managing bilingual content showed me that effective marketing
                  isn't just translation—it's understanding what resonates in
                  each cultural context. Japanese stakeholders needed different
                  framing than Silicon Valley founders, even when discussing the
                  same program.
                </p>
              </div>

              <div className="learning-item bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Community building is relationship infrastructure
                </h4>
                <p className="text-secondary text-[15px] leading-[24px]">
                  The accelerator's value came from both structured learning and
                  network access. My role was creating the
                  infrastructure—documentation, scheduling, communication
                  systems—that let meaningful relationships form between
                  founders, mentors, and investors.
                </p>
              </div>

              <div className="learning-item bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Operations excellence amplifies impact
                </h4>
                <p className="text-secondary text-[15px] leading-[24px]">
                  By systematizing documentation and coordination, I freed up
                  program leadership to focus on high-value activities: founder
                  coaching, mentor relationship development, and corporate
                  partnership strategy. Good operations make good strategy
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SectionWrapper(NECX);
