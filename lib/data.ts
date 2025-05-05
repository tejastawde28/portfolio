export const resumeData = {
  name: "Tejas Tawde",
  title: "Software Engineer",
  contact: {
    email: "tawde.te@northeastern.edu",
    phone: "(857) 339-8715",
    linkedin: "linkedin.com/in/tejastawde28",
    github: "github.com/tejastawde28",
  },
  education: [
    {
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "Master of Science in Software Engineering Systems",
      period: "Sep. 2024 - May 2026",
      courses: [
        "Object-Oriented Design",
        "Data Management & Database Design",
        "Network Structures and Cloud Computing",
        "Enterprise Software Design",
      ],
    },
    {
      institution: "Mumbai University",
      location: "Mumbai, India",
      degree: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
      period: "Aug. 2019 - Jul. 2023",
    },
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "C++", "Dart"],
    webTechnologies: ["React", "Vue.js", "Next.js", "Material UI", "Tailwind CSS", "Bootstrap", "Flutter"],
    backendFrameworks: [
      "Flask",
      "Django",
      "FastAPI",
      "Spring Boot",
      "Express.js",
      "Node.js",
      "GraphQL",
      "Microservices",
    ],
    cloudDevOps: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Packer", "Terraform"],
    databases: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB", "Redis"],
  },
  experience: [
    {
      company: "Route Mobile Limited",
      position: "Software Engineer",
      location: "Mumbai, India",
      period: "Nov. 2023 - Jul. 2024",
      responsibilities: [
        "Designed and implemented RESTful APIs using Flask, enabling seamless data exchange between React frontend and backend services, significantly improving data retrieval speeds",
        "Developed and maintained full-stack web application with comprehensive unit testing via PyTest, ensuring robust code coverage and enhancing chatbot interaction quality",
        "Optimized data architecture by implementing Redis caching and AWS RDS for persistent storage, reducing database load and cutting API response times across critical user workflows",
        "Deployed scalable cloud infrastructure using AWS EC2, S3, and RDS, enabling reliable management of media assets and ensuring high service availability during peak usage periods",
        "Enhanced system performance through service decomposition and containerization with Docker and Kubernetes, enabling independent scaling of components and streamlining deployment workflows",
      ],
    },
  ],
  projects: [
    {
      title: "Finance Navigator",
      technologies: ["Java Spring Boot", "MVC", "Hibernate", "JSP"],
      description: [
        "Engineered a personal finance management system using Spring Boot, Hibernate ORM with manual session management, implementing DAO pattern and MVC architecture",
        "Developed a robust authentication system with custom enrollment and profile management features using JSP, JSTL, and EL for dynamic views",
        "Implemented a financial tracking system with dual-classification transactions, custom category management, and real-time financial summary calculations",
      ],
      github: "https://github.com/tejastawde28/finance-navigator",
    },
    {
      title: "TripSync: Travel Itinerary Manager",
      technologies: ["Java Spring Boot", "React", "MySQL"],
      description: [
        "Designed a comprehensive travel itinerary management system by implementing design patterns, resulting in significantly improved code reusability and faster development of similar features",
        "Created a full-stack application with Java Spring Boot backend and React frontend, delivering streamlined trip and activity management with faster API response times",
        "Enhanced data processing capabilities by applying functional programming concepts and the Stream API, creating a maintainable codebase with reduced complexity while ensuring secure data storage using MySQL",
      ],
      github: "https://github.com/tejastawde28/tripsync",
    },
    {
      title: "Cloud-Native WebApp",
      technologies: ["Flask", "Packer", "Terraform", "AWS"],
      description: [
        "Engineered a cloud-native Flask application with PyTest automation and deployed Terraform IaC for AWS infrastructure orchestration",
        "Constructed CI/CD pipelines using GitHub Actions and Packer to automate testing, validation, and cross-platform image creation",
        "Architected RESTful APIs integrating AWS S3 for file storage and RDS MySQL for metadata management with high-availability infrastructure",
      ],
      github: "https://github.com/tejastawde28/cloud-native-webapp",
    },
  ],
}
