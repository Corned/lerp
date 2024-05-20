import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"

type TaskDialogProps = {
  TriggerElement?: React.ReactNode
  defaultCategory?: number
  isEditing?: boolean
}

const DefaultTriggerElement = <Button variant="outline">Open Dialog</Button>

const TaskDialog = ({
  TriggerElement = DefaultTriggerElement,
  isEditing = false,
  defaultCategory,
}: TaskDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{TriggerElement}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit an Existing Task" : "Create a New Task"}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {isEditing
            ? "You are editing a task! :O"
            : "Have fun creating a new task! Choose a category, set the tags and write down what you need to do!"}
        </DialogDescription>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label>Category</Label>
            <Select defaultValue={defaultCategory?.toString()}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Ready to Start</SelectItem>
                <SelectItem value="2">In Progress</SelectItem>
                <SelectItem value="3">Ready to Test</SelectItem>
                <SelectItem value="4">Complete</SelectItem>
                <SelectItem value="5">Shipped</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Select tags</Label>
            <div className="flex flex-row gap-2">
              <Toggle value="frontend">Frontend</Toggle>
              <Toggle value="backend">Backend</Toggle>
              <Toggle value="uiux">UI/UX</Toggle>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Describe the Task</Label>
            <Textarea
              className="resize-none"
              placeholder="Set up state management using Redux Toolkit."
            />
          </div>
        </div>

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog
