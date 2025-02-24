import { useState } from "react"
import Table from "../../../ui/Table"
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";


function UserRow({user, index}) {

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
    
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.role}</td>
        <td><span className={`badge ${statusStyle[user.status].className}`}>{statusStyle[user.status].label}</span></td>
        <td>
            <div className="flex flex-wrap gap-x-4">
                <button onClick={()=>setOpen(true)}>تغییر وضعیت</button>
                <Modal title="تغییر وضعیت کاربر" open={open} onClose={()=>setOpen(false)}> 
                    <ChangeUserStatus userId={user._id} onClose={()=>setOpen(false)} />
                </Modal>
            </div>
        </td>
    </Table.Row>
  )
}

export default UserRow
