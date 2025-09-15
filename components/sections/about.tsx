export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="section-title">About</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <p className="opacity-80">
            Hi, My name is Daniel Getachew. I am a software engineer with a passion for building scalable and efficient systems.
            With a background spanning product design and full stack engineering, I translate business goals into
            elegant, accessible interfaces and robust, scalable systems.
          </p>
          <div className="mt-4">
            <a
              href="/resume"
              className="inline-flex px-4 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm"
            >
              View CV
            </a>
          </div>
        </div>
        <ul className="card p-6 space-y-2">
          <li>React, Next.js, TypeScript</li>
          <li>Node.js, PostgreSQL, Prisma</li>
          <li>Design systems, Figma, Prototyping</li>
          <li>Testing, CI/CD, Cloud</li>
        </ul>
      </div>
    </section>
  );
}
