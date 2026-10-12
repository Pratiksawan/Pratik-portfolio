"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { PointerEvent } from "react";
import { ArrowUpRight, Braces, Cpu, Database } from "lucide-react";

// Project a torus into screen space; depth determines line brightness.
function project(u: number, v: number) {
  const radius = 114 + 49 * Math.cos(v);
  const x = radius * Math.cos(u);
  const y = radius * Math.sin(u);
  const z = 49 * Math.sin(v);
  const tilt = 1.04;
  const rotatedY = y * Math.cos(tilt) - z * Math.sin(tilt);
  const depth = y * Math.sin(tilt) + z * Math.cos(tilt);
  const scale = 430 / (430 - depth);
  const roll = -0.5;
  return {
    x: 240 + (x * Math.cos(roll) - rotatedY * Math.sin(roll)) * scale,
    y: 222 + (x * Math.sin(roll) + rotatedY * Math.cos(roll)) * scale,
    depth,
  };
}

const mesh = Array.from({ length: 42 }, (_, i) => {
  const points = Array.from({ length: 73 }, (_, j) =>
    project((i / 42) * Math.PI * 2, (j / 72) * Math.PI * 2),
  );
  return {
    path: points
      .map((p, j) => `${j ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
      .join(" "),
    depth: points.reduce((sum, p) => sum + p.depth, 0) / points.length,
  };
})
  .concat(
    Array.from({ length: 20 }, (_, i) => {
      const v = (i / 20) * Math.PI * 2;
      const points = Array.from({ length: 121 }, (_, j) =>
        project((j / 120) * Math.PI * 2, v),
      );
      return {
        path: points
          .map((p, j) => `${j ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
          .join(" "),
        depth: 50 * Math.sin(v),
      };
    }),
  )
  .sort((a, b) => a.depth - b.depth);

export default function SystemSculpture() {
  const scene = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 80, damping: 20 });
  const rotateY = useSpring(y, { stiffness: 80, damping: 20 });
  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = scene.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 13);
    y.set(((event.clientX - rect.left) / rect.width - 0.5) * 16);
  };

  return (
    <div
      className="sculpture-scene"
      ref={scene}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      aria-hidden="true"
    >
      <div className="scene-grid" />
      <div className="scene-topline">
        <span>
          <span className="status-dot" /> SYSTEMS THINKING
        </span>
        <span>FIG. 01</span>
      </div>
      <motion.div className="sculpture-stage" style={{ rotateX, rotateY }}>
        <div className="sculpture-glow" />
        <svg className="torus" viewBox="0 0 480 440" fill="none">
          <defs>
            <linearGradient
              id="mesh-color"
              x1="90"
              y1="110"
              x2="380"
              y2="335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f0ffae" />
              <stop offset="0.5" stopColor="#c4f36b" />
              <stop offset="1" stopColor="#619f4d" />
            </linearGradient>
          </defs>
          {mesh.map((line, index) => (
            <path
              key={index}
              d={line.path}
              stroke="url(#mesh-color)"
              strokeWidth={line.depth > 20 ? 0.95 : 0.65}
              opacity={Number(
                (0.32 + ((line.depth + 145) / 290) * 0.55).toFixed(3),
              )}
            />
          ))}
        </svg>
        <div className="system-chip chip-ai">
          <Cpu size={17} />
          <span>AI reasoning</span>
          <span className="chip-light" />
        </div>
        <div className="system-chip chip-data">
          <Database size={17} />
          <span>Reliable systems</span>
          <ArrowUpRight size={15} />
        </div>
        <div className="system-chip chip-code">
          <Braces size={16} />
          <span>Built with intent.</span>
        </div>
      </motion.div>
      <div className="scene-bottomline">
        <span>CREATIVITY × ENGINEERING</span>
        <span className="scene-coordinates">19.0330° N · 73.0297° E</span>
      </div>
    </div>
  );
}
