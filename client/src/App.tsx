import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Progress } from "./components/ui/progress"

const ProfilePicture = () => {
  return (
    <Avatar className="aspect-square h-14 w-auto">
      <AvatarImage src="https://github.com/corned.png" />
      <AvatarFallback>73</AvatarFallback>
    </Avatar>
  )
}

const FolderPlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="h-6 w-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="h-6 w-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  )
}

const SpeechIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="h-6 w-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  )
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
    <header className="shadow-xs sticky top-0 flex flex-row items-center  justify-between border-b border-gray-200 bg-white/70 px-5 py-8 backdrop-blur-xl">
      {children}
    </header>
  )
}

const Task = ({ task }) => {
  return (
    <div className="shadow-xs flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4">
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
  {
    tags: ["Illustration"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Nov 24",
  },
]

function App() {
  return (
    <div className="grid h-full max-w-full grid-cols-main">
      <div className=" max-h-full overflow-y-auto">
        <Header>
          <h1 className="text-5xl font-bold">Lerp Task Manager</h1>
          <div className="flex h-full w-fit flex-row gap-2 transition-all">
            <ProfilePicture />

            {Array.from({ length: 6 }).map((_, i) => {
              return <ProfilePicture />
            })}

            <div className="flex aspect-square h-14 flex-col items-center justify-center rounded-full border-2 border-dashed border-indigo-400  bg-white">
              <Icon />
            </div>
          </div>
        </Header>

        {/* Column containers */}
        <div className="flex gap-4 overflow-x-scroll px-5 py-10">
          <TaskColumn title="Ready to Start" tasks={tasks} />
          <TaskColumn title="In Progress" tasks={tasks} />
          <TaskColumn title="Needs Review" tasks={tasks} />
          <TaskColumn title="Complete" tasks={tasks} />
          <TaskColumn title="Test" tasks={tasks} />
          <TaskColumn title="Test" tasks={tasks} />
          <TaskColumn title="Test" tasks={tasks} />
        </div>
      </div>

      <div className="shadow-xs flex flex-col gap-4 border-l border-gray-200 bg-white px-5 py-10">
        <h1 className="text-2xl font-bold">Task Progress</h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-end justify-between">
              <p>Copywriting</p>
              <p className="text-2xl font-bold text-black/10">3/10</p>
            </div>
            <Progress
              value={30}
              className="bg-red-50"
              indicatorColor="bg-red-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-end justify-between">
              <p>Illustration</p>
              <p className="text-2xl font-bold text-black/10">7/10</p>
            </div>
            <Progress
              value={70}
              className="bg-green-50"
              indicatorColor="bg-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-end justify-between">
              <p>UI Design</p>
              <p className="text-2xl font-bold text-black/10">9/20</p>
            </div>
            <Progress
              value={45}
              className="bg-blue-50"
              indicatorColor="bg-blue-400"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold">Recent Activity</h1>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-[40px_1fr] gap-4">
            <div className="h-auth flex aspect-square w-full flex-col items-center justify-center rounded-full bg-orange-400">
              <FolderPlusIcon />
            </div>
            <div className="flex flex-col">
              <p className="text">
                <span className="font-bold">Mr. Boss</span>
                <span> uploaded 3 documents</span>
              </p>
              <p className="text-black/20">Aug 10</p>
            </div>
          </div>

          <div className="grid grid-cols-[40px_1fr] gap-4">
            <div className="h-auth flex aspect-square w-full flex-col items-center justify-center rounded-full bg-indigo-400">
              <SpeechIcon />
            </div>
            <div className="flex flex-col">
              <p className="text">
                <span className="font-bold">Charlie</span>
                <span> left a comment</span>
              </p>
              <p className="text-black/20">Aug 10</p>
            </div>
          </div>

          <div className="grid grid-cols-[40px_1fr] gap-4">
            <div className="h-auth flex aspect-square w-full flex-col items-center justify-center rounded-full bg-green-400">
              <CheckIcon />
            </div>
            <div className="flex flex-col">
              <p className="text">
                <span className="font-bold">Pim</span>
                <span> mark a task as complete!</span>
              </p>
              <p className="text-black/20">Aug 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
