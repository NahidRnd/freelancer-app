import { useState } from "react";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({onClose, projectToEdit = {}}) {

  const {_id:editId} = projectToEdit;
  const isEditSession = Boolean(editId);

  const{title, description, budget, deadline, category, tags: prevTags} = projectToEdit;
  let editValues;

  if(isEditSession){
    editValues = {title, description, budget, category: category._id};
  }

  const [tags, setTags] = useState( prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const {categories} = useCategories();
  const {isCreating, createProject}= useCreateProject();
  const {isEditing, editProject} = useEditProject();
  

  const {register, formState:{errors}, handleSubmit, reset} = useForm({defaultValues: editValues});

  const onSubmit = (data) =>{
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if(isEditSession){
      editProject({id:editId, newProject}, {
        onSuccess: ()=>{
          onClose();
          reset();
        }   
      });
    }else{
      createProject(newProject, {
        onSuccess:()=>{
          onClose();
          reset();
        }
      });
    }
  };

  

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField label="عنوان پروژه" name="title" register={register} required errors={errors}
        validationSchema={{
          required:"عنوان را وارد کنید!",
          minLength: {
            value: 3,
            message: "عنوان باید بیشتر از 3 کارکتر باشد!"
          },
          maxLength: {
            value: 50,
            message: "عنوان باید کمتر از 50 کارکتر باشد"
          }
        }}
        />
        <TextField label="توضیحات" name="description" register={register} required errors={errors} 
        validationSchema={{
          required: "توضیحات را وارد کنید!"
        }}
        />
        <TextField label="بودجه" name="budget" register={register} required errors={errors} 
        validationSchema={{
          required: "بودجه را وارد کنید!"
        }}
        />
        <RHFSelect label="دسته بندی" name="category" register={register} options={categories} required />
        <div>
          <label className="mb-2 block">تگ های بروژه</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePickerField label="ددلاین بروژه" date={date} setDate={setDate} />
        <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--dark w-full">تایید</button>
        )}
        </div>

      </form>
    </div>
  )
}

export default CreateProjectForm
