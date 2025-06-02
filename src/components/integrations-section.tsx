import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Button, CardBody, cn } from "@heroui/react";
import { Example2, Example1 } from './ui/animated-beam'
import { Card } from "./customCard";

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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="integrations" className="section-padding bg-content1">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Connect Focusly with your favorite tools and services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex flex-col items-center gap-3"
            >
              <div
                className={cn(
                  "flex-center size-16 rounded-xl border border-divider md:h-20 md:w-20",
                  "bg-gradient-to-br from-primary-100 to-primary-200 shadow-sm dark:from-primary-900 dark:to-primary-800",
                  "grayscale transition-all group-hover:scale-110 group-hover:grayscale-0"
                )}
              >
                <Icon icon={integration.icon} className="text-4xl md:text-5xl" />
              </div>
              <p className="text-sm font-medium">{integration.name}</p>
            </motion.div>
          ))}
          <div className="size-full flex-center col-span-2 sm:col-span-4">
            <Button color='primary' >More</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-2xl text-center pt-12 pb-4">Example of instigation</div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 p-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} ><Card > <div className='text-xl py-3 text-center w-full'>Acts as hub for all apps</div><CardBody><Example1 /></CardBody> </Card></motion.div>
          <motion.div variants={item} ><Card > <div className='text-xl py-3 text-center w-full'>Automate All Social Media</div><CardBody><Example2 /></CardBody> </Card></motion.div>
        </motion.div>
      </div>
    </section>
  );
};
