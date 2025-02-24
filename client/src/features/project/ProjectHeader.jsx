import { FaArrowRight } from "react-icons/fa"
import useMoveBack from "../../hooks/useMoveBack"


function ProjectHeader({project}) {

  const moveBack = useMoveBack();

  return (
    <div className="flex gap-2 items-center">
        <FaArrowRight onClick={moveBack} className="cursor-pointer" />
      <p className="text--header">
        لیست درخواست های {project.title}
      </p>
    </div>
  )
}

export default ProjectHeader
