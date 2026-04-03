'use client'
import { useEffect, useRef } from 'react'

export default function Work() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="work" ref={ref} className="py-24 border-b border-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="sr grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] border-b border-border pb-6 mb-0">
          <div className="eyebrow pt-1">03 / Work</div>
          <h2 className="sh">EXPERIENCE<br/>&amp; EDUCATION</h2>
        </div>

        {/* Experience entry */}
        <div className="sr sr-d1 grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-border py-10 gap-6">
          <div>
            <div className="font-mono text-xs text-orange mb-1">OCT 2025 — NOW</div>
            <div className="font-mono text-xs text-dim">Remote · Dhaka</div>
          </div>
          <div>
            <h3 className="font-display text-4xl text-paper mb-1">FULL STACK DEVELOPER</h3>
            <div className="font-mono text-sm text-orange mb-6">@ Alfabic</div>
            <ul className="space-y-3">
              {[
                'Maintained a full-stack LMS platform with multi-role access — Next.js, Node.js, PostgreSQL, Prisma.',
                'Built quiz, assessment, and auto-grading modules with real-time student analytics.',
                'Enhanced video content delivery and course management for smooth cross-device playback.',
                'Maintained payment & subscription flows in a 5-member agile team with regular code reviews.',
              ].map((pt, i) => (
                <li key={i} className="flex gap-3 text-dim text-sm leading-relaxed font-body">
                  <span className="text-orange mt-0.5 shrink-0">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Agile'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="sr sr-d2 grid grid-cols-1 md:grid-cols-[200px_1fr] py-10 gap-6">
          <div className="eyebrow pt-1">Education</div>
          <div className="space-y-6">
            {[
              { deg: 'Bachelor of Arts — Political Science', inst: 'National University Bangladesh', yr: '2019 – 2022' },
              { deg: 'Higher Secondary Certificate', inst: 'Barishal Govt. B.M College', yr: '2019' },
            ].map(({ deg, inst, yr }) => (
              <div key={deg} className="border-b border-border pb-6 last:border-0 last:pb-0 flex flex-col gap-1">
                <div className="font-mono text-xs text-orange">{yr}</div>
                <div className="font-body text-paper font-medium">{deg}</div>
                <div className="font-mono text-xs text-dim">{inst}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
