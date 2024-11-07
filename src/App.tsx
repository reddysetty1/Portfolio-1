import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import ParticleRing from './components/ParticleRing';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import SkillCard from './components/SkillCard';
import arvr1 from '../src/images/arvr1.webp';
import gesture1 from '../src/images/gesture1.webp';
import vehicle1 from '../src/images/vehicle1.webp';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      period: "Aug, 2024 - Present",
      description: "Experienced Software Developer with expertise in Java 8, Spring Boot, Hibernate, and React.js. Led the development of an e-commerce platform, optimizing real-time inventory management and payment processing. Enhanced performance with React optimizations and PostgreSQL tuning. Streamlined deployment workflows using Jenkins and Docker, reducing deployment times by 30%."
    },
    {
      role: "Full Stack Developer",
      company: "Infosys Ltd",
      period: "Aug, 2021 - Jan, 2023",
      description: "Full Stack Developer skilled in Angular, Node.js, TypeScript, Java 8, and Spring Boot. Built interactive dashboards and landing pages, driving user engagement. Developed RESTful APIs and a real-time customer feedback system. Optimized MySQL data storage and AWS deployments for scalability. Streamlined CI/CD with Docker, Jenkins, and Git, reducing deployment times and ensuring release reliability."
    },
    {
      role: "Java Full Stack Developer",
      company: "Sri Maharshi Consultancies",
      period: "Jul, 2019 - Jul, 2021",
      description: "In the LENDING MASTER project, built a loan tracking system for microfinance firms with Java, Spring Boot, MySQL, Angular, and React. Automated tasks with PL/SQL, and managed projects in Agile using JIRA. Optimized build and deployment with Maven and Jenkins, reducing delivery time and production errors."
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
          {[
            {
              title: "Vehicle Safe Park System",
              description: "ANPR Vehicle Log System using Java, OpenCV, JSP, MySQL",
              image: `${vehicle1}`,
              link: "https://github.com/chinmayee86/VSAGS"
            },
            {
              title: "AR Classroom Experience",
              description: "Digital Classroom App with ORB Recognition using OpenCV",
              image: `${arvr1}`,
              link: "https://github.com/chinmayee86/ARFYP"
            },
            {
              title: "Hand Gesture Calculator",
              description: "Hand Gesture-Based Calculator with Mediapipe, and OpenCV Integration",
              image: `${gesture1}`,
              link: "https://github.com/chinmayee86/HGCVC"
            }
          ].map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl fade-in">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-65 blue-lg object-cover transform group-hover:scale-110 group-hover:blur-0 transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  {project.title}
                  <a href={project.link} className="hover:text-indigo-600 transition-colors">
              <ExternalLink size={24} />
            </a>
                </h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

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