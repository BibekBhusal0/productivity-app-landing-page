import React from "react";
import { Accordion, AccordionItem, cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HowItWorksSection: React.FC = () => {
  const [selectedKey, setSelectedKey] = React.useState('0');
  const steps = [
    {
      index: "0",
      title: "Create an account",
      description:
        "Sign up in seconds and customize your productivity dashboard to match your workflow.",
      icon: "lucide:user-plus",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project1",
    },
    {
      index: "1",
      title: "Add your tasks and goals",
      description:
        "Organize your work with smart task management and set achievable goals with deadlines.",
      icon: "lucide:list-todo",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project4",
    },
    {
      index: "2",
      title: "Track progress with smart insights",
      description:
        "Get detailed analytics on your productivity patterns and receive personalized recommendations.",
      icon: "lucide:line-chart",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project3",
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

        <div className='flex flex-col md:flex-row gap-4 '>
          <Accordion selectionMode='single' variant="splitted"
            itemClasses={{ base: 'bg-content1' ,title: 'text-lg', startContent: 'text-xl text-primary-800' }}
            selectedKeys={[selectedKey]}
            onSelectionChange={(e) => {
              if (typeof e === "string") setSelectedKey(e)
              else {
                const val = e.values().next().value
                if (val) setSelectedKey(val as string)
              }
            }}
          >
            {steps.map(({ title, description, icon, index },) => <AccordionItem startContent={<Icon icon={icon} />} key={index} aria-label={title} title={title}>
              {description}
              <div className="hidden md:block">
                <div className="text-md py-3">Here are some more text to fill space</div>
                Lorem Ipsum sed do ut lorem tempor tempor magna ipsum do sit magna labore incididunt dolore incididunt tempor magna do adipiscing magna adipiscing amet lorem ipsum ipsum ipsum eiusmod labore sit eiusmod lorem 
              </div>
              <div className="hidden lg:block">
                adipiscing sed amet ut labore labore sit et dolor sed sit ut sit eiusmod amet magna ut ut labore incididunt eiusmod tempor sed eiusmod do adipiscing eiusmod do elit 
              </div>
            </AccordionItem>)}
          </Accordion>

          <div className="relative h-96 w-full overflow-hidden rounded-lg md:h-[500px] md:px-0 px-2">
            {steps.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  selectedKey === item.index ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
                key={item.index}
                src={item.image}
                style={{ zIndex: steps.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
