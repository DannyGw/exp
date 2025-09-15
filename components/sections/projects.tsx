import Image from 'next/image';

const sampleProjects = [
  {
    title: 'Design System & Component Library',
    description: 'Built a scalable design system with accessible components and theming.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'SaaS Analytics Platform',
    description: 'End-to-end product from UX research to a performant Next.js app.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Realtime Collaboration Tool',
    description: 'Websockets, optimistic UI, and fluid motion with Framer.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="section-title">Projects</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {sampleProjects.map((p) => (
          <a key={p.title} href={p.href} className="card overflow-hidden group block">
            <div className="relative aspect-[16/10]">
              <Image src={p.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="opacity-80 text-sm mt-1">{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
