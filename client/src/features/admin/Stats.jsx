import { BsFolder2Open } from "react-icons/bs"
import Stat from "../../ui/Stat"
import { FaCheckToSlot, FaUser } from "react-icons/fa6";


function Stats({users, proposals, projects}) {
   

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-14 gap-y-2 sm:ml-36">
      <Stat color="primary" title="کاربران" value={users} icon={<FaUser className="w-10 h-10" />} />   
      <Stat color="primary" title="درخواست ها" value={proposals} icon={<BsFolder2Open className="w-10 h-10" />} />
      <Stat color="primary" title="پروژه ها" value={projects} icon={<FaCheckToSlot className="w-10 h-10" />} />
    </div>
  )
}

export default Stats
