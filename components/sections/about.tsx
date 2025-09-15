export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="section-title">About</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <p className="opacity-80">
            DANIEL GETACHEW — Full Stack Developer based in Addis Abeba, Ethiopia. Results-oriented engineer with 3+ years of experience building robust, user-centric web applications.
            Proficient in the MERN stack (MongoDB, Express, React, Node.js) and experienced leading projects from inception to deployment.
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
          <li>Frontend: HTML, CSS, JavaScript, React, Bootstrap</li>
          <li>Backend: Node.js, PHP, Express, MongoDB, MySQL</li>
          <li>Dev Tools: VS Code, Git</li>
          <li>Strengths: Teamwork, Problem Solving, Communication</li>
          <li>Extras: Computer Maintenance, Network Admin, Graphics, Photo/Video Editing</li>
        </ul>
      </div>
    </section>
  );
}
