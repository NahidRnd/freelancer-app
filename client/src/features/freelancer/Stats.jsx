import { CiGrid41 } from "react-icons/ci";
import { FaFilePen } from "react-icons/fa6";
import Stat from "../../ui/Stat";
import { IoWalletOutline } from "react-icons/io5";
import { BsFolderCheck } from "react-icons/bs";
import { BsFolder2Open } from "react-icons/bs";

function Stats({proposals}) {
    const numOfProposals = proposals.length;
    const acceptedProposals = proposals.filter((p) => p.status===2);
    const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0)

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-14 gap-y-4 sm:ml-36">
      <Stat color="primary" title="درخواست ها" value={numOfProposals} icon={<BsFolder2Open className="w-10 h-10" />} />
      <Stat color="secondary" title="درخواست های تایید شده" value={acceptedProposals.length} icon={<BsFolderCheck className="w-10 h-10" />} />
      <Stat color="nextc" title="کیف پول" value={(balance)} icon={<IoWalletOutline className="w-10 h-10" />} />
    </div>
  )
}

export default Stats
