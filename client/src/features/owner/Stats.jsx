import { CiGrid41 } from "react-icons/ci";
import { FaFilePen } from "react-icons/fa6";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import Stat from "../../ui/Stat";

function Stats({projects}) {
    const numOfProjects = projects.length;
    // const numOfActiveProjects = projects.map((p)=> p.status===2).length;
    const numOfActiveProjects = projects.map((p) => p.status==="OPEN").length;

    const numOfProposals = projects.reduce((acc, curr)=> curr.proposals.length + acc, 0);//curr->projects acc->default value = 0
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-14 gap-y-4 sm:ml-36">
      <Stat color="primary" title="پروژه ها" value={numOfProjects} icon={<CiGrid41 className="w-10 h-10" />} />
      <Stat color="secondary" title="پروژه های فعال" value={numOfActiveProjects} icon={<FaFilePen className="w-10 h-10" />} />
      <Stat color="nextc" title="درخواست ها" value={numOfProposals} icon={<LuGalleryVerticalEnd className="w-10 h-10" />} />
    </div>
  )
}

export default Stats
