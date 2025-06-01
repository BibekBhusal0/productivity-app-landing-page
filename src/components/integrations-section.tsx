import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const IntegrationsSection: React.FC = () => {
  const integrations = [
    { name: "Slack", icon: "logos:slack-icon" },
    { name: "Google Calendar", icon: "logos:google-calendar" },
    { name: "Notion", icon: "logos:notion-icon" },
    { name: "Microsoft Teams", icon: "logos:microsoft-teams" },
    { name: "Trello", icon: "logos:trello" },
    { name: "Asana", icon: "logos:asana" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "Zoom", icon: "logos:zoom" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="integrations" className="section-padding bg-content1">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Connect Focusly with your favorite tools and services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl shadow-sm border border-divider integration-logo">
                <Icon
                  icon={integration.icon}
                  className="text-4xl md:text-5xl"
                />
              </div>
              <p className="text-sm font-medium">{integration.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
