import { useState } from "react";
import { cn } from "@heroui/react";
import { Example1 as TodoExample1, Example2 as TodoExample2 } from "./widgets/todo";
import { Example1 as NoteExample1, Example2 as NoteExample2 } from "./widgets/note";

const cards = [
  { component: NoteExample1, rotationClass: "", revealClass: "-rotate-[2deg]" },
  {
    component: TodoExample1,
    rotationClass: "group-hover:rotate-[15deg]",
    revealClass: "rotate-[3deg] translate-y-2",
  },
  {
    component: NoteExample2,
    rotationClass: "group-hover:rotate-[30deg]",
    revealClass: "-rotate-[2deg] translate-x-1",
  },
  {
    component: TodoExample2,
    rotationClass: "group-hover:rotate-[45deg]",
    revealClass: "rotate-[2deg]",
  },
];

export default function CardSpread() {
  const [isExpanded, setExpanded] = useState(false);
  const cls = "h-80 w-32 sm:w-40 md:w-48 lg:w-52 xl:w-56 2xl:w-64";

  return (
    <div
      className={cn(
        "group relative flex min-h-80 items-center transition-all duration-500 ease-in-out",
        {
          [`origin-bottom transition-all duration-500 ease-in-out hover:-rotate-[15deg] ${cls}`]:
            !isExpanded,
          "gap-3": isExpanded,
        }
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
              "cursor-pointer transition-all duration-500 ease-in-out",
              {
                absolute: !isExpanded,
                "origin-bottom": !isExpanded,
              },
              !isExpanded && item.rotationClass,
              isExpanded && item.revealClass
            )}
          >
            <item.component />
          </div>
        );
      })}
    </div>
  );
}
