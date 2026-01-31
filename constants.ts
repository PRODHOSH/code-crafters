import { Domain, Event, CouncilMember, Stat } from './types';

export const DOMAINS: Domain[] = [
  {
    id: 'web',
    title: 'Web Development',
    icon: 'Globe',
    description: 'Building the modern web with React, Next.js, and Node.',
    detailedDescription: 'Master the full stack of web technologies. From responsive UI design with Tailwind to scalable backends using Node.js and cloud infrastructure.',
  },
  {
    id: 'app',
    title: 'App Development',
    icon: 'Smartphone',
    description: 'Crafting native experiences for iOS and Android.',
    detailedDescription: 'Dive into Flutter, React Native, and Swift. We build applications that solve real-world problems with intuitive mobile interfaces.',
  },
  {
    id: 'ai',
    title: 'AI / ML',
    icon: 'Brain',
    description: 'Engineering intelligent systems and neural networks.',
    detailedDescription: 'Explore the frontiers of Artificial Intelligence. From Computer Vision to NLP, we build models that learn and adapt.',
  },
  {
    id: 'cp',
    title: 'Competitive Coding',
    icon: 'Code',
    description: 'Mastering algorithms and data structures.',
    detailedDescription: 'Prepare for the toughest coding interviews and contests (ICPC). We focus on efficiency, optimization, and problem-solving strategies.',
  },
  {
    id: 'uiux',
    title: 'UI / UX Design',
    icon: 'PenTool',
    description: 'Designing intuitive and beautiful user journeys.',
    detailedDescription: 'Where art meets functionality. We use Figma and Spline to create prototypes that delight users and drive engagement.',
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    icon: 'Shield',
    description: 'Protecting digital assets and ethical hacking.',
    detailedDescription: 'Learn to defend against digital threats. We cover penetration testing, cryptography, and secure coding practices.',
  },
];

