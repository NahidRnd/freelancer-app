import { useEffect, useState } from "react"
import TextField from "../../ui/TextField"
import RadioButton from "../../ui/RadioButton";
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import { completeProfile } from "../../services/authService";
import useUser from "./useUser";


function CompleteProfileForm() {
  
    const navigate = useNavigate();

    // const {user} = useUser();
    // useEffect(() => {
    //   if(user) navigate("/not-access", {replace: true})
    // }, [user, navigate])

    const {register, handleSubmit, watch, formState: { errors }} = useForm();

    const {mutateAsync, isPending} = useMutation({
        mutationFn: completeProfile,
    });

    const onSubmit = async (data) => {
      
        try {
            const {user, message} = await mutateAsync(data);
            console.log(data);
            toast.success(message);
            console.log(user, message);

            
            if(user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید است", {icon: '👏',});
                return;
            }
            if(user.role === "OWNER") return navigate("/owner");
            if(user.role === "FREELANCER") return navigate("/freelancer");

          } catch (error) {
            toast.error(error?.response?.data?.message);
            console.log(data);
          }
    }

  return (
    <div className="bg-[url(/bg1.jpg)] pt-40 bg-cover h-screen w-full">
      <div className="flex justify-center">
      <div className="w-full sm:max-w-md box backdrop-blur-lg border-[#dec5e2] shadow-xl auth-dark text-textT">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} >
            <TextField label="نام و نام خانوادگی" name="name" register={register}
            validationSchema={{
              required: "نام و نام خانوادگی را وارد کنید!"
            }} errors={errors} />
            <TextField label="ایمیل" name="email" register={register} 
            validationSchema={{
                  required: "ایمیل را وارد کنید!"
                }} errors={errors} />
            <div className="flex gap-x-8">
                <RadioButton name="role" value="OWNER" label="کارفرما" register={register} watch={watch} 
                validationSchema={{
                  required: "نقش را وارد کنید!"
                }} errors={errors} />
                <RadioButton name="role" value="FREELANCER" label="فریلنسر" register={register} watch={watch}
                validationSchema={{
                  required: "نقش را وارد کنید!"
                }} errors={errors} />
            </div>
            {
          errors && errors["role"] && <span className="text-red-600 block text-sm mt-2">{errors["role"]?.message}</span>
          }
            {isPending ? (
            <Loading />
            ) : (
            <button className="btn btn--dark w-full">تایید</button>
            )}
        </form>
      </div>
    </div>
    </div>
  )
}

export default CompleteProfileForm
