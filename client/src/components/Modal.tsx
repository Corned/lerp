import { X } from "lucide-react"
import { ReactNode } from "react"

type ModalProps = {
  children?: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal absolute left-0 top-0 flex h-full w-full flex-row items-center justify-center">
      <div className="modal__background absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
      <div className="modal__card z-20 rounded-xl bg-white shadow-md">
        <div className="modal__toolbar flex w-full flex-row p-2">
          <button className="ml-auto rounded-full p-2 hover:bg-gray-200">
            <X />
          </button>
        </div>

        <div className="modal__children p-6 pt-0">{children}</div>
      </div>
    </div>
  )
}

export default Modal