export const EVENTS: Event[] = [
  {
    id: '13',
    title: 'Interhouse Tech Dominion',
    date: 'January 2026',
    description: 'Flagship inter-house technical hackathon designed to assess logical reasoning, coding proficiency, teamwork, and innovation.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    activities: 'Structured three-round competitive format: expert-led orientation session, elimination round, proctored core coding round, and live grand finale featuring team pitches and judge interaction.',
    guests: [
      {
        name: 'Meerali Naseet',
        background: 'Microsoft MVP',
      },
      {
        name: 'Vishal Paul',
        background: 'ML Engineer, Paypal',
      },
      {
        name: 'Sachin Jha',
        background: 'SIH Evaluator\'25, Research Analyst@ IP House',
      }
    ],
    outcome: 'Strict fair-play and no-AI policies with live proctoring ensured a transparent and challenging competition, culminating in the top 12 teams competing in the Grand Finale.',
  },
  {
    id: '12',
    title: 'CyberCTF (Margazhi)',
    date: 'December 2025',
    description: 'Four-day solo cybersecurity competition featuring hands-on workshop and two 24-hour CTF rounds.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    registrations: '550+',
    activities: 'Workshop led by industry expert introducing core cybersecurity concepts and CTF methodologies. Competition progressed from beginner-to-intermediate challenges to Hard and Insane difficulty levels across Web Security, OSINT, and Cryptography.',
    guests: [
      {
        name: 'Priyan S',
        background: 'Cybersecurity Corporate Trainer',
      }
    ],
    youtubeLink: 'https://youtube.com/watch',
    outcome: 'Emerged as one of the most registered and actively participated technical events, offering a highly competitive, skill-driven learning experience and certificates for Round 1 qualifiers.',
  },
  {
    id: '11',
    title: 'DSATHON 2.0',
    date: 'November 2, 2025',
    description: 'Fast-paced competitive programming event designed to test participants\' problem-solving skills and core understanding of Data Structures and Algorithms.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=600&fit=crop',
    activities: 'Conducted on GeeksforGeeks. 90-minute contest emphasizing pure logic and time efficiency, with no external assistance.',
    outcome: 'Enthusiastic participation from IITM BS learners, fostering a high-energy competitive environment and reinforcing strong DSA fundamentals through leaderboard-based evaluation.',
  },
  {
    id: '10',
    title: 'AI Genesis (With Nilgiri, Nallamala and Sunderbans houses)',
    date: 'September 19-21, 2025',
    description: 'Three-day Agentic AI learning series introducing participants to the fundamentals of AI agents, hands-on agentic framework development, and career pathways in Agentic AI.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    activities: 'Designed for learners ranging from beginners to advanced levels, fostering technical curiosity, practical understanding, and future-ready thinking.',
    guests: [
      {
        name: 'Dhaval Maheta',
        background: 'Professor and trainer for Data Science, AI and ML',
      },
      {
        name: 'Siddhant Pandey',
        background: 'AI Research Engineer, Codebasics',
      },
      {
        name: 'Srinivasan Ramanujam',
        background: 'Founder, Deep Mind Systems',
      }
    ],
    youtubeLink: 'https://youtube.com/watch',
    outcome: 'Successfully introduced participants to the rapidly evolving field of Agentic Artificial Intelligence.',
  },
  {
    id: '9',
    title: 'Algowars (Saavan)',
    date: 'September 19-21, 2025',
    description: 'Competitive programming event designed to test participants\' proficiency in Data Structures and Algorithms through a two-round format.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    registrations: '648 (highest for any technical event in Saavan\'25)',
    activities: 'Hosted on HackerRank with automated judging and strict online proctoring.',
    outcome: 'Successfully fostered a strong competitive coding culture and witnessed enthusiastic participation from the student community.',
  },
  {
    id: '8',
    title: 'Codeveda (with club Garuda, Manipal University, Jaipur)',
    date: 'July 25-27, 2025',
    description: 'CODEVEDA\'25 – Code for Dharma, Build for Impact. A national-level online hackathon blending Vedic wisdom with modern technological innovation.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop',
    activities: 'Three-day hackathon featuring a structured three-round format, guiding participants from ideation to real-time prototyping.',
    guests: [
      {
        name: 'Dinesh Ilindra',
        background: 'CTO and Co-founder, Aerosimple',
      },
      {
        name: 'Navya Sharma',
        background: 'Software Engineer, Google',
      },
      {
        name: 'Pratham Batra',
        background: 'Co-founder, Geekroom',
      }
    ],
    outcome: 'Encouraged participants from across India to build purpose-driven solutions addressing real-world challenges, fostering creativity, collaboration, and impact-oriented problem-solving.',
  },
  {
    id: '7',
    title: 'CyberSprint (In collaboration with Nilgiri and Kanha houses)',
    date: 'June 20-30, 2025',
    description: 'Comprehensive 10-day cybersecurity learning series covering core cybersecurity concepts, ethical hacking, secure AI systems, web vulnerabilities, and CTF training.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    registrations: '1100+',
    activities: 'Five carefully curated sessions featuring real-world tools and techniques such as OSINT, Burp Suite, SQL Injection, and XSS.',
    guests: [
      {
        name: 'Nishant Mehta',
        background: 'Deputy Manager, Protiviti, Cybersecurity Personal, IIM Nagpur',
      },
      {
        name: 'Dr Lalit Gupta',
        background: 'President, Cybersecurity Council of India',
      },
      {
        name: 'Mayank Kumar',
        background: 'Associate Security Engineer, PWC India',
      }
    ],
    youtubeLink: 'https://youtube.com/watch?session1',
    outcome: 'Successfully blended theoretical knowledge with practical learning, culminating in a CTF-focused workshop and hackathon that encouraged problem-solving and collaboration.',
  },
  {
    id: '6',
    title: 'Inter House Codewars',
    date: 'May 2-10, 2025',
    description: 'The first-ever competitive coding event among the 12 houses of the IITM BS program.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    registrations: '400+',
    guests: [
      {
        name: 'Mr. Manav Gupta',
        background: 'Dynamic AI engineer with expertise in ML, NLP, and LLMs. 3x Kaggle Expert. Built RAG systems, CDSS pipelines at Innovaccer, and AI tools for the visually impaired. Led AI at YogLeads, 100x Engineers, and Perception.ai. Judged hackathons including SIH 2024. Mentor, content creator, speedcuber, chess player, and poet. Completed 50+ hackathons and shared 100+ Kaggle notebooks. 14k+ LinkedIn and 200k+ Instagram followers.',
      }
    ],
    youtubeLink: 'https://youtube.com/watch',
    outcome: 'Strong participation reflecting peer learning, house identity, and practical application of programming concepts in a structured, competitive environment.',
  },
  {
    id: '5',
    title: 'GitHub Masterclass Session',
    date: 'April 6, 2025',
    description: 'Hands-on session covering Git basics, version control, and open-source collaboration.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop',
    activities: 'Cheat sheets, reference materials, and live demos were shared with participants.',
    outcome: 'Increased proficiency in version control tools and confidence in contributing to collaborative coding projects.',
  },
  {
    id: '4',
    title: 'Guest Speaker Session - Introduction to Data Analytics',
    date: 'January 19, 2025',
    description: 'Comprehensive introduction to data analytics with industry expert.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    guests: [
      {
        name: 'Ms. Shakra Shamim',
        background: 'Business Analyst at Amazon with 3+ years of experience in data analysis, automation, and visualization using SQL, Python, Selenium, Excel, and Amazon QuickSight. Previously worked with Myntra, MiQ, and Cognizant. BSc IT graduate from Marwari College. Prominent content creator with 180K+ LinkedIn followers, 64K+ YouTube subscribers, and 248K+ Instagram followers.',
      }
    ],
    youtubeLink: 'https://youtube.com/watch',
    outcome: 'Participants gained practical insights into data analytics tools and industry best practices.',
  },
  {
    id: '3',
    title: 'DSATHON – by Codecrafters x Corbett',
    date: 'November 7 - December 3, 2024',
    description: 'Collaborative event focused on data structures, algorithms, and real-world problem-solving.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    highlights: 'Comprehensive DSA competition fostering algorithmic thinking and problem-solving skills.',
    outcome: 'Successfully enhanced participants\' understanding of data structures and algorithms through practical challenges.',
  },
  {
    id: '2',
    title: 'Guest Speaker Session - Bridging the Gap Between Academics and Industry (AI/ML)',
    date: 'September 29, 2024',
    description: 'Industry expert session on bridging academics and AI/ML industry practices.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
    guests: [
      {
        name: 'Mr. Atul Yadav',
        background: 'Technology expert with 16+ years of experience in MLOps, DataOps, DevOps, and cloud engineering. Worked with Alcatel-Lucent, Huawei, Ericsson, Lowe\'s, and Stryker. Founder of X-TechStacks and a LinkedIn thought leader with 10K+ followers.',
      }
    ],
    youtubeLink: 'https://youtube.com/watch',
    outcome: 'Insightful session connecting academic knowledge with industry requirements in AI/ML.',
  },
  {
    id: '1',
    title: 'Google Gen AI Hackathon – Team Building & Mentorship',
    date: 'September 5-10, 2024',
    description: 'Participants were carefully selected based on their interest and enthusiasm for generative AI.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    activities: 'Team formation exercises, guided mentorship on GenAI use cases, and ideation sessions to shape project ideas.',
    outcome: 'Participants received continuous guidance throughout the hackathon, gaining hands-on exposure to generative AI tools and concepts. The initiative fostered collaborative learning and practical application of AI in real-world scenarios.',
  },
];

