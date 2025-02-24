import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import useMockProjects from "./useMockProjects";

function ProjectsMain() {
    const {projects, isLoading} = useMockProjects();
    console.log(projects);
    
    
  return (
    <div id="projects" className="container">
      <div className="flex my-20 justify-between items-end">
        <div className="*:sm:text-right *:text-center">
            <h3>
                لیست تمام پروژه ها
            </h3>
            <p className="max-w-[480px]">
                از میان میلیون ها پروژه در سراسر وب به دنبال پروژه مناسب خود جستجو کنید. بیش از 300000 پروژه فعال را بررسی کنید.
            </p>
        </div>
        <span>
            <Link to="/auth" className="sm:flex gap-x-2 items-center hidden">               
                مشاهده همه پروژه ها
                <FaArrowLeft />
            </Link>
        </span>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        {
            projects.slice(0,6).map((project) => {
                return(
                    <div key={project.id} className="border rounded-lg p-8 transform transition-transform duration-700 hover:scale-105 hover:bg-gradient-to-r hover:from-[#fff5f2] hover:to-[#fff1f6]">
                        <h4 className="font-semibold text-lg pb-2">
                            {project.title}
                        </h4>
                        <p className="pb-4">{project.description}</p>
                        <Link to="/auth" className="text-primaryH flex items-center gap-x-2">
                            مشاهده جزییات پروژه
                            <FaArrowLeft />
                        </Link>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ProjectsMain
