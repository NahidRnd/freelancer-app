import { FaPencil, FaTrashCan } from "react-icons/fa6"
import Table from "../../ui/Table"
import toLocalDateShort from "../../utils/toLocalDateShort"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers"
import truncateText from "../../utils/truncateText"
import Modal from "../../ui/Modal"
import { useState } from "react"
import RHFSelect from "../../ui/RHFSelect"
import ChangeProposalStatus from "./ChangeProposalStatus"


function ProposalRow({proposal, index}) {
    const [open, setOpen] = useState(false);
    const statusStyle = [
        {
            label: "رد شده",
            className: "badge--error"
        },
        {
            label: "در انتظار تایید",
            className: "badge--secondary"
        },
        {
            label: "تایید شده",
            className: "badge--success"
        },
    ]
    const {status, user} = proposal;
    
  return (
    <Table.Row key={proposal._id}>
        <td>{index + 1}</td>
        <td>{truncateText(user.name, 30)}</td>
        <td>{truncateText(proposal.description, 50)}</td>
        <td>{proposal.duration} روز</td>
        <td>{toPersianNumbersWithComma(proposal.price)}</td>
        <td> 
            <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
        </td>
        <td>
            <div className="flex flex-wrap gap-x-4">
                <button onClick={()=>setOpen(true)}>تغییر وضعیت</button>
                <Modal title="تغییر وضعیت درخواست" open={open} onClose={()=>setOpen(false)}> 
                    <ChangeProposalStatus proposalId={proposal._id} onClose={()=>setOpen(false)} />
                </Modal>
            </div>
        </td>
        
    </Table.Row>
  )
}

export default ProposalRow
