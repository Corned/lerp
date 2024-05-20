import { Progress } from "@/components/ui/progress"

import { FolderPlusIcon, SpeechIcon, CheckIcon } from "@/components/icon"
import Header from "@/components/WorkspaceHeader"
import WorkspaceMembers from "@/components/WorkspaceMembers"
import TaskCategoryContainer from "@/components/TaskCategoryContainer"
import { useGetWorkspaceByIdQuery } from "@/services/api"
import { Pencil, SquarePlus } from "lucide-react"
import TaskDialog from "@/components/TaskDialog"
import { Button } from "@/components/ui/button"

const Workspace = () => {
  const { isLoading, data, isError } = useGetWorkspaceByIdQuery(1)

  if (isLoading) {
    return (
      <p className="h-full w-full p-10 text-center font-rubik-mono text-3xl">
        Loading...
      </p>
    )
  }

  if (isError) {
    return (
      <p className="h-full w-full p-10 text-center font-rubik-mono text-3xl">
        Something went wrong...
      </p>
    )
  }

  return (
    <div className="grid grid-cols-[1fr_290px] overflow-hidden">
      <div className="flex flex-col overflow-x-hidden overflow-y-scroll">
        <Header>
          <h1 className="flex flex-row items-center gap-6 text-4xl font-bold">
            {data?.name}
          </h1>

          <WorkspaceMembers />
        </Header>

        <div className="flex flex-row gap-4 pl-10 pt-6">
          <TaskDialog
            isEditing={false}
            TriggerElement={
              <Button className="flex flex-row gap-2 rounded-md">
                <SquarePlus /> New Task
              </Button>
            }
          />
          <Button disabled className="flex flex-row gap-2 rounded-md">
            <SquarePlus /> New Category
          </Button>
        </div>

        {/* Task Category Container */}
        <TaskCategoryContainer />
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
                <span> marked a task as complete!</span>
              </p>
              <p className="text-black/20">Aug 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workspace
