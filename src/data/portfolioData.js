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

  'I am a final-year Computer Engineering student at Dr. D. Y. Patil Institute of Technology, Pune, driven by a passion for building scalable and high-performance software systems.',

  'I am a <span class="bio-highlight-a">Full Stack Developer</span> with strong expertise in designing robust backend architectures, scalable APIs, and seamless frontend experiences.',

  'I possess strong command over Machine Learning and Data Science, and I am actively expanding my expertise in <span class="bio-highlight-a">Generative AI</span> and intelligent system development.',

  'I build and deploy production-ready applications, host websites on VPS and cloud environments, and focus on writing clean, maintainable, and scalable code.',

  'I consistently practice Data Structures & Algorithms and aspire to contribute to impactful products while evolving as a <span class="bio-highlight-a">Software Engineer</span>.',
],


  email: 'sanskardagade07@gmail.com', // Replace with your real email
  location: 'Pune, India',
  resumeUrl: import.meta.env.BASE_URL + 'resume.pdf', // Place resume at public/resume.pdf
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sanskar-dagade-6093a025b/',
    github: 'https://github.com/sanskardagade',
    discord: 'https://discord.com/sanskardagade07', // optional
    leetcode: 'https://leetcode.com/sanskardagade/', // optional
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
          'Created a healthcare e-commerce platform supporting 100+ registered users within the first launch phase. ',

          'Integrated Razorpay payment gateway, ensuring secure transactions with a 99% payment success rate. ',

          ' Wrote 15+ backend APIs for products, users, and orders ensuring smooth data exchange. ',

          'Deployed application on VPS with zero downtime during first 3 months of live usage.'
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
          'Converted Excel-based tracking system into web platform managing 200+ clients and 70+ ongoing projects. ',

          'Automated financial summaries, reducing manual calculation errors by 80%.',

          'Managed the project independently from requirement gathering to final deployment.',

          
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
    body: 'Created a campus-wide management system supporting operations across 10+ departments and serving 450+ active users daily. Achieved 94% facial recognition accuracy after training model on 1,000+ image samples. Cut manual attendance work by 70% through automation. Lowered paperwork processing by 50% by introducing an automated Leave Approval module.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI/ML', 'Facial Recognition', 'CNN', 'JWT', 'Real-Time Systems'],
    link: 'https://dypdpu.in',
  },

  {
    title: 'Minutes of Meeting (MoM) Generator – AI Powered Automation',
    body: 'Initiated an AI-powered meeting tool that generates summaries with 98% transcription accuracy. Integrated IoT-based attendance logging improving participant tracking efficiency by 60% across meetings. Reduced manual documentation time from 30 minutes to under 5 minutes per meeting.',
    tech: ['React',  'Node.js', 'Express', 'Python', 'Machine Learning', 'IoT'],
    link: 'https://github.com/sanskardagade/MoM_Generator.git',
  },

  {
    title: 'Real-Time Anomaly Detection System (SIH 2024 Finale)',
    body: '  Worked as team lead to build a real-time anomaly detection system for Smart India Hackathon 2024. Formulated and executed machine learning techniques to uncover hidden patterns in data, achieving a 20% improvement in system  efficiency through faster analysis and risk assessment capabilities, directly benefiting decision-making.  ',

    tech: ['Python', 'Machine Learning', 'Node.js', 'Express', 'Data Analytics', 'Predictive Modeling'],
    link: 'https://jaldarpan.netlify.app/',
  },

  {
    title: 'PDF Editor – Online Document Editing Platform',
    body: 'Developed a browser-based PDF editing platform enabling users to upload, edit, annotate, and manage documents online. Implemented secure backend services for file processing and storage. Designed role-based access control to ensure secure document sharing and optimized file handling for smooth performance.',
    tech: ['React', 'Node.js', 'Express', 'Cloud Storage', 'Authentication', 'File Processing'],
    link: 'https://github.com/sanskardagade/PDF.git',
  },

  {
    title: 'Blogging Website',
    body: 'Built a full-stack blogging platform with user authentication, blog CRUD operations, search functionality, dashboards, and rating system. Designed RESTful APIs with JWT-based authentication and role management. Developed responsive frontend for content publishing and community interaction.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
    link: 'https://github.com/sanskardagade/Blogin-main.git',
  },
],



  // ---------------------------------------------------------------------------
  // CERTIFICATES - Used in Certificates.jsx
  // ---------------------------------------------------------------------------
  certificates: [
  {
    name: 'Full Stack Web Development Bootcamp',
    link: 'https://www.udemy.com/share/10b9kU3@rl3ky1aDJIwoqV508KflGYbXozMmRzjxmJ-fWWpzDrbMJrKBJEp58ITUEU9sq9mDLA==/',
    logo: import.meta.env.BASE_URL + 'logos/udemy.png',
  },
  
  {
    name: 'Complete Data Science,Machine Learning,DL,NLP Bootcamp',
    link: 'https://www.udemy.com/share/10bO8l3@Pi6XLodTf0DNECxd42Qr5TCPjORXVETcmZb0ToPvvFwHUoe6Kt-TytN2vVmk3N-_xw==/',
    logo: import.meta.env.BASE_URL + 'logos/udemy.png',
  },
  {
    name: 'Docker and Kubernetes for beginners | DevOps journey',
    link: 'https://www.udemy.com/share/10dqWp3@1d1QVreWr3ZVQahpIXOWeL0uuVX_A3fQXLR5kCW8AHkZiY9inUvLA444LrXwbC2Liw==/',
    logo: import.meta.env.BASE_URL + 'logos/udemy.png',
  },
],


  // ---------------------------------------------------------------------------
  // NAVIGATION - Used in Header.jsx
  // ---------------------------------------------------------------------------
  navItems: ['About', 'Education', 'Experience', 'Projects', 'Certificates', 'Contact'],
};

export default portfolioData;
