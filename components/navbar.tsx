'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="#" className="font-semibold tracking-tight">Daniel G.</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
          <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
          <a href="#experience" className="opacity-80 hover:opacity-100">Experience</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          )}
          <a
            href="/resume"
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
          >
            Resume
          </a>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-soft">Hire me</a>
        </div>
      </div>
    </header>
  );
}
