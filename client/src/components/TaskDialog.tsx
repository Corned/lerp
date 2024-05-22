import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { useCreateTaskMutation } from "@/services/api"
import { useForm } from "react-hook-form"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { z } from "zod"

type TaskDialogProps = {
  TriggerElement?: React.ReactNode
  defaultCategory?: number
  isEditing?: boolean
}

const DefaultTriggerElement = <Button variant="outline">Open Dialog</Button>

const formSchema = z.object({})

const TaskDialog = ({
  TriggerElement = DefaultTriggerElement,
  isEditing = false,
  defaultCategory,
}: TaskDialogProps) => {
  const form = useForm({})

  const [createTask, result] = useCreateTaskMutation()

  const onSubmit = (values) => {
    console.log("SUBMIT :O", values)

    const taskObject: Task = {
      ...values,
      categoryId: Number(values.categoryId),
      workspaceId: 1,
      date: new Date(),
      position: 99999,
    }

    console.log(taskObject, values)

    createTask({ payload: taskObject })
  }

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

        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Choose a Category</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={"1"}
                      onValueChange={field.onChange}
                      {...field}
                    >
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
                  </FormControl>
                  <FormDescription>
                    This is the category id of the Task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Select tags</FormLabel>
                  <ToggleGroup
                    type="multiple"
                    className="flex flex-row flex-wrap gap-2"
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <ToggleGroupItem value="Frontend">Frontend</ToggleGroupItem>
                    <ToggleGroupItem value="Backend">Backend</ToggleGroupItem>
                    <ToggleGroupItem value="UIUX">UI/UX</ToggleGroupItem>
                    <ToggleGroupItem value="Testing">Testing</ToggleGroupItem>
                    <ToggleGroupItem value="Art">Art</ToggleGroupItem>
                    <ToggleGroupItem value="Other">Other</ToggleGroupItem>
                  </ToggleGroup>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Describe the Task</FormLabel>
                  <Textarea
                    className="resize-none"
                    placeholder="Set up state management using Redux Toolkit."
                    {...field}
                  />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              {isEditing ? (
                <Button type="submit">Save Changes</Button>
              ) : (
                <Button type="submit">Create</Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog
