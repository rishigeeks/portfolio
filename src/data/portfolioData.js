export const personalInfo = {
  name: "Rishi Raj",
  title: "Computer Science & Engineering Student",
  subTitle: "Full-Stack Developer & AI Systems Builder",
  bio: "B.Tech CSE student at Lovely Professional University (2024–2028). Specialized in building robust REST APIs, stateful AI RAG chatbots, desktop utilities with cryptographic security, and zero-dependency algorithmic visualizers.",
  targetRole: "Software Development Engineer (SDE) / Full-Stack & AI Developer",
  location: "Jalandhar, Punjab / Bhagalpur, Bihar",
  email: "rishiraj91421@gmail.com",
  phone: "+91 9142114512",
  github: "https://github.com/rishigeeks",
  linkedin: "https://www.linkedin.com/in/RishiRaj",
  cgpa: "7.2",
  university: "Lovely Professional University",
  graduationYear: "2028",
  status: "Available for Internships & Placement Opportunities"
};

export const projects = [
  {
    id: "parvati-student-corner",
    title: "Parvati Student Corner",
    subtitle: "Full-Stack E-Commerce Platform",
    category: "Full-Stack",
    period: "Jan 2026 – Feb 2026",
    github: "https://github.com/rishigeeks/parvati-student-corner",
    live: null,
    summary: "Architected a full-stack e-commerce web platform for stationery and gift product management using Node.js, Express.js, and SQLite relational database.",
    problemStatement: "Local stationery and gift vendors lack secure online product management, server-side cart verification, and structured order tracking to prevent price tampering during checkout.",
    role: "Lead Full-Stack Developer",
    keyFeatures: [
      "Role-Based Access Control (RBAC) protecting administrative product creation, update, and deletion endpoints.",
      "Bcrypt password hashing and express-session management for secure user authentication.",
      "RESTful API endpoints for multi-category product filtering, search, and dynamic pricing.",
      "Server-side shopping cart calculation and price integrity verification before transaction execution.",
      "Transactional order fulfillment maintaining consistency across relational tables (orders, order_items)."
    ],
    techStack: ["Node.js", "Express.js", "SQLite3", "JavaScript (ES6+)", "RESTful APIs", "Bcrypt", "Express-Session", "HTML5", "CSS3"],
    measuredOutcome: "Achieved 100% server-side cart verification ensuring zero price tampering across relational checkout transactions."
  },
  {
    id: "tripster",
    title: "Tripster",
    subtitle: "AI Travel Companion Chatbot",
    category: "AI & RAG",
    period: "Mar 2026 – Apr 2026",
    github: "https://github.com/rishigeeks/travel-companion-chatbot",
    live: null,
    summary: "Full-stack AI travel recommendation bot using Flask, Groq LLM (Llama-3.3-70b), and DuckDuckGo Search API for real-time live travel context fallback.",
    problemStatement: "Standard AI travel assistants struggle with multi-turn conversation retrieval, out-of-date local travel information, and factual hallucinations when recommending specific destinations.",
    role: "AI & Backend Engineer",
    keyFeatures: [
      "Groq LLM (Llama-3.3-70b) integration to generate structured real-time local itineraries and restaurant guidance.",
      "DuckDuckGo Search API integrated as a RAG (Retrieval-Augmented Generation) fallback pipeline alongside SQLite database storage to surface factual live travel context.",
      "Bcrypt-hashed user authentication and chat session persistence enabling stateful multi-turn conversation retrieval across user sessions.",
      "Interactive responsive chat interface built with clean vanilla JavaScript and Flask backend endpoints."
    ],
    techStack: ["Python", "Flask", "Groq LLM (Llama 3.3)", "DuckDuckGo Search API", "SQLite", "Flask-Login", "Bcrypt", "JavaScript"],
    measuredOutcome: "Eliminated hallucinated recommendations by coupling RAG search fallbacks with persistent multi-turn conversational memory."
  },
  {
    id: "smart-file-organiser",
    title: "Smart File Organiser",
    subtitle: "Desktop Automation Utility",
    category: "Desktop Utilities",
    period: "May 2026 – Jun 2026",
    github: "https://github.com/rishigeeks/smart-file-organiser",
    live: null,
    summary: "Cross-platform desktop automation utility built with PyQt6 GUI to systematically categorize, filter, and route unorganized directory files based on extensions and rules.",
    problemStatement: "Cluttered local storage directories lead to file disorganization, duplicate file accumulation, and risk of accidental data overwrites when batch-moving items.",
    role: "Desktop Application Developer",
    keyFeatures: [
      "SHA-256 cryptographic hashing (hashlib) to detect content-identical duplicate files regardless of file names.",
      "Watchdog file system event observer running real-time background auto-sorting based on custom rules.",
      "Collision-safe path resolution algorithms using Python pathlib to eliminate file overwrites during routing.",
      "Structured JSON transaction logging (undo_log.json) providing seamless 1-click state restoration (undo capability)."
    ],
    techStack: ["Python", "PyQt6", "Watchdog API", "SHA-256 Cryptography", "Pathlib", "Shutil", "JSON Transaction Logging"],
    measuredOutcome: "Guaranteed 100% collision-free file movement and zero data loss with 1-click JSON state restoration."
  },
  {
    id: "smart-transit-system",
    title: "Smart Transit System",
    subtitle: "Graph Algorithms & Navigation Simulator",
    category: "Algorithms & Systems",
    period: "Jun 2026 – Jul 2026",
    github: "https://github.com/rishigeeks/smart-transit-navigator",
    live: null,
    summary: "Interactive browser-based transit navigation simulator modeling urban transport networks as weighted directed graphs with real-time SVG visual routing.",
    problemStatement: "Understanding and evaluating complex graph navigation algorithms in real-time urban networks requires clear interactive visualization without relying on external algorithm black-boxes.",
    role: "Algorithms & Frontend Lead",
    keyFeatures: [
      "Implemented 8 classical graph algorithms completely from scratch: Dijkstra, A*, Bellman-Ford, Floyd-Warshall, Kruskal's, Prim's, BFS, DFS.",
      "Custom data structure implementations with zero external libraries: Min-Heap, Trie, and Union-Find (Disjoint Set).",
      "Interactive SVG visual routing depicting node traversals, shortest path recalculations, and weighted edge cost breakdowns.",
      "Dynamic urban transit network graph generator with node creation, custom edge weight assignment, and real-time visualization."
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Graph Theory", "Custom Min-Heap", "Trie", "Union-Find", "SVG Visualization", "HTML5", "CSS3"],
    measuredOutcome: "Engineered zero-dependency implementations for 8 core graph algorithms with instant SVG visual path rendering."
  }
];

export const skillsGrouped = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages used for systems, scripting, web backend, and data manipulation.",
    skills: ["Python", "JavaScript (ES6+)", "Java", "C", "C++", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Web Libraries",
    icon: "Layout",
    description: "Modern web tools for building responsive frontends and resilient REST APIs.",
    skills: ["React.js", "Node.js", "Express.js", "Flask", "Tailwind CSS", "REST APIs"]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "Relational and document storage systems with query optimization & data integrity.",
    skills: ["MongoDB", "SQLite3", "JSON Transaction Logs", "Schema Design"]
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: "Server",
    description: "Version control, containerization, deployment platforms, and API testing tools.",
    skills: ["Git & GitHub", "Docker", "Postman", "Vercel", "Render", "PyQt6", "Watchdog API"]
  },
  {
    category: "Computer Science Core",
    icon: "Brain",
    description: "Fundamental CS concepts applied rigorously across all projects.",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems", "Graph Theory"]
  },
  {
    category: "Placement Soft Skills",
    icon: "CheckCircle",
    description: "Attributes for effective engineering teamwork and problem solving.",
    skills: ["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Adaptability", "Technical Communication"]
  }
];

