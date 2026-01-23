"use client"

import React, { useState, useEffect, cloneElement, ReactElement } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Globe,
  Send,
  Zap,
  Briefcase,
  Award,
  Palette,
  Server,
  Wrench,
  MapPin,
  ExternalLink
} from "lucide-react"
import { Link as ScrollLink, Element, scroller } from "react-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// --- Data ---
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
      { name: "React", imageUrl: "https://i.ibb.co.com/nnyGwqS/react.png" },
      { name: "React Router", imageUrl: "https://i.ibb.co.com/7j03tvX/React-Router-logo-vector-01.webp" },
      { name: "Next.Js", imageUrl: "https://i.ibb.co/N7FrTLX/nextjs-boilerplate-logo.png" },
      { name: "VueJs", imageUrl: "https://i.ibb.co.com/GvmZ0cK/vuejs.png" },
      { name: "HTML", imageUrl: "https://i.ibb.co.com/vD7yky7/html-5-svgrepo-com.png" },
      { name: "CSS", imageUrl: "https://i.ibb.co/XsCzgdZ/4672509.png" },
      { name: "Redux Toolkit", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784479/images-removebg-preview_sfjuws.png" },
      { name: "Tailwind CSS", imageUrl: "https://i.ibb.co.com/G9hfn8m/social-square.png" },
      { name: "Tanstack Query", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750187396/react-query-logo-png_seeklogo-435661-removebg-preview_aszg3v.png" }
    ],
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.JS", imageUrl: "https://i.ibb.co.com/cDsWtZh/node-js-emblem-vector-28501403.png" },
      { name: "Express.Js", imageUrl: "https://www.domeniclabbate.com/_next/static/media/express.27b48634.png" },
      { name: "JWT", imageUrl: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png" },
      { name: "Socket.IO", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784363/imgbin-socket-io-node-js-express-js-npm-network-socket-github-jCLAHi6fr1T6e3ZLnTxhxqFsY-removebg-preview_wofppa.png" },
      { name: "MongoDB", imageUrl: "https://i.ibb.co.com/VprbZL8/images.png" },
      { name: "Mongoose", imageUrl: "https://i.ibb.co/GkTRSrg/mongoose.png" },
      { name: "PostgreSQL", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1743934206/postgress_xgdm6b.png" },
      { name: "MySQL", imageUrl: "https://i.ibb.co/fGhD2LV/logo-mysql-cdb-for-mysql-7.png" },
      { name: "Supabase", imageUrl: "https://i.ibb.co.com/ZxXbpVC/supabase-logo-DCC676-FFE2-seeklogo-com.png" },
      { name: "Firebase", imageUrl: "https://i.ibb.co.com/N1kLXqm/firebase.png" }
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "GitHub", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1743934427/github1_u9nqf4.png" },
      { name: "Git", imageUrl: "https://i.ibb.co.com/m6K0VCp/images11-removebg-preview.png" },
      { name: "Postman", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750187710/images-removebg-preview_uncew1.png" },
      { name: "VS code", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750784556/Visual_Studio_Code_1.35_icon.svg_nrwawe.png" },
      { name: "Figma", imageUrl: "https://res.cloudinary.com/diez3alve/image/upload/v1750187853/png-transparent-figma-app-logo-tech-companies-thumbnail-removebg-preview_hrhrvy.png" },
    ],
  },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Alfabic",
    location: "Dhaka, Bangladesh",
    duration: "11/2025 – Present",
    description: "Developing and maintaining frontend components using modern web technologies.",
  },
];

const education = [
  {
    degree: "Bachelor of Arts (B.A)",
    institution: "National University of Bangladesh",
    location: "Gazipur, Bangladesh",
    duration: "2020 - 2022",
    grade: "CGPA: 2.75/4.00",
    description: "Focused on software engineering, data structures, algorithms, and web development.",
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
];

const personalProjects = [
  {
    title: "My-Jobs",
    description: "Fitness centers are the best way to stay fit and keep good health .",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "PayPal API", "Socket.io", "Redux", "Cloudinary", "Nodemailer", "TailwindCSS", "Shadcn/UI"],
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750188666/screencapture-my-job-brown-vercel-app-2025-06-18-01_29_34_wc1nld.png",
    liveLink: "https://my-job-brown.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/myJob",
  },
  {
    title: "Fitness Center",
    description: "Fitness centers are the best way to stay fit and keep good health .",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "MongoDB", "Mongoose", "TanStack Query", "Stripe", "JWT"],
    image: "https://i.ibb.co.com/x1BJf5x/picture.png",
    liveLink: "https://gym-center-eta.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/gym-center",
  },
  {
    title: "BazarBD",
    description: "E-commerce platform for selling consumer goods.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "PostgresqlSQL", "TanStack Query", "Stripe", "React Hook Form", "JWT"],
    image: "https://i.ibb.co.com/JtCdBLj/Screenshot-2024-11-28-164337.png",
    liveLink: "https://bazar-bd.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/Bazar-BD",
  },
  {
    title: "Restaurant",
    description: "Food selling platform for selling fast-food with some other's food item's",
    techStack: ["Vue.Js", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "MongoDB", "Mongoose"],
    image: "https://i.ibb.co.com/CnQV9wS/Screenshot-2-10-2024-19657-restaurant-beta-lemon-vercel-app.jpg",
    liveLink: "https://restaurant-beta-lemon.vercel.app/",
    clientCode: "https://github.com/Mujahid2000/Restaurant-",
  },
];

const clientProjects = [
  {
    title: "PM Sourcing",
    description: "A complete tailoring solution for your business",
    techStack: ["Next.js", "TypeScript", "MongoDB", "GSAP", "AOS", "TailwindCSS", "Shadcn/UI", "Swiper.js", "NextAuth.js"],
    image: "https://res.cloudinary.com/dkffqpque/image/upload/v1758520159/Screenshot_2025-09-22_114823_p4b4ao.png",
    liveLink: "https://pm-sourcing.vercel.app/",
    clientCode: "https://github.com/client/ecommerce-dashboard",
  }
];

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


// --- Component ---
export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)
  const [tagline, setTagline] = useState<string>("")
  const fullTagline: string = "A passionate Software Engineer specializing in full-stack development."

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Section Visibility Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "certificates", "skills", "projects", "contact"]
      let currentSection = "home"

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // smooth scroll helper
  const handleNavClick = (section: string) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    })
    setIsMenuOpen(false)
  }

  // Typewriter
  useEffect(() => {
    if (!isMounted) return
    let i = 0
    const type = () => {
      if (i < fullTagline.length) {
        setTagline(fullTagline.slice(0, i + 1))
        i++
        setTimeout(type, 30) // Snappier typewriter
      }
    }
    type()
  }, [isMounted])

  // GSAP Animations
  useEffect(() => {
    if (!isMounted) return
    // Custom Cursor
    const cursor = document.querySelector(".custom-cursor")
    const follower = document.querySelector(".cursor-follower")
    const label = document.querySelector(".cursor-label")
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3, ease: "power2.out" }) // Smoother follower
    }

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.2 })
      gsap.to(follower, { scale: 0.8, duration: 0.2 })
    }

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 })
      gsap.to(follower, { scale: 1, duration: 0.2 })
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)

    // Reveal Animations
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    revealElements.forEach((el: any) => {
      let x = 0
      let y = 20 // Subtler motion
      let scale = 1

      if (el.classList.contains("reveal-left")) x = -30
      if (el.classList.contains("reveal-right")) x = 30
      if (el.classList.contains("reveal-scale")) scale = 0.95

      gsap.fromTo(el, 
        { opacity: 0, x: x, y: y, scale: scale }, 
        {
          opacity: 1,
          x: 0, y: 0, scale: 1,
          duration: 1.0, // More luxurious but snappier
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    // Sticky Projects Showcase
    const projects = [...personalProjects, ...clientProjects]
    const projectElements = document.querySelectorAll(".sticky-project-card")
    
    if (projectElements.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects-pin-container",
          start: "top top",
          end: `+=${projects.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      })

      projectElements.forEach((el, i) => {
        // Initial state: hidden and down
        gsap.set(el, { opacity: 0, y: 100, visibility: "hidden" })

        // 1. Enter from bottom
        tl.to(el, {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out"
        })
        
        // 2. Hold (static scroll period)
        tl.to({}, { duration: 1 }) 

        // 3. Exit (except for the last one)
        if (i < projectElements.length - 1) {
          tl.to(el, {
            opacity: 0,
            y: -100,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => { gsap.set(el, { visibility: "hidden" }) }
          })
        }
      })
    }

    // Magnetic Elements
    const magneticElements = document.querySelectorAll(".magnetic")
    magneticElements.forEach((el: any) => {
      el.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" })
      })
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" })
      })
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isMounted])

  if (!isMounted) return <div className="min-h-screen bg-gray-950" />

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <nav className="glass-navbar rounded-2xl px-6 py-4 flex justify-between items-center bg-gray-950/40 border-white/10">
            <div className="text-xl sm:text-2xl font-bold cursor-pointer group flex items-center gap-2" onClick={() => handleNavClick("home")}>
               <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-base">M</span>
               <span className="heading-primary group-hover:opacity-80 transition-opacity">Mujahid</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {["home", "experience", "education", "certificates", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg capitalize ${
                    activeSection === section ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <Zap className="w-5 h-5 text-indigo-400" /> : <Code className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
           <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
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

      {/* Professional Home Section */}
      <Element name="home">
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-0">
          {/* Ambient Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-[10%] left-[-5%] w-[35%] h-[35%] bg-indigo-500/15 rounded-full blur-[140px] animate-aurora"></div>
             <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-500/15 rounded-full blur-[140px] animate-aurora" style={{ animationDelay: '-8s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center lg:text-left">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
              
              {/* Content Column */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md reveal-scale">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Available for new opportunities</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white reveal">
                    Software <span className="heading-primary">Engineer</span> <br />
                    <span className="text-white/40">Crafting Reality.</span>
                  </h1>
                </div>

                <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                  <p className="text-xl md:text-2xl text-slate-200 font-medium leading-tight reveal">
                    Hi, I'm <span className="text-indigo-400">Mujahidul Islam</span>. <br className="hidden md:block" />
                    {tagline}
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed reveal" style={{ transitionDelay: '0.1s' }}>
                    A dedicated specialist in architecting modern web experiences. Based in Bangladesh, I bridge the gap between complex backend logic and user-centric frontend aesthetics to build high-performance, scalable digital solutions.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 reveal" style={{ transitionDelay: '0.2s' }}>
                  <button onClick={() => handleNavClick("projects")} className="magnetic btn-primary flex items-center justify-center gap-3 px-10 py-5 text-sm uppercase tracking-widest">
                    Explore Work <Zap className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleNavClick("contact")} className="magnetic btn-secondary flex items-center justify-center gap-3 px-10 py-5 text-sm uppercase tracking-widest">
                    Start a Project <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats/Metrics Column */}
              <div className="relative group reveal-right flex justify-center lg:justify-end" style={{ transitionDelay: '0.3s' }}>
                <div className="grid grid-cols-1 gap-4 w-full max-w-[320px]">
                  {[
                    { label: "EXPERIENCE", val: "2+ Years", sub: "Software Development", icon: <Briefcase /> },
                    { label: "PROJECTS", val: "40+", sub: "Delivered Worldwide", icon: <Globe /> },
                    { label: "TECH STACK", val: "Full-Stack", sub: "MERN & Beyond", icon: <Code /> },
                    { label: "LOCATION", val: "Dhaka", sub: "Bangladesh (GMT+6)", icon: <MapPin /> }
                  ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 border-white/5 hover:border-indigo-500/30 transition-all duration-500 group/stat">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 group-hover/stat:bg-indigo-500 group-hover/stat:text-white transition-all duration-300">
                          {cloneElement(stat.icon as ReactElement, { className: "w-5 h-5" } as any)}
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                          <p className="text-2xl font-black text-white leading-none mb-1">{stat.val}</p>
                          <p className="text-xs text-gray-500 font-medium">{stat.sub}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Decorative Link */}
                  <div className="flex items-center justify-between p-4 glass-card border-none bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors mt-2 text-indigo-300 group/link">
                    <p className="text-[11px] font-bold uppercase tracking-widest">Professional Context</p>
                    <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/" target="_blank">
                      <Linkedin size={20} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://github.com/mujahidulislam" target="_blank">
                      <Github size={20} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    </div>
                  </div>
                </div>

                {/* Background Glow for Stats */}
                <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>

            </div>
          </div>
        </section>
      </Element>

 
      
      {/* Experience Section */}
      <Element name="experience">
        <section id="experience" className="relative py-24 bg-gray-950">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">Professional Journey</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Experience</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal ${index % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gray-950 text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-indigo-500/50 transition-colors duration-300">
                      <Briefcase size={20} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 shadow-xl group-hover:translate-y-[-4px] transition-transform duration-300">
                      <time className="font-medium text-indigo-400 text-sm tracking-wide">{exp.duration}</time>
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

      

      {/* Education & Certificates */}
      <Element name="education">
        <section className="relative py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-24">
                <div className="reveal-left">
                   <div className="mb-12">
                      <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">Background</h2>
                      <h3 className="text-4xl font-bold text-white">Education</h3>
                   </div>
                   <div className="space-y-6">
                      {education.map((edu, i) => (
                        <div key={i} className="glass-card p-6 hover:border-indigo-500/20 group reveal">
                           <div className="flex justify-between items-start mb-4">
                              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                 <Award size={24} />
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

                <Element name="certificates">
                   <div className="reveal-right">
                      <div className="mb-12">
                         <h2 className="text-purple-400 font-semibold mb-2 tracking-wider uppercase text-sm">Validation</h2>
                         <h3 className="text-4xl font-bold text-white">Certificates</h3>
                      </div>
                      <div className="space-y-6">
                         {certificates.map((cert, i) => (
                           <div key={i} className="glass-card p-6 group flex gap-6 reveal">
                              <div className="shrink-0 w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center p-2">
                                 <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain filter   group-hover:  transition-all" />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">{cert.date}</span>
                                 </div>
                                 <p className="text-purple-400 text-xs font-medium mb-3">{cert.issuer}</p>
                                 <a href={cert.certificateLink} target="_blank" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-purple-400 transition-colors">
                                    VIEW CREDENTIAL <ExternalLink size={12} />
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

      {/* Skills Section */}
      <Element name="skills">
        <section id="skills" className="relative py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <h2 className="text-indigo-400 font-semibold mb-2 tracking-wider uppercase text-sm">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h3>
            </div>

            <div className="space-y-16">
               {skillCategories.map((cat, ci) => (
                  <div key={ci} className="reveal">
                     <div className="flex items-center gap-4 mb-8">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>{cat.icon}</div>
                        <h4 className="text-xl font-bold text-white tracking-tight">{cat.title}</h4>
                        <div className="flex-1 h-px bg-white/5"></div>
                     </div>
                     <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cat.skills.map((s, si) => (
                           <div key={si} className="glass-card p-4 flex flex-col items-center gap-3 group hover:-translate-y-1 transition-all reveal-scale">
                              <img src={s?.imageUrl} alt={s?.name} className="w-10 h-10 object-contain   group-hover:  transition-all duration-500" />
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

      {/* Sticky Project Showcase Section */}
      <Element name="projects">
        <section id="projects" className="relative bg-gray-950">
          <div id="projects-pin-container" className="h-[100vh] w-full relative overflow-hidden flex items-center justify-center">
             {/* Section Header (Fixed in background or above) */}
             <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4 pointer-events-none mb-20">
                <h2 className="text-indigo-400 font-bold mb-4 tracking-[0.2em] uppercase text-xs">Selected Works</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">Crafting <span className="text-white/20 text-3xl md:text-5xl">Digital Experiences</span></h3>
             </div>

             <div className="relative w-full max-w-7xl mx-auto h-full px-4 flex items-center justify-center pt-20">
                {[...personalProjects, ...clientProjects].map((p, i) => (
                   <div 
                    key={i} 
                    className="sticky-project-card absolute inset-0 flex flex-col lg:flex-row gap-12 items-center justify-center w-full px-4"
                    style={{ visibility: "hidden" }}
                   >
                      <div className="w-full lg:w-3/5 relative">
                         <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] glass-card p-2 border-white/5">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-[1.5rem]" />
                            <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 pointer-events-auto">
                               <a href={p.liveLink} target="_blank" className="w-14 h-14 rounded-full bg-white text-gray-950 flex items-center justify-center hover:scale-110 transition-transform"><Globe size={24} /></a>
                               {p.clientCode && <a href={p.clientCode} target="_blank" className="w-14 h-14 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"><Github size={24} /></a>}
                            </div>
                         </div>
                      </div>

                      <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
                         <div className="space-y-2">
                            <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">{p.techStack?.[0]} / Project</span>
                            <h4 className="text-3xl md:text-5xl font-bold text-white transition-colors">{p.title}</h4>
                         </div>
                         <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">{p.description}</p>
                         <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                           {p.techStack?.slice(0, 5).map((t, ti) => (
                              <span key={ti} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">{t}</span>
                           ))}
                         </div>
                         <div className="pt-6 pointer-events-auto">
                            <a href={p.liveLink} target="_blank" className="inline-flex items-center gap-3 text-white font-bold group/link">
                               <span className="relative">VIEW PROJECT<span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 group-hover/link:w-full transition-all duration-300"></span></span>
                               <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section id="contact" className="relative py-32 bg-gray-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="reveal-left">
                   <h2 className="text-indigo-400 font-bold mb-6 tracking-widest uppercase text-xs">Contact</h2>
                   <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">Let's build something <br /> <span className="heading-primary">legendary</span> together.</h3>
                   <div className="space-y-8">
                      <div className="group flex flex-col gap-2 reveal">
                         <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Email me at</span>
                         <a href="mailto:developermujahid2001@gmail.com" className="text-2xl md:text-3xl font-bold text-white hover:text-indigo-400 transition-colors break-all">developermujahid2001@gmail.com</a>
                      </div>
                      <div className="flex gap-6 reveal">
                         {[
                           { icon: <Github />, link: "https://github.com/Mujahid2000", label: "GitHub" },
                           { icon: <Linkedin />, link: "https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/", label: "LinkedIn" }
                         ].map((social, i) => (
                           <a key={i} href={social.link} target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">
                              {cloneElement(social.icon as ReactElement, { className: "w-5 h-5" } as any)}
                              <span>{social.label}</span>
                           </a>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="glass-card p-10 border-white/5 relative reveal-right">
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
                         Send Message <Send size={16} />
                      </button>
                   </form>
                </div>
             </div>
          </div>
        </section>
      </Element>

      {/* Footer */}
      <footer className="py-20 bg-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-black text-xs">M</div>
              <span className="text-white font-bold tracking-tighter uppercase">Mujahid.dev</span>
           </div>
           <p className="text-gray-500 text-xs tracking-widest uppercase">© 2025 Handcrafted with passion</p>
        </div>
      </footer>

      {/* Custom Cursor */}
      <div className="custom-cursor hidden md:block"></div>
      <div className="cursor-follower hidden md:block"><span className="cursor-label"></span></div>
    </div>
  )
}
