import React from "react";
import { Tabs, Tab, Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const DemoSection: React.FC = () => {
  const [selected, setSelected] = React.useState("tasks");

  const tabContent = {
    tasks: {
      title: "Smart Task Management",
      description: "Organize your tasks with intelligent categories, priorities, and deadlines. Drag and drop to rearrange, set recurring tasks, and track your progress.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=500&u=4",
      features: [
        { icon: "lucide:check-circle", text: "Drag & drop organization" },
        { icon: "lucide:repeat", text: "Recurring tasks" },
        { icon: "lucide:tag", text: "Smart categorization" }
      ]
    },
    calendar: {
      title: "Intuitive Calendar",
      description: "Plan your day, week, and month with a beautiful calendar that integrates with your tasks and goals. Set time blocks for deep work and see your schedule at a glance.",
      image: "https://img.heroui.chat/image/calendar?w=800&h=500&u=2",
      features: [
        { icon: "lucide:calendar", text: "Multiple views" },
        { icon: "lucide:clock", text: "Time blocking" },
        { icon: "lucide:share", text: "Calendar sharing" }
      ]
    },
    timer: {
      title: "Focus Timer",
      description: "Boost your productivity with customizable Pomodoro timers. Set work and break intervals, track your focus sessions, and eliminate distractions.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=500&u=5",
      features: [
        { icon: "lucide:timer", text: "Customizable intervals" },
        { icon: "lucide:bar-chart", text: "Focus analytics" },
        { icon: "lucide:bell-off", text: "Distraction blocking" }
      ]
    }
  };

  return (
    <section id="demo" className="section-padding bg-content2">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="gradient-text">Focusly</span> in Action
          </h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
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
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary"
            }}
          >
            <Tab 
              key="tasks" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-square" />
                  <span>Tasks</span>
                </div>
              }
            >
              <DemoTabContent content={tabContent.tasks} />
            </Tab>
            <Tab 
              key="calendar" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:calendar" />
                  <span>Calendar</span>
                </div>
              }
            >
              <DemoTabContent content={tabContent.calendar} />
            </Tab>
            <Tab 
              key="timer" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:timer" />
                  <span>Timer</span>
                </div>
              }
            >
              <DemoTabContent content={tabContent.timer} />
            </Tab>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

interface DemoTabContentProps {
  content: {
    title: string;
    description: string;
    image: string;
    features: { icon: string; text: string }[];
  };
}

const DemoTabContent: React.FC<DemoTabContentProps> = ({ content }) => {
  return (
    <Card className="mt-8 border-none shadow-none bg-transparent">
      <CardBody className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold">{content.title}</h3>
            <p className="text-foreground-600">{content.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon icon={feature.icon} className="text-primary" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg border border-divider"
          >
            <Image
              src={content.image}
              alt={content.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </CardBody>
    </Card>
  );
};