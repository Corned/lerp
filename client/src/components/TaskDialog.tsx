import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogClose,
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
import { useUpdateTaskMutation } from "@/services/api"
import { useForm } from "react-hook-form"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { z } from "zod"
import { PenLineIcon } from "lucide-react"
import { useState } from "react"

type TaskDialogProps = {
  TriggerElement?: React.ReactNode
  task: Task
}

const DefaultTriggerElement = <Button variant="outline">Open Dialog</Button>

const formSchema = z.object({})

const TaskDialog = ({
  TriggerElement = DefaultTriggerElement,
  task,
}: TaskDialogProps) => {
  const [isOpen, setOpen] = useState(false)

  const form = useForm({
    defaultValues: {
      categoryId: task.categoryId.toString(),
      tags: task.tags,
      body: task.body,
    },
  })

  const [updateTask] = useUpdateTaskMutation()

  const closeDialog = () => {
    setOpen(false)
  }

  const onSubmit = (values: Partial<Task>) => {
    const taskObject: Task = {
      ...task,
      ...values,
      categoryId: Number(values.categoryId),
    }

    updateTask(taskObject)

    // Make sure everything is valid before calling this
    closeDialog()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{TriggerElement}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex flex-row items-center gap-2">
            <PenLineIcon />
            <span>Edit an Existing Task </span>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Here you can make changes to the task's properties! 🤯
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
                      onValueChange={field.onChange}
                      {...field}
                      defaultValue={task.categoryId.toString()}
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
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog
