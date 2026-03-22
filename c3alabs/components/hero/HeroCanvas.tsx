'use client';

import { useEffect, useRef } from 'react';
import { useScrollProgress } from '@/lib/useScrollProgress';
import { useReducedMotion } from '@/lib/useReducedMotion';

// ─────────────────────────────────────────────────────────────
// APPLE GLASS AURORA - HERO BACKGROUND
// ─────────────────────────────────────────────────────────────

interface Orb {
  x: number; // base x percentage
  y: number; // base y percentage
  rx: number; // current absolute x
  ry: number; // current absolute y
  rad: number; // base radius
  r: number; g: number; b: number; a: number; // color
  cycle: number; // cycle duration in seconds
  range: number; // drift range in px
  prlx: number; // parallax factor
  delay: number; // entry delay
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollP = useScrollProgress();
  const reduced = useReducedMotion();
  const sRef = useRef(0);
  useEffect(() => { sRef.current = scrollP; }, [scrollP]);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const par = cvs.parentElement;
    if (!par) return;
    const ctx = cvs.getContext('2d', { alpha: true });
    if (!ctx) return;

    let disposed = false;
    let raf = 0;

    // The Three Orbs (Apple Glass Aurora style / Monochrome Dark Shadows)
    const orbs: Orb[] = [
      { // Orb 1 - Top Left edge
        x: 0.10, y: 0.10, 
        rx: 0, ry: 0, 
        rad: 280, // Large, pushed into corner
        r: 120, g: 120, b: 120, a: 0.45, // Soft mid-grey
        cycle: 4, range: 40, prlx: 0.05, delay: 0 
      },
      { // Orb 2  - Top Right edge
        x: 0.90, y: 0.15, 
        rx: 0, ry: 0, 
        rad: 200, 
        r: 40, g: 40, b: 40, a: 0.65, // Dark steel
        cycle: 6, range: 35, prlx: 0.08, delay: 0.2
      },
      { // Orb 3 - Bottom edge dome (Peeking up from floor)
        x: 0.50, y: 1.15, 
        rx: 0, ry: 0, 
        rad: 350, // Massive dome peeking up
        r: 0, g: 0, b: 0, a: 0.85, // Pitch black floor dome
        cycle: 5, range: 50, prlx: 0.12, delay: 0.4
      }
    ];

