import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  php,
  nodejs,
  git,
  figma,
  docker,
  premiere,
  photoshop,
  hilton,
  owned,
  menlo,
  ellipsis,
  carrent,
  uif,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Digital Marketing",
    icon: web,
  },
  {
    title: "Entrepreneurship",
    icon: mobile,
  },
  {
    title: "Global Perspective",
    icon: backend,
  },
  {
    title: "Leadership",
    icon: creator,
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
    name: "git",
    icon: git,
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
    date: "Oct 2023 - Present",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: uif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
