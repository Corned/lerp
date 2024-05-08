import { Progress } from "./components/ui/progress"

const ProfilePicture = () => {
  return <div className="aspect-square h-full rounded-full bg-indigo-400"></div>
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-indigo-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  )
}

const Header = ({ children }) => {
  return (
    <header className="mb-10 flex h-14 flex-row items-center justify-between px-5">
      {children}
    </header>
  )
}

const Task = ({ task }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 shadow-sm">
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

interface Task {
  tags: [string]
  body: string
  date: string
}

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className="flex min-w-80 flex-col gap-4">
      <h1 className="mb text-2xl font-bold">{title}</h1>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  )
}

const tasks: Task[] = [
  {
    tags: ["UI Design"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Nov 24",
  },
  {
    tags: ["Copywriting"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Nov 24",
  },
  {
    tags: ["Illustration"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Nov 24",
  },
]

function App() {
  return (
    <div className="grid grid-cols-main">
      <div className="h-screen py-10">
        <Header>
          <h1 className="text-5xl font-bold">Lerp Task Manager</h1>
          <div className="flex h-full w-fit flex-row gap-2">
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <div className="flex aspect-square flex-col items-center justify-center rounded-full border-2 border-dashed border-indigo-400  bg-white">
              <Icon />
            </div>
          </div>
        </Header>

        {/* Column containers */}
        <div className="flex w-0 min-w-full flex-row gap-4 overflow-x-scroll px-5 pb-10">
          <TaskColumn title="Task Ready" tasks={tasks} />
          <TaskColumn title="In Progress" tasks={tasks} />
          <TaskColumn title="Needs Review" tasks={tasks} />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
          <TaskColumn
            title={(~~(Math.random() * 10000)).toString()}
            tasks={tasks}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 border-l border-gray-200 py-10 shadow-lg">
        <Header>
          <h1 className="text-2xl font-bold">Task Progress</h1>
        </Header>

        <div className="flex flex-col gap-4 px-5">
          <div className="flex flex-col gap-2">
            <p>Copywriting</p>
            <Progress
              value={30}
              className="bg-red-50"
              indicatorColor="bg-red-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Illustration</p>
            <Progress
              value={70}
              className="bg-green-50"
              indicatorColor="bg-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>UI Design</p>
            <Progress
              value={45}
              className="bg-blue-50"
              indicatorColor="bg-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
