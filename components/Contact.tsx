'use client'
import { useEffect, useRef } from 'react'

const links = [
  { label: 'Email', val: 'mujahidul.developer@gmail.com', href: 'mailto:mujahidul.developer@gmail.com' },
  { label: 'LinkedIn', val: 'linkedin.com/in/mujahidul', href: 'https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/' },
  { label: 'GitHub', val: 'github.com/Mujahid2000', href: 'https://github.com/Mujahid2000' },
  { label: 'HackerRank', val: 'hackerrank.com/developermujahi2', href: 'https://www.hackerrank.com/profile/developermujahi2' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Big CTA */}
        <div className="sr border-b border-border pb-16 mb-16">
          <div className="eyebrow mb-8">05 / Contact</div>
          <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] text-paper mb-10">
            LET'S BUILD<br />
            <span className="text-orange">SOMETHING</span><br />
            GREAT.
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:mujahidul.developer@gmail.com" className="btn-orange text-sm py-3 px-8">
              Send an Email →
            </a>
            <a href="https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm py-3 px-8">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="sr sr-d1 grid grid-cols-1 md:grid-cols-2 gap-0 border border-border mb-16">
          {links.map(({ label, val, href }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group flex items-center justify-between px-6 py-5 border-border hover:bg-surface transition-colors
                ${i % 2 === 0 ? 'md:border-r' : ''}
                ${i < links.length - 2 ? 'border-b' : ''}
                ${i === links.length - 1 && links.length % 2 !== 0 ? 'md:border-t' : ''}
              `}
            >
              <div>
                <div className="eyebrow mb-1">{label}</div>
                <div className="font-mono text-xs text-paper group-hover:text-orange transition-colors truncate max-w-[240px]">{val}</div>
              </div>
              <span className="text-dim group-hover:text-orange transition-colors font-mono text-sm">→</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="sr sr-d2 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
          <span className="font-mono text-xs text-dim">
            © 2025 Mujahidul Islam — Built with Next.js & Tailwind CSS
          </span>
          <div className="flex items-center gap-2 font-mono text-xs text-dim">
            <span className="dot dot-pulse" />
            Open to opportunities · Dhaka, Bangladesh
          </div>
        </div>
      </div>
    </section>
  )
}
