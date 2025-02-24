import { useState } from 'react';
import useUser from './useUser'
import userImg from '/user.jpg'
import Modal from '../../ui/Modal';
import EditProfile from '../freelancer/EditProfile';

function UserAvatar() {
    const {user} = useUser();
    const [open, setOpen] = useState(false);

  return (
    <div className='flex items-center gap-x-2 px-5 mr-5 border-r-2'>
      <img className='w-10 h-10 rounded-full object-cover object-center cursor-pointer' src={userImg} alt="user-account" onClick={()=>setOpen(true)} />
      <div className='flex flex-col'>
        <span>{user?.name}</span>
        <span className='text-txtD text-sm'>{user?.email}</span>
      </div>
      <Modal open={open} onClose={()=>setOpen(false)} title={`ویرایش مشخصات کاربری ${user.name}`}>
          {/* <CreateProposal onClose={()=>setOpen(false)} project={project}/> */}
          <EditProfile />
      </Modal>
    </div>
  )
}

export default UserAvatar
