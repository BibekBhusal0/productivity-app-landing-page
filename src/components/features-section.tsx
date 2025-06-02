import React from "react";
import { ReactLenis } from "lenis/react";
import { Button, cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { allColors, Card } from "./customCard";

type featureType = { icon: string; title: string; description: string; color: allColors };
const colors: Record<allColors, string> = {
  primary: "from-primary-400 to-primary-600",
  secondary: "from-secondary-400 to-secondary-600",
  success: "from-success-400 to-success-600",
  warning: "from-warning-400 to-warning-600",
  danger: "from-danger-400 to-danger-600",
  default: "from-default-400 to-default-600",
};

const features: featureType[] = [
  {
    icon: "lucide:check-square",
    title: "Task Management",
    description:
      "Organize tasks with smart categories, priorities, and deadlines. Never miss an important deadline again.",
    color: "primary",
  },
  {
    icon: "lucide:timer",
    title: "Focus Timer",
    description:
      "Boost productivity with customizable Pomodoro timers and focus sessions tailored to your work style.",
    color: "secondary",
  },
  {
    icon: "lucide:calendar",
    title: "Daily Planner",
    description:
      "Plan your day with an intuitive calendar that adapts to your productivity patterns and energy levels.",
    color: "success",
  },
  {
    icon: "lucide:bell",
    title: "Smart Reminders",
    description:
      "Get intelligent notifications that know when to alert you based on priority and your focus state.",
    color: "primary",
  },
  {
    icon: "lucide:grid",
    title: "Customizable Widgets",
    description:
      "Customize your home page with widgets, they can be drag and drop, moted and places anywhere.",
    color: "secondary",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <ReactLenis root>
      <div className="flex flex-col-reverse justify-between gap-8 px-2 md:flex-row md:px-16">
        <div>
          {features.map(({ icon, title, description, color }, i) => (
            <div
              key={i}
              className="pointer-events-none sticky top-0 h-[100vh] place-content-center pt-[40vh] md:h-screen md:pt-0"
            >
              <Card
                hover
                className={cn(
                  "pointer-events-auto mx-auto grid h-72 w-[30rem] max-w-[80%] place-content-center gap-4 rounded-lg p-4 transition-all hover:rotate-0 hover:scale-125",
                  i % 3 === 1 && "rotate-6",
                  i % 3 === 2 && "-rotate-6"
                )}
                color={color}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br p-3 text-white",
                    colors[color]
                  )}
                >
                  <Icon icon={icon} className="text-2xl" />
                </div>
                <div className="text-2xl font-semibold">{title}</div>
                <div>{description}</div>
                <Button color={color}>Learn More</Button>
              </Card>
            </div>
          ))}
        </div>
        <div className="-pb-20 sticky top-0 flex h-screen flex-col items-center pt-20 text-center md:place-content-center md:items-end md:pt-0 md:text-right">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful <span className="gradient-text">Features</span> to Boost Your Productivity
          </h2>
          <p className="max-w-lg text-foreground-600">
            Designed to help you focus, organize, and accomplish more in less time with less stress.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};
