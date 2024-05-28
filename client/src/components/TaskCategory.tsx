import React, { DragEvent, useRef, useState } from "react"

import TaskCard from "@/components/TaskCard"
import { Ellipsis, Plus } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import TaskDialog from "./TaskDialog"
import { Textarea } from "./ui/textarea"
import { useCreateTaskMutation } from "@/services/api"

type TaskCategoryPropTypes = {
  isTargetted: boolean
  title: string
  id: number
  tasks: Task[]
  onCategoryDragOver(
    event: DragEvent,
    taskContainerRef: React.RefObject<HTMLDivElement>,
    categoryId: number
  ): void
  onCategoryDragLeft(event: DragEvent, categoryId: number): void
  onTaskCardDragStart(event: DragEvent, task: Task): void
  onTaskCardDragEnd(event: DragEvent, task: Task): void
  onTaskCardDrag(event: DragEvent, task: Task): void
}

const Preview = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-gray-200 p-2 font-bold">
      <p>
        {">"}Drop it here!{">"}
      </p>
    </div>
  )
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
  const [isCreatingNewTaskCard, setIsCreatingNewTaskCard] = useState(false)
  
  const [createTask, _result] = useCreateTaskMutation()
  const taskContainerRef = useRef<HTMLDivElement>(null)

  const handleNewTaskCardBlur = (event) => {
    const value = event.target.value.trim()
    setIsCreatingNewTaskCard(false)

    if (!value) {
      return
    }

    const payload = {
      body: value,
      categoryId: id,
      workspaceId: 1,
      position: 9999,
      tags: [],
    }
       
    createTask({ payload })
  }

  const sortedTasks = tasks.sort((a, b) => {
    return a.position - b.position
  })

  return (
    <Card
      className={`mb-auto flex min-w-[300px] max-w-[300px] flex-col gap-2 rounded-md bg-gray-100/70 p-1.5 ${isTargetted ? "outline outline-2 outline-indigo-400" : ""}`}
      onDragOver={(event) => onCategoryDragOver(event, taskContainerRef, id)}
      onDragLeave={(event) => onCategoryDragLeft(event, id)}
    >
      <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-2">
        <h1 className="mb text-xl font-bold">{title}</h1>
        <button className="rounded-xl p-1 hover:bg-gray-200">
          <Ellipsis />
        </button>
      </div>

      <div
        ref={taskContainerRef}
        className="task-container flex flex-col gap-1.5"
      >
        {sortedTasks.map((task) => (
          <TaskCard
            key={`${id} - ${task.id}`}
            task={task}
            onDragStart={onTaskCardDragStart}
            onDragEnd={onTaskCardDragEnd}
            onDrag={onTaskCardDrag}
          />
        ))}
      </div>

      {isCreatingNewTaskCard ? (
        <Textarea autoFocus placeholder="Describe your task" onBlur={handleNewTaskCardBlur}/>
      ) : (
        <Button
          variant="outline"
          className="flex flex-row justify-center gap-2"
          onClick={() => setIsCreatingNewTaskCard(true)}
        >
          Create new task
        </Button>
      )}


    </Card>
  )
}

export default TaskCategory
