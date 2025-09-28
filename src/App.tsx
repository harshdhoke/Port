import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink, 
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
  MapPin,
  Calendar,
  Star,
  Award,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-800">Harsh Dhoke</h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Available for Full-time Opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Harsh</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Software Engineer & Competitive Programmer
              </p>
              <p className="text-lg mb-8 text-blue-200 leading-relaxed">
                Master's student at NIT Rourkela with expertise in full-stack development, 
                machine learning, and distributed systems. 5-star CodeChef coder in top 0.1% nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/src/Image.png"   // replace with your actual image path
                    alt="Harsh Dhoke"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-3 animate-bounce">
                <Star className="h-6 w-6 text-yellow-800" />
              </div>
              <div className="absolute bottom-8 left-4 bg-emerald-400 rounded-full p-3 animate-pulse">
                <Code className="h-6 w-6 text-emerald-800" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Software Engineer & Problem Solver</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Recently completed Master of Technology in Computer Science and Engineering at 
                National Institute of Technology (NIT), Rourkela (2023-2025). I specialize in 
                building scalable full-stack applications and have a passion for competitive programming.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With hands-on experience at Samsung Research and Acclaim Coding Solutions, I've worked 
                on everything from ML-integrated web applications to enterprise-grade internal tools. 
                My expertise spans across modern web technologies, cloud platforms, and distributed systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">M.Tech at NIT Rourkela</span>
                </div>
                <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-emerald-800 font-medium">Bangalore, India</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                <Trophy className="h-8 w-8 mb-4" />
                <h4 className="text-lg font-bold mb-2">5★ CodeChef</h4>
                <p className="text-sm opacity-90">Top 0.1% in India</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white">
                <Award className="h-8 w-8 mb-4" />
                <h4 className="text-lg font-bold mb-2">IEEE Published</h4>
                <p className="text-sm opacity-90">Research Paper</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                <Briefcase className="h-8 w-8 mb-4" />
                <h4 className="text-lg font-bold mb-2">Samsung</h4>
                <p className="text-sm opacity-90">SWE Intern 2025</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                <Code className="h-8 w-8 mb-4" />
                <h4 className="text-lg font-bold mb-2">Full-Stack</h4>
                <p className="text-sm opacity-90">MERN Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {/* Samsung Research */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Engineer Intern</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">Samsung Research</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Bangalore, Karnataka</span>
                  </div>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Jan 2025 – Jul 2025</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Improved camera image processing efficiency by 25%
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Architected full-stack internal tool for sensor configuration
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Implemented database locking and version control systems
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Integrated CI/CD pipelines with Docker & Kubernetes
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['ReactJS', 'ExpressJS', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'Git/GitHub', 'Linux'].map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Acclaim Coding Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Development Engineer Intern</h3>
                  <p className="text-xl text-emerald-600 font-semibold mb-2">Acclaim Coding Solutions</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Chikkaballapur, Karnataka</span>
                  </div>
                </div>
                <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-lg">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-emerald-800 font-medium">Jan 2023 – Jun 2023</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Increased user engagement by 30%
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Built production-ready web apps integrating ML models
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Developed scalable backend components
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'ReactJS', 'Machine Learning', 'Figma', 'HTML/CSS'].map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sign Language Translator */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Sign Language Translator</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Machine Learning model for real-time sign language classification with 92% accuracy, 
                enabling translation of sign language to text and speech using OpenCV and KNN algorithm.
              </p>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Accuracy Rate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <span className="text-sm text-blue-600 font-semibold">92%</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'OpenCV', 'KNN', 'Machine Learning', 'JavaScript', 'HTML/CSS'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    onClick={() => window.open("https://github.com/harshdhoke/Sign-Language-Identification-using-K_Nearest_Neighbor-Algorithm", "_blank")}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </button>

                  <button 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    onClick={() => window.open("https://sign-language-translator-using-knn.netlify.app/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </button>

              </div>
            </div>

            {/* YummyTummy */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">YummyTummy</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Full-stack MERN food delivery web application with custom APIs, cart & order tracking, 
                admin panel, Stripe payment integration, and JWT authentication.
              </p>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Load Time Improvement</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm text-emerald-600 font-semibold">15% faster</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Bcrypt'].map((tech) => (
                  <span key={tech} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button 
                    className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                    onClick={() => window.open("https://github.com/harshdhoke/YummyTummy", "_blank")}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </button>

                  <button 
                    className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                    onClick={() => window.open("https://yummytummy-jwzr.onrender.com/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Programming Languages</h3>
              <div className="space-y-3">
                {[
                  { name: 'Java', level: 90 },
                  { name: 'JavaScript', level: 95 },
                  { name: 'Python', level: 85 },
                  { name: 'C++', level: 90 },
                  { name: 'TypeScript', level: 80 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Frontend</h3>
              <div className="space-y-3">
                {[
                  { name: 'React.js', level: 95 },
                  { name: 'HTML/CSS', level: 90 },
                  { name: 'Tailwind CSS', level: 85 },
                  { name: 'Bootstrap', level: 80 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Backend & Database</h3>
              <div className="space-y-3">
                {[
                  { name: 'Node.js', level: 90 },
                  { name: 'Express.js', level: 85 },
                  { name: 'MongoDB', level: 80 },
                  { name: 'MySQL', level: 85 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">DevOps & Tools</h3>
              <div className="space-y-3">
                {[
                  { name: 'Docker', level: 80 },
                  { name: 'Kubernetes', level: 75 },
                  { name: 'AWS', level: 70 },
                  { name: 'Git/GitHub', level: 95 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">5★ CodeChef Coder</h3>
              </div>
              <p className="text-lg font-semibold mb-2">Max Rating: 2045</p>
              <p className="opacity-90">Top 0.1% in India</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">IEEE Publication</h3>
              </div>
              <p className="text-lg font-semibold mb-2">Research Paper</p>
              <p className="opacity-90">11th International Conference (ICETET SIP-23)</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">GATE 2023</h3>
              </div>
              <p className="text-lg font-semibold mb-2">Qualified</p>
              <p className="opacity-90">Commendable Gate Score</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">1st Rank</h3>
              </div>
              <p className="text-lg font-semibold mb-2">Project Competition</p>
              <p className="opacity-90">Brain Waves - Maharashtra Division</p>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-pink-500 p-8 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">All India Rank 47</h3>
              </div>
              <p className="text-lg font-semibold mb-2">Get-Set-Hack</p>
              <p className="opacity-90">Rise WPU (20,000+ participants)</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">Global Rank 2564</h3>
              </div>
              <p className="text-lg font-semibold mb-2">Google HashCode</p>
              <p className="opacity-90">200,000+ participants worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and competitive programming.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              <div className="space-y-6">
                <a href="mailto:harshdhoke0@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">harshdhoke0@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919158524227" className="flex items-center group">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91 9158524227</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/harsh-dhoke-23a6a81a8/" className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-gray-300">linkedin.com/in/harsh-dhoke</p>
                  </div>
                </a>
                <a href="https://github.com/harshdhoke/" className="flex items-center group">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-gray-300">github.com/harsh-dhoke</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form 
                action="https://formspree.io/f/xovkjyak" 
                method="POST" 
                className="space-y-4"
              >
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea 
                  rows={6} 
                  name="message"
                  placeholder="Your Message" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Harsh Dhoke. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;