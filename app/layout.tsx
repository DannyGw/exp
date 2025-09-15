import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Portfolio — Full Stack Developer & UI/UX Designer',
  description: 'A modern, fast, and elegant portfolio showcasing full stack and UI/UX work.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Modern Portfolio — Full Stack Developer & UI/UX Designer',
    description: 'A modern, fast, and elegant portfolio showcasing full stack and UI/UX work.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Portfolio — Full Stack Developer & UI/UX Designer',
    description: 'A modern, fast, and elegant portfolio showcasing full stack and UI/UX work.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark antialiased`}> 
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
