import { DragEvent, useState } from "react"
import { cn } from "@/lib/utils"

type TaskCardPropTypes = {
  task: Task
  onDragStart(event: DragEvent, task: Task): void
  onDragEnd(event: DragEvent, task: Task): void
}

const TagPill = ({ tag }: { tag: string }) => {
  let color = "gray"
  if (tag === "Copywriting") {
    color = "red"
  } else if (tag === "Illustration") {
    color = "green"
  } else if (tag === "UI Design") {
    color = "blue"
  }

  return (
    <div
      className={`w-fit rounded-full  px-6 py-1 font-bold bg-${color}-400 text-${color}-500`}
    ></div>
  )
}

const TaskCard = ({ task, onDragStart, onDragEnd }: TaskCardPropTypes) => {
  const [isDragging, setDragging] = useState(false)

  const handleDragStart = (_event: DragEvent) => {
    setDragging(true)
    onDragStart(_event, task)
  }

  const handleDragEnd = (event: DragEvent) => {
    setDragging(false)
    onDragEnd(event, task)
  }

  return (
    <div
      draggable={true}
      onDrag={(event) => handleDragStart(event)}
      onDragEnd={(event) => handleDragEnd(event)}
      className="flex flex-col gap-2 rounded-xl border border-b-[3px] border-gray-200 bg-white p-4"
    >
      {!isDragging && (
        <>
          <div className="gap flex flex-row flex-wrap gap-2 text-sm">
            {task.tags.map((tag) => (
              <TagPill tag={tag} />
            ))}
          </div>

          <p className="text-md">
            {task.id}: {task.body}
          </p>
          <p>{task.date}</p>
        </>
      )}

      {isDragging && <p>Dragging :o</p>}
    </div>
  )
}

export default TaskCard
