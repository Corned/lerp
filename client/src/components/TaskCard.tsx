const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-b-4 border-gray-200 bg-white p-4">
      <div className="flex flex-row flex-wrap gap-2 rounded-lg bg-white">
        <p className="w-fit rounded-full bg-red-100 px-3 py-1 font-bold text-red-500">
          Copywriting
        </p>
        <p className="w-fit rounded-full bg-green-100 px-3 py-1 font-bold text-green-500">
          Illustration
        </p>
        <p className="w-fit rounded-full bg-blue-100 px-3 py-1 font-bold text-blue-500">
          UI Design
        </p>
      </div>

      <p className="text-lg">{task.body}</p>
      <p>{task.date}</p>
    </div>
  )
}

export default TaskCard
