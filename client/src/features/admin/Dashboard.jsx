import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader"
import DashboardTitle from "../../ui/DashboardTitle";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";


function Dashboard() {

    const {isLoading: isLoading1, proposals} = useProposals();    
    const {isLoading: isLoading2, users} = useUsers();
    const {isLoading: isLoading3, projects} = useProjects();    
   

    if(isLoading1 || isLoading2 || isLoading3) return <Loading />

  return (
    <div className="p-8 overflow-y-auto max-w-screen-xl bg-bgT text-textT sm:mx-12 m-6 rounded-md shadow-sm">
    <DashboardTitle title="آمار کلی" subTitle="در یک نما خلاصه ای از آمار خود را ببینید" />
      <Stats 
        proposals={proposals.length} 
        users={users.length || {}}  
        projects={projects.length}
      />
    </div>
  )
}

export default Dashboard
