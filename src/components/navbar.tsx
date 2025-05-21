"use client"
import { useState } from "react"
import { Menu, X, Linkedin } from "lucide-react"

const navLinks = [
  { name: "Info", href: "#info" },
  { name: "Contact", href: "#contact" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo or Name */}
        <a href="#info" className="text-xl font-bold text-blue-800 tracking-tight flex items-center gap-2">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-2 py-1 rounded-lg">Pardeep</span>
          <span className="hidden sm:inline text-indigo-700">Portfolio</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-lg text-blue-800 font-medium hover:bg-blue-100 hover:text-indigo-700 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-indigo-700 transition flex items-center gap-1"
          >
            <Linkedin className="w-5 h-5" /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-blue-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 border-b border-blue-100 shadow-lg flex flex-col items-center gap-2 py-4 animate-fade-in-down">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="w-full text-center px-4 py-2 text-blue-800 font-medium hover:bg-blue-100 hover:text-indigo-700 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2 text-blue-700 font-medium hover:bg-blue-100 hover:text-indigo-700 transition flex items-center justify-center gap-1"
            onClick={() => setOpen(false)}
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      )}
    </nav>
  )
}

