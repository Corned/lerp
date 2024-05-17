import { DragEvent } from "react"

import TaskCard from "@/components/TaskCard"
import { Ellipsis, Plus } from "lucide-react"

type TaskCategoryPropTypes = {
  isTargetted: boolean
  title: string
  id: number
  tasks: Task[]
  onCategoryDragOver(event: DragEvent, categoryId: number): void
  onCategoryDragLeft(event: DragEvent, categoryId: number): void
  onTaskCardDragStart(event: DragEvent, task: Task): void
  onTaskCardDragEnd(event: DragEvent, task: Task): void
  onTaskCardDrag(event: DragEvent, task: Task): void
}

const TaskCategory = ({
  isTargetted = false,
  title,
  id,
  tasks,
  onCategoryDragOver,
  onCategoryDragLeft,
  onTaskCardDragStart,
  onTaskCardDragEnd,
  onTaskCardDrag,
}: TaskCategoryPropTypes) => {
  const sortedTasks = tasks.sort((a, b) => {
    return a.position - b.position
  })

  return (
    <div
      className={`mb-auto flex min-w-[300px] max-w-[300px] flex-col gap-2 rounded-xl bg-gray-100/70 p-1 ${isTargetted ? "outline outline-2 outline-indigo-400" : ""}`}
      onDragOver={(event) => onCategoryDragOver(event, id)}
      onDragLeave={(event) => onCategoryDragLeft(event, id)}
    >
      <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-2">
        <h1 className="mb text-xl font-bold">
          {id}. {title}
        </h1>
        <button className="rounded-xl p-1 hover:bg-gray-200">
          <Ellipsis />
        </button>
      </div>

      {sortedTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDragStart={onTaskCardDragStart}
          onDragEnd={onTaskCardDragEnd}
          onDrag={onTaskCardDrag}
        />
      ))}

      <button className="flex flex-row justify-center gap-2 rounded-xl border border-b-[3px] border-gray-200 bg-white py-2 transition-all hover:scale-105">
        <Plus /> Create new task
      </button>
    </div>
  )
}

export default TaskCategory
