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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "UI/UX  Disigner",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "TRAVEL EZ",
     
      points: [
        "TRAVEL EZ, a tourist guide website, elegantly crafted with HTML, CSS, and JavaScript, simplifies travel planning.",
        "Providing detailed information on destinations, including descriptions and transportation details, it ensures a seamless experiences for tourists.",
        " The website serves as a valuable companion, guiding users to explore and navigate their chosen destination effortlessly.",
        "github.com/sourav-roy6242/TouristEz"
      ],
      
      source_code_link: "https://github.com/sourav-roy6242/TouristEz",
    },
    {
      title: "EXPENCE TRACKER",
      // company_name: "Tesla",
      // icon: tesla,
      // iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
    
      points: [
        "EXPENSE TRACKER, a web application leveraging JavaScript, HTML, and CSS, empowers users to effortlessly monitor their spendings.",
        " With intuitive design, it calculate total expenditures and remaining balance.",
       
      ],
    },
    {
      title: "PRICEWISE  ",
      // company_name: "Shopify",
      // icon: shopify,
      // iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "PRICEWISE, a web app built with Next.js, Typescript, and Tailwind CSS, dynamically retrieves and displays Amazon product prices.",
        "Offering real-time updates, it showcases current, previous, average, lowest, and highest prices.",
        "The synergy of Next.js and Typescript ensures robust functionality, while Tailwind CSS contributes to a  sleek and responsive user interface.",
       
      ],
    },
    {
      title: "FITNESSCLUB",
      // company_name: "Meta",
      // icon: meta,
      // iconBg: "#E6DEDD",
      // date: "Jan 2023 - Present",
      points: [
        "Fitness club website, crafted with React.js, CSS, and JavaScript, offers a dynamic and user-friendly experience",
        "Seamlessly blending functionality and aesthetics, it provides a responsive design for optimal performance.",
      
      ],
    },

    {
      title: "TOMATO",
      // company_name: "Meta",
      // icon: meta,
      // iconBg: "#E6DEDD",
      // date: "Jan 2023 - Present",
      points: [
       " • Developed a food delivery and restaurant review platform using React, JavaScript, and CSS, replicating keyfeatures of Zomato with a focus on dynamic content and intuitive navigation.",
        "• Integrated features such as restaurant search, user reviews, ratings, and an ordering system to provide a complete dining and food discovery experience.",
        " • Enhanced responsiveness and user engagement with a streamlined UI, ensuring optimal performance across devices. "
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
          name: "mongodb",
          color: "green-text-gradient",
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
      image: jobit,
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