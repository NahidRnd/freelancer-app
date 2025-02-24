import { useState } from "react";
import Table from "../../ui/Table"
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { FaTrashCan } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";



function ProjectRow({project, index}) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject} = useRemoveProject();
    
  return (
    <Table.Row key={project._id}>
        <td>{index + 1}</td>
        <td>{truncateText(project.title, 30)}</td>
        <td>{project.category.title}</td>
        <td>{toPersianNumbersWithComma(project.budget)}</td>
        <td>{toLocalDateShort(project.deadline)}</td>
        <td><div className="flex flex-wrap items-center max-w-[200] gap-2">{project.tags.map((tag)=>(<span className="badge badge--secondary" key={tag}>{tag}</span>))}</div></td>
        <td>{project.freelancer?.name || "-"}</td>
        <td><ToggleProjectStatus project={project} /> </td>
        <td>
            <div className="flex gap-x-4">
                <button onClick={()=>setIsEditOpen(true)}><FaPencil /></button>
                <Modal title={`ویرایش ${project.title}`} open={isEditOpen} onClose={()=>setIsEditOpen(false)}> 
                  <CreateProjectForm projectToEdit={project} onClose={()=>setIsEditOpen(false)} />
                </Modal>
                <button onClick={()=>setIsDeleteOpen(true)}><FiTrash /></button>
                <Modal title={`حذف ${project.title}`} open={isDeleteOpen} onClose={()=>setIsDeleteOpen(false)}>
                  <ConfirmDelete 
                    onClose={()=>setIsDeleteOpen(false)} 
                    disabled={false} 
                    onConfirm={()=>removeProject(project._id,{
                      onSuccess: () => setIsDeleteOpen(false),
                    })} 
                  />
                </Modal>
            </div>
        </td>
        <td>
          <Link to={project._id} className="flex justify-center">
            <FaEye className="w-5 text-primary"/>
          </Link>
        </td>
    </Table.Row>
  )
}

export default ProjectRow
