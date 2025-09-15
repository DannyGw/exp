export function Experience() {
  const items = [
    { role: 'Senior Full Stack Engineer', company: 'Acme Co.', period: '2022 — Present', summary: 'Led migration to Next.js, improved Core Web Vitals, and shipped design system.' },
    { role: 'Product Designer', company: 'Studio X', period: '2020 — 2022', summary: 'Owned UX research through high-fidelity prototypes, boosting conversion by 18%.' }
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