export const certifications = [
  {
    title: "DSA Placement Bootcamp: Master DSA for Industry",
    issuer: "Lovely Professional University",
    date: "Jul 2026",
    link: "#",
    description: "Comprehensive training in Graph Algorithms, Dynamic Programming, Trees, Heaps, and placement problem-solving strategies."
  },
  {
    title: "Fundamentals of Software Testing",
    issuer: "Skillera",
    date: "Mar 2025",
    link: "#",
    description: "Covered software testing lifecycle, test case design, manual testing, integration testing, and bug tracking."
  },
  {
    title: "Basic Python Certification",
    issuer: "Skillera",
    date: "Jan 2025",
    link: "#",
    description: "Validated mastery of Python syntax, object-oriented concepts, file handling, and standard library modules."
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "Aug 2024 – Jul 2028",
    score: "CGPA: 7.2",
    details: "Focusing on Data Structures & Algorithms, Web Engineering, DBMS, and Artificial Intelligence."
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "New Horizon School",
    location: "Bhagalpur, Bihar",
    period: "Completed May 2024",
    score: "Percentage: 66%",
    details: "Science stream with focus on Physics, Chemistry, and Mathematics."
  },
  {
    degree: "Secondary (Class X)",
    institution: "Mount Assisi School",
    location: "Bhagalpur, Bihar",
    period: "Completed May 2021",
    score: "Percentage: 82%",
    details: "ICSE Curriculum with strong foundations in Computer Applications and Science."
  }
];

export const pesChecklistItems = [
  { id: 1, label: "About section clearly names specific target role (SDE / Full-Stack / AI)", checked: true },
  { id: 2, label: "Includes 3–6 strong projects with problem statement, role, tools & outcomes", checked: true },
  { id: 3, label: "Skills are honest, grouped by category, and avoid generic keyword dumps", checked: true },
  { id: 4, label: "Contact details, LinkedIn, GitHub, and downloadable resume are 1-click away", checked: true },
  { id: 5, label: "Visual design uses consistent typography, clean palette, and whitespace", checked: true },
  { id: 6, label: "Layout is 100% fully responsive across desktop, tablet, and mobile screens", checked: true },
  { id: 7, label: "Zero generic stock images; uses real project details and interactive demos", checked: true },
  { id: 8, label: "All external links (GitHub, LinkedIn, Mail) are tested and verified public", checked: true }
];
