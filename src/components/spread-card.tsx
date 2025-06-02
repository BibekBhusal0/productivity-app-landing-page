import { useState } from "react";
import { cn } from "@heroui/react";
import { TodoWidget } from "./widgets/todo";
import { NotesWidget } from "./widgets/note";

const cards = [
  {
    component: <NotesWidget
      title='Some thing random'
      notes={[
        'aliquip laborum consectetur do eiusmod',
        'eiusmod elit aliqua eiusmod aliqua elit dolore dolore sed ',
      ]}
    />,
    rotationClass: "",
    revealClass: "-rotate-[2deg]",
  },
  {
    component: <TodoWidget title='Shopping List' initialTasks={[
      { title: "Milk", done: true, },
      { title: "Eggs", done: false, },
      { title: "Bread", done: true, },
      { title: "Cheese", done: false, },
      { title: "Butter", done: false, },
    ]} />,
    rotationClass: "group-hover:rotate-[15deg]",
    revealClass: "rotate-[3deg] translate-y-2",
  },

  {
    component: <NotesWidget title="Install Focusly"
      notes={[
        'Create an account',
        "Add your tasks and goals",
        "Track progress",
        "Install Desktop App",
      ]}
    />,
    rotationClass: "group-hover:rotate-[30deg]",
    revealClass: "-rotate-[2deg] translate-x-1",
  },

  {
    component: <TodoWidget
      title="Fetures"
      initialTasks={[
        { title: "Focus Timer", done: true, },
        { title: "Task Management", done: true, },
        { title: "Daily Planner", done: true, },
        { title: "Smart Reminders", done: true, },
        { title: "Pomodoro Timer", done: false, },
        { title: "Intuitive Calendar", done: false, },
      ]}
    />,
    rotationClass: "group-hover:rotate-[45deg]",
    revealClass: "rotate-[2deg]",
  },
];

export default function CardSpread() {
  const [isExpanded, setExpanded] = useState(false);
  const cls = 'h-80 w-32 sm:w-40 md:w-48 lg:w-52 xl:w-56 2xl:w-64'

  return (
    <div
      className={cn(
        "group relative flex min-h-80 items-center transition-all duration-500 ease-in-out",
        {
          [`origin-bottom transition-all duration-500 ease-in-out hover:-rotate-[15deg] ${cls}`]:
            !isExpanded,
          "gap-3": isExpanded,
        },
      )}
    >
      {cards.map((item, index) => {
        return (
          <div
            key={index}
            onClick={(e) => {
              setExpanded(!isExpanded);
              e.preventDefault();
            }}
            className={cn(
              cls,
              "transition-all duration-500 ease-in-out cursor-pointer",
              {
                absolute: !isExpanded,
                "origin-bottom": !isExpanded,
              },
              !isExpanded && item.rotationClass,
              isExpanded && item.revealClass,
            )}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}