export const COUNCIL: CouncilMember[] = [
  // Core Team (Top 4)
  {
    id: '1',
    name: 'Aravind K.',
    role: 'President',
    photo: 'https://picsum.photos/300/300?random=4',
    bio: 'Passionate full-stack developer and community builder. Leading CodeCrafters to new heights.',
    linkedin: '#',
    github: '#',
  },
  {
    id: '2',
    name: 'Sneha R.',
    role: 'Vice President',
    photo: 'https://picsum.photos/300/300?random=5',
    bio: 'AI enthusiast with a knack for system architecture. Loves solving complex problems.',
    linkedin: '#',
    github: '#',
  },
  {
    id: '3',
    name: 'Rahul V.',
    role: 'Secretary',
    photo: 'https://picsum.photos/300/300?random=6',
    bio: 'Organizer extraordinaire. Ensuring every hackathon and workshop runs smoothly.',
    linkedin: '#',
  },
  {
    id: '4',
    name: 'Priya M.',
    role: 'Tech Lead',
    photo: 'https://picsum.photos/300/300?random=7',
    bio: 'Creative soul obsessed with pixels and user experience. Making things look good.',
    linkedin: '#',
    github: '#',
  },
  // Heads
  { id: '5', name: 'Vikram S.', role: 'Web Head', photo: 'https://picsum.photos/300/300?random=20', bio: 'React Wizard.', linkedin: '#' },
  { id: '6', name: 'Ananya P.', role: 'App Head', photo: 'https://picsum.photos/300/300?random=21', bio: 'Flutter Expert.', linkedin: '#' },
  { id: '7', name: 'Karthik J.', role: 'AI Head', photo: 'https://picsum.photos/300/300?random=22', bio: 'Data Scientist.', linkedin: '#' },
  { id: '8', name: 'Rohan D.', role: 'CP Head', photo: 'https://picsum.photos/300/300?random=23', bio: 'Algorithm Master.', linkedin: '#' },
  { id: '9', name: 'Meera L.', role: 'Design Head', photo: 'https://picsum.photos/300/300?random=24', bio: 'UI/UX Artist.', linkedin: '#' },
  { id: '10', name: 'Sanjay B.', role: 'Cyber Head', photo: 'https://picsum.photos/300/300?random=25', bio: 'Security Analyst.', linkedin: '#' },
  { id: '11', name: 'Divya K.', role: 'Events Head', photo: 'https://picsum.photos/300/300?random=26', bio: 'Logistics Queen.', linkedin: '#' },
  { id: '12', name: 'Arjun M.', role: 'Marketing Head', photo: 'https://picsum.photos/300/300?random=27', bio: 'Social Media Guru.', linkedin: '#' },
  // Coordinators
  { id: '13', name: 'Naveen T.', role: 'Web Co-ord', photo: 'https://picsum.photos/300/300?random=28', bio: 'Frontend Dev.', linkedin: '#' },
  { id: '14', name: 'Pooja S.', role: 'App Co-ord', photo: 'https://picsum.photos/300/300?random=29', bio: 'Android Dev.', linkedin: '#' },
  { id: '15', name: 'Varun R.', role: 'AI Co-ord', photo: 'https://picsum.photos/300/300?random=30', bio: 'ML Engineer.', linkedin: '#' },
  { id: '16', name: 'Swati G.', role: 'CP Co-ord', photo: 'https://picsum.photos/300/300?random=31', bio: 'Competitive Coder.', linkedin: '#' },
  { id: '17', name: 'Deepak H.', role: 'Design Co-ord', photo: 'https://picsum.photos/300/300?random=32', bio: 'Graphic Designer.', linkedin: '#' },
  { id: '18', name: 'Amit K.', role: 'Cyber Co-ord', photo: 'https://picsum.photos/300/300?random=33', bio: 'Ethical Hacker.', linkedin: '#' },
  { id: '19', name: 'Neha J.', role: 'Events Co-ord', photo: 'https://picsum.photos/300/300?random=34', bio: 'Event Planner.', linkedin: '#' },
  { id: '20', name: 'Rajesh P.', role: 'Tech Co-ord', photo: 'https://picsum.photos/300/300?random=35', bio: 'Backend Dev.', linkedin: '#' },
  { id: '21', name: 'Simran K.', role: 'Content Co-ord', photo: 'https://picsum.photos/300/300?random=36', bio: 'Writer.', linkedin: '#' },
];

export const STATS: Stat[] = [
  { label: 'Active Members', value: '500+' },
  { label: 'Projects Shipped', value: '45+' },
  { label: 'Events Hosted', value: '20+' },
  { label: 'Hackathon Wins', value: '12' },
];
