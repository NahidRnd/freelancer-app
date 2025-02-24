import { useMutation } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";


function useChangeUserStatus() {
    const {isPending , mutate: changeUserStatus} = useMutation({
        mutationFn: changeUserStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (err) => toast.error(err?.response?.data?.message),
    })
  return {isPending, changeUserStatus}
}

export default useChangeUserStatus
