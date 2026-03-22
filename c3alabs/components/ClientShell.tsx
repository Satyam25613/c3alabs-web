'use client';

import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('@/components/nav/Nav'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
