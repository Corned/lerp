import { DragEvent, useRef, useState } from "react"
import TaskCard from "./TaskCard"

const TaskCategory = ({
  isTargetted = false,
  title,
  tasks,
  onCategoryDragOver,
  onCategoryDragLeft,
  onTaskCardDragStart,
  onTaskCardDragEnd,
}) => {
  const [inserting, setInserting] = useState(false)
  const categoryRef = useRef(null)

  return (
    <div
      className={`mb-auto flex w-80 flex-col gap-2 rounded-xl bg-gray-100/70 p-1 ${isTargetted ? "outline outline-2 outline-gray-200" : ""}`}
      onDragOver={(event) => onCategoryDragOver(event, title)}
      onDragLeave={(event) => onCategoryDragLeft(event, title)}
      ref={categoryRef}
    >
      <h1 className="mb mt-1 px-2 text-xl font-bold">{title}</h1>

      {tasks.map((task) => (
        <TaskCard
          task={task}
          onDrag={onTaskCardDragStart}
          onDragEnd={onTaskCardDragEnd}
        />
      ))}
    </div>
  )
}

export default TaskCategory
