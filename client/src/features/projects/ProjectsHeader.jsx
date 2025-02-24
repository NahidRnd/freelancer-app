import { useState } from "react"
import Modal from "../../ui/Modal"
import CreateProjectForm from "./CreateProjectForm"
import { FaPlus } from "react-icons/fa6";

function ProjectsHeader() {
    const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center">
        <h3 className="text--header">لیست پروژه ها</h3>
        <Modal title="اضافه کردن پروژه جدید" open={open} onClose={()=>setOpen(false)}>
            <CreateProjectForm onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={()=>setOpen(true)} className="flex btn btn--dark py-2 items-center gap-x-3 mb-4"><FaPlus />پروژه جدید</button>
    </div>
  )
}

export default ProjectsHeader
