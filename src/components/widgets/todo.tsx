import { Checkbox, cn } from "@heroui/react";
import { allColors, Card } from "../customCard";

type tasksType = { title: string; done?: boolean, };
type taskWidgetProps = { initialTasks: tasksType[]; title?: string; className?: string, color?: allColors  };

export const TodoWidget = ({ initialTasks, title, className,color='secondary'  }: taskWidgetProps) => {
  return (
    <Card
      color= { color }
      className={cn(
        "flex size-full flex-col items-start overflow-auto px-4 py-3",
        className
      )}
    >
      {title && <div className="text-xl">{title}</div>}
      {initialTasks.map((task, i) => (
        <Checkbox color="secondary" lineThrough size="md" defaultChecked={task.done} key={i}>
          {task.title}
        </Checkbox>
      ))}
    </Card>
  );
};

export const Example1 = () => {
  return (
    <TodoWidget
      title="Shopping List"
      initialTasks={[
        { title: "Milk", done: true },
        { title: "Eggs", done: false },
        { title: "Bread", done: true },
        { title: "Cheese", done: false },
        { title: "Butter", done: false },
      ]}
    />
  );
};

export const Example2 = () => {
  return (
    <TodoWidget
      title="Fetures"
      initialTasks={[
        { title: "Focus Timer", done: true },
        { title: "Task Management", done: true },
        { title: "Daily Planner", done: true },
        { title: "Smart Reminders", done: true },
        { title: "Pomodoro Timer", done: false },
        { title: "Intuitive Calendar", done: false },
      ]}
    />
  );
};
