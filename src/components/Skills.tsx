"use client"
import { motion } from "framer-motion"
import {
  FileType2,
  Feather,
  GitBranch,
  Github,
  Database,
  Server,
  Atom,
  Code2,
  BadgeCheck,
} from "lucide-react"

const skills = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect width="32" height="32" rx="6" fill="#fff" />
        <path d="M6 4l2.2 24.7L16 28l7.8-3.3L26 4H6z" fill="#E44D26"/>
        <path d="M16 26.1V5.9h7.1l-1.8 20.2L16 26.1z" fill="#F16529"/>
        <path d="M16 12.7h-3.2l-.2-2.2H16V8.4h-5.2l.5 5.6H16v-1.3zm0 5.7h-2.9l-.2-2.2H16v-1.3h-5.1l.5 5.6H16v-1.3zm0 5.7h-2.7l-.2-2.2H16v-1.3h-5.1l.5 5.6H16v-1.3z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect width="32" height="32" rx="6" fill="#fff" />
        <path d="M6 4l2.2 24.7L16 28l7.8-3.3L26 4H6z" fill="#1572B6"/>
        <path d="M16 26.1V5.9h7.1l-1.8 20.2L16 26.1z" fill="#33A9DC"/>
        <path d="M16 12.7h-3.2l-.2-2.2H16V8.4h-5.2l.5 5.6H16v-1.3zm0 5.7h-2.9l-.2-2.2H16v-1.3h-5.1l.5 5.6H16v-1.3zm0 5.7h-2.7l-.2-2.2H16v-1.3h-5.1l.5 5.6H16v-1.3z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect width="32" height="32" rx="6" fill="#fff" />
        <rect x="6" y="4" width="20" height="24" rx="2" fill="#F7DF1E"/>
        <path d="M13.6 22.7l-1.1-.7c-.2.4-.4.7-.8.7-.4 0-.7-.2-.7-.8v-5.7h-1.6v5.8c0 1.5.8 2.3 2.2 2.3.9 0 1.6-.3 2.1-1.1zm4.7-2.2c0-1.2-.6-1.7-1.7-2.1l-.6-.2c-.5-.2-.7-.3-.7-.6 0-.3.2-.5.6-.5.4 0 .7.2.8.6l1.1-.7c-.3-.7-1-1.1-1.9-1.1-1.1 0-1.8.6-1.8 1.6 0 1.1.6 1.6 1.7 2l.6.2c.5.2.7.3.7.6 0 .3-.2.5-.6.5-.4 0-.7-.2-.8-.6l-1.1.7c.3.7 1 1.1 1.9 1.1 1.2 0 1.9-.6 1.9-1.7z" fill="#222"/>
      </svg>
    ),
  },
  { name: "TypeScript", icon: <FileType2 className="text-blue-600 w-7 h-7" /> },
  { name: "Tailwind CSS", icon: <Feather className="text-cyan-500 w-7 h-7" /> },
 {
  name: "Next.js",
  icon: (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <rect width="32" height="32" rx="6" fill="#fff"/>
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.5 21.5L10.5 10.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.5 16c0-2-1.5-3.5-3.5-3.5" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="9" stroke="#000" strokeWidth="1.2"/>
      </g>
    </svg>
  ),
},
  { name: "React.js", icon: <Atom className="text-sky-500 w-7 h-7" /> },
  { name: "Node.js", icon: <Code2 className="text-green-600 w-7 h-7" /> },
  { name: "Express.js", icon: <Server className="text-gray-700 w-7 h-7" /> },
  { name: "MongoDB", icon: <Database className="text-green-700 w-7 h-7" /> },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <ellipse cx="16" cy="16" rx="16" ry="16" fill="#336791" />
        <path d="M10 22c-2-5 2-10 6-10s8 5 6 10" stroke="#fff" strokeWidth="2" />
        <ellipse cx="13" cy="18" rx="1.5" ry="2" fill="#fff" />
        <ellipse cx="19" cy="18" rx="1.5" ry="2" fill="#fff" />
      </svg>
    ),
  },
  { name: "Git", icon: <GitBranch className="text-orange-600 w-7 h-7" /> },
  { name: "GitHub", icon: <Github className="text-gray-900 w-7 h-7" /> },
  { name: "Core Java", icon: <BadgeCheck className="text-orange-700 w-7 h-7" /> },
]

const cardVariants = {
  hidden: { opacity: 1, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 14 
    } 
  },
}

export function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
        }}
        className="relative bg-white/95 backdrop-blur-2xl border border-blue-200/60 rounded-3xl shadow-2xl p-5 sm:p-12 mb-16 overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/30 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-10 flex items-center z-10 relative tracking-tight">
          <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mr-3 rounded"></span>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 z-10 relative">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 to-white/90 border border-blue-100/60 rounded-xl p-3 sm:p-5 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-200 min-w-0 group"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
              <span className="text-xs sm:text-sm font-semibold text-blue-900 text-center break-words group-hover:text-indigo-700 transition-colors duration-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// --- Footer Section ---

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-t border-blue-100/60 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-blue-900 font-semibold">
          © {new Date().getFullYear()} Pardeep Singh. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/pardeepsidhu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-indigo-700 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-indigo-700 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24-5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}