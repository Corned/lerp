import TaskCard from "./TaskCard"

const TaskCategory = ({ title, tasks }: { title: string; tasks: Task[] }) => {
  return (
    <div className="flex min-w-80 flex-col gap-2">
      <h1 className="mb text-2xl font-bold">{title}</h1>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  )
}

export default TaskCategory
