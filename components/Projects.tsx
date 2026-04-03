'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    n: '01',
    name: 'MY-JOB',
    sub: 'Job Posting Platform',
    badge: 'LIVE',
    desc: 'Full-featured job marketplace with Applicant, Company & Admin roles. PayPal subscription billing, real-time chat, advanced filtering, resume management, and email notifications.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'PayPal API', 'Socket.io', 'Redux', 'Cloudinary'],
    live: '#',
    fe: '#',
    be: '#',
  },
  {
    n: '02',
    name: 'DYNAMIC RBAC',
    sub: 'Permission Architecture System',
    badge: 'COMPLEX',
    desc: 'Enterprise-grade dynamic permission system replacing static RBAC. Next.js middleware routing, grant ceiling logic for hierarchy delegation, visual no-code permission manager, full audit trail.',
    tech: ['Next.js 16', 'TypeScript', 'NestJS', 'MongoDB', 'JWT', 'Recharts', 'bcrypt', 'cookie-parser'],
    live: '#',
    fe: '#',
    be: '#',
  },
  {
    n: '03',
    name: 'PM-SOURCING',
    sub: 'Tailoring & Supply Chain App',
    badge: 'PAID',
    desc: 'Manufacturing, sourcing & supply chain management with country-based ordering, complete order dashboard, advanced GSAP animations, and dynamic multi-language switching.',
    tech: ['Next.js', 'Tailwind CSS', 'GSAP', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    live: '#',
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 border-b border-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="sr grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] border-b border-border pb-6">
          <div className="eyebrow pt-1">04 / Projects</div>
          <h2 className="sh">SHIPPED<br/>PRODUCTS</h2>
        </div>

        {/* Projects */}
        {projects.map(({ n, name, sub, badge, desc, tech, live, fe, be }, i) => (
          <div
            key={n}
            className={`sr sr-d${i + 1} hcard border-x-0 border-t-0 border-b border-border py-10 group cursor-default`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 items-start">
              {/* Number */}
              <div className="proj-num">{n}</div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="font-display text-4xl md:text-5xl text-paper group-hover:text-orange transition-colors">
                    {name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-widest bg-orange text-white px-2 py-0.5">
                    {badge}
                  </span>
                </div>
                <div className="font-mono text-xs text-dim mb-5">{sub}</div>
                <p className="text-dim font-body text-sm leading-relaxed max-w-2xl mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              {/* Links */}
              <div className="flex md:flex-col gap-2 md:gap-3 pt-1">
                {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs text-paper border border-border px-3 py-2 hover:border-orange hover:text-orange transition-all text-center">
                    ↗ Live
                  </a>
                )}
                {fe && (
                  <a href={fe} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs text-dim border border-border px-3 py-2 hover:border-orange hover:text-orange transition-all text-center">
                    FE
                  </a>
                )}
                {be && (
                  <a href={be} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs text-dim border border-border px-3 py-2 hover:border-orange hover:text-orange transition-all text-center">
                    BE
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
