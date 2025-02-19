import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useRandomInterval } from "@/hooks/useRandomInterval";
import { random } from "@/utils/random";
import { range } from "@/utils/range";
import { useEffect, useState } from "react";

type SparkleType = {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
};

const DEFAULT_COLOR = "#FFC700";

const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
    },
  };

  return sparkle;
};

const Sparkles = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setSparkles(range(3).map(() => generateSparkle(color)));
  }, [color]);

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);

      const now = Date.now();

      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );

  return (
    <span className="inline-block relative" {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="relative z-10 font-bold">{children}</strong>
    </span>
  );
};

const Sparkle = ({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style: React.CSSProperties;
}) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <span className="absolute block animate-sparkle-come-in-out" style={style}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
        className="block animate-sparkle-spin"
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

export default Sparkles;
