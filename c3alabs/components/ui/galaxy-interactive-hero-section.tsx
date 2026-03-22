"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={<div className="w-full h-full bg-[#FAFAFA]" />}>
        <Spline
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'auto',
            filter: 'invert(1) hue-rotate(170deg) saturate(1.5)', // Turns the dark galaxy to a white/ice-blue aesthetic
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent 40%, transparent 60%, rgba(255, 255, 255, 0.7)),
            linear-gradient(to bottom, transparent 40%, rgba(255, 255, 255, 1))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function ScreenshotSection({ screenshotRef }: { screenshotRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mt-11 md:mt-12">
      <div ref={screenshotRef} className="bg-white rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,100,255,0.08)] border border-[rgba(147,210,255,0.3)] w-full md:w-[80%] lg:w-[70%] mx-auto ring-4 ring-white/50 backdrop-blur-md">
        <div>
          <img
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=3840&h=2160" // Clean tech dashboard/glass placeholder
            alt="App Screenshot"
            className="w-full h-auto block rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="text-left text-gray-900 pt-16 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-4 leading-tight tracking-tight text-slate-900">
        Elevate your <br className="sm:hidden" /><span className="text-[#3BA4F5] italic font-semibold">creative workflow</span><br className="sm:hidden" /> to an art form.
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-600 max-w-xl font-medium tracking-wide">
        Manage all of your media and assets — video, photos, design files, docs, PDFs, and more — on a single secure surface to create and deliver high-quality content faster.
      </p>
      <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
        <button className="bg-[#3BA4F5]/10 hover:bg-[#3BA4F5]/20 text-[#2582D0] font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto border border-[#3BA4F5]/30 shadow-[0_4px_24px_rgba(59,164,245,0.2)]" style={{ backdropFilter: 'blur(8px)' }}>
          Start Free Trial
        </button>
        <button className="pointer-events-auto bg-white/60 border border-slate-200 hover:border-[#3BA4F5]/50 text-slate-700 hover:text-slate-900 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto shadow-sm backdrop-blur-md">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-400 group-hover:text-[#3BA4F5]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Watch the Video
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    features: false,
    enterprise: false,
    resources: false,
  });

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdowns({ features: false, enterprise: false, resources: false });
    }
  };

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const navLinkClass = (itemName: string, extraClasses = '') => {
    const isCurrentItemHovered = hoveredNavItem === itemName;
    const isAnotherItemHovered = hoveredNavItem !== null && !isCurrentItemHovered;

    const colorClass = isCurrentItemHovered
      ? 'text-[#3BA4F5]'
      : isAnotherItemHovered
        ? 'text-slate-300'
        : 'text-slate-700 font-medium';

     return `text-sm transition duration-150 ${colorClass} ${extraClasses}`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setMobileDropdowns({ features: false, enterprise: false, resources: false });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(200, 220, 240, 0.5)' }}>
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="text-slate-900" style={{ width: '32px', height: '32px' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4306 9.70695C12.742 9.33317 13.2633 9.30058 13.6052 9.62118L19.1798 14.8165C19.4894 15.1054 19.4894 15.5841 19.1798 15.873L13.6052 21.0683C13.2633 21.3889 12.742 21.3563 12.4306 19.9991V9.70695Z" fill="currentColor" />
            </svg>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group" onMouseEnter={() => handleMouseEnterNavItem('features')} onMouseLeave={handleMouseLeaveNavItem}>
              <a href="#" className={navLinkClass('features', 'flex items-center')}>
                Features
                <svg className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white/90 rounded-md shadow-[0_10px_30px_rgba(0,50,150,0.1)] py-2 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30" style={{ backdropFilter: 'blur(12px)' }}>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Feature 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Feature 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Feature 3</a>
              </div>
            </div>

            <div className="relative group" onMouseEnter={() => handleMouseEnterNavItem('enterprise')} onMouseLeave={handleMouseLeaveNavItem}>
              <a href="#" className={navLinkClass('enterprise', 'flex items-center')}>
                Enterprise
                 <svg className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white/90 rounded-md shadow-[0_10px_30px_rgba(0,50,150,0.1)] py-2 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30" style={{ backdropFilter: 'blur(12px)' }}>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Solution A</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Solution B</a>
              </div>
            </div>

            <div className="relative group" onMouseEnter={() => handleMouseEnterNavItem('resources')} onMouseLeave={handleMouseLeaveNavItem}>
              <a href="#" className={navLinkClass('resources', 'flex items-center')}>
                Resources
                 <svg className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </a>
               <div className="absolute left-0 mt-2 w-48 bg-white/90 rounded-md shadow-[0_10px_30px_rgba(0,50,150,0.1)] py-2 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30" style={{ backdropFilter: 'blur(12px)' }}>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Blog</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Docs</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#3BA4F5] hover:bg-blue-50/50 transition duration-150">Support</a>
              </div>
            </div>

            <a href="#" className={navLinkClass('pricing')} onMouseEnter={() => handleMouseEnterNavItem('pricing')} onMouseLeave={handleMouseLeaveNavItem}>
                Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hidden md:block text-slate-600 hover:text-slate-900 font-medium text-sm transition">Contact Sales</a>
          <a href="#" className="hidden sm:block text-slate-600 hover:text-slate-900 font-medium text-sm transition">Sign In</a>
          <a href="#" className="bg-[#3BA4F5]/10 hover:bg-[#3BA4F5]/20 text-[#2582D0] font-semibold py-2 px-5 rounded-full text-sm md:text-base border border-[#3BA4F5]/30 transition" style={{ backdropFilter: 'blur(8px)' }}>Start Free Trial</a>
          <button className="lg:hidden text-slate-900 p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-white/95 border-b border-slate-200 absolute top-full left-0 right-0 z-30
           overflow-hidden transition-all duration-300 ease-in-out
           ${isMobileMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}
           `}
           style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          {/* Mobile menu items with updated text-slate-800 colors */}
          <a href="#" className="text-slate-800 hover:text-[#3BA4F5] text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Pricing</a>
          <a href="#" className="text-slate-800 hover:text-[#3BA4F5] text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Contact Sales</a>
          <a href="#" className="text-slate-800 hover:text-[#3BA4F5] text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Sign In</a>
        </div>
      </div>
    </nav>
  );
}

export const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenshotRef.current && heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          if (screenshotRef.current) {
            screenshotRef.current.style.transform = `translateY(-${scrollPosition * 0.4}px)`;
          }

          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#FAFAFA] min-h-screen overflow-hidden">
      <Navbar />

      <div className="relative min-h-[90vh]">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <div className="container mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>

      {/* The background below the floating section has been updated to white/gray instead of black */}
      <div className="bg-[#FAFAFA] relative z-10 w-full" style={{ marginTop: '-8vh' }}>
        <ScreenshotSection screenshotRef={screenshotRef} />
        <div className="container mx-auto px-4 py-24 text-slate-800">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 tracking-tight">The White & Ice Blue Galaxy</h2>
            <p className="text-center max-w-xl mx-auto text-slate-500 font-medium">
                The original 3D galaxy scene has been inverted and tone-shifted to perfectly match 
                your high-end crisp light interface design.
            </p>
        </div>
      </div>
    </div>
  );
};
