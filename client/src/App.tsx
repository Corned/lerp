/* import { Slider } from "@/components/ui/slider" */
import { useState } from "react"
import { Switch } from "./components/ui/switch"
import { Checkbox } from "./components/ui/checkbox"

function App() {
  const [password, setPassword] = useState("hunter2")

  return (
    <div className="container-sm mx-auto flex max-w-fit flex-col gap-5">
      <div className="flex flex-row justify-between bg-slate-50 p-5">
        <p>{password}</p>
        <p>copy</p>
      </div>

      <div className="flex flex-col bg-slate-50 p-5">
        <div>
          <p>Character Length</p>
          <p>10</p>
        </div>

        <Checkbox />
        <Switch />

        <span>Include uppercase letters</span>
        <input type="checkbox" name="upper" />

        <span>Include lowercase letters</span>
        <input type="checkbox" name="lower" />

        <span>Include numbers</span>
        <input type="checkbox" name="numbers" />

        <span>Include symbols</span>
        <input type="checkbox" name="symbols" />
      </div>
    </div>
  )
}

export default App
