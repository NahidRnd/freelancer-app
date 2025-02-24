import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";


function CreateProposal({onClose, project}) {
    const {_id: projectId} = project;
    const {register, formState:{errors}, handleSubmit, reset} = useForm();

    const {isCreating, createProposal} = useCreateProposal();

    const onSubmit = (data) => {
        console.log(data);
        
        createProposal({...data, projectId},{
            onSuccess: ()=>{
                onClose();
            }
        });
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextField label="توضیحات" name="description" register={register} required errors={errors}
        validationSchema={{
          required:"توضیحات را وارد کنید!",
          maxLength: {
            value: 150,
            message: "توضیحات باید کمتر از 150 کارکتر باشد"
          }
        }}
        />
        <TextField label="قیمت" name="price" register={register} required errors={errors}
        validationSchema={{
          required:"قیمت را وارد کنید!",
        }}
        />
        <TextField label="مدت زمان" name="duration" register={register} required errors={errors}
        validationSchema={{
          required:"مدت زمان را وارد کنید!",
        }}
        />
        <button className="btn btn--primary w-full">ارسال درخواست</button>
      </form>
    </div>
  )
}

export default CreateProposal
