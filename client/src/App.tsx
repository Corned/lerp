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
      <nav className="flex flex-row items-center justify-between border-b py-3 pl-10 pr-3">
        <Button variant="link" className="px-10 text-2xl font-bold">
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

        <ProfilePicture />
      </nav>

      <Outlet />
    </div>
  )
}

export default App
