import React, { ReactNode } from "react";
import { Tabs, Tab,  Chip, } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import CardSpread from "./spread-card";
import WidgetsPreview from "./widgets";

type contentType = {
  title: string;
  description: string;
  preview: ReactNode;
  features: { icon: string; text: string }[];
};
type tabContentType = {
  title: string,
  icon: string,
  content: contentType
}

export const DemoSection: React.FC = () => {
  const [selected, setSelected] = React.useState("tasks");

  const tabContent: tabContentType[] = [
    {
      title: 'Task', icon: 'lucide:check-square',
      content: {
        title: "Smart Task Management",
        description:
          "Organize your tasks with intelligent categories, priorities, and deadlines. Drag and drop to rearrange, set recurring tasks, and track your progress.",
        features: [
          { icon: "lucide:repeat", text: "Recurring tasks" },
          { icon: "lucide:tag", text: "Smart categorization" },
        ],
        preview: <div className = 'w-full py-4 flex-center'><CardSpread /></div>
      }
    },
    {
      title: "Heome", icon: 'lucide:home', content: {
        title: "Customizable Home page",
        description:
          "Fully customizable home page with different widgets and drag and drop fetures. elit sit labore ut magna et dolor tempor aliqua do ",
        features: [
          { icon: "lucide:drag", text: "Drag And Drop" },
          { icon: "lucide:layout-grid", text: "Many widgets" },
          { icon: "lucide:share", text: "Sharing your Home" },
        ],
        preview: <WidgetsPreview />
      }
    },
  ];

  return (
    <section id="demo" className="section-padding bg-content1 overflow-hidden">
      <div className="container-custom overflow-visible">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            See <span className="gradient-text">Focusly</span> in Action
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Explore the key features that make Focusly the ultimate productivity tool
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Tabs
            aria-label="Focusly Features"
            selectedKey={selected}
            onSelectionChange={setSelected as any}
            color="primary"
            items={tabContent}
          >
            {(items => <Tab key={items.title} title={<div className='text-lg flex-center gap-2'>
              <Icon icon={items.icon} />
              <span>{items.title}</span>
            </div >}> <DemoTabContent content={items.content} /> </Tab>)}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

const DemoTabContent = ({ content }: { content: contentType }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">{content.title}</h3>
        <p className="text-foreground-600">{content.description}</p>
        <div className="flex gap-2">
          {content.features.map((feature, index) => (
            <Chip key={index} color = 'primary' size = 'md' startContent ={
              <Icon icon={feature.icon} />
            }>
              {feature.text}
            </Chip>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-visible"
      >
        {content.preview}
      </motion.div>
    </div>


  );
};
