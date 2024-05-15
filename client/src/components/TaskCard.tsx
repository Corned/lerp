import { DragEvent, useState } from "react"

type TaskCardPropTypes = {
  task: Task
  onDragStart(event: DragEvent, task: Task): void
  onDragEnd(event: DragEvent, task: Task): void
}

const TagPill = ({ tag }: { tag: string }) => {
  let color = "gray"
  if (tag === "Frontend") {
    color = "blue"
  } else if (tag === "Backend") {
    color = "red"
  } else if (tag === "UI Design") {
    color = "green"
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
          <div className="gap flex flex-row flex-wrap gap-2 text-sm ">
            {task.tags.map((tag) => (
              <TagPill tag={tag} />
            ))}
          </div>

          <p className="text-md">
            {task.body}
          </p>
          <p>{task.date}</p>
        </>
      )}

      {isDragging && <p className="text-center">Dragging \(◎o◎)/</p>}
    </div>
  )
}

export default TaskCard
