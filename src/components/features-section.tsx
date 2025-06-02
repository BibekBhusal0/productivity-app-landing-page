import React from "react";
import { ReactLenis } from 'lenis/react';
import { Button, cn } from '@heroui/react';
import { Icon } from "@iconify/react";

type allColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'
type featureType = { icon: string, title: string, description: string, color: allColors }

type colorClasses = { icon?: string, main?: string, }
const colors: Record<allColors, colorClasses> = {
  primary: {
    main: 'border-primary-200 bg-primary-50 text-primary-600',
    icon: 'bg-gradient-to-br from-primary-400 to-primary-600'
  },
  secondary: {
    main: 'border-secondary-200 bg-secondary-50 text-secondary-600',
    icon: 'bg-gradient-to-br from-secondary-400 to-secondary-600'
  },
  success: {
    main: 'border-success-200 bg-success-50 text-success-600',
    icon: 'bg-gradient-to-br from-success-400 to-success-600'
  },
  warning: {
    main: 'border-warning-200 bg-warning-50 text-warning-600',
    icon: 'bg-gradient-to-br from-warning-400 to-warning-600',
  },
  danger: {
    main: 'border-danger-200 bg-danger-50 text-danger-600',
    icon: 'bg-gradient-to-br from-danger-400 to-danger-600'
  },
  default: {
    main: 'border-default-200 bg-default-50 text-default-600',
    icon: 'bg-gradient-to-br from-default-400 to-default-600'
  },
}
const features: featureType[] = [
  {
    icon: "lucide:check-square",
    title: "Task Management",
    description:
      "Organize tasks with smart categories, priorities, and deadlines. Never miss an important deadline again.",
    color: 'primary'
  },
  {
    icon: "lucide:timer",
    title: "Focus Timer",
    description:
      "Boost productivity with customizable Pomodoro timers and focus sessions tailored to your work style.",
    color: 'secondary'
  },
  {
    icon: "lucide:calendar",
    title: "Daily Planner",
    description:
      "Plan your day with an intuitive calendar that adapts to your productivity patterns and energy levels.",
    color: 'success'
  },
  {
    icon: "lucide:bell",
    title: "Smart Reminders",
    description:
      "Get intelligent notifications that know when to alert you based on priority and your focus state.",
    color: 'warning'
  },
  {
    icon: "lucide:grid",
    title: "Customizable Widgets",
    description:
    "Customize your home page with widgets, they can be drag and drop, moted and places anywhere.",
    color: 'danger'
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <ReactLenis root>
      <div className='flex flex-col-reverse md:flex-row justify-between  gap-8 px-2 md:px-16'>
        <div>
          {features.map(({ icon, title, description, color }, i) => (
            <div key={i} className='sticky pt-[40vh] md:pt-0 top-0 h-[100vh] md:h-screen place-content-center'>
            <div className={cn(
              'h-72 w-[30rem] max-w-[80%] p-4 mx-auto rounded-lg grid place-content-center gap-4',
              colors[color].main,
              i % 3 === 1 && 'rotate-6',
              i % 3 === 2 && '-rotate-6'
            )}>
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg p-3 text-white", colors[color].icon)}>
                <Icon icon={icon} className="text-2xl" />
              </div>
              <div className='text-2xl font-semibold'>{title}</div>
              <div>{description}</div>
              <Button color={color}>Learn More</Button>
            </div>
          </div>))}
        </div>
        <div className='sticky top-0 h-screen pt-20 -pb-20 md:pt-0 flex-col flex items-center md:items-end text-center md:text-right md:place-content-center'>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful <span className="gradient-text">Features</span> to Boost Your Productivity
          </h2>
          <p className="text-foreground-600 max-w-lg">
            Designed to help you focus, organize, and accomplish more in less time with less stress.
          </p>
        </div>
      </div>


    </ReactLenis>
  );
};
