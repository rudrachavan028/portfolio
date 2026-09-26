export const portfolioData = {
  hero: {
    name: "Rudra Chavan",
    title: "AI & Machine Learning Enthusiast",
    tagline: "Building intelligent systems to solve real-world problems.",
    intro: "I am a passionate AI/ML and Data Science student with a strong foundation in programming and intelligent system development. I love analyzing data, training models, and creating innovative solutions that make a difference.",
    email: "chavanrudra028@gmail.com",
    phone: "+91 80070 81123", // Update with your actual phone number
    location: "Pune, Maharashtra, India",
    linkedin: "https://linkedin.com/in/rudrachavan", // Placeholder
    github: "https://github.com/rudrachavan028", // Placeholder
    leetcode: "https://leetcode.com/rudrachavan", // Placeholder
    avatarUrl: "/profile.png", // Local profile image
    resumeUrl: "/resume.pdf" // Local resume file
  },
  competitionImages: [
    "/im1.jpg", "/im2.jpg", "/im3.jpg", "/im4.jpg", "/im5.jpg" // Using .jpg, rename extension if they are .png
  ],
  about: {
    bio: "Motivated B.Tech Computer Engineering student with strong programming fundamentals and an active interest in Artificial Intelligence and Machine Learning. I have a passion for continuous learning and transforming complex challenges into efficient, technology-driven solutions. My career goal is focused on roles such as AI Engineer, Machine Learning Engineer, or Data Scientist.",
    education: [

       {
        degree: "B.Tech in Computer Engineering",
        institution: "D.Y.Patil College of Engineering,Akurdi,Pune",
        percentage: ""
      },

      {
        degree: "Diploma in Computer Engineering",
        institution: "Bharati Vidyapeeth College of Engineering, Kolhapur",
        percentage: "95.23%"
      },
      {
        degree: "SSC",
        institution: "S.M. Lohiya Highschool, Kolhapur",
        percentage: "90%"
      }
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C", "C++"]
    },
    {
      category: "AI/ML & Data Science",
      items: ["Machine Learning", "Data Analytics", "Data Preprocessing", "Model Training", "Supervised & Unsupervised Learning", "Scikit-learn"]
    },
    {
      category: "Python Libraries",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV"]
    },
    {
      category: "Web & Backend",
      items: ["Flask", "React", "Node.js", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Database",
      items: ["SQL", "MySQL"]
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Software Engineering", "Software Testing"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub"]
    }
  ],
  projects: [
    {
      title: "Neuro Therapy – Digital Therapy Platform",
      description: "Full-stack PTSD digital therapy platform with a 20-question assessment system. Integrates Google Gemini API for AI-powered personalized therapy recommendations. Features secure JWT authentication.",
      technologies: ["React", "Node.js", "MySQL", "Google Gemini API", "JWT"],
      image: "/Neuro.png", // Ensure you upload project-neuro-therapy.png to the public folder
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Netflix Recommendation System",
      description: "Data analytics and recommendation project analyzing Netflix viewing trends and user behavior. Performed data cleaning, visualization, and derived insights on genres and engagement patterns.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "/Netflix.png", // Ensure you upload project-netflix.png to the public folder
      githubUrl: "#",
      demoUrl: "#"
    },
  ],
  experience: [
    {
      role: "Data Analytics & Machine Learning Intern",
      company: "Domain IT Services, Kolhapur",
      duration: "June 2025 – August 2025",
      location: "Kolhapur, Maharashtra, India",
      photo: "/interns.jpg",
      description: "Learned Python programming and AI fundamentals. Worked with NumPy, Pandas, and scikit-learn. Gained practical exposure to real-world AI and data analytics projects.",
      keyPoints: [
        "Machine Learning",
        "Data Science",
        "Data Visualization",
        "Data Preprocessing & Cleaning",
        "Model Training & Evaluation",
        "Scikit-Learn & Python"
      ],
      highlights: [
        "Built and evaluated supervised predictive models for consumer behavioral analytics.",
        "Engineered automated data pipelines using Pandas and NumPy to process unstructured datasets.",
        "Designed interactive data visualization charts with Matplotlib & Seaborn to highlight statistical distributions.",
        "Gained hands-on expertise in algorithm optimization, model tuning, and feature engineering."
      ]
    }
  ],
  achievementsList: [
    {
      id: 1,
      rank: "AIR 310",
      title: "All India NCAT Exam – AIR 310",
      subtitle: "National-Level Achievement in Competitive Aptitude",
      info: "Secured All India Rank 310 in the prestigious NCAT Exam conducted by Nukari, showcasing strong analytical skills, problem-solving ability, and consistent academic excellence at a national level.",
      project: "",
      image: "/ach5.png",
      badge: "",
      date: "2026"
    },
    {
      id: 2,
      rank: "2nd Rank",
      title: "National Level Project Competition",
      subtitle: "National TechFest & Innovation Symposium",
      info: "Crowned 1st Rank for designing high-accuracy predictive machine learning models and real-time behavioral data analytics pipelines.",
      project: "The Digital Therapy Platform",
      image: "/ach2.jpg",
      badge: "1st Prize • Certificate of Excellence",
      date: "2026"
    },
    {
      id: 3,
      rank: "1st Rank",
      title: "State Level Competition",
      subtitle: "Hackethon Style Event",
      info: "Won 1st Rank and demonstrated engineering innovation, code quality, and real-world clinical feasibility.",
      project: "AI Powered Career Guidance System",
      image: "/ach3.jpg",
      badge: "1st Position • State Trophy",
      date: "2026"
    },
    {
      id: 4,
      rank: "2nd Rank",
      title: "National Level Project Competition",
      subtitle: "Inter-Collegiate AI & Deep Learning Summit",
      info: "Awarded 1st Rank for best technical implementation and algorithmic efficiency in supervised and unsupervised model training.",
      project: "Neuro Therapy : The Digital Therapy Platform",
      image: "/ach4.jpg",
      badge: "1st Rank • Cash Prize & Trophy",
      date: "2026"
    },
    {
      id: 5,
      rank: "Best Student Award",
      title: "Best Student Award – Academic Excellence",
      subtitle: "Recognized for Outstanding Performance and Holistic Contribution",
      info: "Awarded for exceptional academic results, consistent dedication, and active participation in extracurricular activities. This honor highlights leadership qualities, discipline, and commitment to excellence among peers.",
      project: "",
      image: "/ach1.jpg",
      badge: "1st Prize • Best Project Trophy",
      date: "2025-2026"
    },
    {
      id: 6,
      rank: "1st Rank",
      title: "State Level Project Competition",
      subtitle: "Grand Innovation Hackathon Championship",
      info: "Achieved 1st Rank in rapid AI prototyping, creating an end-to-end data science pipeline with intuitive visualization dashboards.",
      project: "Neuro Therapy : The Digital Therapy Platform",
      image: "/ach6.jpg",
      badge: "1st Rank • Winner",
      date: "2026"
    },
    {
      id: 7,
      rank: "3rd Rank",
      title: "National Level Project Competition",
      subtitle: "National Level Technical Excellence Forum",
      info: "Recognized with 1st Rank for state-level technological leadership, innovation impact, and comprehensive model benchmarking.",
      project: "Behavioral Analytics Engine",
      image: "/ach7.jpg",
      badge: "2nd Rank • Grand Award",
      date: "2026"
    }
  ],
  achievements: [
    "Winner of 3 State-Level Project Competitions",
    "Winner of 3 National-Level Project Competitions",
    "Hackathon-style technical event winner",
    "Represented institute in multiple state-level competitions",
    "Strong innovation and problem-solving skills recognized across multiple events"
  ],
  publications: [
    {
      title: "Research Paper on AI/ML Applications",
      conference: "Published in Reputed AI Journal",
      date: "2026",
      description: "Research paper focusing on modern machine learning techniques and their practical implementation in real-world scenarios."
    }
  ],
   achievements: [
    "Winner of 3 State-Level Project Competitions",
    "Winner of 3 National-Level Project Competitions",
    "Hackathon-style technical event winner",
    "Represented institute in multiple state-level competitions",
    "Strong innovation and problem-solving skills recognized across multiple events"
  ],
  publications: [
    {
      title: "Research Paper on AI/ML Applications",
      conference: "Published in Reputed AI Journal",
      date: "2026",
      description: "Research paper focusing on modern machine learning techniques and their practical implementation in real-world scenarios."
    }
  ],
  certificates: [
    {
      title: "Machine Learning",
      issuer: "Simplilearn",
      logo: "https://static-asset.inc42.com/logo/simplilearn.png", // Add your logo image link or URL here (e.g. "/logos/simplilearn.png" or "https://...")
      link: "https://drive.google.com/file/d/1XBmkqXsnMCT76SAsXzXFv2fB1hi0IWeL/view?usp=drivesdk"
    },
    {
      title: "LLM",
      issuer: "Google Cloud",
      logo: "https://i.logos-download.com/114492/33168-s2560-d0e3602863febecac19ed317fd186e30.png/Google_Cloud_Logo_2016_icon-s2560.png?dl", // Add your logo image link or URL here (e.g. "/logos/google.png" or "https://...")
      link: "https://drive.google.com/file/d/1UohOPUvKcoar7TrrmIbRlFWBeOy3MCXq/view?usp=drivesdk"
    },
    {
      title: "Generative AI Certification",
      issuer: "Microsoft & LinkedIn",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", // Add your logo image link or URL here (e.g. "/logos/microsoft.png" or "https://...")
      link: "https://drive.google.com/file/d/1ATLdMkHSmxow5PD4Aa4aPm1DQ_igqBgi/view?usp=drivesdk"
    },
    {
      title: "C++ Programming Certification",
      issuer: "MKDRC",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGhGuyiGT4J0g/company-logo_200_200/company-logo_200_200/0/1631301433627?e=2147483647&v=beta&t=RZ3ajV3SjzA2EgnQttXw6MongyowVYH8G_8NjrXi7ZQ", // Add your logo image link or URL here (e.g. "/logos/mkdrc.png" or "https://...")
      link: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
    }
  ]
};
