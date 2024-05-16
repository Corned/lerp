import { DragEvent } from "react"

import TaskCard from "@/components/TaskCard"
import { Plus } from "lucide-react"

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
      className={`mb-auto flex min-w-[300px] max-w-[300px] flex-col gap-2 rounded-xl bg-gray-100/70 p-1 ${isTargetted ? "outline outline-2 outline-indigo-400" : ""}`}
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

      <button className="flex flex-row justify-center gap-2 rounded-xl border border-b-[3px] border-gray-200 bg-white py-2 transition-all hover:scale-105">
        <Plus /> Create new task
      </button>
    </div>
  )
}

export default TaskCategory
