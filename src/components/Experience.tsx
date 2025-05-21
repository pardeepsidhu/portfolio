"use client"
import { motion } from "framer-motion"
import Image from "next/image"

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

export function Experience() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-2 sm:px-6 py-16">
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
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
          {/* Outthink Global Communications */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.035, boxShadow: "0 8px 40px 0 rgba(59,130,246,0.12)" }}
            className="min-w-0 w-full bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/70 rounded-2xl sm:p-5 p-3 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start gap-3 flex-wrap mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white via-blue-100 to-blue-200 flex items-center justify-center shadow-lg border-2 border-blue-200/60 relative">
                <Image
                  src="/outthink.png"
                  alt="Outthink Global Communications"
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10"
                />
                <span className="absolute inset-0 rounded-2xl ring-2 ring-blue-300/30 pointer-events-none"></span>
              </div>
              <div className="min-w-0">
                <div className="text-base md:text-lg font-bold text-blue-800 break-words">
                  MERN Stack Developer <span className="font-normal text-xs text-blue-400">• Internship</span>
                </div>
                <div className="text-xs md:text-sm text-blue-500 font-medium break-words">
                  @Outthink Global Communications, Virtual
                </div>
              </div>
            </div>
            <div className="text-blue-700 font-semibold mb-2 text-xs md:text-sm">Apr 2024 - May 2024</div>
            <ul className="list-disc list-inside text-blue-800 text-sm md:text-base space-y-1 pl-2">
              <li>Completed a 1-month virtual internship in MERN Stack.</li>
              <li>Worked on real life applicaions.</li>
              <li>Hands-on with MongoDB, Express.js, React.js, and Node.js.</li>
            </ul>
          </motion.div>
          {/* Coder Boutique */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.035, boxShadow: "0 8px 40px 0 rgba(99,102,241,0.12)" }}
            className="min-w-0 w-full bg-gradient-to-br from-indigo-50/90 to-white/95 border border-indigo-200/70 rounded-2xl sm:p-5 p-3 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start gap-3 flex-wrap mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white via-indigo-100 to-indigo-200 flex items-center justify-center shadow-lg border-2 border-indigo-200/60 relative">
                <Image
                  src="/coders.avif"
                  alt="Coder Boutique"
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10"
                />
                <span className="absolute inset-0 rounded-2xl ring-2 ring-indigo-300/30 pointer-events-none"></span>
              </div>
              <div className="min-w-0">
                <div className="text-base md:text-lg font-bold text-indigo-800 break-words">
                  Jr. Next.js Developer <span className="font-normal text-xs text-indigo-400">• Internship</span>
                </div>
                <div className="text-xs md:text-sm text-indigo-500 font-medium break-words">
                  @Coder Boutique, San Francisco, CA (Remote)
                </div>
              </div>
            </div>
            <div className="text-indigo-700 font-semibold mb-2 text-xs md:text-sm">Mar 2025 - Apr 2025</div>
            <ul className="list-disc list-inside text-indigo-800 text-sm md:text-base space-y-1 pl-2">
              <li>Remote internship (3 months, completed 1 month due to medical/final exams).</li>
              <li>Worked with Next.js, TypeScript, and Tailwind CSS.</li>
              <li>Gained experience in modern frontend and full-stack workflows.</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}