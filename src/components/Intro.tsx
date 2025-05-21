"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Award, 
  Briefcase, 
  Code,
  ExternalLink,
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 12 
    } 
  },
}

const subtleFloatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
}

const cardHoverEffect = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -7,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    }
  }
}

export function ProfessionalIntro() {
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  
  // For parallax effects
  const { scrollY } = useScroll()
  const headerParallax = useTransform(scrollY, [0, 300], [0, -60])
  const bgParallax = useTransform(scrollY, [0, 500], [0, -80])
  const sectionOpacity = useTransform(scrollY, [0, 100], [1, 0.9])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="info" className="min-h-screen w-full overflow-hidden relative pt-4 sm:pt-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      {isMounted && (
        <>
          <motion.div 
            style={{ y: bgParallax }}
            className="fixed top-10 right-[10%] w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl -z-10" 
            {...subtleFloatAnimation}
          />
          <motion.div 
            style={{ y: bgParallax }}
            animate={{
              scale: [1, 1.05, 1],
              transition: { duration: 8, repeat: Infinity }
            }}
            className="fixed top-[40%] left-[5%] w-80 h-80 bg-blue-300/20 rounded-full blur-3xl -z-10" 
          />
          <motion.div 
            style={{ y: bgParallax }}
            animate={{
              scale: [1, 1.1, 1],
              transition: { duration: 10, delay: 1, repeat: Infinity }
            }}
            className="fixed bottom-[10%] right-[20%] w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" 
          />
          <motion.div 
            animate={{
              opacity: [0.3, 0.5, 0.3],
              transition: { duration: 7, repeat: Infinity }
            }}
            className="fixed top-[30%] right-[30%] w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl -z-10" 
          />
        </>
      )}

      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto px-6 py-16 relative"
      >
        {/* Header Card */}
        <motion.div
          ref={headerRef}
          style={{ y: isMounted ? headerParallax : 0, opacity: sectionOpacity }}
          variants={itemVariants}
          className="relative w-full bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 mb-10 overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          {/* Decorative gradients */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />
          
          {/* Decorative shapes */}
          <motion.div 
            animate={{
              rotate: 360,
              transition: { duration: 60, ease: "linear", repeat: Infinity }
            }}
            className="absolute top-10 right-10 w-24 h-24 border-4 border-indigo-200/40 rounded-full opacity-30"
          />
          <motion.div 
            animate={{
              rotate: -360,
              transition: { duration: 45, ease: "linear", repeat: Infinity }
            }}
            className="absolute bottom-10 left-16 w-16 h-16 border-4 border-blue-200/40 rounded-full opacity-30"
          />

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="rounded-full border-4 border-white/80 shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-300 to-blue-300 flex items-center justify-center h-32 w-32 sm:h-44 sm:w-44 md:h-56 md:w-56 relative mb-0"
            whileHover={{ scale: 1.07, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/40 to-blue-300/40 mix-blend-overlay" />
            <Image
              src="/Logo.jpeg"
              height={224}
              width={224}
              alt="Pardeep Singh"
              className="h-32 w-32 sm:h-44 sm:w-44 md:h-56 md:w-56 rounded-full object-cover"
            />
            <motion.div 
              animate={{
                rotate: 360,
                transition: { duration: 20, ease: "linear", repeat: Infinity }
              }}
              className="absolute inset-0 rounded-full border-8 border-indigo-100/40 border-dashed opacity-70"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
            <motion.div 
              variants={itemVariants}
              className="mb-2 tracking-widest uppercase text-indigo-600 font-semibold text-xs sm:text-sm bg-indigo-50/70 px-4 py-1 rounded-full shadow-sm"
            >
              MERN Stack Developer
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-xl mb-5 bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent"
            >
              Pardeep Singh
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-7 justify-center md:justify-start"
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-100/80 text-indigo-700 px-4 py-2 rounded-full text-xs sm:text-base font-semibold shadow-sm border border-indigo-200/50"
              >
                Full Stack Web Development
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100/80 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-base font-semibold shadow-sm border border-blue-200/50"
              >
                React Specialist
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100/80 text-purple-700 px-4 py-2 rounded-full text-xs sm:text-base font-semibold shadow-sm border border-purple-200/50"
              >
                Problem Solver
              </motion.span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-medium mb-6 sm:mb-8"
            >
              I build modern, scalable web applications using the <span className="text-indigo-600 font-bold">MERN stack</span>.<br />
              Passionate about clean code, performance, and delivering real-world solutions with a great user experience.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 flex-wrap"
            >
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 sm:px-7 py-2 sm:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-blue-500/30 transition-all duration-300 text-base sm:text-lg flex items-center gap-2"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
                target="_blank"
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 sm:px-7 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-indigo-500/30 transition-all duration-300 text-base sm:text-lg flex items-center gap-2"
              >
                LinkedIn <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://github.com/pardeepsidhu"
                target="_blank"
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 sm:px-7 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-indigo-500/30 transition-all duration-300 text-base sm:text-lg flex items-center gap-2"
              >
                GitHub <Github className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* About Me */}
        <motion.div 
          ref={aboutRef}
          variants={itemVariants}
          className="relative bg-white/90 backdrop-blur-2xl border border-indigo-200/50 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 mb-16 overflow-hidden"
        >
          {/* Glossy accent */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 opacity-90"></div>
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800 mb-6 sm:mb-8 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mr-3 rounded"></span>
            About Me
          </h2>
          <p className="text-indigo-900 leading-relaxed text-base sm:text-lg font-medium mb-8 max-w-4xl">
            Hi, I'm <span className="font-semibold text-indigo-700">Pardeep Singh</span> — a passionate MERN Stack developer focused on building beautiful, scalable web applications. I love crafting clean code, optimizing performance, and delivering user-centric solutions with a modern touch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div 
              initial="rest"
              whileHover="hover"
              variants={cardHoverEffect}
              className="min-w-0 bg-gradient-to-br from-indigo-50/90 to-white/90 border border-indigo-200/70 rounded-xl p-5 sm:p-8 backdrop-blur-xl shadow-xl hover:border-indigo-400/60 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-100/80 flex items-center justify-center text-indigo-600 mb-4 sm:mb-6 shadow-inner border border-indigo-200/50">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-2 sm:mb-3">Education</h3>
              <div className="text-indigo-900">
                <div className="font-semibold text-base sm:text-lg">BCA (2022–2025)</div>
                <div className="text-xs sm:text-sm text-indigo-600 mt-1 font-medium">
                  Maharaja Ranjit Singh Punjab Technical University
                </div>
                <div className="mt-2 sm:mt-3 text-xs sm:text-sm inline-block bg-indigo-100/70 text-indigo-700 px-3 py-1 rounded-full font-medium">70% Score</div>
              </div>
            </motion.div>
            <motion.div 
              initial="rest"
              whileHover="hover"
              variants={cardHoverEffect}
              className="min-w-0 bg-gradient-to-br from-blue-50/90 to-white/90 border border-blue-200/70 rounded-xl p-5 sm:p-8 backdrop-blur-xl shadow-xl hover:border-blue-400/60 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-600 mb-4 sm:mb-6 shadow-inner border border-blue-200/50">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">Location</h3>
              <div className="text-blue-900">
                <div className="font-semibold text-base sm:text-lg flex items-center">
                  Fazilka, Punjab, India
                  <motion.div 
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                    className="ml-2 text-blue-500"
                  >
                    <MapPin className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div 
          ref={contactRef}
          variants={itemVariants}
          id="contact"
          className="relative rounded-2xl overflow-hidden mt-8"
        >
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 to-blue-50/90 backdrop-blur-2xl -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(79,70,229,0.08),transparent_70%)] -z-10"></div>
          
          {/* Decorative elements */}
          <motion.div 
            animate={{
              rotate: 360,
              transition: { duration: 60, ease: "linear", repeat: Infinity }
            }}
            className="absolute top-10 right-10 w-32 h-32 border-4 border-indigo-200/30 rounded-full opacity-40"
          />
          
          <div className="p-4 sm:p-6 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-6 sm:mb-8 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mr-3 rounded"></span>
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />} 
                label="Email"
                value="sihdupardeep618@yahoo.com"
                href="mailto:sihdupardeep618@yahoo.com"
                color="indigo"
              />
              <ContactCard 
                icon={<Phone className="w-5 h-5" />} 
                label="Phone"
                value="+91 82840 12817"
                href="tel:+918284012817"
                color="blue"
              />
              <ContactCard 
                icon={<Linkedin className="w-5 h-5" />} 
                label="LinkedIn"
                value="Connect with me"
                href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
                color="indigo"
              />
              <ContactCard 
                icon={<Github className="w-5 h-5" />} 
                label="GitHub"
                value="Follow my projects"
                href="https://github.com/pardeepsidhu"
                color="blue"
              />
              <ContactCard 
                icon={<MapPin className="w-5 h-5" />} 
                label="Location"
                value="Fazilka, Punjab, India"
                href="#"
                color="indigo"
              />
              <ContactCard 
                icon={<BookOpen className="w-5 h-5" />} 
                label="Resume"
                value="Download CV"
                href="#"
                color="blue"
              />
            </div>
          </div>
        </motion.div>
        
        
      </motion.div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, color }) {
  const gradients = {
    indigo: "from-indigo-50/90 to-white/90 hover:from-indigo-100/90 hover:to-white/100 border-indigo-200/70 hover:border-indigo-400/80",
    blue: "from-blue-50/90 to-white/90 hover:from-blue-100/90 hover:to-white/100 border-blue-200/70 hover:border-blue-400/80",
  }
  const iconBg = {
    indigo: "bg-indigo-100/80 text-indigo-600 group-hover:bg-indigo-200/90",
    blue: "bg-blue-100/80 text-blue-600 group-hover:bg-blue-200/90",
  }
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHoverEffect}
      className={`min-w-0 bg-gradient-to-br ${gradients[color]} backdrop-blur-xl border rounded-xl p-4 sm:p-5 transition-all duration-300 flex items-center gap-3 sm:gap-4 group shadow-xl`}
    >
      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${iconBg[color]} flex items-center justify-center transition-colors shadow-inner border border-white/80`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs sm:text-sm text-indigo-500 font-medium mb-1">{label}</div>
        {href && href !== "#" ? (
          <Link 
            href={href} 
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-indigo-900 font-medium hover:text-indigo-600 transition-colors flex items-center gap-1 text-sm sm:text-base break-words"
          >
            {value}
            {href.startsWith("http") && <ExternalLink className="w-3 h-3 opacity-70" />}
          </Link>
        ) : (
          <div className="text-indigo-900 font-medium text-sm sm:text-base break-words">{value}</div>
        )}
      </div>
    </motion.div>
  )
}