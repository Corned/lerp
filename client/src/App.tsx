import { Outlet } from "react-router-dom"

import ProfilePicture from "@/components/ProfilePicture"
import { Button } from "./components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu"
import { ScrollArea } from "./components/ui/scroll-area"
import NewWorkspaceDialog from "./components/NewWorkspaceDialog"
import { Popover } from "@radix-ui/react-popover"
import { PopoverContent, PopoverTrigger } from "./components/ui/popover"

const WorkspacePreview = () => {
  return (
    <div className="">
      <p className="text">Lerp Development</p>
    </div>
  )
}

const App = () => {
  return (
    <div className="App grid h-full grid-rows-[70px_1fr]">
      <nav className="p-3 border-b ">
        <div className="max-w-[1200px] h-full flex flex-row items-center justify-between gap-3 mx-auto ">
          <Button variant="ghost" className="text-2xl font-bold">
            LERP
          </Button>

          <NavigationMenu className="mr-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl">
                  My Workspaces
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ScrollArea>
                    <div className="flex w-[400px] flex-col gap-4 p-5">
                      <WorkspacePreview />
                      <WorkspacePreview />
                      <WorkspacePreview />
                    </div>
                  </ScrollArea>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NewWorkspaceDialog TriggerElement={<Button variant="ghost" className="text-md">Create a New Workspace</Button>} />

          <Popover>
            <PopoverTrigger className="h-full">
              <ProfilePicture />
            </PopoverTrigger>

            <PopoverContent align="end" className="flex flex-col justify-left">
              <Button variant="ghost">My Profile</Button>
              <Button variant="ghost">Log out</Button>
            </PopoverContent>
          </Popover>

        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
