import { DragEvent, useState } from "react"

import TaskCategory from "@/components/TaskCategory"
import { useGetWorkspaceByIdQuery, useUpdateTaskMutation } from "@/services/api"

const TaskCategoryContainer = () => {
  const { data, error, isLoading } = useGetWorkspaceByIdQuery(1)
  const [ updateTask, result ] = useUpdateTaskMutation()

  const [targetCategory, setTargetCategory] = useState<number | null>(null)

  const moveTaskToCategory = (taskId: number, categoryId: number) => {
    console.log(taskId, categoryId);
    
    updateTask({ id: taskId, categoryId })
  }

  const onTaskCardDragStart = (_event: DragEvent, _task: Task) => {
    /* console.log(_event) */
  }

  const onTaskCardDrag = (_event: DragEvent, _task: Task) => {

  }

  const onTaskCardDragEnd = (_event: DragEvent, task: Task) => {
    if (!targetCategory) {
      return
    }

    moveTaskToCategory(task.id, targetCategory)
    setTargetCategory(null)
  }

  const onCategoryDragOver = (_event: DragEvent, category: number) => {
    setTargetCategory(category)
  }

  const onCategoryDragLeft = (_event: DragEvent, _category: number) => {
    //console.log("category left", category);
  }

  const categories: Category[] = [...data.categories].map((category) => {
    return {
      ...category,
      tasks: data.tasks.filter((task: Task) => task.categoryId === category.id),
    }
  })

  return (
    <div className="flex grow gap-2 overflow-x-scroll py-5 pl-10 pr-5">
      {categories.map(({ name, id, tasks }) => (
        <TaskCategory
          key={id}
          title={name}
          id={id}
          tasks={tasks}
          isTargetted={targetCategory === id}
          onTaskCardDragStart={onTaskCardDragStart}
          onTaskCardDragEnd={onTaskCardDragEnd}
          onTaskCardDrag={onTaskCardDrag}
          onCategoryDragOver={onCategoryDragOver}
          onCategoryDragLeft={onCategoryDragLeft}
        />
      ))}

      <button className="min-w-[300px] max-w-[300px] rounded-xl border-4 border-dashed border-gray-100 bg-gray-100/20 text-2xl font-bold">
        + New Column
      </button>
    </div>
  )
}

export default TaskCategoryContainer
