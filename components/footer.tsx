export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="container py-10 text-sm opacity-70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Your Name</p>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
