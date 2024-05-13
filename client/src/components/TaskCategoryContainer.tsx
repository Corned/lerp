import TaskCategory from "./TaskCategory"
import { DragEvent, useState } from "react"
import taskData from "@/assets/taskData"

const TaskCategoryContainer = () => {
  const [ _tasks, setTasks ] = useState<Task[]>(taskData)
  const [ targetCategory, setTargetCategory ] = useState<string | null>(null)

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
   //console.log("start", _task);
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




  const categories = [
    {
      name: "Ready to Start",
      tasks: [],
    },
    {
      name: "In Progress",
      tasks: [],
    },
  ].map(({ name, tasks }) => {
    return {
      name,
      tasks: taskData.filter((task) => task.category === name)
    }
  })

  return (
    <div className="flex gap-2 overflow-x-scroll py-10 pl-10 pr-5">
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
