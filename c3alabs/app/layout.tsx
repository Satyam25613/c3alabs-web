import type { Metadata } from 'next';
import { Fraunces, DM_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import SmoothScroll from '@/components/SmoothScroll';
import ClientShell from '@/components/ClientShell';
import './globals.css';

// P4 + Editorial authority: Fraunces — ultra-light display serif
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

// Precision mono for labels, metadata, section markers
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'C3alabs — We build AI companies.',
    template: '%s | C3alabs',
  },
  description: 'C3alabs builds AI products. KARAX and SARVAX are our first two. This is the beginning.',
  openGraph: {
    siteName: 'C3alabs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmMono.variable} ${GeistSans.variable}`}
    >
      <body suppressHydrationWarning>
        <SmoothScroll>
          <ClientShell>{children}</ClientShell>
        </SmoothScroll>
      </body>
    </html>
  );
}
