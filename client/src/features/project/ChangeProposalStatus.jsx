import React from 'react'
import { useForm } from 'react-hook-form';
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from './useChangeProposalStatus';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

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

function ChangeProposalStatus({proposalId, onClose}) {
    const {isPending, changeProposalStatus} = useChangeProposalStatus();
    const {register, handleSubmit} = useForm();
    const queryClient = useQueryClient();
    const {id: projectId} = useParams();

    const onSubmit = (data) => {
        changeProposalStatus({
            id: proposalId,
            projectId,
            ...data
        },{
            onSuccess: ()=>{
                onClose();
            queryClient.invalidateQueries({
                queryKey: ["project", projectId],
            });
            }
        });
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect label="تغییر وضعیت درخواست" name="status" register={register} options={options} required />
        <button className='btn btn--primary mt-6 w-full' type='submit'>تایید</button>
    </form>
  )
}

export default ChangeProposalStatus
