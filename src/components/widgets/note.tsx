
import { cn } from "@heroui/react";

type noteWidgetProps = { notes: string[], title?: string; className?: string }

export const NotesWidget = ({ notes, title, className }: noteWidgetProps) => {
  return (
    <div className={cn(
      "flex flex-col size-full py-3 px-4 border-small rounded-medium items-start text-primary-600 bg-primary-50 border-primary-200 overflow-auto",
      className
    )}>{title && <div className="text-xl">{title}</div>}
      {notes.map((note, i) => <div key={i} className='text-md'>{note}</div>)}
    </div>
  )
}
