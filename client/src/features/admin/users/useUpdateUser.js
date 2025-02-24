import { useMutation } from "@tanstack/react-query";
import { updateUserApi } from "../../../services/authService";
import toast from "react-hot-toast";


function useUpdateUser() {
    const {isPending , mutate: updateUser} = useMutation({
        mutationFn: updateUserApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (err) => toast.error(err?.response?.data?.message),
    })
  return {isPending, updateUser}
}

export default useUpdateUser
