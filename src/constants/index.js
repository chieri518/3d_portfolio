import {
  click,
  target,
  plane,
  rocket,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  php,
  nodejs,
  figma,
  docker,
  premiere,
  photoshop,
  hilton,
  owned,
  menlo,
  ellipsis,
  governormedal,
  honor,
  marketingconf,
  uif,
  websitedev,
  socialmedia,
  dataanalysis,
  email,
  github,
  linkedin,
  instagram,
  youtubevid,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const services = [
  {
    title: "Digital Marketing",
    icon: click,
  },
  {
    title: "Entrepreneurship",
    icon: rocket,
  },
  {
    title: "Global Perspective",
    icon: plane,
  },
  {
    title: "Leadership",
    icon: target,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website Intern",
    company_name: "Hilton - Area Office at Hilton Tokyo",
    icon: hilton,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Jun 2024",
    points: [
      "Contributed to content management for 19 Hilton hotels within the Japan eCommerce team.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Engineering Intern",
    company_name: "Owned 株式会社",
    icon: owned,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Developed a user management API using Next.js, Prisma, and TypeScript, incorporating validation schemas, handling user data updates based on form responses, and integrating a booking system with error handling and user information retrieval.",
      "Implemented a Stripe webhook using PHP in Google Cloud Functions to handle payment events, manage transaction records in MySQL, and send email notifications for payment failures, ensuring seamless financial operations and customer communication.",
    ],
  },
  {
    title: "Social Media and Marketing Intern",
    company_name: "Ellipsis Health",
    icon: ellipsis,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Curated, monitored, and analyzed LinkedIn and Twitter content, refining social media strategy through engagement insights for stronger brand resonance, achieving 41.4% increase in LinkedIn followers since I joined.",
      "Devised a comprehensive social media editorial calendar, while staying attuned to developments within the healthcare industry and periodically sharing relevant updates.",
      "Managed and developed People Map and CRM system using Salesforce, optimizing client relationships.",
      "Executed precise annotation for medical studies, sourced and formatted citations for publications, and orchestrated logistics for CEO's trip to Japan.",
    ],
  },
  {
    title: "Digital Marketing Assistant",
    company_name: "Menlo College",
    icon: menlo,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Aug 2023",
    points: [
      "Boosted the College’s social media reach by increasing post impressions on Instagram by 57.5% and on Facebook by 23.4%, while improving post engagement rates on LinkedIn by 79%, and on Twitter by 66%, resulting in higher audience engagement and brand awareness.",
      "Curated and delivered personalized newsletters and check-ins monthly emails for a community of over 4500 alumni and 900 parents to drive consistent engagement, resulting in an average opening rate of 42%.",
      "Compiled and presented monthly reports to the Digital Marketing Manager and Director of Communications, providing data-driven insights to plan future campaigns.",
    ],
  },
  {
    title: "Library Co-Coordinator",
    company_name: "Bowman Library at Menlo College",
    icon: menlo,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Aug 2023",
    points: [
      "Served as Co-chair of the Library Student Advisory Council(LSAC) simultaneously.",
      "Supervised a team of student assistants, providing training and support on library processes and policies, resulting in increased efficiency and productivity.",
      "Spearhead campaigns on Instagram, increasing the library's brand awareness and engagement.",
      "Collaborate with library staff and student advisory council to plan and execute a wide range of events, programs, and services, enhancing library experience for users.",
    ],
  },
];

const references = [
  {
    reference:
      "Abe is an innovative entrepreneur with strong leadership acumen and achieves quality results in her work.",
    name: "Dariush Rafinejad, Ph.D.",
    designation: "CEO",
    company: "Blue Dome Consulting for Sustainability",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHwBM6Q06QeJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1566161085065?e=1733961600&v=beta&t=K2AIsjUzPkJGQq33QyJ2hG52KXkYOeEluzV5qy71BdE",
  },
  {
    reference:
      "Chieri is an all-around superstar with the ability to adapt to any situation she's asked to step into.",
    name: "Austin Bumpus",
    designation: "Social Media Manager",
    company: "The Institute for Experiential AI at Northeastern University",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQE49EKzpOBdNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1610318639635?e=1733961600&v=beta&t=tlpAsvAircZAEzn4FOsDhZCQ9-AktddqgakNmcMpsGo",
  },
  {
    reference:
      "Chieri brings enthusiasm and a positive attitude to the workplace, while maintaining a high level of professionalism and skill.",
    name: "Robert Hayashi",
    designation: "Senior Manager - eCommerce Japan",
    company: "Hilton",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQEvg5w0ez-IGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635905199834?e=1733961600&v=beta&t=y3eWTY4fBnjuWN5cp-lJA_wW7YeETPcai07maXss4cY",
  },
];

const awards = [
  {
    name: "The Governor General’s Academic Medal",
    description:
      "For nearly 150 years, the Governor General’s Academic Medals have recognized the outstanding scholastic achievements of students in Canada. They are awarded to the student graduating with the highest average from a high school, as well as from approved college or university programs.",

    image: governormedal,
  },
  {
    name: "Richard F. O’Brien Award",
    description:
      "These awards are designated for students from each class who best exemplify the true spirit of Menlo College through all-around excellence.",
    image: honor,
  },
  {
    name: "The Young Leadership Award",
    description:
      "The Young Leadership Award was given to only 3 qualified individuals based on the internal evaluation on the set parameters by the conference committee with regards to the individual's skills and influence to the industry.",
    image: marketingconf,
  },
];

