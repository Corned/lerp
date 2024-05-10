import ProfilePicture from "./ProfilePicture"
import { Icon } from "./icon"

const WorkspaceMembers = () => {
  return (
    <div className="flex h-full w-fit flex-row gap-1.5 transition-all">
      <ProfilePicture />

      {Array.from({ length: 6 }).map((_, i) => {
        return <ProfilePicture />
      })}

      <div className="flex aspect-square h-full w-auto flex-col items-center justify-center rounded-full border-2 border-dashed border-indigo-400  bg-white">
        <Icon />
      </div>
    </div>
  )
}

export default WorkspaceMembers