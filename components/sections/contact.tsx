'use client';

import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="section-title">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <p className="opacity-80">Have a project in mind? Let&apos;s talk.</p>
        </div>
        <form action={async (fd) => onSubmit(fd)} className="card p-6 space-y-3">
          <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-transparent border border-black/10 dark:border-white/10" />
          <input name="email" required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-transparent border border-black/10 dark:border-white/10" />
          <textarea name="message" required placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-transparent border border-black/10 dark:border-white/10" />
          <button disabled={status==='loading'} className="px-5 py-3 rounded-full bg-primary text-primary-foreground">
            {status==='loading' ? 'Sending...' : 'Send message'}
          </button>
          {status==='success' && <p className="text-green-600">Thanks! I will get back to you soon.</p>}
          {status==='error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
