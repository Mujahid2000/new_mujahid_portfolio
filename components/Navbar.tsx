'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['About', 'Stack', 'Work', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md' : ''}`}>
      <div className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-mono text-sm text-paper tracking-widest">
            MI<span className="text-orange">.</span>DEV
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-mono text-xs text-dim hover:text-orange tracking-widest uppercase transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Status + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-2 font-mono text-xs text-dim">
              <span className="dot dot-pulse" />
              Available
            </span>
            <a href="mailto:mujahidul.developer@gmail.com" className="btn-orange text-xs py-2 px-4">
              Hire me →
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden font-mono text-xs text-dim hover:text-orange transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? '[CLOSE]' : '[MENU]'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 bg-bg border-b border-border ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-mono text-xs text-dim hover:text-orange tracking-widest uppercase transition-colors py-1 border-b border-border"
            >
              {l}
            </a>
          ))}
          <a href="mailto:mujahidul.developer@gmail.com" className="btn-orange text-xs py-2 px-4 w-fit mt-2">
            Hire me →
          </a>
        </div>
      </div>
    </nav>
  )
}
