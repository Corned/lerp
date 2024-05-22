import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const LoginForm = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <h1 className="py-10 text-center text-2xl font-bold uppercase italic">
          Welcome back!
        </h1>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button type="submit">Log in!</Button>
      </form>
    </Form>
  )
}

const SignUpForm = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <h1 className="py-5 text-center text-2xl font-bold uppercase italic">
          Your accelerated workflow starts now.
        </h1>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button type="submit">Sign up!</Button>
      </form>
    </Form>
  )
}

const Login = () => {
  const form = useForm({})

  const onSubmit = () => {}

  return (
    <div className="flex h-full flex-col items-center justify-center bg-slate-50/50">
      <Card className="grid h-[600px] w-fit grid-cols-[400px,_400px] gap-0 p-2">
        <div className="relative flex w-[400px] flex-col justify-end p-4">
          <img
            src="https://cdn.openai.com/labs/images/A%20photograph%20of%20a%20sunflower%20with%20sunglasses%20on%20in%20the%20middle%20of%20the%20flower%20in%20a%20field%20on%20a%20bright%20sunny%20day.webp?v=1"
            className="absolute left-0 top-0 z-[0] h-full rounded-l-2xl rounded-r-[70px] object-cover"
            alt="flower :)"
          />
        </div>
        <div className="flex flex-col p-10">
          <Tabs defaultValue="login" className="flex flex-col">
            <TabsList className="mx-auto">
              <TabsTrigger value="login">Log In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm form={form} onSubmit={onSubmit} />
            </TabsContent>

            <TabsContent value="signup">
              <SignUpForm form={form} onSubmit={onSubmit} />
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  )
}

export default Login
