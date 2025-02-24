import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField"
import useUpdateUser from "../admin/users/useUpdateUser"
import { useQueryClient } from "@tanstack/react-query";
import useUser from "../authentication/useUser";
import { useState } from "react";


function EditProfile() {
  const {user} = useUser();
  const {isPending, updateUser} = useUpdateUser();
  const {register, handleSubmit, formState:{errors}} = useForm();
  const [profileImage, setProfileImage] = useState("");

  const userRole = (
    () =>{
      switch (user.role) {
        case "FREELANCER":
          return "فریلنسر"
    
        case "OWNER":
          return "کارفرما"
    
        case "ADMIN":
          return "ادمین"
    
        default:
          return "Unknown role"
      }
    } 
  )

  const queryClient = useQueryClient();
  console.log("user id: ", user._id);
  
  const onSubmit = (data) => {
    updateUser({
          // id: proposalId,
          // projectId,
          // ...data
          id: user._id,
          data
      },{
          onSuccess: ()=>{
              onClose();
          queryClient.invalidateQueries({queryKey: ["users"]});
          }
      });
  }
  const handleImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextField value={user.name} label="نام و نام خانوادگی" name="name" register={register} required errors={errors}
        validationSchema={{
          required:"نام را وارد کنید!",
          maxLength: {
            value: 50,
            message: "نام باید کمتر از 50 کارکتر باشد"
          }
        }}
        />
        <TextField disabled value={user.email} label="ایمیل" name="email" register={register} required errors={errors}
        validationSchema={{
          required:"ایمیل را وارد کنید!",
        }}
        />
        <TextField disabled value={userRole()} label="نقش" name="role" register={register} required errors={errors}
        validationSchema={{
          required:"نقش را وارد کنید!",
        }}
        />
        <div>
          <span>تصویر پروفایل</span>
          <div className="flex items-center gap-x-6 pt-2">
            <div>
              <img src={user.avatarUrl ? user.avatarUrl : "/user.jpg"} className="w-14 h-14" alt={user.name} />
            </div>
            <label className="border px-4 py-2 rounded-xl cursor-pointer border-txtD" htmlFor="profileImage">انتخاب تصویر</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <button className="btn btn--dark w-full">ارسال درخواست</button>
      </form>
    </div>
  )
}

export default EditProfile
