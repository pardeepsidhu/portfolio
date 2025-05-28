"use client"
import { motion } from "framer-motion"
import {
  FileType2,
  GitBranch,
  Github,
  Database,
  Server,
  Code2,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  Linkedin,
} from "lucide-react"

// React Icons for Skills
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  // SiJava,
} from "react-icons/si"

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-600 w-7 h-7" />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-600 w-7 h-7" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 w-7 h-7" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-700 w-7 h-7" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500 w-7 h-7" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black w-7 h-7" />,
  },
  {
    name: "React.js",
    icon: <SiReact className="text-sky-500 w-7 h-7" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 w-7 h-7" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 w-7 h-7" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 w-7 h-7" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800 w-7 h-7" />,
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-600 w-7 h-7" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-gray-900 w-7 h-7" />,
  },
  {
    name: "Core Java",
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
<path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
</svg>
  },
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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 to-white/90 border border-blue-100/60 rounded-xl p-3 sm:p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 min-w-0 group cursor-pointer"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
              <span className="text-xs sm:text-sm font-semibold text-blue-900 text-center break-words group-hover:text-indigo-700 transition-colors duration-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// --- Enhanced Footer Section ---

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/pardeepsidhu",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pardeep-singh-85848a2b1",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      url: "mailto:pardeep@example.com",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-red-500"
    }
  ]

  return (
    <footer className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-t border-blue-200/50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-900">Pardeep Singh</h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies and clean, efficient code.
            </p>
            <div className="flex items-center space-x-2 text-sm text-blue-600">
              <MapPin className="w-4 h-4" />
              <span>Available for remote and on site work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-blue-700 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <span>{link}</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">Let's Connect</h4>
            <p className="text-sm text-blue-700 mb-4">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/70 rounded-full shadow-sm border border-blue-200/50 text-blue-700 ${social.color} transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-200/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-blue-800">
              <span>© {currentYear} Pardeep Singh. All rights reserved.</span>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <span>Made By</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>Pardeep Singh</span>
            </div>
          </div>
        </div>
      </div>


    
    </footer>
  )
}