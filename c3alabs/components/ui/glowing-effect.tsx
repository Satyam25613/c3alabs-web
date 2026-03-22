"use client";

// ─────────────────────────────────────────────────────────────
// GlowingEffect — adapted for C3alabs (no Tailwind, CSS Module)
// Dependency: `motion` npm package (npm install motion)
// ─────────────────────────────────────────────────────────────

import { memo, useCallback, useEffect, useRef } from "react";

import styles from "./glowing-effect.module.css";

interface GlowingEffectProps {
  blur?:             number;
  inactiveZone?:     number;
  proximity?:        number;
  spread?:           number;
  variant?:          "default" | "white";
  glow?:             boolean;
  className?:        string;
  disabled?:         boolean;
  movementDuration?: number;
  borderWidth?:      number;
}

const GlowingEffect = memo(({
  blur             = 0,
  inactiveZone     = 0.7,
  proximity        = 0,
  spread           = 20,
  variant          = "default",
  glow             = false,
  className        = "",
  movementDuration = 2,
  borderWidth      = 1,
  disabled         = true,
}: GlowingEffectProps) => {
  const containerRef      = useRef<HTMLDivElement>(null);
  const lastPosition      = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  const handleMove = useCallback(
    (e?: MouseEvent | { x: number; y: number }) => {
      if (!containerRef.current) return;

      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

      animationFrameRef.current = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;

        const { left, top, width, height } = el.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) lastPosition.current = { x: mouseX, y: mouseY };

        const center         = [left + width * 0.5, top + height * 0.5];
        const distFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distFromCenter < inactiveRadius) { el.style.setProperty("--active", "0"); return; }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width  + proximity &&
          mouseY > top  - proximity &&
          mouseY < top  + height + proximity;

        el.style.setProperty("--active", isActive ? "1" : "0");
        if (!isActive) return;

        const currentAngle = parseFloat(el.style.getPropertyValue("--start")) || 0;
        const targetAngle    = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
        const angleDiff    = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle     = currentAngle + angleDiff;

        // Smoothly animate --start from currentAngle → newAngle using rAF lerp
        const startTime  = performance.now();
        const duration   = movementDuration * 1000; // ms
        const fromAngle  = currentAngle;
        const toAngle    = newAngle;
        const ease = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

        const tick = (now: number) => {
          const t       = Math.min((now - startTime) / duration, 1);
          const current = fromAngle + (toAngle - fromAngle) * ease(t);
          el.style.setProperty("--start", String(current));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    [inactiveZone, proximity, movementDuration],
  );

  useEffect(() => {
    if (disabled) return;
    const onScroll  = () => handleMove();
    const onPointer = (e: PointerEvent) => handleMove(e);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.body.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("scroll", onScroll);
      document.body.removeEventListener("pointermove", onPointer);
    };
  }, [handleMove, disabled]);

  // ── Gradient definition ──────────────────────────────────────
  // Default: multi-color conic (pink/gold/green/teal)
  // White: white-only conic (great on dark backgrounds)
  const gradient =
    variant === "white"
      ? `repeating-conic-gradient(
          from 236.84deg at 50% 50%,
          #000,
          #000 calc(25% / 5)
        )`
      : `radial-gradient(circle, #333333 10%, #33333300 20%),
         radial-gradient(circle at 40% 40%, #555555 5%, #55555500 15%),
         radial-gradient(circle at 60% 60%, #111111 10%, #11111100 20%),
         radial-gradient(circle at 40% 60%, #888888 10%, #88888800 20%),
         repeating-conic-gradient(
           from 236.84deg at 50% 50%,
           #333333 0%,
           #555555 calc(25% / 5),
           #111111 calc(50% / 5),
           #888888 calc(75% / 5),
           #333333 calc(100% / 5)
         )`;

  return (
    <>
      {/* Static border — shown when disabled (always-on fallback) */}
      <div
        className={[
          styles.staticBorder,
          glow             ? styles.staticBorderVisible : "",
          variant === "white" ? styles.staticBorderWhite  : "",
          disabled         ? styles.staticBorderBlock   : "",
        ].filter(Boolean).join(" ")}
      />

      {/* Mouse-tracking glow container */}
      <div
        ref={containerRef}
        className={[
          styles.glowContainer,
          blur > 0    ? styles.glowContainerBlur   : "",
          disabled    ? styles.glowContainerHidden : "",
          className,
        ].filter(Boolean).join(" ")}
        style={{
          "--blur":                              `${blur}px`,
          "--spread":                            spread,
          "--start":                             "0",
          "--active":                            "0",
          "--glowingeffect-border-width":        `${borderWidth}px`,
          "--repeating-conic-gradient-times":    "5",
          "--gradient":                          gradient,
        } as React.CSSProperties}
      >
        <div className={styles.glow} />
      </div>
    </>
  );
});

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
