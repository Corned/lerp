import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ProfilePicture = () => {
  return (
    <Avatar className="aspect-square h-full w-auto">
      <AvatarImage src="https://github.com/corned.png" />
      <AvatarFallback>73</AvatarFallback>
    </Avatar>
  )
}

export default ProfilePicture
