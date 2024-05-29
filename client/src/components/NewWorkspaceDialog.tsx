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
import { PenLineIcon, SquarePenIcon } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"

type NewWorkspaceDialogProps = {
  TriggerElement?: React.ReactNode
}

const DefaultTriggerElement = <Button variant="outline">Open Dialog</Button>

const NewWorkspaceDialog = ({
  TriggerElement = DefaultTriggerElement,
}: NewWorkspaceDialogProps) => {

  const [ isOpen, setOpen ] = useState(false)
 
  const form = useForm({
    defaultValues: {
      name: "My Workspace"
    }
  })

  const closeDialog = () => {
    setOpen(false)
  }

  const onSubmit = () => {   

    // Call closeDialog after form has been successfully processed
    closeDialog()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{TriggerElement}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex flex-row items-center gap-2">
            <SquarePenIcon />  
            <span>Create a New Workspace </span>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Call it whatever you want! You can always change it later.
        </DialogDescription>

        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Workspace Name</FormLabel>
                  <Input
                    className="resize-none"
                    placeholder=""
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

export default NewWorkspaceDialog
