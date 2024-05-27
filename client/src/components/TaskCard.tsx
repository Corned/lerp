import { PencilIcon } from "lucide-react"
import { DragEvent, useState } from "react"
import Moment from "react-moment"

type TaskCardPropTypes = {
  task: Task
  onDragStart(event: DragEvent, task: Task): void
  onDragEnd(event: DragEvent, task: Task): void
  onDrag(event: DragEvent, task: Task): void
}

const TagPill = ({ tag }: { tag: string }) => {
  let color = "gray"
  if (tag === "Frontend") {
    color = "blue"
  } else if (tag === "Backend") {
    color = "red"
  } else if (tag === "UI Design") {
    color = "green"
  }

  return (
    <div
      className={`w-fit rounded-full  px-6 py-1 font-bold bg-${color}-400 text-${color}-500`}
    ></div>
  )
}

const TaskCard = ({
  task,
  onDragStart,
  onDragEnd,
  onDrag,
}: TaskCardPropTypes) => {
  const [isDragging, setDragging] = useState(false)
  const [ showEditButton, setShowEditButton ] = useState(false)

  const handleDragStart = (_event: DragEvent) => {
    setDragging(true)
    onDragStart(_event, task)
  }

  const handleDragEnd = (event: DragEvent) => {
    setDragging(false)
    onDragEnd(event, task)
  }

  const handleDrag = (event: DragEvent) => {
    onDrag(event, task)
  }

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
      className={`flex flex-col gap-2 rounded-md border border-b-[1px] border-gray-200 bg-white p-4 transition-all ${isDragging ? "scale-95" : "hover:scale-105"} relative`}
      data-id={task.id}
      data-position={task.position}
      onMouseEnter={() => setShowEditButton(true)}
      onMouseLeave={() => setShowEditButton(false)}
    >
    
    { showEditButton &&
      <button className="absolute top-1 right-1 rounded-full p-2 z-10 h-8 w-8 hover:bg-gray-100 transition-all">
        <PencilIcon className="w-full h-full"/>
      </button>
    }

      <div className="gap flex flex-row flex-wrap gap-2 text-sm ">
        {task.tags.map((tag, index) => (
          <TagPill key={index} tag={tag} />
        ))}
      </div>

      <p className="text-md">{task.body}</p>
      <Moment date={task.date} format="DD/MM/yyyy" />
    </div>
  )
}

export default TaskCard
