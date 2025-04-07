import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

// Skills Data with Transparent Backgrounds
const skills = [
  {
    name: "HTML",
    imageUrl: "https://i.ibb.co.com/vD7yky7/html-5-svgrepo-com.png",
  },
  { name: "CSS", imageUrl: "https://i.ibb.co/XsCzgdZ/4672509.png" },
  {
    name: "JavaScript",
    imageUrl:
      "https://i.ibb.co/XSjWDqn/javascript-logo-javascript-icon-transparent-free-png.webp",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "https://i.ibb.co.com/G9hfn8m/social-square.png",
  },
  { name: "React", imageUrl: "https://i.ibb.co.com/nnyGwqS/react.png" },
  {
    name: "React Router",
    imageUrl: "https://i.ibb.co.com/7j03tvX/React-Router-logo-vector-01.webp",
  },
  {
    name: "Next.Js",
    imageUrl: "https://i.ibb.co/N7FrTLX/nextjs-boilerplate-logo.png",
  },
  { name: "VueJs", imageUrl: "https://i.ibb.co.com/GvmZ0cK/vuejs.png" },
  {
    name: "Node.JS",
    imageUrl: "https://i.ibb.co.com/cDsWtZh/node-js-emblem-vector-28501403.png",
  },
  {
    name: "Express.Js",
    imageUrl:
      "https://www.domeniclabbate.com/_next/static/media/express.27b48634.png",
  },
  { name: "MongoDB", imageUrl: "https://i.ibb.co.com/VprbZL8/images.png" },
  { name: "Mongoose", imageUrl: "https://i.ibb.co/GkTRSrg/mongoose.png" },
  {
    name: "PostgreSQL",
    imageUrl:
      "https://res.cloudinary.com/diez3alve/image/upload/v1743934206/postgress_xgdm6b.png",
  },
  {
    name: "MySQL",
    imageUrl: "https://i.ibb.co/fGhD2LV/logo-mysql-cdb-for-mysql-7.png",
  },
  {
    name: "Supabase",
    imageUrl:
      "https://i.ibb.co.com/ZxXbpVC/supabase-logo-DCC676-FFE2-seeklogo-com.png",
  },
  { name: "Firebase", imageUrl: "https://i.ibb.co.com/N1kLXqm/firebase.png" },
  {
    name: "GitHub",
    imageUrl:
      "https://res.cloudinary.com/diez3alve/image/upload/v1743934427/github1_u9nqf4.png",
  },
  {
    name: "Git",
    imageUrl: "https://i.ibb.co.com/m6K0VCp/images11-removebg-preview.png",
  },
];

// Updated Projects Data with Tech Stack and Image
const projects = [
  {
    title: "Fitness Center",
    description:
      "Fitness centers are the best way to stay fit and keep good health .",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      " Mongoose",
      "TanStack Query",
      "Stripe",
      "JWT",
    ],
    image: "https://i.ibb.co/x1BJf5x/picture.png",
    href: "https://fitness-website-amber.vercel.app/",
  },
  {
    title: "BazarBD",
    description: "E-commerce platform for selling consumer goods.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "PostgresqlSQL",
      "TanStack Query",
      "Stripe",
      "React Hook Form",
      "JWT",
    ],
    image: "https://i.ibb.co.com/JtCdBLj/Screenshot-2024-11-28-164337.png",
    href: "https://bazar-bd.vercel.app/",
  },
  {
    title: "Restaurant",
    description:
      "Food selling platform for selling fast-food with some other's food item's",
    techStack: [
      "Vue.Js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      " Mongoose",
    ],
    image:
      "https://i.ibb.co.com/CnQV9wS/Screenshot-2-10-2024-19657-restaurant-beta-lemon-vercel-app.jpg",
    href: "https://restaurant-beta-lemon.vercel.app/",
  },
  {
    title: "Streme",
    description: "Video streaming platform, Play video for your entertainment.",
    techStack: [
      "Next.Js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      " Mongoose",
    ],
    image: "https://i.ibb.co/xDbddgt/image-1.jpg",
    href: "https://streme-eight.vercel.app/",
  },
  {
    title: "Home Decor",
    description: "E-commerce platform for selling  home decor items.",
    techStack: ["Next.Js", "Tailwind CSS", "Firebase", "MongoDB", " Mongoose"],
    image: "https://i.ibb.co/DpWjpMk/image-6.jpg",
    href: "https://next-js-full-stack-nu.vercel.app/",
  },
];

