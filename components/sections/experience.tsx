export function Experience() {
  const items = [
    {
      role: 'Full Stack Developer',
      company: 'Abyssinia Tech',
      period: '2020 — 2022',
      summary:
        'Built websites and applications across the stack (MERN). Delivered features end-to-end, led small teams, and managed projects to on-time releases.'
    },
    {
      role: 'Computer Maintenance & Network Administrator / Instructor',
      company: 'Sheba University College',
      period: '2019 — 2020',
      summary:
        'Maintained computers and networks, implemented updates and backups, ensured security, and supported users. Taught web development and graphic design fundamentals.'
    }
  ];
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="section-title">Experience</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.role} className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.role} · {item.company}</h3>
              <span className="text-sm opacity-70">{item.period}</span>
            </div>
            <p className="opacity-80 mt-2 text-sm">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
