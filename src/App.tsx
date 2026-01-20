"use client"

import React, { useState, useEffect, useRef, cloneElement, ReactElement } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  ChevronRight,
  Menu,
  X,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Cpu,
  Globe,
  Send,
  Zap,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Award,
  Palette,
  Server,
  Wrench,
  MapPin
} from "lucide-react"
import { Link as ScrollLink, Element, scroller } from "react-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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
      },
      {
        name: "Python",
        imageUrl: "https://res.cloudinary.com/dkffqpque/image/upload/v1759777555/images__2_-removebg-preview_kstifb.png",
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

// Experience Data
const experiences = [
  {
    role: "Frontend Developer",
    company: "Alfabic",
    location: "Dhaka, Bangladesh",
    duration: "11/2025 – Present",
    description: "Developing and maintaining frontend components using modern web technologies.",
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
const personalProjects = [
  {
    title: "My-Jobs",
    description: "Fitness centers are the best way to stay fit and keep good health .",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "PayPal API",
      "Socket.io",
      "Redux",
      "Cloudinary",
      "Nodemailer",
      "TailwindCSS",
      "Shadcn/UI",
      "React Hook Form",
      "Lenis",
      "React-Quill-New",
    ],
    image:
      "https://res.cloudinary.com/diez3alve/image/upload/v1750188666/screencapture-my-job-brown-vercel-app-2025-06-18-01_29_34_wc1nld.png",
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
    image: "https://i.ibb.co.com/x1BJf5x/picture.png",
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
    image: "https://i.ibb.co.com/xDbddgt/image-1.jpg",
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
]

const clientProjects = [
  {
    title: "PM Sourcing",
    description: "A complete tailoring solution for your business",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "GSAP",
      "AOS",
      "TailwindCSS",
      "Shadcn/UI",
      "Swiper.js",
      "NextAuth.js",
    ],
    image: "https://res.cloudinary.com/dkffqpque/image/upload/v1758520159/Screenshot_2025-09-22_114823_p4b4ao.png",
    liveLink: "https://pm-sourcing.vercel.app/",
    clientCode: "https://github.com/client/ecommerce-dashboard",
    serverCode: "https://github.com/client/ecommerce-api",
  }
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
    skills: ["JavaScript", "OOP", "ES6"],
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
  const [copied, setCopied] = useState<boolean>(false)

  // Handle section visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = ["home", "about", "experience", "education", "certificates", "skills", "projects", "contact"]
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

  // Custom Cursor Logic using GSAP
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor")
    const follower = document.querySelector(".cursor-follower")
    const label = document.querySelector(".cursor-label")
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.2 })
      gsap.to(follower, { scale: 0.8, duration: 0.2 })
    }

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 })
      gsap.to(follower, { scale: 1, duration: 0.2 })
    }

    const onMouseEnter = (e: any) => {
      const target = e.currentTarget
      let scale = 1.5
      let text = ""

      if (target.closest("#projects")) {
        text = "VIEW"
        scale = 2.5
      } else if (target.closest("#contact")) {
        text = "TALK"
        scale = 2.5
      } else if (target.tagName === "BUTTON" || target.tagName === "A") {
        scale = 2
      }

      gsap.to(cursor, { opacity: 0, duration: 0.2 })
      gsap.to(follower, { 
        scale: scale, 
        backgroundColor: "rgba(255, 255, 255, 0.1)", 
        borderColor: "transparent",
        duration: 0.3 
      })

      if (text) {
        gsap.to(label, { opacity: 1, scale: 1, duration: 0.3 })
        if (label) label.textContent = text
      }
    }

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 })
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: "transparent", 
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.3 
      })
      gsap.to(label, { opacity: 0, scale: 0.5, duration: 0.3 })
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)

    const hoverables = document.querySelectorAll("a, button, .magnetic, .glass-card")
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter)
      el.addEventListener("mouseleave", onMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter)
        el.removeEventListener("mouseleave", onMouseLeave)
      })
    }
  }, [])

  // Magnetic button effect using GSAP
  useEffect(() => {
    const magneticElements = document.querySelectorAll(".magnetic")
    
    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", (e: any) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        })
      })
    })
  }, [])

  // Reveal animations on scroll using GSAP
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    
    revealElements.forEach((el) => {
      let x = 0
      let y = 30
      let scale = 1

      if (el.classList.contains("reveal-left")) x = -50
      if (el.classList.contains("reveal-right")) x = 50
      if (el.classList.contains("reveal-scale")) scale = 0.9

      gsap.fromTo(el, 
        { 
          opacity: 0, 
          x: x, 
          y: y, 
          scale: scale 
        }, 
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <nav className="glass-navbar rounded-2xl px-6 py-4 flex justify-between items-center bg-gray-950/40 border-white/10">
            {/* Logo */}
            <div 
              className="text-xl sm:text-2xl font-bold cursor-pointer group flex items-center gap-2"
              onClick={() => handleNavClick("home")}
            >
               <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-base">M</span>
               <span className="heading-primary group-hover:opacity-80 transition-opacity">Mujahid</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {["home", "about", "experience", "education", "certificates", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg capitalize ${
                    activeSection === section 
                      ? "text-white bg-white/10" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <Zap className="w-5 h-5 text-indigo-400" /> : <Code className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
           <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl" onClick={toggleMenu}></div>
           <nav className="absolute right-4 top-24 w-64 glass-card p-6 flex flex-col gap-2">
              {["home", "about", "experience", "education", "certificates", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-4 py-3 text-left font-medium transition-all rounded-xl capitalize ${
                    activeSection === section ? "text-indigo-400 bg-indigo-500/10" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
           </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Element name="home">
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
          {/* Aurora Background Effects */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px] animate-aurora"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: '-10s' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center section-hero">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm reveal-scale">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
               </span>
               <span className="text-sm font-medium text-indigo-300">Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight reveal">
              Building <span className="heading-primary">Digital</span> <br />
              <span className="text-white">Masterpieces</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{ transitionDelay: '200ms' }}>
              Hi, I'm <span className="text-white font-semibold">Mujahid</span>. {tagline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal" style={{ transitionDelay: '400ms' }}>
              <button 
                onClick={() => handleNavClick("projects")}
                className="magnetic btn-primary flex items-center justify-center gap-2"
              >
                View My Projects
                <Zap className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleNavClick("contact")}
                className="magnetic btn-secondary flex items-center justify-center gap-2"
              >
                Get in Touch
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 reveal" style={{ transitionDelay: '600ms' }}>
               <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
               </div>
            </div>
          </div>
        </section>
      </Element>


      {/* About Section - Modern Redesign */}
      <Element name="about">
        <section
          id="about"
          className="relative py-24 bg-gray-950 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Side: Image with dynamic borders */}
              <div className="relative w-full lg:w-1/2 flex justify-center reveal-left">
                <div className="relative group">
                  {/* Decorative backgrounds */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative glass-card p-2 rounded-3xl overflow-hidden">
                    <img
                      src="https://i.ibb.co/ygLpwPN/01987064-removebg-preview.png"
                      alt="Mujahidul Islam"
                      className="w-full max-w-sm h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-6 -right-6 glass-card p-6 animate-float reveal-scale" style={{ transitionDelay: '400ms' }}>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                           <Code className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                           <div className="text-2xl font-bold">2+</div>
                           <div className="text-sm text-gray-400">Years Exp.</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full lg:w-1/2 space-y-8 reveal-right">
                <div className="space-y-4">
                  <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">About Me</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    A Passionate <span className="heading-primary">Developer</span> <br />
                    Based in Bangladesh.
                  </h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                    <p>
                      I'm <span className="text-white font-medium">Mujahidul Islam</span>, a Software Engineer dedicated to crafting beautiful and functional digital experiences. I specialize in the modern web stack, focusing on performance, accessibility, and user-centric design.
                    </p>
                    <p>
                      My journey in tech is driven by a constant curiosity to explore new horizons and solve complex problems. I enjoy turning abstract ideas into tangible reality through clean and efficient code.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <MapPin />, label: "Location", val: "Dhaka, Bangladesh" },
                    { icon: <Mail />, label: "Email", val: "dev.mujahid@gmail.com" },
                    { icon: <Briefcase />, label: "Role", val: "Full Stack Dev" },
                    { icon: <Linkedin />, label: "Connect", val: "LinkedIn Profile", link: "https://linkedin.com" }
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-4 flex items-center gap-4 hover:border-indigo-500/30 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                       <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                          {cloneElement(item.icon as ReactElement<any>, { className: "w-5 h-5" })}
                       </div>
                       <div>
                          <p className="text-xs text-gray-500">{item.label}</p>
                          <p className="text-sm font-medium text-gray-200">{item.val}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>



      {/* Experience Section - Vertical Timeline Redesign */}
      <Element name="experience">
        <section id="experience" className="relative py-24 bg-gray-950 overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">Professional Journey</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Experience</h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal ${index % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                    {/* Icon and Point */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gray-950 text-indigo-400  shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-indigo-500/50 transition-colors duration-300">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    {/* Content Glass Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 shadow-xl group-hover:translate-y-[-4px] transition-transform duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <time className="font-medium text-indigo-400 text-sm tracking-wide">{exp.duration}</time>
                      </div>
                      <div className="text-white font-bold text-xl mb-1">{exp.role}</div>
                      <div className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                         <span>{exp.company}</span>
                         <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                         <span className="text-gray-400 text-sm font-normal">{exp.location}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Education & Certificates Section - Combined Grid */}
      <Element name="education">
        <section className="relative py-24 bg-gray-950">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-24">
                {/* Education Column */}
                <div className="reveal-left">
                   <div className="mb-12">
                      <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">Background</h2>
                      <h3 className="text-4xl font-bold text-white">Education</h3>
                   </div>
                   <div className="space-y-6">
                      {education.map((edu, i) => (
                        <div key={i} className="glass-card p-6 border-white/5 hover:border-indigo-500/20 group reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                           <div className="flex justify-between items-start mb-4">
                              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                 <Award className="w-6 h-6" />
                              </div>
                              <span className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full">{edu.duration}</span>
                           </div>
                           <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                           <p className="text-indigo-400 text-sm font-medium mb-3">{edu.institution}</p>
                           <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Certificates Column */}
                <Element name="certificates">
                   <div className="reveal-right">
                      <div className="mb-12">
                         <h2 className="text-purple-400 font-semibold mb-2 tracking-wider uppercase text-sm">Skills Validation</h2>
                         <h3 className="text-4xl font-bold text-white">Certificates</h3>
                      </div>
                      <div className="space-y-6">
                         {certificates.map((cert, i) => (
                           <div key={i} className="glass-card p-6 border-white/5 hover:border-purple-500/20 group flex gap-6 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                              <div className="shrink-0 w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center p-2">
                                 <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">{cert.date}</span>
                                 </div>
                                 <p className="text-purple-400 text-xs font-medium mb-3">{cert.issuer}</p>
                                 <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skills.slice(0, 3).map((s, si) => (
                                       <span key={si} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400">{s}</span>
                                    ))}
                                 </div>
                                 <a 
                                   href={cert.certificateLink} 
                                   target="_blank" 
                                   className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-purple-400 transition-colors"
                                 >
                                    VIEW CREDENTIAL <ExternalLink className="w-3 h-3" />
                                 </a>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </Element>
             </div>
          </div>
        </section>
      </Element>


      {/* Skills Section - Premium Grid */}
      <Element name="skills">
        <section id="skills" className="relative py-24 bg-gray-950 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.03)_0%,_transparent_70%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h3>
            </div>

            <div className="space-y-16">
               {skillCategories.map((cat, ci) => (
                  <div key={ci} className="reveal" style={{ transitionDelay: `${ci * 100}ms` }}>
                     <div className="flex items-center gap-4 mb-8">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>
                           {cat.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-tight">{cat.title}</h4>
                        <div className="flex-1 h-px bg-white/5"></div>
                     </div>
                     <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cat.skills.map((s, si) => (
                           <div key={si} className="glass-card p-4 flex flex-col items-center gap-3 group hover:-translate-y-1 transition-all reveal-scale" style={{ transitionDelay: `${si * 50}ms` }}>
                              <div className="w-12 h-12 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                 <img src={s?.imageUrl} alt={s?.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                              </div>
                              <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">{s?.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Projects Section - Western Showcase Redesign */}
      <Element name="projects">
        <section id="projects" className="relative py-32 bg-gray-950 overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
             <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
                <div className="max-w-2xl">
                   <h2 className="text-indigo-400 font-bold mb-4 tracking-[0.2em] uppercase text-xs">Selected Works</h2>
                   <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
                      Crafting <span className="text-white/20">Impactful</span> <br />
                      Digital Experiences
                   </h3>
                </div>
                <div className="hidden md:block">
                   <p className="text-gray-500 max-w-xs text-right text-sm leading-relaxed">
                      A curated collection of projects focused on performance, accessibility, and high-end aesthetics for global brands.
                   </p>
                </div>
             </div>

             {/* Staggered Grid Layout */}
             <div className="space-y-32">
                {[...personalProjects, ...clientProjects].map((p, i) => (
                   <div 
                     key={i} 
                     className={`flex flex-col lg:flex-row gap-12 items-center group reveal ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                   >
                      {/* Image Preview Container */}
                      <div className="w-full lg:w-3/5 relative reveal-scale" style={{ transitionDelay: '200ms' }}>
                         <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] glass-card p-2 border-white/5">
                            <img 
                              src={p.image} 
                              alt={p.title} 
                              className="w-full h-full object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                            />
                            {/* Overlay detail on image hover */}
                            <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                               <a href={p.liveLink} target="_blank" className="w-14 h-14 rounded-full bg-white text-gray-950 flex items-center justify-center hover:scale-110 transition-transform"><Globe className="w-6 h-6" /></a>
                               {p.clientCode && <a href={p.clientCode} target="_blank" className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"><Github className="w-6 h-6" /></a>}
                            </div>
                         </div>
                         {/* Number Indicator */}
                         <div className="absolute -top-10 -left-6 md:-left-12 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none leading-none">
                            {String(i + 1).padStart(2, '0')}
                         </div>
                      </div>

                      {/* Content Details */}
                      <div className="w-full lg:w-2/5 space-y-6 reveal" style={{ transitionDelay: '400ms' }}>
                         <div className="space-y-2">
                            <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">
                               {p.techStack?.[0] || 'Web Project'} / {i < personalProjects.length ? 'Personal' : 'Client'}
                            </span>
                            <h4 className="text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                               {p.title}
                            </h4>
                         </div>
                         
                         <p className="text-gray-400 text-lg leading-relaxed">
                            {p.description}
                         </p>

                         <div className="flex flex-wrap gap-2">
                            {p.techStack?.map((t, ti) => (
                               <span key={ti} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
                                  {t}
                               </span>
                            ))}
                         </div>

                         <div className="pt-6">
                            <a 
                              href={p.liveLink} 
                              target="_blank" 
                              className="inline-flex items-center gap-3 text-white font-bold group/link"
                            >
                               <span className="relative">
                                  VIEW PROJECT
                                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 group-hover/link:w-full transition-all duration-300"></span>
                               </span>
                               <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>
      </Element>

      <Element name="contact">
        <section id="contact" className="relative py-32 bg-gray-950 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.05)_0%,_transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="reveal-left">
                   <h2 className="text-indigo-400 font-bold mb-6 tracking-widest uppercase text-xs">Contact</h2>
                   <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                      Let's build something <br />
                      <span className="heading-primary">legendary</span> together.
                   </h3>
                   <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-lg">
                      Currently available for remote opportunities in Western-based companies. If you're looking for a developer who cares about the details, let's chat.
                   </p>
                   
                   <div className="space-y-8">
                      <div className="group flex flex-col gap-2 reveal" style={{ transitionDelay: '200ms' }}>
                         <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Email me at</span>
                         <div className="flex items-center gap-4">
                            <a href="mailto:developermujahid2001@gmail.com" className="text-2xl md:text-3xl font-bold text-white hover:text-indigo-400 transition-colors break-all">
                               developermujahid2001@gmail.com
                            </a>
                            <button 
                              onClick={() => {
                                navigator.clipboard.writeText("developermujahid2001@gmail.com");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              }}
                              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-400 hover:text-white relative"
                              title="Copy Email"
                            >
                               {copied ? <Zap className="w-5 h-5 text-green-400" /> : <Mail className="w-5 h-5" />}
                               {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-2 py-1 rounded">Copied!</span>}
                            </button>
                         </div>
                      </div>

                      <div className="flex gap-6 reveal" style={{ transitionDelay: '400ms' }}>
                         {[
                           { icon: <Github />, link: "https://github.com/Mujahid2000", label: "GitHub" },
                           { icon: <Linkedin />, link: "https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/", label: "LinkedIn" },
                           { icon: <Twitter />, link: "#", label: "Twitter" }
                         ].map((social, i) => (
                           <a key={i} href={social.link} target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">
                              {cloneElement(social.icon as ReactElement<any>, { className: "w-5 h-5" })}
                              <span>{social.label}</span>
                           </a>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="glass-card p-10 border-white/5 relative reveal-right" style={{ transitionDelay: '300ms' }}>
                   <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
                   <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="John" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Doe" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                         <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase">Your Message</label>
                         <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors resize-none" placeholder="Let's talk about..."></textarea>
                      </div>
                      <button className="magnetic w-full btn-primary !rounded-xl py-5 !text-sm tracking-widest uppercase flex items-center justify-center gap-3 active:scale-95 transition-transform">
                         Send Direct Message <Send className="w-4 h-4" />
                      </button>
                   </form>
                </div>
             </div>

             <footer className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 reveal" style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-black text-xs">M</div>
                   <span className="text-white font-bold tracking-tighter">MUJAHID.DEV</span>
                </div>
                <p className="text-gray-500 text-xs tracking-widest uppercase">© 2025 Handcrafted with passion</p>
                <div className="flex gap-8">
                   <a href="#" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy</a>
                   <a href="#" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Terms</a>
                </div>
             </footer>
          </div>
        </section>
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
      
      {/* Custom Cursor Elements */}
      <div className="custom-cursor hidden md:block"></div>
      <div className="cursor-follower hidden md:block">
        <span className="cursor-label"></span>
      </div>
    </div>
  )
}

export default Portfolio
