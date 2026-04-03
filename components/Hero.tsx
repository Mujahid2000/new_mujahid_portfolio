'use client'
import { useEffect, useRef, useState } from 'react'

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.1 3.4 6.1 7.8V24H18.3v-7.5c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4.1V24H7.5V8z" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.38c.97 0 1.95.13 2.86.38 2.18-1.5 3.14-1.18 3.14-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.47 24 17.13 24 12.02 24 5.74 18.27.5 12 .5z" />
  </svg>
)

const roles = ['FULL STACK', 'FRONTEND', 'BACKEND', 'API']

export default function Hero() {
  const [ri, setRi] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = roles[ri]
    let t: NodeJS.Timeout
    if (!del && txt.length < cur.length) {
      t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 90)
    } else if (!del && txt.length === cur.length) {
      t = setTimeout(() => setDel(true), 2000)
    } else if (del && txt.length > 0) {
      t = setTimeout(() => setTxt(txt.slice(0, -1)), 50)
    } else {
      setDel(false)
      setRi((ri + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [txt, del, ri])

  return (
    <section id="about" className="min-h-screen pt-14 flex flex-col relative overflow-hidden">
      {/* Top ticker */}
      <div className="border-b border-border py-2 overflow-hidden bg-surface/40">
        <div className="ticker gap-12 font-mono text-xs text-dim">
          {Array(4).fill(['NEXT.JS', '·', 'TYPESCRIPT', '·', 'NODE.JS', '·', 'POSTGRESQL', '·', 'MONGODB', '·', 'SOCKET.IO', '·', 'NESTJS', '·', 'PRISMA', '·', 'TAILWIND', '·']).flat().map((t, i) => (
            <span key={i} className={t === '·' ? 'text-orange' : ''}>{t}</span>
          ))}
        </div>
      </div>

      {/* Main hero grid */}
      <div className="flex-1 grid lg:grid-cols-[1fr_380px] max-w-screen-xl mx-auto w-full px-6 md:px-10">
        {/* Left */}
        <div className="flex flex-col justify-center py-16 lg:border-r border-border pr-0 lg:pr-12">
          {/* Eyebrow */}
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="dot dot-pulse" />
            <span>Based in Dhaka, Bangladesh</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.88] tracking-wide text-paper mb-4">
            MUJAHIDUL
            <br />
            <span className="text-orange">ISLAM</span>
          </h1>

          {/* Role line */}
          <div className="flex items-end gap-3 mb-10 h-16">
            <span className="font-display text-[clamp(2rem,5vw,4rem)] text-dim leading-none">{txt}</span>
            <span className="font-mono text-3xl text-orange leading-none mb-1 blink">|</span>
            <span className="font-display text-[clamp(2rem,5vw,4rem)] text-dim leading-none">DEVELOPER</span>
          </div>

          {/* Bio */}
          <p className="font-body text-dim leading-relaxed max-w-lg mb-10 text-base">
            6+ months of professional experience shipping production-grade web applications.
            3 live products. Clean APIs. Real-time systems. Modern full stack.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-orange">View Projects →</a>
            <a href="mailto:mujahidul.developer@gmail.com" className="btn-ghost">Get in Touch</a>
            <a
              href="https://drive.usercontent.google.com/download?id=1zC925x9cgxQy0acalsRkwtbFcgcCHEB6&export=download&authuser=8&confirm=t&uuid=2164f948-9601-4fa7-b162-fd11f18b2c03&at=AGN2oQ1Wr402w71kEII_swcG0r9g:1775223457543"
              className="btn-ghost"
              target='_blank'
              download
            >
              Resume ↓
            </a>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="hidden lg:flex flex-col border-l-0 py-16 pl-12 gap-6 justify-center">
          {/* Stats */}
          {[
            { n: '6+', label: 'Months\nExperience' },
            { n: '03', label: 'Production\nProducts' },
            { n: '10+', label: 'Technologies\nMastered' },
          ].map(({ n, label }) => (
            <div key={n} className="border-b border-border pb-6 last:border-0 last:pb-0">
              <div className="font-display text-7xl text-orange leading-none mb-1">{n}</div>
              <div className="font-mono text-xs text-dim whitespace-pre-line leading-relaxed">{label}</div>
            </div>
          ))}

          {/* Contact strip */}
          <div className="border border-border p-4 mt-2">
            <div className="eyebrow mb-3">Contact</div>
            <a href="mailto:mujahidul.developer@gmail.com" className="font-mono text-xs text-paper hover:text-orange transition-colors block mb-1 truncate">
              mujahidul.developer@gmail.com
            </a>
            <span className="font-mono text-xs text-dim">+8801987-064729</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dim hover:text-orange transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Mujahid2000" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dim hover:text-orange transition-colors">
              <GitHubIcon />
            </a>
            <a href="https://www.hackerrank.com/profile/developermujahi2" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-dim hover:text-orange transition-colors">
              HackerRank
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-10 flex items-center justify-between">
          <span className="font-mono text-xs text-dim">SCROLL DOWN</span>
        </div>
      </div>
    </section>
  )
}
