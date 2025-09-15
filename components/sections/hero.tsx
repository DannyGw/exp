'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-16" id="home">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg opacity-80"
          >
            I design and build delightful, performant web experiences end-to-end.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-soft">View projects</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-black/10 dark:border-white/10">Contact</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card aspect-[4/3]"/>
      </div>
    </section>
  );
}
