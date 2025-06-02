import React from "react";
import { SwapyItem, SwapyLayout, SwapySlot } from "../ui/swapy";
import { TodoWidget } from "./todo";
import { NotesWidget } from "./note";
import { MusicWidget } from "./music";
import { cn } from "@heroui/react";

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

const widgetLayout = [
  "row-span-1 col-span-1",
  "row-span-1 col-span-1",
  "row-span-1 col-span-1",
  "row-span-1 col-span-2",
  "row-span-1 col-span-1",
];

export default function WidgetsPreview() {
  const [widgetOrder,] = React.useState(widgets.map(w => w.id));

  return (
    <div className="overflow-visible p-2">
      <SwapyLayout id="widget-layout" config={{ swapMode: "hover" }}>
        <div className="grid grid-cols-3 gap-6 auto-rows-fr">
          {widgetOrder.map((widgetId, index) => {
            const widget = widgets.find((w) => w.id === widgetId);
            if (!widget) return null;
            const layoutClass = widgetLayout[index] || "";
            return (
              <SwapySlot
                key={widget.id}
                id={widget.id}
                className={cn("rounded-md size-full" , layoutClass)}
              >
                <SwapyItem id={widget.id} className="cursor-grab rounded-md active:cursor-grabbing size-full flex flex-col">
                  {widget.component}
                </SwapyItem>
              </SwapySlot>
            );
          })}
        </div>
      </SwapyLayout>
    </div>
  );
}

