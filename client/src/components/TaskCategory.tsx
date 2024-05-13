import TaskCard from "./TaskCard"
import { DragEvent } from "react"

type TaskCategoryPropTypes = {
  isTargetted: boolean
  title: string
  tasks: Task[]
  onCategoryDragOver(event: DragEvent, title: string): void
  onCategoryDragLeft(event: DragEvent, title: string): void
  onTaskCardDragStart(event: DragEvent, task: Task): void
  onTaskCardDragEnd(event: DragEvent, task: Task): void
}

const TaskCategory = ({
  isTargetted = false,
  title,
  tasks,
  onCategoryDragOver,
  onCategoryDragLeft,
  onTaskCardDragStart,
  onTaskCardDragEnd,
}: TaskCategoryPropTypes) => {
  return (
    <div
      className={`mb-auto flex w-80 flex-col gap-2 rounded-xl bg-gray-100/70 p-1 ${isTargetted ? "outline outline-2 outline-gray-200" : ""}`}
      onDragOver={(event) => onCategoryDragOver(event, title)}
      onDragLeave={(event) => onCategoryDragLeft(event, title)}
    >
      <h1 className="mb mt-1 px-2 text-xl font-bold">{title}</h1>

      {tasks.map((task) => (
        <TaskCard
          task={task}
          onDragStart={onTaskCardDragStart}
          onDragEnd={onTaskCardDragEnd}
        />
      ))}
    </div>
  )
}

export default TaskCategory
