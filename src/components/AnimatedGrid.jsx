import { useMemo, useEffect, useState } from 'react';

export default function AnimatedGrid() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions and listen to resize
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { vLines, hLines } = useMemo(() => {
    const spacing = 40;
    // Overestimate number of lines to cover large screens safely
    const numVLines = Math.ceil(Math.max(dimensions.width, 2500) / spacing);
    const numHLines = Math.ceil(Math.max(dimensions.height, 1500) / spacing);

    const v = Array.from({ length: numVLines }).map((_, i) => ({
      id: `v-${i}`,
      x: i * spacing,
      delay: Math.random() * 5, // Random delay between 0 and 5s
      duration: 3 + Math.random() * 4, // Random duration between 3s and 7s
    }));

    const h = Array.from({ length: numHLines }).map((_, i) => ({
      id: `h-${i}`,
      y: i * spacing,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));

    return { vLines: v, hLines: h };
  }, [dimensions.width, dimensions.height]);

  if (dimensions.width === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .grid-line {
              stroke: #e2e8f0;
              stroke-width: 1;
              stroke-dasharray: var(--length);
              stroke-dashoffset: var(--length);
            }
            @keyframes drawLine {
              0% { stroke-dashoffset: var(--length); opacity: 0; }
              10% { opacity: 1; }
              45% { stroke-dashoffset: 0; opacity: 1; }
              55% { stroke-dashoffset: 0; opacity: 1; }
              90% { stroke-dashoffset: calc(var(--length) * -1); opacity: 1; }
              100% { stroke-dashoffset: calc(var(--length) * -1); opacity: 0; }
            }
          `}
        </style>
        {/* Draw vertical lines */}
        {vLines.map((line) => (
          <line
            key={line.id}
            x1={line.x}
            y1="0"
            x2={line.x}
            y2="100%"
            className="grid-line"
            style={{
              '--length': dimensions.height,
              animation: `drawLine ${line.duration}s linear ${line.delay}s infinite`,
            }}
          />
        ))}
        {/* Draw horizontal lines */}
        {hLines.map((line) => (
          <line
            key={line.id}
            x1="0"
            y1={line.y}
            x2="100%"
            y2={line.y}
            className="grid-line"
            style={{
              '--length': dimensions.width,
              animation: `drawLine ${line.duration}s linear ${line.delay}s infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
