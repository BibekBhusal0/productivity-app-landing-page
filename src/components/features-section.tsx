import React from "react";
import { ReactLenis } from 'lenis/react';
import { Button, cn } from '@heroui/react';
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type allColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'
type featureType = { icon: string, title: string, description: string, color: allColors }

type colorClasses = { icon?: string, main?: string, }
const colors : Record<allColors, colorClasses> = {
  primary: {
    main: 'border-primary-200 bg-primary-50 p-2 text-primary-600',
    icon : 'bg-gradient-to-br from-primary-400 to-primary-600'
  },
  secondary: {
    main: 'border-secondary-200 bg-secondary-50 p-2 text-secondary-600',
    icon: 'bg-gradient-to-br from-secondary-400 to-secondary-600'
  },
  success: {
    main: 'border-success-200 bg-success-50 p-2 text-success-600',
    icon: 'bg-gradient-to-br from-success-400 to-success-600'
  },
  warning: {
    main: 'border-warning-200 bg-warning-50 p-2 text-warning-600',
    icon: 'bg-gradient-to-br from-warning-400 to-warning-600',
  },
  danger: {
    main: 'border-danger-200 bg-danger-50 p-2 text-danger-600',
    icon: 'bg-gradient-to-br from-danger-400 to-danger-600'
  },
  default: {
    main: 'border-default-200 bg-default-50 p-2 text-default-600',
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
];

export const FeaturesSection: React.FC = () => {
  return (
    <ReactLenis root>
      <div className='flex justify-between px-2 md:px-16 '>
        <div className='grid gap-2'>
          {features.map(({icon , title, description, color}, i) => (<figure key={i} className='sticky top-0 h-screen grid place-content-center'>
            <article className={cn(
              'h-72 w-[30rem] p-4 rounded-lg grid place-content-center gap-4',
              colors[color].main,
              i % 3 === 1 && 'rotate-6',
              i % 3 === 2 && '-rotate-6'
            )}>
              <div className={ cn("flex h-12 w-12 items-center justify-center rounded-lg p-3 text-white", colors[color].icon) }>
                <Icon icon={icon} className="text-2xl" />
              </div>
              <h1 className='text-2xl font-semibold'>{title}</h1>
              <p>{description}</p>
              <Button color ={color}>Learn More</Button>
            </article>
          </figure>))}
        </div>
        <div className='sticky top-0 h-screen grid place-content-center'>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful <span className="gradient-text">Features</span> to Boost Your Productivity
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Designed to help you focus, organize, and accomplish more in less time with less stress.
          </p>
        </div>
      </div>


    </ReactLenis>
  );
};
