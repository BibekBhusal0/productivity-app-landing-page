import React from "react";
import { SwapyItem, SwapyLayout, SwapySlot } from "./ui/swapy";
import { motion } from "framer-motion";

import { TodoWidget, NotesWidget, MusicWidget } from "./widgets";

const initialTasks = [
  { id: "task1", title: "Buy groceries", done: false },
  { id: "task2", title: "Walk the dog", done: true },
];

const initialNotes = ["Meeting at 2 PM", "Remember to call John"];

const widgets = [
  { id: "widget1", component: <TodoWidget initialTasks={initialTasks} title="Tasks" /> },
  { id: "widget2", component: <NotesWidget notes={initialNotes} title="Notes" /> },
  { id: "widget3", component: <MusicWidget /> },
  { id: "widget4", component: <TodoWidget initialTasks={[...initialTasks].reverse()} title="Tasks Reversed" /> },
  { id: "widget5", component: <NotesWidget notes={[...initialNotes].reverse()} title="Notes Reversed" /> },
];

export default function WidgetsPreview() {
  const [widgetOrder,] = React.useState(widgets.map(w => w.id));

  return (
    <section className="section-padding overflow-x-hidden bg-content1">
      <div className="container-custom overflow-visible">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Drag and Drop <span className="gradient-text">Widgets</span>
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Rearrange the widgets to your liking.
          </p>
        </motion.div>

        <SwapyLayout id="widget-layout" config={{ swapMode: "hover" }}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {widgetOrder.map((widgetId) => {
              const widget = widgets.find((w) => w.id === widgetId);
              if (!widget) return null;

              return (
                <SwapySlot key={widget.id} id={widget.id} className="rounded-md">
                  <SwapyItem id={widget.id} className="cursor-grab rounded-md active:cursor-grabbing">
                    <motion.div
                      className="flex h-full flex-col rounded-lg border border-divider bg-default-100 p-6 shadow-sm transition-shadow focus-within:cursor-grabbing hover:shadow-lg"
                    >
                      {widget.component}
                    </motion.div>
                  </SwapyItem>
                </SwapySlot>
              );
            })}
          </div>
        </SwapyLayout>
      </div>
    </section>
  );
}

