'use client'
import { useEffect, useRef } from 'react'

const rows = [
  { cat: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Redux', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Node.js', 'Express.js', 'Nest.js', 'Socket.io', 'REST APIs', 'JWT'] },
  { cat: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Mongoose', 'Firebase', 'Supabase'] },
  { cat: 'Tools', items: ['Git / GitHub', 'VS Code', 'Postman', 'Vercel', 'Figma', 'Cloudinary', 'Nodemailer'] },
]

export default function Stack() {
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
    <section id="stack" ref={ref} className="py-24 border-b border-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="sr grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] border-b border-border pb-6 mb-0">
          <div className="eyebrow pt-1">02 / Stack</div>
          <h2 className="sh">TECHNICAL<br/>ARSENAL</h2>
        </div>

        {/* Table rows */}
        {rows.map(({ cat, items }, i) => (
          <div
            key={cat}
            className={`sr sr-d${i + 1} grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] border-b border-border py-6 gap-4`}
          >
            <div className="font-mono text-xs text-dim uppercase tracking-widest pt-1">{cat}</div>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}

        {/* Other */}
        <div className="sr sr-d4 grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] py-6 gap-4">
          <div className="font-mono text-xs text-dim uppercase tracking-widest pt-1">Principles</div>
          <div className="flex flex-wrap gap-2">
            {['System Design', 'REST API Design', 'UI/UX Implementation', 'Agile / Scrum', 'Code Review'].map(p => (
              <span key={p} className="tag">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
