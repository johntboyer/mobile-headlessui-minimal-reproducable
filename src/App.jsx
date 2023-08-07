import { Combobox } from '@headlessui/react'

function App() {
  return (
    <div className="grid h-screen w-screen place-content-center">
      <Combobox>
        <Combobox.Input className="focus:outline outline-8 outline-red-500 border border-black" />
      </Combobox>
    </div>
  )
}

export default App
