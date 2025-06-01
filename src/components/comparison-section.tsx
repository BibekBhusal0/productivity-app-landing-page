import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ComparisonSection: React.FC = () => {
  const features = [
    { name: "Task Management", focusly: true, notion: true, todoist: true },
    { name: "Focus Timer", focusly: true, notion: false, todoist: false },
    { name: "Daily Planning", focusly: true, notion: true, todoist: true },
    { name: "Smart Reminders", focusly: true, notion: false, todoist: true },
    {
      name: "Productivity Analytics",
      focusly: true,
      notion: false,
      todoist: false,
    },
    { name: "Team Collaboration", focusly: true, notion: true, todoist: false },
    { name: "Mobile App", focusly: true, notion: true, todoist: true },
    { name: "Offline Mode", focusly: true, notion: false, todoist: true },
    {
      name: "Calendar Integration",
      focusly: true,
      notion: true,
      todoist: true,
    },
  ];

  return (
    <section id="comparison" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose <span className="gradient-text">Focusly</span>
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            See how Focusly compares to other productivity tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl"
        >
          <Table
            aria-label="Comparison table between Focusly and competitors"
            isStriped
            // className="overflow-hidden rounded-lg border border-divider"
          >
            <TableHeader>
              <TableColumn>Feature</TableColumn>
              <TableColumn>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon icon="lucide:focus" />
                    <span className="font-semibold">Focusly</span>
                  </div>
                </div>
              </TableColumn>
              <TableColumn className="bg-content2 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Icon icon="logos:notion-icon" />
                    <span className="font-semibold">Notion</span>
                  </div>
                </div>
              </TableColumn>
              <TableColumn className="bg-content2 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Icon icon="logos:todoist-icon" />
                    <span className="font-semibold">Todoist</span>
                  </div>
                </div>
              </TableColumn>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell>{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.focusly ? (
                      <Icon icon="lucide:check" className="mx-auto text-success" />
                    ) : (
                      <Icon icon="lucide:x" className="mx-auto text-danger" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.notion ? (
                      <Icon icon="lucide:check" className="mx-auto text-success" />
                    ) : (
                      <Icon icon="lucide:x" className="mx-auto text-danger" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.todoist ? (
                      <Icon icon="lucide:check" className="mx-auto text-success" />
                    ) : (
                      <Icon icon="lucide:x" className="mx-auto text-danger" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};
