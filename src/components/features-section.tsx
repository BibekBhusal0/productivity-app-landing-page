import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "lucide:check-square",
      title: "Task Management",
      description:
        "Organize tasks with smart categories, priorities, and deadlines. Never miss an important deadline again.",
    },
    {
      icon: "lucide:timer",
      title: "Focus Timer",
      description:
        "Boost productivity with customizable Pomodoro timers and focus sessions tailored to your work style.",
    },
    {
      icon: "lucide:calendar",
      title: "Daily Planner",
      description:
        "Plan your day with an intuitive calendar that adapts to your productivity patterns and energy levels.",
    },
    {
      icon: "lucide:bell",
      title: "Smart Reminders",
      description:
        "Get intelligent notifications that know when to alert you based on priority and your focus state.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -6,
      scale: 1.03,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="features" className="section-padding bg-content1">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful <span className="gradient-text">Features</span> to Boost Your Productivity
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Designed to help you focus, organize, and accomplish more in less time with less stress.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}
              className="h-full cursor-pointer border border-divider transition-shadow shadow-sm hover:shadow-lg flex flex-col gap-4 p-6 rounded-lg"
              whileHover = 'hover'
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 p-3 text-white">
                <Icon icon={feature.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-foreground-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
