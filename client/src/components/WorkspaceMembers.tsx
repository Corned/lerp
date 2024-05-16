import ProfilePicture from "@/components/ProfilePicture"
import { Icon } from "@/components/icon"
import { useState } from "react"

const defaultOffset: number = 30

const WorkspaceMembers = () => {
  const [offset, setOffset] = useState(defaultOffset)

  const handleOffset = (newOffset: number) => {
    setOffset(newOffset)
  }

  return (
    <div
      className="flex h-full w-fit flex-row gap-1.5 pl-10 transition-all"
      onMouseEnter={() => handleOffset(0)}
      onMouseLeave={() => handleOffset(defaultOffset)}
    >
      <ProfilePicture />

      <div
        style={{ paddingRight: offset }}
        className={`flex flex-row gap-[inherit] transition-all`}
      >
        {Array.from({ length: 6 }).map(() => {
          return (
            <div
              style={{ marginRight: -offset }}
              className={`h-full transition-all [&>*]:outline [&>*]:outline-2 [&>*]:outline-white`}
            >
              <ProfilePicture />
            </div>
          )
        })}
      </div>

      <div className="flex aspect-square h-full w-auto flex-col items-center justify-center rounded-full border-2 border-dashed border-indigo-400  bg-white">
        <Icon />
      </div>
    </div>
  )
}

export default WorkspaceMembers
