"use client"

import { useState, useEffect } from "react"
import { Element, scroller } from "react-scroll"
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
  Code,
  Server,
  Palette,
  Zap,
  Award,
  Facebook,
  Wrench,
  FileCode,
  ExternalLink,
} from "lucide-react"
import { FaHackerrank } from "react-icons/fa";

// Skills Data with New Categories
const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    skills: [
      {
        name: "TypeScript",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784363/typescript-logo-blue-square-modern-design-icon-1-removebg-preview_vfay6m.png",
      },
      {
        name: "JavaScript",
        imageUrl: "https://i.ibb.co/XSjWDqn/javascript-logo-javascript-icon-transparent-free-png.webp",
      }
    ],
  },
  {
    title: "Frontend",
    icon: <Palette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      {
        name: "React",
        imageUrl: "https://i.ibb.co.com/nnyGwqS/react.png",
      },
      {
        name: "React Router",
        imageUrl: "https://i.ibb.co.com/7j03tvX/React-Router-logo-vector-01.webp",
      },
      {
        name: "Next.Js",
        imageUrl: "https://i.ibb.co/N7FrTLX/nextjs-boilerplate-logo.png",
      },
      {
        name: "VueJs",
        imageUrl: "https://i.ibb.co.com/GvmZ0cK/vuejs.png",
      },
      {
        name: "HTML",
        imageUrl: "https://i.ibb.co.com/vD7yky7/html-5-svgrepo-com.png",
      },
      {
        name: "CSS",
        imageUrl: "https://i.ibb.co/XsCzgdZ/4672509.png",
      },
      {
        name: "Redux Toolkit",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784479/images-removebg-preview_sfjuws.png",
      },
      {
        name: "Tailwind CSS",
        imageUrl: "https://i.ibb.co.com/G9hfn8m/social-square.png",
      },
      {
        name: "Tanstack Query",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750187396/react-query-logo-png_seeklogo-435661-removebg-preview_aszg3v.png",
      }
    ],
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "Node.JS",
        imageUrl: "https://i.ibb.co.com/cDsWtZh/node-js-emblem-vector-28501403.png",
      },
      {
        name: "Express.Js",
        imageUrl: "https://www.domeniclabbate.com/_next/static/media/express.27b48634.png",
      },
      {
        name: "JWT",
        imageUrl: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
      },
      ,
      {
        name: "Socket.IO",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784363/imgbin-socket-io-node-js-express-js-npm-network-socket-github-jCLAHi6fr1T6e3ZLnTxhxqFsY-removebg-preview_wofppa.png",
      },
      {
        name: "MongoDB",
        imageUrl: "https://i.ibb.co.com/VprbZL8/images.png",
      },
      {
        name: "Mongoose",
        imageUrl: "https://i.ibb.co/GkTRSrg/mongoose.png",
      },
      {
        name: "PostgreSQL",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1743934206/postgress_xgdm6b.png",
      },
      {
        name: "MySQL",
        imageUrl: "https://i.ibb.co/fGhD2LV/logo-mysql-cdb-for-mysql-7.png",
      },
      {
        name: "Supabase",
        imageUrl: "https://i.ibb.co.com/ZxXbpVC/supabase-logo-DCC676-FFE2-seeklogo-com.png",
      },
      {
        name: "Firebase",
        imageUrl: "https://i.ibb.co.com/N1kLXqm/firebase.png",
      }
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
    skills: [
      {
        name: "GitHub",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1743934427/github1_u9nqf4.png",
      },
      {
        name: "Git",
        imageUrl: "https://i.ibb.co.com/m6K0VCp/images11-removebg-preview.png",
      },
      {
        name: "Postman",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750187710/images-removebg-preview_uncew1.png",
      },
      {
        name: "VS code",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784556/Visual_Studio_Code_1.35_icon.svg_nrwawe.png",
      },
      {
        name: "Figma",
        imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750187853/png-transparent-figma-app-logo-tech-companies-thumbnail-removebg-preview_hrhrvy.png",
      },
    ],
  },
]

