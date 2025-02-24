import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";

export default function useChangeProposalStatus() {
    
    const {isPending , mutate: changeProposalStatus} = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);

            // queryClient.invalidateQueries({
            //     queryKey: ["proposal"],
            // });
        },
        onError: (err) => toast.error(err?.response?.data?.message),
    })
  return {isPending, changeProposalStatus}
}
