export const portfolioData = {
  header: {
    name: "YourName",
    title: "Front-end development",
    subtitle: "React & TypeScript",
    role: "Web Developer",
  },
  intro: {
    title: "Hi there, my name is YourName!",
    description:
      "Join me on my journey from junior to Software Development, as I tackle exciting projects along the way.",
  },
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A modern dashboard for managing online stores with real-time analytics and inventory management",
      image: "https://placehold.co/600x400", // You'll need to add these images to your public folder
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      link: "https://github.com/example/project1"
    },
    {
      title: "Social Media Platform",
      description: "A full-featured social platform with real-time messaging and content sharing",
      image: "https://placehold.co/600x400",
      technologies: ["Next.js", "GraphQL", "Node.js", "MongoDB"],
      link: "https://github.com/example/project2"
    },
    {
      title: "Weather Application",
      description: "A beautiful weather app with detailed forecasts and interactive maps",
      image: "https://placehold.co/600x400",
      technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
      link: "https://github.com/example/project3"
    },
    {
      title: "Task Management Tool",
      description: "A collaborative task management application with real-time updates",
      image: "https://placehold.co/600x400",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Jest"],
      link: "https://github.com/example/project4"
    }
  ],
  services: [
    {
      id: "01",
      number: "01",
      title: "FRONTEND DEVELOPMENT",
      description: "Crafting responsive and performant web applications using modern technologies and best practices. Specialized in React and TypeScript development with a focus on user experience and accessibility.",
      details: [
        "Modern JavaScript & TypeScript",
        "React & Next.js Development",
        "Performance Optimization",
        "Responsive Design",
        "State Management (Redux, Context API)"
      ]
    },
    {
      id: "02",
      number: "02",
      title: "UI/UX DESIGN",
      description: "Creating intuitive and engaging user interfaces that provide exceptional user experiences. Focus on modern design principles and accessibility.",
      details: [
        "User Interface Design",
        "Responsive Layouts",
        "Interactive Prototypes",
        "Design Systems",
        "Accessibility (WCAG)"
      ]
    }
  ],
  about: {
    description: `With over 8 years of experience in web development, I've had the pleasure of working with companies ranging from startups to Fortune 500s. My journey began with simple HTML and CSS, but my passion for creating exceptional user experiences led me to master modern frameworks and tools.
    I specialize in building scalable frontend applications and have a deep understanding of modern JavaScript, React, and TypeScript. When I'm not coding, I contribute to open-source projects and mentor aspiring developers.`,
  
    skills: [
      "Frontend Development",
      "UI/UX Design",
      "React & TypeScript",
      "Performance Optimization",
      "Technical Leadership",
      "Mobile-First Development"
    ],

    experience: [
      {
        company: "Tech Innovators Inc.",
        role: "Senior Frontend Developer",
        period: "2020 - Present",
        description: "Leading the frontend development team and architecting scalable solutions."
      },
      {
        company: "Digital Solutions Ltd.",
        role: "Frontend Developer",
        period: "2018 - 2020",
        description: "Developed and maintained multiple client projects using React and TypeScript."
      }
    ],

    education: [
      {
        degree: "Master's in Computer Science",
        school: "Tech University",
        year: "2018"
      },
      {
        degree: "Bachelor's in Software Engineering",
        school: "Engineering College",
        year: "2016"
      }
    ]
  },
  contact: {
    email: "yourMail@yourMail.dev",
    phone: "+44555555555",
    location: "San Francisco, CA",
    availability: "Open to new opportunities"
  },
  social: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};
