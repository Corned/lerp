import TaskCategory from "./TaskCategory"
import { DragEvent, useState } from "react"
import taskData from "@/assets/taskData"

const TaskCategoryContainer = () => {
  const [tasks, setTasks] = useState(taskData)
  const [targetCategory, setTargetCategory] = useState(null)

  const moveTaskToCategory = (taskId, categoryName) => {
    setTasks((oldTasks) => {
      return oldTasks.map((task) => {
        if (taskId === task.id) {
          task.category = categoryName || task.category
        }

        return task
      })
    })
  }

  const onTaskCardDragStart = (event, task) => {
    // console.log("start", task);
  }

  const onTaskCardDragEnd = (event, task) => {
    if (!targetCategory) {
      return
    }

    moveTaskToCategory(task.id, targetCategory)
    setTargetCategory(null)
  }

  const onCategoryDragOver = (event, category) => {
    setTargetCategory(category)
  }

  const onCategoryDragLeft = (event, category) => {
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
      tasks: taskData.filter((task) => task.category === name),
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
