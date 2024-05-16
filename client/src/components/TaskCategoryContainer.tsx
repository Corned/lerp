import { DragEvent, useState } from "react"

import TaskCategory from "@/components/TaskCategory"
import taskData from "@/assets/taskData"
import { useGetWorkspaceByIdQuery, useUpdateTaskMutation } from "@/services/api"

const TaskCategoryContainer = () => {
  const { data, error, isLoading } = useGetWorkspaceByIdQuery(1)
  const [ updateTask, result ] = useUpdateTaskMutation()

  console.log(result);
  

  const [targetCategory, setTargetCategory] = useState<number | null>(null)

  const moveTaskToCategory = (taskId: number, categoryId: number) => {
    console.log(taskId, categoryId);
    
    updateTask({ id: taskId, categoryId })
  }

  const onTaskCardDragStart = (_event: DragEvent, _task: Task) => {
    /* console.log(_event) */
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

  // Grahh
  type CategoryData = {
    name: string
    tasks: Task[]
    id: number
    position: number
  }

  const categories: CategoryData[] = [...data.categories].map((category) => {
    return {
      ...category,
      tasks: data.tasks.filter((task) => task.categoryId === category.id),
    }
  })

  return (
    <div className="flex grow gap-2 overflow-x-scroll py-10 pl-10 pr-5">
      {categories.map(({ name, id, tasks }) => (
        <TaskCategory
          title={name}
          id={id}
          tasks={tasks}
          isTargetted={targetCategory === id}
          onTaskCardDragStart={onTaskCardDragStart}
          onTaskCardDragEnd={onTaskCardDragEnd}
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
