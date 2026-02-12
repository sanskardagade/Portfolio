// =============================================================================
// PORTFOLIO DATA - Edit this file to replace placeholder text with your real data
// =============================================================================
// All portfolio content is centralized here. Update the values below with your
// actual information, and every component will reflect the changes automatically.
// =============================================================================

const portfolioData = {
  // ---------------------------------------------------------------------------
  // PERSONAL INFO - Used in Header, About, Contact, and Footer
  // ---------------------------------------------------------------------------
  personal: {
  name: 'Sanskar Dagade',
  title: 'Full Stack Developer | Backend Specialist | AI Enthusiast',
  avatarUrl: import.meta.env.BASE_URL + 'profile-photo.jpg', // Place your photo at public/profile-photo.jpg
  bio: [
    'Hi there <span class="wave-emoji">\u{1F44B}</span>',
    'I am a final-year <span class="bio-highlight-a">Computer Engineering</span> student at <span class="bio-highlight-a">Dr. D. Y. Patil Institute of Technology, Pune</span>, passionate about building scalable and production-ready systems.',
    'I specialize in <span class="bio-highlight-b">Full Stack Development</span>, with a strong focus on <span class="bio-highlight-b">Backend Architecture</span>, <span class="bio-highlight-b">System Design</span>, and <span class="bio-highlight-b">AI-driven Applications</span>.',
    'I have built projects including an AI-based <span class="bio-highlight-b">Smart Campus Management System</span>, a secure <span class="bio-highlight-b">Learning Management Platform</span> with payment integration, and an <span class="bio-highlight-b">IoT-based energy solution</span> showcased at a hackathon.',
    'I actively solve DSA problems, explore machine learning concepts, and deploy real-world applications on VPS environments.',
    'I am currently seeking opportunities where I can contribute to impactful products, grow as a backend engineer, and build systems that scale.',
  ],
  email: 'your-email@gmail.com', // Replace with your real email
  location: 'Pune, India',
  resumeUrl: import.meta.env.BASE_URL + 'resume.pdf', // Place resume at public/resume.pdf
  socialLinks: {
    linkedin: 'https://linkedin.com/in/your-linkedin',
    github: 'https://github.com/your-username',
    discord: '', // optional
  },
},


  // ---------------------------------------------------------------------------
  // EDUCATION - Used in Education.jsx
  // ---------------------------------------------------------------------------
  education: [
    
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Dr. D. Y. Patil Institute of Technology',
      year: '2022 – 2026 (Expected)',
      location: 'Pimpri, Pune',
      gpa: '9.0+/10', // update with exact CGPA
      logo: import.meta.env.BASE_URL + 'logos/dypit.png', // Put correct logo
      coursework: [
        'Data Structures and Algorithms',
        'Operating Systems',
        'Database Management Systems',
        'Computer Networks',
        'Object-Oriented Programming',
        'Artificial Intelligence',
        'Machine Learning',
      ],
      link: 'https://engg.dypvp.edu.in/',
    },
  ],

  // ---------------------------------------------------------------------------
  // EXPERIENCE - Used in Experience.jsx (each category is collapsible)
  // ---------------------------------------------------------------------------
  experience: [
  {
    title: 'Work Experience',
    items: [
      {
        role: 'Full Stack Developer Intern',
        organization: 'Meds4You',
        period: 'Jan 2025 - May 2025',
        location: 'Remote / India',
        logo: import.meta.env.BASE_URL + 'logos/meds4you.png',
        link: 'https://meds4you.in',
        points: [
          'Built and deployed a full-stack medical e-commerce platform focused on generic medicines using React, Node.js, Express, and MongoDB.',

          'Integrated Razorpay payment gateway and implemented secure JWT-based authentication with role management (Admin & User).',

          'Designed scalable REST APIs for product management, order tracking, and inventory handling, improving backend response efficiency.',

          'Optimized UI/UX with consistent branding and responsive design, ensuring seamless cross-device experience.'
        ],
      },

      {
        role: 'Freelance Full Stack Developer',
        organization: 'ModelMinds',
        period: 'Jun 2025 - Dec 2025',
        location: 'Remote / India',
        logo: import.meta.env.BASE_URL + 'logos/modelminds.png',
        link: 'https://modelminds.in',
        points: [
          'Independently designed and developed a complete full-stack platform for an architect to showcase projects, manage employees, clients, and end-to-end project workflows.',

          'Implemented secure role-based authentication (Admin, Architect, Employee, Client) using JWT and bcrypt for structured access control.',

          'Built payment setup and funding management modules to handle project-based transactions, revenue tracking, and financial monitoring.',

          
        ],
      },
    ],
  },
],


  // ---------------------------------------------------------------------------
  // PROJECTS - Used in Projects.jsx
  // ---------------------------------------------------------------------------
  projects: [
  {
    title: 'Campus Connect',
    body: 'A full-scale AI-powered campus management platform serving 450+ real-world users daily, focused on improving campus safety, automation, and student/faculty experience. Designed scalable backend architecture using Node.js and Express with secure role-based access control and real-time updates. Integrated AI-driven facial recognition from CCTV cameras to automate attendance, built student activity monitoring modules, real-time alert systems, documentation management, and stress-management support features.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI/ML', 'Facial Recognition', 'JWT', 'Real-Time Systems'],
    link: 'https://dypdpu.in',
  },

  {
    title: 'Minutes of Meeting (MoM) Generator – AI Powered Automation',
    body: 'Developed an AI-powered meeting automation system providing real-time speech-to-text transcription, automated attendance tracking, intelligent summarization, and structured MoM documentation. Built responsive frontend using React and Tailwind CSS. Integrated IoT-based participant detection and facial recognition analytics. Designed scalable backend with Node.js and Express and used Python-based machine learning models for transcription and smart recap generation.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Python', 'Machine Learning', 'IoT'],
    link: '#',
  },

  {
    title: 'Real-Time Anomaly Detection System (SIH 2024 Finale)',
    body: 'Finalist project at Smart India Hackathon 2024 under Ministry of Jal Shakti. Built a real-time anomaly detection platform with predictive analytics, automated alerts, and a ticketing system for issue resolution. Cleaned and preprocessed datasets, implemented machine learning models for predictive monitoring, and built reliable backend services optimized for performance and scalability.',
    tech: ['Python', 'Machine Learning', 'Node.js', 'Express', 'Data Analytics', 'Predictive Modeling'],
    link: '#',
  },

  {
    title: 'PDF Editor – Online Document Editing Platform',
    body: 'Developed a browser-based PDF editing platform enabling users to upload, edit, annotate, and manage documents online. Implemented secure backend services for file processing and storage. Designed role-based access control to ensure secure document sharing and optimized file handling for smooth performance.',
    tech: ['React', 'Node.js', 'Express', 'Cloud Storage', 'Authentication', 'File Processing'],
    link: '#',
  },

  {
    title: 'Blogging Website',
    body: 'Built a full-stack blogging platform with user authentication, blog CRUD operations, search functionality, dashboards, and rating system. Designed RESTful APIs with JWT-based authentication and role management. Developed responsive frontend for content publishing and community interaction.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
    link: '#',
  },
],



  // ---------------------------------------------------------------------------
  // CERTIFICATES - Used in Certificates.jsx
  // ---------------------------------------------------------------------------
  certificates: [
    { name: 'Neural Networks and Deep Learning', link: 'https://drive.google.com/file/d/17fUm7MxuFlh5_oDq94ta5bA_tj65ETA3/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/coursera.png' }, // <-- Replace with your certificates
    { name: 'Improving Deep Neural Networks', link: 'https://drive.google.com/file/d/1Kku8bZv5Vc6FY5s8zKUOAOEOZaIpEJQO/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/coursera.png' },
    { name: 'Structuring Machine Learning Projects', link: 'https://drive.google.com/file/d/13-i_KZS5cy-nsum-x1qILMw50OMxfyM9/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/coursera.png' },
    { name: 'Cyber Security Foundation', link: 'https://drive.google.com/file/d/1vVTc1oEv9KZukPBfK33cg6ICQG0hLT8p/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/certi-proof.png' },
    { name: 'SEO Fundamentals Exam', link: 'https://drive.google.com/file/d/1LxF38TmQgO1cWwrfA7AUToqDj56mHBZS/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/semrush.png' },
    ],

  // ---------------------------------------------------------------------------
  // NAVIGATION - Used in Header.jsx
  // ---------------------------------------------------------------------------
  navItems: ['About', 'Education', 'Experience', 'Projects', 'Certificates', 'Contact'],
};

export default portfolioData;