const highlights = [
  {
    name: "Social Media Marketing",
    description:
      "Skilled in creating and managing targeted social media campaigns across platforms, I focus on building brand engagement, increasing follower growth, and delivering content that resonates with diverse audiences. My approach combines audience insights with strategic content planning to optimize reach and engagement.",
    tags: [
      {
        name: "Photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "Premiere",
        color: "pink-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "/projects",
  },
  {
    name: "Data Analysis",
    description:
      "Proficient in data interpretation and analytics tools, I turn raw data into actionable insights that drive marketing decisions. By analyzing campaign metrics and user behavior, I identify trends, measure effectiveness, and continuously refine strategies to maximize ROI and impact.",
    tags: [
      {
        name: "Google Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Hootsuite",
        color: "green-text-gradient",
      },
    ],
    image: dataanalysis,
    source_code_link: "/projects",
  },
  {
    name: "Website Development",
    description:
      "Experienced in developing and maintaining user-friendly websites, I create digital experiences that are both visually appealing and functional. My work includes designing, updating, and optimizing websites to ensure they meet the needs of varied audiences and align with brand objectives.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: websitedev,
    source_code_link: "/projects",
  },
];

const works = [
  {
    name: "Student Feature Video",
    description:
      "I had the privilege of editing a video featuring Catherine Batang, a recent graduate who passionately shared her experiences at Menlo College. She emphasized the vital role of our close-knit community in fostering her academic and athletic success, highlighting the encouragement and camaraderie that characterize the Menlo experience. In my editing process, I applied my digital marketing expertise by strategically incorporating B-roll footage to enhance visual engagement and narrative depth. I also focused on improving audio quality by reducing background noise and meticulously cutting pauses to ensure a polished final product. This project not only allowed me to refine my video editing skills but also reinforced my appreciation for the supportive environment at Menlo, where students collaboratively uplift one another in their pursuits. I am proud to contribute to a piece that celebrates the strength of our community.",
    tags: [
      {
        name: "Adobe Premiere",
        color: "blue-text-gradient",
      },
      {
        name: "YouTube",
        color: "pink-text-gradient",
      },
    ],
    image: youtubevid,
    source_code_link: "https://youtu.be/U3l9ExJTvOk?si=CXvnUglL9hM56aQB",
  },
  {
    name: "Graduation Celebration Reel",
    description:
      "Proficient in data interpretation and analytics tools, I turn raw data into actionable insights that drive marketing decisions. By analyzing campaign metrics and user behavior, I identify trends, measure effectiveness, and continuously refine strategies to maximize ROI and impact.",
    tags: [
      {
        name: "Google Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Hootsuite",
        color: "green-text-gradient",
      },
    ],
    image: dataanalysis,
    source_code_link: "/projects",
  },
  {
    name: "Senior Spotlight Post",
    description:
      "Experienced in developing and maintaining user-friendly websites, I create digital experiences that are both visually appealing and functional. My work includes designing, updating, and optimizing websites to ensure they meet the needs of varied audiences and align with brand objectives.",
    tags: [
      {
        name: "LinkedIn",
        color: "blue-text-gradient",
      },
      {
        name: "Capcut",
        color: "green-text-gradient",
      },
      {
        name: "Copywriting",
        color: "pink-text-gradient",
      },
    ],
    image: websitedev,
    source_code_link:
      "https://www.linkedin.com/posts/menlo-college_celebrating-seniors-raymond-juballa-23-activity-7054948106827689984-619v",
  },
];

const projects = [
  {
    name: "chetz",
    description:
      "A student organization established to bridge the Japanese students with various cultures.",
    tags: [
      {
        name: "entrepreneurship",
        color: "blue-text-gradient",
      },
      {
        name: "multicultural",
        color: "pink-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
  {
    name: "University Innovation Fellowship",
    description:
      "The University Innovation Fellows program empowers students and faculty to become leaders of change in higher education. Fellows are leading a global movement to ensure that all students gain the attitudes, skills and knowledge required to navigate a complex world.",
    tags: [
      {
        name: "design thinking",
        color: "blue-text-gradient",
      },
      {
        name: "leadership",
        color: "green-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Media",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Email Marketing",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Website Development",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
  {
    name: " ",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
];

const heroTexts = [
  "Global Citizen",
  500,
  "Website Developer",
  500,
  "Digital Marketer",
  500,
  "Senior at Menlo College",
  500,
];

const socials = [
  {
    id: "email",
    icon: email,
    source_code_link: "mailto:chieriabe518@gmail.com",
  },
  {
    id: "github",
    icon: github,
    source_code_link: "https://github.com/chieri518",
  },
  {
    id: "linkedin",
    icon: linkedin,
    source_code_link: "https://www.linkedin.com/in/chieriabe/",
  },
  {
    id: "instagram",
    icon: instagram,
    source_code_link: "https://www.instagram.com/chieriabe",
  },
];

const tasks = [
  {
    name: "Project Name",
    description: "Short description of the project.",
    overview: "Detailed overview of the project goals and purpose.",
    technologies: ["React", "Node.js", "MongoDB"],
    challenges:
      "Description of the challenges faced and solutions implemented.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    learnings:
      "What you learned from this project and how it advanced your skills.",
    image: "project-image-url",
    source_code_link: "link-to-source-code",
  },
];

export {
  services,
  technologies,
  experiences,
  references,
  awards,
  highlights,
  works,
  projects,
  heroTexts,
  socials,
  tasks,
};
