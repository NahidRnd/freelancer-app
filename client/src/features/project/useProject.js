import { useQuery } from "@tanstack/react-query"
import { getProjectApi } from "../../services/projectService"
import { useParams } from "react-router-dom"

export default function useProject(){
  
    const {id} = useParams();

    const {data, isLoading} = useQuery({
        queryKey: ["project", id],//we have projects for different ids
        queryFn: () => getProjectApi(id),
        retry: false,
    })

    const {project} = data || {};

    return {isLoading, project}

}