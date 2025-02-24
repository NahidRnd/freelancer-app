import { useQueryClient } from "@tanstack/react-query";
import RHFSelect from "../../../ui/RHFSelect"
import useChangeUserStatus from "./useChangeUserStatus";
import { useForm } from "react-hook-form";

const options= [
    {
        label: "رد شده",
        value: 0,
    },
    {
        label: "در انتظار تایید",
        value: 1,
    },
    {
        label: "تایید شده",
        value: 2,
    },
]

function ChangeUserStatus({userId, onClose}) {
    const {isPending, changeUserStatus} = useChangeUserStatus();
    const {register, handleSubmit} = useForm();
    console.log("user ID: ", userId);
    
    const queryClient = useQueryClient();
    const onSubmit = (data) => {
        changeUserStatus({
            // id: proposalId,
            // projectId,
            // ...data
            id: userId,
            data
        },{
            onSuccess: ()=>{
                onClose();
            queryClient.invalidateQueries({queryKey: ["users"]});
            }
        });
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect label="تغییر وضعیت کاربر" name="status" register={register} options={options} required />
        <button className='btn btn--primary mt-6 w-full' type='submit'>تایید</button>
    </form>
  )
}

export default ChangeUserStatus
