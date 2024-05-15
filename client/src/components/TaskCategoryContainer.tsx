import { DragEvent, useState } from "react"

import TaskCategory from "@/components/TaskCategory"
import taskData from "@/assets/taskData"
import { useGetWorkspaceByIdQuery } from "@/services/workspaceApi"

const TaskCategoryContainer = () => {
  const { data, error, isLoading } = useGetWorkspaceByIdQuery(1)

  console.log(data);
  

  const [_tasks, setTasks] = useState<Task[]>(taskData)
  const [targetCategory, setTargetCategory] = useState<string | null>(null) 

  const moveTaskToCategory = (taskId: number, categoryName: string) => {
    setTasks((oldTasks) => {
      return oldTasks.map((task) => {
        if (taskId === task.id) {
          task.category = categoryName || task.category
        }

        return task
      })
    })
  }

  const onTaskCardDragStart = (_event: DragEvent, _task: Task) => {
    console.log(_event)
  }

  const onTaskCardDragEnd = (_event: DragEvent, task: Task) => {
    if (!targetCategory) {
      return
    }

    moveTaskToCategory(task.id, targetCategory)
    setTargetCategory(null)
  }

  const onCategoryDragOver = (_event: DragEvent, category: string) => {
    setTargetCategory(category)
  }

  const onCategoryDragLeft = (_event: DragEvent, _category: string) => {
    //console.log("category left", category);
  }

  // Grahh
  type CategoryData = {
    name: string
    tasks: Task[]
    position: number
  }

  const categories: CategoryData[] = [
    ...data.categories,
  ].map((category) => {
    return {
      ...category,
      tasks: data.tasks.filter((task) => task.categoryId === category.id),
    }
  })

  return (
    <div className="flex gap-2 overflow-x-scroll grow py-10 pl-10 pr-5">
      {categories.map(({ name, tasks }) => (
        <TaskCategory
          title={name}
          tasks={tasks}
          isTargetted={targetCategory === name}
          onTaskCardDragStart={onTaskCardDragStart}
          onTaskCardDragEnd={onTaskCardDragEnd}
          onCategoryDragOver={onCategoryDragOver}
          onCategoryDragLeft={onCategoryDragLeft}
        />
      ))}
    </div>
  )
}

export default TaskCategoryContainer
