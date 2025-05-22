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
		<nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-lg transition-all duration-300">
			<div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
				{/* Logo or Name */}
				<a
					href="#info"
					className="text-xl font-bold text-blue-800 tracking-tight flex items-center gap-2 select-none"
				>
					<span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-2 py-1 rounded-lg shadow-md shadow-blue-400/20">
						Pardeep
					</span>
					<span className="hidden sm:inline text-indigo-700">Portfolio</span>
				</a>
				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-2">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="px-3 py-2 rounded-lg text-blue-800 font-medium hover:bg-blue-100/80 hover:text-indigo-700 transition-all duration-200 relative group"
						>
							<span className="relative z-10">{link.name}</span>
							<span className="absolute left-0 bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded"></span>
						</a>
					))}
					<a
						href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-indigo-700 transition flex items-center gap-1 shadow-sm"
					>
						<Linkedin className="w-5 h-5" />{" "}
						<span className="hidden sm:inline">LinkedIn</span>
					</a>
				</div>
				{/* Mobile Hamburger */}
				<button
					className={`
    md:hidden flex items-center justify-center p-2 rounded-lg transition-all duration-200
    fixed top-4 right-4
    ${open ? "z-50 bg-blue-100/80" : "z-30 hover:bg-blue-100/60"}
  `}
					onClick={() => setOpen((o) => !o)}
					aria-label="Toggle menu"
				>
					<span className="sr-only">Open main menu</span>
					<span className="transition-transform duration-300">
						{open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
					</span>
				</button>
			</div>
			{/* Mobile Drawer */}
			<div
				className={`
          md:hidden fixed left-0 top-0 w-full bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-2xl
          transition-all duration-400 z-40
          ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"}
        `}
				style={{
					transitionProperty: "opacity, transform",
				}}
			>
				<div className="flex flex-col items-center gap-2 py-6 animate-navbar-fade">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="w-full text-center px-4 py-3 text-blue-800 font-semibold rounded-lg hover:bg-blue-100/80 hover:text-indigo-700 transition-all duration-200 text-lg"
							onClick={() => setOpen(false)}
						>
							{link.name}
						</a>
					))}
					<a
						href="https://www.linkedin.com/in/pardeep-singh-85848a2b1"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full text-center px-4 py-3 text-blue-700 font-semibold rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-indigo-700 transition flex items-center justify-center gap-1 mt-2"
						onClick={() => setOpen(false)}
					>
						<Linkedin className="w-5 h-5" /> LinkedIn
					</a>
				</div>
			</div>
			{/* Animations */}
			<style jsx>{`
        @keyframes navbar-fade {
          0% { opacity: 0; transform: translateY(-20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-navbar-fade {
          animation: navbar-fade 0.4s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
		</nav>
	)
}