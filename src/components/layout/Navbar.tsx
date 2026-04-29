import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="bg-surface/80 backdrop-blur-xl border border-border rounded-full px-4 py-2 flex items-center justify-between w-full max-w-2xl pointer-events-auto shadow-2xl">
        <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group px-2">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold tracking-widest uppercase">Back</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors px-4 py-2 rounded-full ${
                  isActive ? 'bg-minecraft-green/10 text-minecraft-green' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-4 right-4 bg-surface border border-border rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
        >
          <div className="p-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-xl ${
                  location.pathname.startsWith(link.path) 
                    ? 'text-minecraft-green bg-minecraft-green/10' 
                    : 'text-zinc-400 hover:text-white hover:bg-surface-hover'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