    const mouse = { x: 0, y: 0 };
    const onM = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onM, { passive: true });

    let clock = 0;
    let prev = performance.now();

    const init = () => {
      if (disposed) return;
      const rect = par.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      if (W < 50 || H < 50) { raf = requestAnimationFrame(init); return; }

      const dpr = window.devicePixelRatio || 1;
      cvs.width = W * dpr;
      cvs.height = H * dpr;
      cvs.style.width = W + 'px';
      cvs.style.height = H + 'px';
      ctx.scale(dpr, dpr);

      // Initialize positions
      for (const orb of orbs) {
        orb.rx = W * orb.x;
        orb.ry = H * orb.y;
      }

      const loop = (now: number) => {
        if (disposed) return;
        const dt = Math.min((now - prev) / 1000, 0.05);
        prev = now;
        clock += dt;

        ctx.clearRect(0, 0, W, H);

        // Scroll fade out (hits 0 opacity at scroll 0.3)
        const scrollOp = Math.max(0, 1 - (sRef.current / 0.3));
        if (scrollOp <= 0.01) {
          raf = requestAnimationFrame(loop);
          return;
        }

        for (const orb of orbs) {
          // Entry fade (1.8s duration)
          const tFade = Math.max(0, Math.min(1, (clock - orb.delay) / 1.8));
          if (tFade <= 0.01) continue;
          
          // Ease in-out for entry fade
          const entryOp = tFade < 0.5 ? 2 * tFade * tFade : -1 + (4 - 2 * tFade) * tFade;

          let dx = 0, dy = 0, scale = 1;

          if (!reduced) {
            // Drift sine wave
            const phaseX = (clock / orb.cycle) * Math.PI * 2;
            const phaseY = (clock / (orb.cycle * 1.1)) * Math.PI * 2;
            dx = Math.sin(phaseX) * orb.range;
            dy = Math.cos(phaseY) * orb.range;

            // Breathing scale (pulse between 0.94 and 1.06)
            scale = 1.0 + 0.06 * Math.sin(phaseX);
          }

          // Parallax Target (following mouse)
          const prlxX = mouse.x * (W / 2) * orb.prlx;
          const prlxY = mouse.y * (H / 2) * orb.prlx;

          // Target absolute position
          const targetX = (W * orb.x) + dx + prlxX;
          const targetY = (H * orb.y) + dy + prlxY;

          // Smoothly interpolate current towards target (easing)
          orb.rx += (targetX - orb.rx) * Math.min(1, dt * 2.5);
          orb.ry += (targetY - orb.ry) * Math.min(1, dt * 2.5);

          // Render variables
          const r = orb.rad * scale;
          const globalOp = entryOp * scrollOp;
          const baseAlpha = orb.a * globalOp;

          // Pass 1: Main body (base sphere) - richer solid base
          const grad1 = ctx.createRadialGradient(orb.rx, orb.ry, 0, orb.rx, orb.ry, r);
          grad1.addColorStop(0, `rgba(${orb.r}, ${orb.g}, ${orb.b}, ${baseAlpha.toFixed(3)})`);
          grad1.addColorStop(0.6, `rgba(${orb.r}, ${orb.g}, ${orb.b}, ${(baseAlpha * 0.5).toFixed(3)})`);
          grad1.addColorStop(1, `rgba(${orb.r}, ${orb.g}, ${orb.b}, 0)`);

          ctx.beginPath();
          ctx.arc(orb.rx, orb.ry, r, 0, Math.PI * 2);
          ctx.fillStyle = grad1;
          ctx.fill();

          // Pass 2: The 'Apple Cut' glossy reflection (Top half)
          ctx.save();
          ctx.beginPath();
          ctx.arc(orb.rx, orb.ry, r, 0, Math.PI * 2);
          ctx.clip(); // Clip to sphere boundaries so the reflection hugs the glass edge

          ctx.beginPath();
          // Draw a stretched ellipse near the top to form that sharp, curved glass cut
          ctx.ellipse(orb.rx, orb.ry - r * 0.25, r * 1.05, r * 0.70, 0, 0, Math.PI * 2);
          
          const cutGrad = ctx.createLinearGradient(orb.rx, orb.ry - r, orb.rx, orb.ry);
          cutGrad.addColorStop(0, `rgba(255, 255, 255, ${(0.95 * globalOp).toFixed(3)})`); // Strong white at peak
          cutGrad.addColorStop(0.9, `rgba(255, 255, 255, 0)`); // Fades out sharply
          
          ctx.fillStyle = cutGrad;
          ctx.fill();
          ctx.restore();

          // Pass 3: Bottom ambient bounce light (Inner depth)
          const bounceGrad = ctx.createRadialGradient(orb.rx, orb.ry + r * 0.6, 0, orb.rx, orb.ry + r * 0.6, r * 0.8);
          bounceGrad.addColorStop(0, `rgba(255, 255, 255, ${(0.25 * globalOp).toFixed(3)})`);
          bounceGrad.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.beginPath();
          ctx.arc(orb.rx, orb.ry, r, 0, Math.PI * 2);
          ctx.fillStyle = bounceGrad;
          ctx.fill();

          // Pass 4: Fresnel Rim glow (adds sharp defined glass edge bounding)
          const rimGrad = ctx.createLinearGradient(orb.rx, orb.ry - r, orb.rx, orb.ry + r);
          rimGrad.addColorStop(0, `rgba(255, 255, 255, ${(0.85 * globalOp).toFixed(3)})`);
          rimGrad.addColorStop(0.3, `rgba(255, 255, 255, 0)`);
          rimGrad.addColorStop(0.7, `rgba(255, 255, 255, 0)`);
          rimGrad.addColorStop(1, `rgba(255, 255, 255, ${(0.45 * globalOp).toFixed(3)})`);

          ctx.beginPath();
          ctx.arc(orb.rx, orb.ry, r, 0, Math.PI * 2);
          ctx.strokeStyle = rimGrad;
          ctx.lineWidth = 2.0;
          ctx.stroke();
        }

        raf = requestAnimationFrame(loop);
      };

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(init);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onM);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'transparent',
        filter: 'blur(0.5px)', // Soft glass focus
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    />
  );
}
