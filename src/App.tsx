import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, FileTextIcon } from 'lucide-react';
import ParticleRing from './components/ParticleRing';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import SkillCard from './components/SkillCard';
import datics from '../src/images/datics.png';
import infosys from '../src/images/infosys.png';
import smc from '../src/images/smc.png';
import vehicle1 from '../src/images/New folder/vehicle1.png';
import vehicle2 from '../src/images/New folder/vehicle2.jpg';
import vehicle3 from '../src/images/New folder/vehicle3.jpeg';
import vehicle4 from '../src/images/New folder/vehicle4.jpeg';
import arvr1 from '../src/images/New folder/arvr1.jpeg';
import arvr2 from '../src/images/New folder/arvr2.jpeg';
import arvr3 from '../src/images/New folder/arvr3.jpeg';
import calc1 from '../src/images/New folder/calc1.jpeg';
import calc2 from '../src/images/New folder/calc3.jpg';
import calc3 from '../src/images/New folder/calc2.jpg';
import portfolio1 from '../src/images/New folder/portfolio1.jpeg';
import portfolio2 from '../src/images/New folder/portfolio2.jpg';
import portfolio3 from '../src/images/New folder/portfolio3.jpg';
import portfolio4 from '../src/images/New folder/portfolio4.jpg';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMailto = (event: React.FormEvent) => {
    event.preventDefault();
    const mailtoLink = `mailto:chinmayeep141@gmail.com?subject=New Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      role: "Software Developer",
      company: "Datics Inc",
      period: "Aug, 2024 - Dec, 2024",
      description: "Experienced Software Developer with expertise in Java 8, Spring Boot, Hibernate, and React.js. Led the development of an e-commerce platform, optimizing real-time inventory management and payment processing. Enhanced performance with React optimizations and PostgreSQL tuning. Streamlined deployment workflows using Jenkins and Docker, reducing deployment times by 30%.",
      image: `${datics}`,
    },
    {
      role: "Full Stack Developer",
      company: "Infosys Ltd",
      period: "Aug, 2021 - Jan, 2023",
      description: "Full Stack Developer skilled in Angular, Node.js, TypeScript, Java 8, and Spring Boot. Built interactive dashboards and landing pages, driving user engagement. Developed RESTful APIs and a real-time customer feedback system. Optimized MySQL data storage and AWS deployments for scalability. Streamlined CI/CD with Docker, Jenkins, and Git, reducing deployment times and ensuring release reliability.",
      image: `${infosys}`,
    },
    {
      role: "Java Full Stack Developer",
      company: "Sri Maharshi Consultancies",
      period: "Jul, 2019 - Jul, 2021",
      description: "In the LENDING MASTER project, built a loan tracking system for microfinance firms with Java, Spring Boot, MySQL, Angular, and React. Automated tasks with PL/SQL, and managed projects in Agile using JIRA. Optimized build and deployment with Maven and Jenkins, reducing delivery time and production errors.",
      image: `${smc}`,
    }
  ];

  const skills = [
    "Angular",
    "HTML",
    "CSS",
    "Git",
    "Java",
    "MySQL",
    "TypeScript",
    "Spring",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "PostgreSQL",
  ];

  const projects = [
    {
      title: "Vehicle Survelliance System",
      description: "Automated Number Plate Recognition based smart parking system that automates vehicle entry, parking allocation, and security logging for business complexes and gated societies.",
      longDescription: "This system captures vehicle images using CCTV, extracts license plate numbers with OpenCV, and automates parking management. Businesses can offer pre-registered parking, while gated societies maintain real-time logs of resident and visitor vehicles, ensuring security and efficiency.",
      technologies: ["Java", "OpenCV", "JSP", "MySQL", "ANPR", "Image Processing"],
      keyfeatures: [
        {
          feature: "ANPR-Based Vehicle Detection",
          featuredesc: "The system captures images of vehicles and uses OpenCV to process and extract license plate numbers automatically."
        },
        {
          feature: "Pre-Registered Parking Allocation",
          featuredesc: "Allocates parking spaces for pre-registered vehicles in business complexes or societies, improving space management."
        },
        {
          feature: "Visitor Tracking & Notifications",
          featuredesc: "Tracks visitors’ vehicles, logs entry and exit times, and sends real-time notifications to residents."
        },
        {
          feature: "Database Management",
          featuredesc: "Stores and retrieves vehicle data efficiently using MySQL, allowing easy access to historical records and management."
        },
        {
          feature: "Admin Dashboard",
          featuredesc: "A user-friendly dashboard for administrators to monitor and manage vehicle logs, parking allocations, and visitor details."
        },
      ],
      steps: [
        {
          title: "Environment Setup & System Design",
          description: "I started by setting up the development environment using Java, OpenCV for image processing, JSP for the front-end interface, and MySQL for database management. Integration with CCTV cameras was also configured for real-time vehicle image capture. I designed the system’s architecture, including the database schema for vehicle logs, parking allocation, and visitor data.",
          image: `${vehicle1}`
        },
        {
          title: "ANPR Implementation & Parking Management",
          description: "The system's core functionality was built by implementing the Automated Number Plate Recognition (ANPR) feature using OpenCV to extract license plate numbers from vehicle images. I also created the logic for allocating pre-registered vehicles to available parking spaces based on the database, ensuring efficient space management.",
          image: `${vehicle2}`
        },
        {
          title: "Visitor Tracking & Admin Dashboard",
          description: "I developed a tracking system for logging visitor vehicles and sending real-time notifications to residents. Using JSP, I built an admin dashboard that allows administrators to view and manage vehicle logs, parking allocations, and visitor details, providing them with an overview of the system's status.",
          image: `${vehicle3}`
        },
        {
          title: "Testing & Optimization",
          description: "Finally, I conducted thorough testing of the system to ensure accurate license plate recognition, correct parking allocation, and real-time notifications. I optimized the image processing for faster performance and ensured that the system could handle simultaneous vehicle registrations and data processing.",
          image: `${vehicle4}`
        }
      ],
      link: "https://github.com/chinmayee86/VSAGS",
      githubLink: "https://github.com/chinmayee86/VSAGS"
    },
    {
      title: "Augmented and Virtual Reality for Smart Learning & Immersive Entertainment",
      description: "A hybrid system that integrates Augmented Reality (AR) for digital classrooms and Virtual Reality (VR) for entertainment, enhancing interactive learning and immersive media experiences.",
      longDescription: "This project leverages computer vision and feature detection to automate video retrieval based on real-world interactions. In digital classrooms, AR recognizes image cards or hand gestures to trigger relevant educational videos, enriching student engagement. The VR component focuses on entertainment, where recognized images play immersive 3D videos, allowing users to feel like they are inside a virtual scene. By utilizing ORB (Oriented FAST and Rotated BRIEF) feature detection and FLANN-based matching, the system ensures high accuracy in image recognition, enabling seamless content retrieval for both education and entertainment.",
      technologies: ["Python", "OpenCV","ORB","FLANN", "ffplayer", "ORB Recognition", "3D Modeling"],
      keyfeatures: [
        {
          feature: "AR Interaction",
          featuredesc: "Allows users to interact with 3D virtual objects overlaid on real-world environments through their mobile devices or AR glasses."
        },
        {
          feature: "VR Immersion",
          featuredesc: "Provides fully immersive 3D environments where users can interact with virtual worlds using VR headsets."
        },
        {
          feature: "User Interface",
          featuredesc: "A custom UI that enables easy navigation and interaction within both AR and VR environments."
        }
      ],
      steps: [
        {
          title: "AR-Based Smart Learning System",
          description: "The system captures real-time images of educational materials using a camera and processes them with OpenCV and ORB feature detection. When an instructor shows an image card, the system matches it with a pre-stored database and plays the corresponding lecture video. This enables hands-free interaction, allowing teachers to seamlessly switch between real and digital content without interrupting the lesson.",
          image: `${arvr1}`
        },
        {
          title: "VR Entertainment for Immersive Experiences",
          description: "The VR module enhances entertainment applications by recognizing predefined image markers and retrieving 3D videos. Using Brute-Force Matching (BFMatcher) and ORB, the system detects the best match from a database and plays immersive media through ffpyplayer. This enables users to experience content in stereoscopic 3D, making them feel inside the scene.",
          image: `${arvr2}`
        },
        {
          title: "System Integration & User Interaction",
          description: "The AR and VR functionalities are seamlessly integrated into a single system, allowing smooth transitions between learning and entertainment applications. In classrooms, teachers can control playback with gestures or images, ensuring a natural teaching flow. For entertainment, users can scan an image to trigger interactive video experiences, enhancing engagement and realism.",
          image: `${arvr3}`
        }
      ],
      link: "https://github.com/chinmayee86/ARFYP",
      githubLink: "https://github.com/chinmayee86/ARFYP"
    },
    {
      title: "Hand Gesture Controlled Virtual Calculator",
      description: "A hands-free virtual calculator that uses hand gestures via webcam for arithmetic operations, enhancing accessibility and efficiency with MediaPipe and machine learning.",
      longDescription: "This project leverages computer vision and machine learning to recognize hand gestures and map them to numeric inputs and arithmetic operations. Using MediaPipe for hand tracking and a Random Forest classifier for gesture recognition, the system translates detected hand movements into commands for a virtual calculator. The goal is to improve the usability, accessibility, and efficiency of computation by replacing conventional keyboards with an intuitive, hands-free alternative.",
      technologies: ["Python", "OpenCV", "Mediapipe", "Radom Forest Classifier", "Machine Learning", "Computer Vision"],
      keyfeatures: [
        {
          feature: "Gesture Recognition",
          featuredesc: "Detects and interprets hand gestures using a webcam or camera, translating them into calculator operations."
        },
        {
          feature: "Virtual Calculator Interface",
          featuredesc: "Provides a visual calculator interface on the screen that updates based on recognized gestures."
        },
        {
          feature: "Real-Time Processing",
          featuredesc: "Processes hand gestures in real-time, ensuring smooth and responsive user interaction."
        },
        {
          feature: "Basic Arithmetic Operations",
          featuredesc: "Supports basic arithmetic operations like addition, subtraction, multiplication, division etc."
        },
        {
          feature: "Hands-Free Operation",
          featuredesc: "Offers a hands free method of interacting with the calculator, improving accessibility and usability."
        }
      ],
      steps: [
        {
          title: "Hand Gesture Recognition & Feature Extraction",
          description: "The system captures live hand gestures using a webcam and processes them with MediaPipe, extracting 21 hand landmark coordinates. These landmarks are normalized and converted into feature vectors for model training. The dataset includes multiple hand gestures collected under varying lighting conditions, distances, and angles to improve accuracy.",
          image: `${calc1}`
        },
        {
          title: "Machine Learning-Based Gesture Classification",
          description: "A Random Forest classifier is trained on a dataset of labeled hand gestures, achieving high accuracy in recognizing numeric values (0-9), arithmetic operators (+, -, *, /), and control commands (confirm, clear, etc.). The trained model is tested with real-time video input to ensure robust classification.",
          image:`${calc2}`
        },
        {
          title: "Virtual Calculator Integration & Real-Time Operation",
          description: "The recognized gestures are used to control a three-digit virtual calculator developed using OpenCV. Users enter numbers, select arithmetic operators, and confirm operations by holding gestures for predefined durations. The system processes calculations and displays results in real time, providing an intuitive and interactive experience.",
          image: `${calc3}`
        }
      ],
      link: "https://github.com/chinmayee86/HGCVC",
      githubLink: "https://github.com/chinmayee86/HGCVC"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, fast, and responsive portfolio built with React, Vite, and TypeScript, showcasing projects, skills, and experience with an optimized and interactive UI.",
      longDescription: "This Personal Portfolio Website is an interactive, visually appealing platform designed to showcase my professional background, skills, and achievements. The primary objective of this project is to provide potential employers, clients, and collaborators with an accessible and engaging way to explore my work and capabilities. Built with React, Vite, and TypeScript, the website offers a sleek, fast, and user-friendly experience. Its clean design and smooth navigation ensure visitors can easily explore different sections, such as my professional journey, key projects, and contact information. The site is fully responsive, adapting seamlessly to desktop, tablet, and mobile devices.",
      technologies: ["React", "Vite", "TypeScript"],
      keyfeatures: [
        {
          feature: "Interactive Home Page",
          featuredesc: " A dynamic introduction with a brief bio and engaging animations to capture the visitor’s attention."
        },
        {
          feature: "About Me Section",
          featuredesc: "A detailed overview of my professional background, skills, and career highlights."
        },
        {
          feature: "Projects Showcase",
          featuredesc: "A display of key projects with descriptions, technologies used, and links to demos or repositories."
        },
        {
          feature: "Contact Form",
          featuredesc: "A simple form for visitors to send messages or inquiries directly to me."
        },
        {
          feature: "Responsive Design",
          featuredesc: "The website adapts seamlessly across all devices, providing a smooth experience on desktop, tablet, and mobile."
        },
        {
          feature: "Smooth Navigation and Animations",
          featuredesc: "Easy navigation with smooth scrolling and animated transitions for an interactive, engaging user experience."
        }
      ],
      steps: [
        {
          title: "Environment Setup & Project Structure",
          description: "I began by setting up the development environment using Vite for fast builds and TypeScript for type safety. I organized the project into reusable components, such as Header, About, Projects, Contact, and Footer. This modular approach helped maintain clean code and made future changes easier. I also installed dependencies like react-router-dom for routing and TailwindCSS for styling, while planning the layout with wireframes.",
          image: `${portfolio1}`
        },
        {
          title: "Component Development & Routing",
          description: "Next, I focused on building the individual components for each section of the site. The Header includes navigation links, while About and Projects feature content about my background and work. The Contact section allows visitors to send messages via a form. I used react-router-dom to handle routing, making it easy for users to navigate between sections and enhancing user experience with smooth scrolling.",
          image: `${portfolio2}`
        },
        {
          title: "Animations, Testing & Optimization",
          description: "To make the website engaging, I added subtle animations using CSS and framer-motion to key elements such as project cards and transitions. I also performed unit testing on individual components and tested the website’s performance, optimizing assets, compressing images, and ensuring it loaded quickly. Finally, I tested the responsiveness of the site across various devices to ensure it looked great on all screen sizes.",
          image: `${portfolio3}`
        },
        {
          title: "Deployment",
          description: "Once development and testing were complete, I built the production version of the website using npm run build and deployed it on GitHub Pages. This made my portfolio live and easily accessible for potential employers or collaborators to explore.",
          image: `${portfolio4}`
        }
      ],
      link: "https://github.com/chinmayee86/HGCVC",
      githubLink: "https://github.com/chinmayee86/HGCVC"
    }
  ];


  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextProject = () => {
    setSelectedProject((prev) => 
      prev === null ? 0 : prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevProject = () => {
    setSelectedProject((prev) => 
      prev === null ? projects.length - 1 : prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
      <div className="text-gray-800 min-h-screen">
        <ParticleRing />
        <Navbar />

              {/* Hero Section */}
              <section className="min-h-screen flex items-center justify-center relative">
                <div className="text-center space-y-6 p-4 fade-in">
                  <h1 className="text-6xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
                      Chinmayee Pendyala
                    </span>
                  </h1>
                  <p className="text-2xl text-gray-700">Full Stack Developer</p>
                  <div className="flex justify-center gap-6">
                    <a href="https://github.com/chinmayee86" className="hover:text-indigo-600 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/chinmayee0403/" className="hover:text-indigo-600 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:chinmayeep141@gmail.com" className="hover:text-indigo-600 transition-colors">
                      <Mail size={24} />
                    </a>
                    <a href="https://drive.google.com/file/d/1kuvZoYc8BzvVsgA0dnohXWk4pT5cR_aq/view?usp=sharing" className="hover:text-indigo-600 transition-colors">
                      <FileTextIcon size={24} />
                    </a>
                  </div>
                </div>
                <button
                  onClick={scrollToNext}
                  className="absolute bottom-10 animate-bounce hover:text-indigo-600 transition-colors"
                >
                  <ChevronDown size={32} />
                </button>
              </section>

              {/* About Section */}
              <Section id="about" title="About Me">
                <div className="max-w-3xl mx-auto text-gray-700 space-y-6 fade-in">
                  <p>
                    I’m a Full Stack Developer on a mission to craft applications that don’t just solve problems—they leave an impact. Think of me as a digital alchemist, transforming code into seamless, scalable experiences with Java, Spring Boot, Angular, and React at my fingertips.
                  </p>
                  <p>My world is all about blending back-end resilience with front-end elegance. From building robust APIs to deploying in the cloud, I’m the bridge between complex tech and intuitive design. I thrive on making the digital feel personal, crafting apps that are as engaging as they are powerful.</p>
                  <p>
                    Off the screen? I’m constantly in discovery mode, connecting with the latest tech, contributing to open-source, and staying on the edge of innovation. I believe in creating with intention, building with passion, and always leaving things better than I found them.
                  </p>

                </div>
              </Section>

              {/* Education and Certifications Section */}
              <Section id="education" title="Qualifications & Certifications">
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 fade-in">

                  {/* Education Section */}
                  <div>
                    <h3 className="text-2xl font-semibold" style={{ color: '#818cf8' }}>Education</h3>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <p className="font-medium">Master of Science in Computer Science</p>
                        <p className="text-sm">University of Central Missouri</p>
                        <p>Jan 2023 – Dec 2024</p>
                      </li>
                      <li>
                        <p className="font-medium">Bachelor of Technology in Information Technology</p>
                        <p className="text-sm">SRKR Engineering College</p>
                        <p>Aug 2017 – May 2021</p>
                      </li>
                    </ul>
                  </div>

                  {/* Certifications Section */}
                  <div>
                    <h3 className="text-2xl font-semibold" style={{ color: '#818cf8' }}>Certifications</h3>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <p className="font-medium">Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</p>
                      </li>
                    </ul>
                  </div>

                </div>
              </Section>


              {/* Experience Section */}
              <Section id="experience" title="Experience">
                <Timeline items={experiences} />
              </Section>

              {/* Skills Section */}
              <Section id="skills" title="Skills">
                <div className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 fade-in">
                  {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
                </div>
              </Section>

              {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer fade-in"
              onClick={() => handleProjectClick(index)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <ProjectDetails
          project={projects[selectedProject]}
          onClose={handleCloseProject}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}

              {/* Contact Section */}
              <Section id="contact" title="Get in Touch">
                <div className="max-w-xl mx-auto fade-in">
                  <form onSubmit={handleMailto} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-white/80 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-white/80 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-white/80 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </Section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-600 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Chinmayee Pendyala. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;