// Education Data
const education = [
  {
    degree: "Bachelor of Arts (B.A)",
    institution: "National University of Bangladesh",
    location: "Gazipur, Bangladesh",
    duration: "2020 - 2022",
    grade: "CGPA: 2.75/4.00",
    description:
      "Focused on software engineering, data structures, algorithms, and web development. Completed various projects in full-stack development.",
    
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. B.M. College, Barishal",
    location: "Barishal, Bangladesh",
    duration: "2016 - 2019",
    grade: "GPA: 2.27/5.00",
    description: "Science background with focus on Mathematics, Physics, and Chemistry.",
    
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Jhalokathi Govt. High School",
    location: "Jhalokathi, Bangladesh",
    duration: "2014 - 2016",
    grade: "GPA: 4.50/5.00",
    description: "General education with excellent performance in science and mathematics.",
    
  },
]

// Updated Projects Data with Client and Server Code Links
const projects = [
  {
    title: "My-Jobs",
    description: "Fitness centers are the best way to stay fit and keep good health .",
    techStack: [
      "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "PayPal API", "Socket.io", "Redux", "Cloudinary", "Nodemailer", "TailwindCSS", "Shadcn/UI", "React Hook Form", "Lenis", "React-Quill-New" 
    ],
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750188666/screencapture-my-job-brown-vercel-app-2025-06-18-01_29_34_wc1nld.png",
    liveLink: "https://my-job-brown.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/myJob",
    serverCode: "https://github.com/Mujahid2000/Job-server",
  },
  {
    title: "Fitness Center",
    description: "Fitness centers are the best way to stay fit and keep good health .",
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
    liveLink: "https://gym-center-eta.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/gym-center",
    serverCode: "https://github.com/Mujahid2000/gym-server",
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
    liveLink: "https://bazar-bd.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/Bazar-BD",
    serverCode: "https://github.com/Mujahid2000/Postgre-Server",
  },
  {
    title: "Restaurant",
    description: "Food selling platform for selling fast-food with some other's food item's",
    techStack: ["Vue.Js", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "MongoDB", " Mongoose"],
    image: "https://i.ibb.co.com/CnQV9wS/Screenshot-2-10-2024-19657-restaurant-beta-lemon-vercel-app.jpg",
    liveLink: "https://restaurant-beta-lemon.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/Restaurant-",
    serverCode: "https://github.com/Mujahid2000/Restaurant-Server",
  },
  {
    title: "Streme",
    description: "Video streaming platform, Play video for your entertainment.",
    techStack: ["Next.Js", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "MongoDB", " Mongoose"],
    image: "https://i.ibb.co/xDbddgt/image-1.jpg",
    liveLink: "https://streme-eight.vercel.app/",
    clientCode: "https://github.com/sajalbiswas1/video-stream-client-side",
    serverCode: "https://github.com/sajalbiswas1/video-stream-server-side",
  },
  {
    title: "Pill Splitter",
    description: "It's s div splitting website",
    techStack: ["Next.Js", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dkffqpque/image/upload/v1755686921/Screenshot_2025-08-20_164723_c6zhpf.png",
    liveLink: "https://split-tau-seven.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/pil-split",
    serverCode: "",
  },
  {
    title: "Home Decor",
    description: "E-commerce platform for selling  home decor items.",
    techStack: ["Next.Js", "Tailwind CSS", "Firebase", "MongoDB", " Mongoose"],
    image: "https://i.ibb.co/DpWjpMk/image-6.jpg",
    liveLink: "https://next-js-full-stack-nu.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/NextJs-Full-Stack",
    serverCode: "https://github.com/Mujahid2000/NextJs-Full-Stack",
  },
]


// Certificates Data
const certificates = [
  {
    title: "MongoDB Aggregation Framework",
    issuer: "MongoDB University",
    date: "2025",
    description:
      "Comprehensive course covering MongoDB aggregation framework, pipeline operations, advanced query techniques, and data processing strategies for complex database operations.",
    skills: ["MongoDB", "Aggregation Pipeline", "Data Processing", "NoSQL"],
    certificateLink: "https://drive.google.com/file/d/17xQbFLUa7Q6vYoLzkUwgFo3_a9BgEzP3/view?usp=sharing", // Replace with your actual certificate link
    logo: "https://res.cloudinary.com/diez3alve/image/upload/v1750784809/505875855_4271264203199179_7200409013333893024_n_bebgle.jpg", // MongoDB logo
  },
  {
    title: " JavaScript (Basic) Certification – HackerRank",
    issuer: "HackerRank",
    date: "2025",
    description:
      "Successfully passed HackerRank’s JavaScript (Basic) skill assessment, demonstrating core proficiency in syntax, control structures, functions, Object Oriented Programming (OOP) and problem-solving. Verified achievement dated 22 August 2025, endorsed by HackerRank’s CTO.",
    skills: ["JavaScript, OOP, ES6"],
    certificateLink: "https://www.hackerrank.com/certificates/db286d2e4515", // Replace with your actual certificate link
    logo: "https://res.cloudinary.com/dfoqbqvkl/image/upload/v1756055332/HackerRank_Icon-1000px_bhmhso.png", // Hacker Rank logo
  },
  {
    title: " React (Basic) – HackerRank",
    issuer: "HackerRank",
    date: "2025",
    description:
      "React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation. Verified achievement dated 30 August 2025, endorsed by HackerRank’s CTO.",
    skills: ["React"],
    certificateLink: "https://www.hackerrank.com/certificates/cd21bb88f5de", // Replace with your actual certificate link
    logo: "https://res.cloudinary.com/dfoqbqvkl/image/upload/v1756055332/HackerRank_Icon-1000px_bhmhso.png", // Hacker Rank logo
  },
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    date: "2024",
    description: "Complete Web Development Course with Jhankar Mahbub on Programming Hero. Covers HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
    skills: ["JavaScript", "HTML", "CSS", "React"],
    certificateLink: "https://drive.google.com/file/d/19FJ74_c8PHVwIzTZZ45-hWisbZu2puLo/view?usp=sharing", // Replace with your actual certificate link
    logo: "https://res.cloudinary.com/diez3alve/image/upload/v1750785138/images_bp484r.jpg", // Replace with actual logo
  },
]

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // Handle section visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = ["home", "about", "education", "certificates", "skills", "projects", "contact"]
      let currentSection = "home"

      sections.forEach((section: string) => {
        const element: HTMLElement | null = document.getElementById(section)
        if (element) {
          const rect: DOMRect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle navbar link click with smooth scroll
  const handleNavClick = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    })
    setIsMenuOpen(false)
  }

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Typewriter effect for the tagline in Hero section
  const [tagline, setTagline] = useState<string>("")
  const fullTagline: string = "A passionate Software Engineer specializing in full-stack development."
  useEffect(() => {
    let i = 0
    const type = (): void => {
      if (i < fullTagline.length) {
        setTagline(fullTagline.slice(0, i + 1))
        i++
        setTimeout(type, 50)
      }
    }
    type()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="py-5 bg-gray-900 shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-400 heading-primary">Mujahidul Islam</h1>

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
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
            <div className="pt-16 md:pt-0 flex flex-col md:flex-row items-start">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {["home", "about", "education", "certificates", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`relative mx-3 text-lg md:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer py-2 md:py-0 capitalize font-medium ${
                    activeSection === section ? "text-indigo-400" : ""
                  }`}
                >
                  {section}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform transition-transform duration-300 ${
                      activeSection === section ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100 md:block hidden`}
                  ></span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>``

      {/* Hero Section - Updated with Social Icons */}
      <Element name="home">
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 to-transparent"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-white mb-4 animate-fade-in">
              Mujahidul Islam
            </h1>
            <p className=" text-wrap text-lg md:text-2xl text-gray-300 px-2 text-center mb-8 md:animate-typewriter">
              {tagline}
              <span className="animate-blink">|</span>
            </p>

            {/* Social Media Icons */}
          
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <button
                onClick={() => handleNavClick("contact")}
                className="px-6 py-3 cursor-pointer bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "1100ms" }}
              >
                Get in Touch
              </button>
              <a
                href="https://drive.google.com/file/d/1xHs-zE7OTViskN2llHYKneBcxyp8fblb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 cursor-pointer bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "1200ms" }}
              >
                Download Resume
              </a>
            </div>


             <div className="flex justify-center gap-6 ">
              <a
                href="https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: "800ms" }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://github.com/Mujahid2000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: "900ms" }}
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/developermujahi2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: "1000ms" }}
              >
                <FaHackerrank  className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(23,37,84,0.1)_0%,_transparent_70%)]"></div>
          </div>
        </section>
      </Element>

      {/* About Section - Redesigned */}
      <Element name="about">
        <section
          id="about"
          className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 font-medium">Get to know me</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Me</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Passionate about creating digital experiences that make a difference
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image and Stats */}
              <div className="relative">
                <div className="relative max-w-md mx-auto">
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl rotate-12 opacity-20 animate-pulse"></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Main Image Container */}
                  <div className="relative bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-1 rounded-3xl">
                    <div className="bg-gray-900 rounded-3xl overflow-hidden">
                      <img
                        src="https://i.ibb.co/ygLpwPN/01987064-removebg-preview.png"
                        alt="Mujahidul Islam"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -right-8 top-1/4 bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">6+</p>
                        <p className="text-sm text-gray-400">Projects</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -left-8 bottom-1/4 bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">20+</p>
                        <p className="text-sm text-gray-400">Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                {/* Main Description */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">
                    Crafting Digital Solutions with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      Passion
                    </span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm <span className="font-semibold text-white">Mujahidul Islam</span>, a passionate Software
                    Engineer and fresher eager to build impactful web applications. I specialize in full-stack
                    development, with strong skills in React, Node.js, and databases like MongoDB and PostgreSQL, honed
                    through hands-on projects and coursework.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm driven by a love for solving complex problems and creating seamless user experiences. When I'm
                    not coding, I'm exploring emerging technologies to stay ahead in the ever-evolving tech world.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white">Location</h4>
                    </div>
                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white">Email</h4>
                    </div>
                    <p className="text-gray-300 text-sm">developermujahid2001@gmail.com</p>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white">Role</h4>
                    </div>
                    <p className="text-gray-300">Software Engineer</p>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white">GitHub</h4>
                    </div>
                    <a
                      href="https://github.com/Mujahid2000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                    >
                      github.com/Mujahid2000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

 {/* Education Section - New Interactive Design */}
      <Element name="education">
        <section
          id="education"
          className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-8 backdrop-blur-md">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 font-semibold text-lg">Academic Excellence</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-primary">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto body-text leading-relaxed">
                From foundational learning to specialized expertise, here's my educational path that shaped my technical
                skills
              </p>
            </div>

            {/* Interactive Education Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group cursor-pointer relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 transition-all duration-700 hover:transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  

                  {/* Institution Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 font-medium text-sm">{edu.duration}</span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 heading-secondary leading-tight">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-purple-400 font-semibold text-sm heading-secondary">{edu.institution}</p>
                      <p className="text-gray-400 text-xs body-text">{edu.location}</p>
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-4">
                    <Zap className="w-3 h-3 text-green-400" />
                    <span className="text-green-300 font-medium text-xs">{edu.grade}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 body-text">{edu.description}</p>

                
                
                </div>
              ))}
            </div>
            {/* Floating Elements */}
            <div
              className="absolute top-1/4 left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-1/3 right-12 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-16 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-8 w-5 h-5 bg-green-400 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </section>
      </Element>

 {/* Certificates Section - New */}
      <Element name="certificates">
        <section
          id="certificates"
          className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20 mb-8 backdrop-blur-md">
                <Award className="w-6 h-6 text-green-400" />
                <span className="text-green-300 font-semibold text-lg">Professional Development</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-primary">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  Certificates
                </span>{" "}
                & Training
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto body-text leading-relaxed">
                Continuous learning through professional certifications and specialized training programs
              </p>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 transition-all duration-700 hover:transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Certificate Header */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Logo */}
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <img
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.issuer}
                        className="w-10 h-10 object-contain"
                        
                      />
                      <Award className="w-8 h-8 text-green-400 hidden" />
                    </div>

                    {/* Certificate Info */}
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 font-medium text-sm">{cert.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300 heading-secondary leading-tight">
                        {cert.title}
                      </h3>

                      <p className="text-emerald-400 font-semibold text-sm heading-secondary">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 body-text">{cert.description}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/50 transform group-hover:scale-105 transition-transform duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Link Button */}
                  <div className="flex gap-3">
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Animated Border */}
                  
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                <span className="text-gray-300 body-text">
                  Continuously expanding my knowledge through explore new resources
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Skills Section - Updated Categories and Removed Percentage Bars */}
      <Element name="skills">
        <section
          id="skills"
          className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 font-medium">My expertise</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Tech{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Stack
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Technologies I use to bring ideas to life</p>
            </div>

            {/* Skills Categories */}
            <div className="space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105"
                        style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                      >
                        {/* Skill Icon */}
                        <div className="relative w-16 h-16 mx-auto mb-4">
                          <img
                            src={skill.imageUrl || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-sm font-semibold text-center text-white group-hover:text-indigo-300 transition-colors duration-300">
                          {skill.name}
                        </h4>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30">
                <span className="text-gray-300">Always learning and exploring new technologies</span>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Projects Section - Updated with Client and Server Code Buttons */}
      <Element name="projects">
        <section id="projects" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20 mb-8 backdrop-blur-md">
                <Code className="w-6 h-6 text-indigo-400" />
                <span className="text-indigo-300 font-semibold text-lg">Featured Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white animate-fade-in heading-primary">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto body-text leading-relaxed">
                A showcase of my development skills through real-world applications and innovative solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group animate-fade-in-scale"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project?.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                      {project?.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{project?.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project?.techStack?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/50 transform group-hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Buttons */}
                    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3">
                      <a
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 text-sm"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project?.clientCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300 text-sm"
                      >
                        <FileCode className="w-4 h-4" />
                        Client Code
                      </a>
                      <a
                        href={project?.serverCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 text-sm"
                      >
                        <Server className="w-4 h-4" />
                        Server Code
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 shadow-[0_0_30px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500 rounded-xl pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section id="contact" className="py-20 px-4  bg-gradient-to-b from-gray-950 to-indigo-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white animate-slide-in-left">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Touch
                </span>
              </h2>
              <p className="text-lg text-slate-400">
                I'm always open to discussing new opportunities and interesting projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Let's work together</h3>
                  <p className="text-slate-400 mb-6">
                    I'm currently looking for new opportunities as a full-stack developer. Whether you have a project in
                    mind or just want to chat about technology, I'd love to hear from you!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-slate-400">developermujahid2001@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-slate-400">Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Connect with me</h4>
                      <div className="flex gap-3 mt-2">
                        <a
                          href="https://github.com/Mujahid2000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                href="https://www.facebook.com/mujahidul.islam.1656854"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: "1000ms" }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-3 py-2  dark:border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-3 py-2  dark:border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-3 py-2  dark:border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 py-2  dark:border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-3 py-2  dark:border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center cursor-pointer justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-800 hover:to-blue-700 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-6 bg-gray-950 text-center">
          <p className="text-gray-400">© 2025 Mujahidul Islam. All rights reserved.</p>
        </footer>
      </Element>

      {/* Custom CSS for Animations */}
      <style>{`
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

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
  )
}

export default Portfolio
