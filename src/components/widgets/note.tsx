import { cn } from "@heroui/react";

type noteWidgetProps = { notes: string[]; title?: string; className?: string };

export const Example1 = () => {
  return (
    <NotesWidget
      title="Some thing random"
      notes={[
        "aliquip laborum consectetur do eiusmod",
        "eiusmod elit aliqua eiusmod aliqua elit dolore dolore sed ",
      ]}
    />
  );
};

export const Example2 = () => {
  return (
    <NotesWidget
      title="Install Focusly"
      notes={[
        "Create an account",
        "Add your tasks and goals",
        "Track progress",
        "Install Desktop App",
      ]}
    />
  );
};

export const NotesWidget = ({ notes, title, className }: noteWidgetProps) => {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-start overflow-auto rounded-medium border-small border-primary-200 bg-primary-50 px-4 py-3 text-primary-600",
        className
      )}
    >
      {title && <div className="text-xl">{title}</div>}
      {notes.map((note, i) => (
        <div key={i} className="text-md">
          {note}
        </div>
      ))}
    </div>
  );
};
