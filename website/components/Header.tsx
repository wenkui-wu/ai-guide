import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '#home' },
    { label: '精选内容', href: '#content' },
    { label: '路线图', href: '#roadmap' },
    { label: '更新日志', href: '#changelog' },
    { label: '趋势', href: '#growth' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-dark/80 border-b border-blue-500/20">
      <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">
              🐟
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Guide
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://github.com/wenkui-wu/ai-guide"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="hidden sm:inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            GitHub ⭐
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400"
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-blue-400 py-2 text-sm"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}
