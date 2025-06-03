import React from "react";
import { SwapyItem, SwapyLayout, SwapySlot } from "../ui/swapy";
import { MusicWidget } from "./music";
import { cn } from "@heroui/react";
import { Example1 as TodoExample1, Example2 as TodoExample2 } from "./todo";
import { Example1 as NoteExample1, Example2 as NoteExample2 } from "./note";

const widgets = [
  { id: "widget1", component: <TodoExample1 /> },
  { id: "widget2", component: <NoteExample1 /> },
  { id: "widget3", component: <MusicWidget /> },
  { id: "widget4", component: <TodoExample2 /> },
  { id: "widget5", component: <NoteExample2 /> },
];

const widgetLayout = [
  "row-span-1 col-span-1 md:col-span-1",
  "row-span-1 col-span-1 md:col-span-1",
  "row-span-1 col-span-1 md:col-span-1",
  "row-span-1 col-span-1 md:col-span-2",
  "row-span-1 col-span-1 md:col-span-1",
];

export default function WidgetsPreview() {
  const [widgetOrder] = React.useState(widgets.map((w) => w.id));

  return (
    <div className="overflow-visible p-2">
      <SwapyLayout id="widget-layout" config={{ swapMode: "hover" }}>
        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3">
          {widgetOrder.map((widgetId, index) => {
            const widget = widgets.find((w) => w.id === widgetId);
            if (!widget) return null;
            const layoutClass = widgetLayout[index] || "";
            return (
              <SwapySlot
                key={widget.id}
                id={widget.id}
                className={cn("size-full rounded-md", layoutClass)}
              >
                <SwapyItem
                  id={widget.id}
                  className="relative z-0 flex size-full cursor-grab flex-col rounded-md active:cursor-grabbing"
                >
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
