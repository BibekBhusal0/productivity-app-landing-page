import React from "react";
import { Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create an account",
      description:
        "Sign up in seconds and customize your productivity dashboard to match your workflow.",
      icon: "lucide:user-plus",
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=1",
    },
    {
      number: "02",
      title: "Add your tasks and goals",
      description:
        "Organize your work with smart task management and set achievable goals with deadlines.",
      icon: "lucide:list-todo",
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=2",
    },
    {
      number: "03",
      title: "Track progress with smart insights",
      description:
        "Get detailed analytics on your productivity patterns and receive personalized recommendations.",
      icon: "lucide:line-chart",
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=3",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How <span className="gradient-text">Focusly</span> Works
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Get started in minutes and transform your productivity immediately
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-primary-200 md:block"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative mb-24 grid grid-cols-1 items-center gap-8 last:mb-0 md:grid-cols-2 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 z-10 flex hidden h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary text-white md:flex">
                <Icon icon={step.icon} />
              </div>

              <div className={`${index % 2 === 1 ? "md:pl-12" : "md:pr-12"} flex flex-col gap-4`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 p-3 text-primary md:hidden">
                    <Icon icon={step.icon} className="text-2xl" />
                  </div>
                  <span className="text-4xl font-bold text-primary-300">{step.number}</span>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-foreground-600">{step.description}</p>
              </div>

              <div className={`${index % 2 === 1 ? "md:order-first" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-xl border border-divider shadow-lg"
                >
                  <Image src={step.image} alt={step.title} className="h-auto w-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
