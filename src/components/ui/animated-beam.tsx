import { cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { forwardRef, RefObject, useEffect, useId, useRef, useState } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#4d40ff",
  gradientStopColor = "#4043ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = true,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");

  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : "none";
  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let _ of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 1.5, // or any scale factor you prefer
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2, // adjust as needed
          delay: delay, // use the same delay as the gradient animation
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex-center z-10 size-12 rounded-full border-2 bg-white p-3 text-black",
        className
      )}
    >
      {typeof children === "string" ? <Icon width={24} icon={children} /> : children}
    </div>
  );
});

export function Example1({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "flex-center relative mx-auto size-full max-w-[32rem] overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>logos:google-calendar</Circle>
          <Circle ref={div2Ref} className="p-2">
            logos:notion-icon
          </Circle>
          <Circle ref={div3Ref} className="p-2">
            logos:github-icon
          </Circle>
          <Circle ref={div4Ref} className="p-2">
            logos:openai-icon
          </Circle>
          <Circle ref={div5Ref} className="p-2">
            logos:figma
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={centerRef} className="h-16 w-16">
            lucide:focus
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div6Ref}>logos:google-gmail</Circle>
          <Circle ref={div7Ref} className="p-2">
            logos:microsoft-teams
          </Circle>
          <Circle ref={div8Ref} className="p-2">
            logos:adobe-photoshop
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={centerRef}
        dotted
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={centerRef}
        dotted
        gradientStartColor="#006ae3"
        gradientStopColor="#1194ff"
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={centerRef}
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
        dotted
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={centerRef}
        dotted
        gradientStartColor="#006ae3"
        gradientStopColor="#1194ff"
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={centerRef}
        dotted
        dotSpacing={6}
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        toRef={div8Ref}
        fromRef={centerRef}
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
        curvature={-50}
      />
      <AnimatedBeam
        containerRef={containerRef}
        toRef={div6Ref}
        fromRef={centerRef}
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
        curvature={50}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={div7Ref}
        dotted
        curvature={0}
        dotSpacing={6}
      />
    </div>
  );
}

export function Example2({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "flex-center relative mx-auto size-full max-w-[32rem] overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>lucide:user</Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            lucide:focus
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>logos:facebook</Circle>
          <Circle className="p-2" ref={div2Ref}>
            logos:tiktok-icon
          </Circle>
          <Circle className="p-2" ref={div3Ref}>
            logos:bluesky
          </Circle>
          <Circle className="p-2" ref={div4Ref}>
            logos:instagram-icon
          </Circle>
          <Circle className="p-2" ref={div5Ref}>
            logos:youtube-icon
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
    </div>
  );
}
