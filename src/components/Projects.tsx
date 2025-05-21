"use client"
import { motion } from "framer-motion"
import {
  Database,
  Server,
  Atom,
  Code2,
  Bot,
  Youtube,
  Languages,
  Speech,
  UserCircle2,
  CalendarCheck2,
  BarChart3,
  Send,
  Globe,
  Github,
  BadgeCheck,
  KeyRound,
  LogIn,
  Bell,
  UserCog,
  MessageSquareText,
  ShieldCheck,
  Link2,
  Image as LucideImage,
} from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-2 sm:px-6 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
        }}
        className="relative bg-white/95 backdrop-blur-2xl border border-blue-200/60 rounded-3xl shadow-2xl p-5 sm:p-12 mb-16 overflow-hidden"
      >
        {/* Decorative glossy blue gradients */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/30 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-12 flex items-center z-10 relative tracking-tight">
          <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mr-3 rounded"></span>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
          {/* Project 1: Yudo Examen */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.025, boxShadow: "0 8px 40px 0 rgba(59,130,246,0.10)" }}
            className="min-w-0 w-full bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/70 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <UserCircle2 className="w-8 h-8 text-blue-400" />
              <div>
                <div className="text-lg font-bold text-blue-800">Yudo Examen</div>
                <div className="text-xs text-blue-500 font-medium">May 2025 – May 2025</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Database className="w-4 h-4" />MongoDB</span>
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Server className="w-4 h-4" />Express</span>
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Atom className="w-4 h-4" />React</span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Code2 className="w-4 h-4" />Node.js</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Languages className="w-4 h-4" />TypeScript</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Bot className="w-4 h-4" />AI</span>
            </div>
            <p className="text-blue-900 text-sm sm:text-base mb-4">
              <span className="font-semibold">Yudo Examen</span> is a MERN stack online learning and test platform. Users can create, explore, and take AI-powered tests with features like auto-generated questions, solutions, and options, code editor with multi-language support, image uploads, YouTube video integration, text-to-speech, and multi-language translation.
            </p>
            <ul className="list-disc list-inside text-blue-800 text-sm space-y-1 pl-2 mb-3">
              <li>AI-generated test descriptions, solutions, and options</li>
              <li>Code editor (multi-language), image & video uploads</li>
              <li>Text-to-speech, multi-language translation, search/filter</li>
              <li>Email OTP, Google login, JWT, profile updates</li>
              <li>Explore all tests, analytics, and dashboard</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Youtube className="w-4 h-4" />YouTube</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Speech className="w-4 h-4" />Text-to-Speech</span>
              <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Languages className="w-4 h-4" />Multi-language</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Globe className="w-4 h-4" />Google Gemini</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Send className="w-4 h-4" />Telegram</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              <a
                href="https://yudo-examen.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:from-blue-600 hover:to-indigo-600 transition"
              >
                <Globe className="w-4 h-4" /> Live
              </a>
              <a
                href="https://github.com/pardeepsidhu/yudo-examen-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-blue-700 text-white font-semibold shadow hover:from-gray-900 hover:to-blue-800 transition"
              >
                <Code2 className="w-4 h-4" /> Frontend Code
              </a>
              <a
                href="https://github.com/pardeepsidhu/yudo-examen-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-indigo-700 text-white font-semibold shadow hover:from-gray-900 hover:to-indigo-800 transition"
              >
                <Server className="w-4 h-4" /> Backend Code
              </a>
            </div>
          </motion.div>
          {/* Project 2: Yudo Scheduler */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.025, boxShadow: "0 8px 40px 0 rgba(99,102,241,0.10)" }}
            className="min-w-0 w-full bg-gradient-to-br from-indigo-50/90 to-white/95 border border-indigo-200/70 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <CalendarCheck2 className="w-8 h-8 text-indigo-400" />
              <div>
                <div className="text-lg font-bold text-indigo-800">Yudo Scheduler</div>
                <div className="text-xs text-indigo-500 font-medium">Mar 2025 – Apr 2025</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Database className="w-4 h-4" />MongoDB</span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Server className="w-4 h-4" />Express</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Atom className="w-4 h-4" />React</span>
              <span className="bg-lime-100 text-lime-700 px-2 py-1 rounded text-xs flex items-center gap-1"><Code2 className="w-4 h-4" />Node.js</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Languages className="w-4 h-4" />TypeScript</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Bot className="w-4 h-4" />AI</span>
            </div>
            <p className="text-indigo-900 text-sm sm:text-base mb-4">
              <span className="font-semibold">Yudo Scheduler</span> is a MERN stack time management app. Users can create tasks by priority, track time, analyze productivity, and receive reminders via email and Telegram. Features include analytics charts, authentication, profile management, and Google Gemini-powered reminders.
            </p>
            <ul className="list-disc list-inside text-indigo-800 text-sm space-y-1 pl-2 mb-3">
              <li>Task creation by priority (low, normal, high), stop/resume timer</li>
              <li>Task analytics with weekly/monthly charts</li>
              <li>Profile image upload, email OTP login, quick login/password change</li>
              <li>Telegram integration, Google Gemini reminders, notifications</li>
              <li>Authentication: JWT, Google login, profile updates</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Globe className="w-4 h-4" />Google Gemini</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs flex items-center gap-1"><Send className="w-4 h-4" />Telegram</span>
              <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs flex items-center gap-1"><BarChart3 className="w-4 h-4" />Analytics</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              <a
                href="https://yudo-scheduler.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-blue-600 transition"
              >
                <Globe className="w-4 h-4" /> Live
              </a>
              <a
                href="https://github.com/pardeepsidhu/yudo-scheduler"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-indigo-700 text-white font-semibold shadow hover:from-gray-900 hover:to-indigo-800 transition"
              >
                <Code2 className="w-4 h-4" /> Frontend Code
              </a>
              <a
                href="https://github.com/pardeepsidhu/yudo-reminder-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-blue-700 text-white font-semibold shadow hover:from-gray-900 hover:to-blue-800 transition"
              >
                <Server className="w-4 h-4" /> Backend Code
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}