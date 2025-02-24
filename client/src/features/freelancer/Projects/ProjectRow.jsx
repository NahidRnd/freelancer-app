import React, { useState } from 'react'
import Table from '../../../ui/Table'
import truncateText from '../../../utils/truncateText'
import { toPersianNumbersWithComma } from '../../../utils/toPersianNumbers'
import toLocalDateShort from '../../../utils/toLocalDateShort'
import { MdAssignmentAdd } from "react-icons/md";
import Modal from '../../../ui/Modal'
import CreateProposal from '../../proposals/CreateProposal'

function ProjectRow({index, project}) {
    const [open, setOpen] = useState(false);
  return (
    <Table.Row key={project._id}>
        <td>{index + 1}</td>
        <td>{truncateText(project.title, 30)}</td>
        <td>{toPersianNumbersWithComma(project.budget)}</td>
        <td>{toLocalDateShort(project.deadline)}</td>
        <td>
            {project.status === "OPEN" ? (<span className="badge badge--success">باز</span>) : (<span className="badge badge--error">بسته</span>)}
        </td>
        <td>
            <button onClick={()=>setOpen(true)}>
                <MdAssignmentAdd className='w-5 h-5 text-primary' />
            </button>
            <Modal open={open} onClose={()=>setOpen(false)} title={`ارسال درخواست به پروژه ${project.title}`}>
                <CreateProposal onClose={()=>setOpen(false)} project={project}/>
            </Modal>
        </td>
    </Table.Row>
  )
}

export default ProjectRow
