import { DragEvent, useState } from "react"

type TaskCardPropTypes = {
  task: Task
  onDrag(event: DragEvent<HTMLDivElement>): void
  onDragEnd(event: DragEvent<HTMLDivElement>): void
}

const TaskCard = ({ task, onDrag, onDragEnd }: TaskCardPropTypes) => {
  const [isDragging, setDragging] = useState(false)

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    setDragging(true)
    onDrag(event, task)
  }

  const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
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
            <div className="w-fit rounded-full bg-red-400 px-6 py-1 font-bold text-red-500"></div>
            <div className="w-fit rounded-full bg-green-400 px-6 py-1 font-bold text-green-500"></div>
            <div className="w-fit rounded-full bg-blue-400 px-6 py-1 font-bold text-blue-500"></div>
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
