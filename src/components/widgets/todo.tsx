import { Checkbox, cn } from "@heroui/react";

type tasksType = { title: string; done?: boolean; }
type taskWidgetProps = { initialTasks: tasksType[], title?: string; className?: string }

export const TodoWidget = ({ initialTasks, title, className, }: taskWidgetProps) => {
  return (
    <div className={cn(
      "flex flex-col size-full py-3 px-4 border-small rounded-medium items-start text-secondary-600 bg-secondary-50 border-secondary-200 overflow-auto",
      className
    )}>
      {title && <div className="text-xl">{title}</div>}
      {initialTasks.map((task, i) =>
        <Checkbox lineThrough size='md' defaultChecked={task.done} key={i} >{task.title}</Checkbox>
      )}
    </div>
  );
};


