import React from "react";
import { SwapyItem, SwapyLayout, SwapySlot } from "./ui/swapy";
import { SlotItemMapArray, utils } from "swapy";
import { Checkbox, cn } from "@heroui/react";
import { GripVertical } from 'lucide-react';

type tasksType = { id: string; title: string; done?: boolean; }
type taskWidgetProps = { initialTasks: tasksType[], title?: string; className?: string, showDragHandle?: boolean }
type noteWidgetProps = { notes: string[], title?: string; className?: string }

export const TodoWidget = ({ initialTasks, title, className, showDragHandle = true }: taskWidgetProps) => {
  const [slotItemMap] = React.useState<SlotItemMapArray>(utils.initSlotItemMap(initialTasks, "id"));
  const slottedItems = React.useMemo(
    () => utils.toSlottedItems(initialTasks, "id", slotItemMap),
    [initialTasks, slotItemMap]
  );
  return (
    <SwapyLayout id="swapy" config={{ swapMode: "hover" }} className={cn(
      "flex flex-col size-full py-3 px-4 border-small rounded-medium items-start text-secondary-600 bg-secondary-50 border-secondary-200 overflow-auto",
      className
    )}>
      {title && <div className="text-xl">{title}</div>}
      {slottedItems.map(({ itemId }) => {
        const task = initialTasks.find((i) => i.id === itemId);
        if (!task) return null;
        return (
          <SwapySlot key={itemId} id={itemId} className="rounded-md bg-transparent">
            <SwapyItem id={itemId} className="flex items-center gap-2 group/todo bg-transparent">
              <div data-swapy-handle className={ cn('text-sm cursor-grab text-divider w-3  active:cursor-grabbing group/handle') }>
                <GripVertical width={18} className={ cn('hidden ',showDragHandle && 'group-hover/todo:block group-active/handle:block') } />
              </div>
              <Checkbox lineThrough size='md' defaultChecked={task.done} >{task.title}</Checkbox>
            </SwapyItem>
          </SwapySlot>
        );
      })}
    </SwapyLayout>
  );
};


export const NotesWidget = ({ notes, title, className }: noteWidgetProps) => {
  return (
    <div className={cn(
      "flex flex-col size-full py-3 px-4 border-small rounded-medium items-start text-primary-600 bg-primary-50 border-primary-200 overflow-auto",
      className
    )}>{title && <div className="text-xl">{title}</div>}
      {notes.map((note) => <div className='text-md'>{note}</div>)}
    </div>
  )
}
