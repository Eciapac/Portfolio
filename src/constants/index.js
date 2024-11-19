import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  figma,
  soon,
  vue,
  virtual,
  totembo,
  templates,
  food,
  cinephile,
  prowebstore,
  gitfinder,
  todolist,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Soon",
    company_name: "Soon",
    icon: soon,
    iconBg: "#383E56",
    date: "Soon",
    points: [
      "Developing new features to enhance the user experience.",
      "Collaborating with designers and developers to create something special.",
      "Ensuring everything will be fully optimized for performance.",
      "Stay tuned for updates and the upcoming launch!",
    ],
  },
  {
    title: "Soon",
    company_name: "Soon",
    icon: soon,
    iconBg: "#E6DEDD",
    date: "Soon",
    points: [
      "Developing new features to enhance the user experience.",
      "Collaborating with designers and developers to create something special.",
      "Ensuring everything will be fully optimized for performance.",
      "Stay tuned for updates and the upcoming launch!",
    ],
  },
  {
    title: "Soon",
    company_name: "Soon",
    icon: soon,
    iconBg: "#383E56",
    date: "Soon",
    points: [
      "Developing new features to enhance the user experience.",
      "Collaborating with designers and developers to create something special.",
      "Ensuring everything will be fully optimized for performance.",
      "Stay tuned for updates and the upcoming launch!",
    ],
  },
  {
    title: "Soon",
    company_name: "Soon",
    icon: soon,
    iconBg: "#E6DEDD",
    date: "Soon",
    points: [
      "Developing new features to enhance the user experience.",
      "Collaborating with designers and developers to create something special.",
      "Ensuring everything will be fully optimized for performance.",
      "Stay tuned for updates and the upcoming launch!",
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
    name: "Food-100 Main",
    description:
      "A review-based web application that allows users to explore, rate, and review various food items, offering personalized recommendations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://eciapac.github.io/Food-100/",
  },
  {
    name: "Vue Cinema",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PROWEB",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: vue,
    source_code_link: "https://eciapac.github.io/vue-cinema/",
  },
  {
    name: 'Totembo',
    description:
      "A versatile social assistant platform that helps users manage online interactions and tasks with a focus on usability and automation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PROWEB",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: totembo,
    source_code_link: "https://eciapac.github.io/Totembo/",
  },
  {
    name: "Templates",
    description:
      "A collection of customizable web templates designed for fast and responsive development across various use cases.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PROWEB",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: templates,
    source_code_link: "https://eciapac.github.io/Templates/",
  },
  {
    name: "Virtual Reality",
    description:
      "A web platform providing AI-driven business solutions, including order management, trading tools, and crypto platforms, to enhance decision-making and operational efficiency.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: virtual,
    source_code_link: "https://eciapac.github.io/Virtual-Reality/",
  },
  {
    name: "Cinephile",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: cinephile,
    source_code_link: "https://cinephile-phi.vercel.app/",
  },
  {
    name: "Git-Finder",
    description:
      "A web app for searching GitHub users. Simply enter a username to quickly view profile details, including repositories, followers, and other stats.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: gitfinder,
    source_code_link: "https://cinephile-phi.vercel.app/",
  },
  {
    name: "ProWeb Web Store",
    description:
      "A prototype of an online store with a user-friendly interface. It allows browsing products, adding items to the cart, and managing orders.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: prowebstore,
    source_code_link: "https://pro-web-store.vercel.app/",
  },
  {
    name: "ToDoList",
    description:
      "A simple and efficient task manager for organizing daily activities. Users can add, edit, and delete tasks to stay on top of their schedules.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://to-do-list-alpha-sepia.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
