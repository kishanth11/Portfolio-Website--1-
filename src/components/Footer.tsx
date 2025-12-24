import { motion } from 'motion/react';
import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-6 flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="text-white" size={20} />
            </div>
            <span className="text-xl text-white group-hover:text-cyan-400 transition-colors">
              &lt;KISHANTH'S Portfolio/&gt;
            </span>
          </motion.button>

          {/* Copyright */}
          <div className="text-center mb-4">
            <p className="text-gray-400 flex items-center gap-2 justify-center">
              © {new Date().getFullYear()} Kishanth. Made with 
              <Heart className="text-red-500 fill-red-500" size={16} />
              and lots of coffee
            </p>
          </div>

          {/* Tech stack */}
          {/* <p className="text-gray-500 text-sm"> */}
            {/* Built with React, TypeScript, Motion & Tailwind CSS */}
          {/* </p> */}
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </footer>
  );
}