const App = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for hamburger menu

  // Handle section visibility on scroll
  // Handle section visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];
      let currentSection: string = "home";

      sections.forEach((section: string) => {
        const element: HTMLElement | null = document.getElementById(section);
        if (element) {
          const rect: DOMRect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navbar link click with smooth scroll
  const handleNavClick = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
    setIsMenuOpen(false); // Close the menu on link click
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Typewriter effect for the tagline in Hero section
  const [tagline, setTagline] = useState<string>("");
  const fullTagline: string =
    "A passionate Software Engineer specializing in full-stack development.";
  useEffect(() => {
    let i: number = 0;
    const type = (): void => {
      if (i < fullTagline.length) {
        setTagline(fullTagline.slice(0, i + 1));
        i++;
        setTimeout(type, 50);
      }
    };
    type();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="py-5 bg-gray-900 shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-400">
            Mujahidul Islam
          </h1>

          {/* Hamburger Menu Icon (Visible on Mobile) */}
          <button
            className="md:hidden text-gray-300 hover:text-indigo-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                // Close Icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon (Bars)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`flex-col md:flex-row gap-3 absolute md:static top-0 right-0 w-3/4 md:w-auto h-screen md:h-auto bg-gray-900/95 backdrop-blur-md md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out md:flex md:opacity-100 md:visible md:pointer-events-auto md:transform-none shadow-lg md:shadow-none rounded-l-xl md:rounded-none ${
              isMenuOpen
                ? "opacity-100 visible pointer-events-auto transform translate-x-0"
                : "opacity-0 invisible pointer-events-none transform translate-x-full md:translate-x-0"
            }`}
          >
            {/* Add padding to align with the header content */}
            <div className="pt-16 md:pt-0 flex flex-col md:flex-row items-start">
              {/* Close Button (Visible on Mobile) */}
              <button
                className="md:hidden text-gray-300 hover:text-indigo-400 focus:outline-none mb-6 px-2 flex items-center gap-2"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ScrollLink
                to="home"
                smooth={true}
                duration={800}
                offset={-80}
                className={`relative mx-3 text-lg md:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer py-2 md:py-0 ${
                  activeSection === "home" ? "text-indigo-400" : ""
                }`}
                onClick={() => handleNavClick("home")}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform transition-transform duration-300 ${
                    activeSection === "home" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 md:block hidden`}
                ></span>
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={800}
                offset={-80}
                className={`relative mx-3 text-lg md:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer py-2 md:py-0 ${
                  activeSection === "about" ? "text-indigo-400" : ""
                }`}
                onClick={() => handleNavClick("about")}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform transition-transform duration-300 ${
                    activeSection === "about" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 md:block hidden`}
                ></span>
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={800}
                offset={-80}
                className={`relative mx-3 text-lg md:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer py-2 md:py-0 ${
                  activeSection === "skills" ? "text-indigo-400" : ""
                }`}
                onClick={() => handleNavClick("skills")}
              >
                Skills
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform transition-transform duration-300 ${
                    activeSection === "skills" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 md:block hidden`}
                ></span>
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className={`relative mx-3 text-lg md:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer py-2 md:py-0 ${
                  activeSection === "projects" ? "text-indigo-400" : ""
                }`}
                onClick={() => handleNavClick("projects")}
              >
                Projects
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform transition-transform duration-300 ${
                    activeSection === "projects" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 md:block hidden`}
                ></span>
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className={`relative mx-3 text-lg md:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer py-2 md:py-0 ${
                  activeSection === "contact" ? "text-indigo-400" : ""
                }`}
                onClick={() => handleNavClick("contact")}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform transition-transform duration-300 ${
                    activeSection === "contact" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 md:block hidden`}
                ></span>
              </ScrollLink>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Element name="home">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 to-transparent"></div>
          <div className="relative   z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-white mb-4 animate-fade-in">
              Mujahidul Islam
            </h1>
            <p className=" text-wrap text-lg md:text-2xl text-gray-300 px-2 text-justify mb-8 md:animate-typewriter">
              {tagline}
              <span className="animate-blink">|</span>
            </p>
            <div className="flex justify-center gap-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="px-6 py-3 cursor-pointer bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "1000ms" }}
              >
                Get in Touch
              </ScrollLink>
              <Link
                to="https://drive.google.com/file/d/1xHs-zE7OTViskN2llHYKneBcxyp8fblb/view?usp=sharing"
                download
                target="_blank"
                className="px-6 py-3 cursor-pointer bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "1200ms" }}
              >
                Download Resume
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(23,37,84,0.1)_0%,_transparent_70%)]"></div>
          </div>
        </section>
      </Element>

      {/* About Section */}
      <Element name="about">
        <section
          id="about"
          className="relative py-20 bg-gradient-to-b from-gray-950 to-indigo-950 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 to-transparent"></div>
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[linear-gradient(135deg,_rgba(45,45,45,0.9)_50%,_transparent_50%)]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white animate-slide-in-left">
              About Me
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="relative flex-shrink-0">
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full transform scale-110 -z-10 animate-pulse-slow opacity-20"></div>
                  <div
                    className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-400 shadow-2xl animate-fade-in"
                    style={{ animationDelay: "200ms" }}
                  >
                    <img
                      src="https://i.ibb.co/ygLpwPN/01987064-removebg-preview.png"
                      alt="Mujahidul Islam"
                      className="w-full h-full object-fill"
                    />
                    <div className="absolute inset-0 bg-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div
                  className="relative bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-2xl animate-slide-in-right"
                  style={{ animationDelay: "400ms" }}
                >
                  <h3 className="text-3xl font-semibold text-indigo-400 mb-4">
                    Who I Am
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    I’m{" "}
                    <span className="font-bold text-white text-justify">
                      Mujahidul Islam
                    </span>
                    , a passionate Software Engineer and fresher eager to build
                    impactful web applications. I specialize in full-stack
                    development, with strong skills in React, Node.js, and
                    databases like MongoDB and PostgreSQL, honed through
                    hands-on projects and coursework. I’m driven by a love for
                    solving complex problems and creating seamless user
                    experiences. When I’m not coding, I’m exploring in emerging
                    technologies to stay ahead in the ever-evolving tech world.
                  </p>
                </div>
                <div
                  className="space-y-4 animate-slide-in-right"
                  style={{ animationDelay: "600ms" }}
                >
                  <h3 className="text-3xl font-semibold text-indigo-400 mb-6">
                    Quick Info
                  </h3>
                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-500/50"></div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold transform group-hover:scale-110 transition-transform duration-300">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-medium text-indigo-400">
                            Role
                          </p>
                          <p className="text-gray-300">Software Engineer</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold transform group-hover:scale-110 transition-transform duration-300">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-medium text-indigo-400">
                            Focus
                          </p>
                          <p className="text-gray-300">
                            Full-Stack Development
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold transform group-hover:scale-110 transition-transform duration-300">
                          3
                        </div>
                        <div>
                          <p className="text-sm font-medium text-indigo-400">
                            Location
                          </p>
                          <p className="text-gray-300">Dhaka, Bangladesh</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold transform group-hover:scale-110 transition-transform duration-300">
                          4
                        </div>
                        <div>
                          <p className="text-sm font-medium text-indigo-400">
                            Email
                          </p>
                          <p className="text-gray-300">
                            developermujahid2001@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold transform group-hover:scale-110 transition-transform duration-300">
                          5
                        </div>
                        <div>
                          <p className="text-sm font-medium text-indigo-400">
                            GitHub
                          </p>
                          <p className="text-gray-300">
                            <Link
                              to="https://github.com/Mujahid2000"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-400 hover:underline"
                            >
                              github.com/Mujahid2000
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <section id="skills" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white animate-slide-in-left">
              My Tech Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-gray-700 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-16 h-16 mb-3">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      style={{ background: "none" }}
                    />
                    <div className="absolute inset-0 rounded-full  bg-opacity-0 group-hover:bg-opacity-20 blur-md transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm font-medium text-center text-gray-200 group-hover:text-indigo-300 transition-colors duration-300">
                    {skill.name}
                  </p>
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl  bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <section id="projects" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white animate-fade-in">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group animate-fade-in-scale"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project?.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                      {project?.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      {project?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.techStack?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/50 transform group-hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={project?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 hover:scale-105 transition-all duration-300 relative z-10"
                    >
                      Live Link
                    </Link>
                  </div>
                  {/* Subtle Border Effect */}
                  <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 shadow-[0_0_30px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500 rounded-xl pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section
          id="contact"
          className="relative py-20 bg-gradient-to-b from-gray-950 to-indigo-950 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 to-transparent"></div>
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(23,37,84,0.1)_0%,_transparent_70%)]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white animate-slide-in-left">
              Let’s Connect
            </h2>
            <p
              className="text-lg text-gray-300 text-center mb-12 animate-slide-in-right"
              style={{ animationDelay: "200ms" }}
            >
              I’d love to hear from you! Whether you have a project in mind or
              just want to chat, feel free to reach out.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div
                className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-2xl animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div
                className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-2xl animate-fade-in"
                style={{ animationDelay: "600ms" }}
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-400 text-2xl">✉︎</span>
                    <div>
                      <p className="text-sm font-medium text-indigo-400">
                        Email
                      </p>
                      <p className="text-gray-300">
                        developermujahid2001@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-400 text-2xl">🏠︎</span>
                    <div>
                      <p className="text-sm font-medium text-indigo-400">
                        Location
                      </p>
                      <p className="text-gray-300">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-indigo-400 mt-8 mb-4">
                  Follow Me
                </h3>
                <div className="flex md:justify-start gap-6">
                  <Link
                    to="https://github.com/Mujahid2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-8 h-8 fill-current transform group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.86 0 1.73.12 2.54.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.25.68.76.68 1.53v2.26c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmujahidul-islam-07b5a42a0%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-8 h-8 fill-current transform group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.5c-.96 0-1.5-.68-1.5-1.5s.54-1.5 1.5-1.5 1.5.68 1.5 1.5-.54 1.5-1.5 1.5zm13.5 10.5h-3v-4.5c0-1.13-.4-1.9-1.4-1.9-.76 0-1.2.51-1.4 1v5.4h-3v-9h3v1.2c.4-.62 1.1-1.2 2-1.2 2.1 0 3.4 1.4 3.4 4.2v4.8z" />
                    </svg>
                  </Link>
                  <Link
                    to="https://x.com/MujahidulI36989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-8 h-8 fill-current transform group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2 .97-3.12 1.19-.89-.95-2.16-1.54-3.56-1.54-2.69 0-4.87 2.18-4.87 4.87 0 .38.04.75.12 1.11-4.05-.2-7.65-2.14-10.05-5.08-.42.72-.66 1.55-.66 2.44 0 1.69.86 3.18 2.16 4.05-.8-.03-1.55-.25-2.21-.61v.06c0 2.36 1.68 4.33 3.91 4.78-.41.11-.84.17-1.28.17-.31 0-.61-.03-.91-.09.62 1.93 2.41 3.34 4.53 3.38-1.66 1.3-3.75 2.08-6.02 2.08-.39 0-.78-.03-1.16-.09 2.16 1.39 4.73 2.2 7.49 2.2 9 0 13.93-7.46 13.93-13.93 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Footer */}
      <footer className="py-6 bg-gray-950 text-center">
        <p className="text-gray-400">
          © 2025 Mujahidul Islam. All rights reserved.
        </p>
      </footer>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s 1 normal both;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }

        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out forwards;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #3b82f6;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
};

export default App;
