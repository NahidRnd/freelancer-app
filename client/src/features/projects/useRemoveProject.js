import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveProjectApi } from "../../services/projectService";
import { toast } from "react-hot-toast";

export default function useRemoveProject(){
    const queryClient = useQueryClient();
    const {mutate: removeProject, isPending: isRemoving} = useMutation({
        mutationFn: RemoveProjectApi,
        onSuccess: (data)=>{
            console.log(data);
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            });
        },
        onError: (err) => toast.error(err?.response?.data?.message),
    });

    return { removeProject, isRemoving };
}