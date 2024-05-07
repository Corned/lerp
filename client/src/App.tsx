import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
      >
        {count}
      </button>
    </>
  )
}

export default App
