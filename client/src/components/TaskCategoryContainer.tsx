import React, { DragEvent, useState } from "react"

import TaskCategory from "@/components/TaskCategory"
import { useGetWorkspaceByIdQuery, useUpdateTaskMutation } from "@/services/api"
import Modal from "./Modal"

const TaskCategoryContainer = () => {
  const { data, error, isLoading } = useGetWorkspaceByIdQuery(1)
  const [updateTask, result] = useUpdateTaskMutation()

  const [targetCategory, setTargetCategory] = useState<number | null>(null)
  const [draggedTask, setDraggedTask] = useState<Task | null>(null)

  const [taskPatch, setTaskPatch] = useState([])

  const moveTaskToCategory = (taskId: number, categoryId: number) => {
    //console.log(taskId, categoryId)

    updateTask({ id: taskId, categoryId })
  }

  const onTaskCardDragStart = (_event: DragEvent, task: Task) => {
    /* console.log(_event) */
    setDraggedTask(task)
  }

  const onTaskCardDrag = (_event: DragEvent, _task: Task) => {
    /*     console.log(_task); */
  }

  const onTaskCardDragEnd = async (_event: DragEvent, task: Task) => {
    if (!targetCategory) {
      return
    }

    const patch = taskPatch.map((patch) => {
      if (patch.id === task.id) {
        return { ...patch, categoryId: targetCategory }
      }

      return patch
    })

    for (const x of patch) {
      await updateTask(x)
    }

    setTargetCategory(-1)
    setDraggedTask(null)
  }

  // Needs refactoring, could happen in
  // onTaskCardDragEnd if I end up not
  // implementing previews
  const onCategoryDragOver = (
    event: DragEvent,
    taskContainerElementRef: React.RefObject<HTMLDivElement>,
    category: number
  ) => {
    setTargetCategory(category)

    if (!taskContainerElementRef.current) {
      return
    }

    if (!draggedTask) {
      return
    }

    const mousePositionY = event.pageY
    const taskElements: HTMLCollection =
      taskContainerElementRef.current.children

    let taskElementData = [
      {
        id: draggedTask.id,
        position: mousePositionY,
      },
    ]

    for (const taskElement of taskElements) {
      // Ignore any non-tasks
      if (!taskElement.dataset || !taskElement.dataset.id) {
        continue
      }

      // Ignore currently dragged taskElement
      if (Number(taskElement.dataset.id) === Number(draggedTask.id)) {
        continue
      }

      const { top, height } = taskElement.getBoundingClientRect()
      const middlePoint = top + height / 2

      taskElementData.push({
        id: Number(taskElement.dataset.id),
        position: middlePoint,
      })
    }

    const patch = taskElementData
      .sort((a, b) => {
        return a.position - b.position
      })
      .map(({ id }, index) => {
        return { id, position: index }
      })

    // TODO: MOVE TO DRAG END
    setTaskPatch(patch)
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
