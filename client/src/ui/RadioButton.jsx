
function RadioButton({name, value, register, label, checked, validationSchema, errors, watch}) {
  return (
    <div className="flex gap-x-2 text-txtT">
        <input className="cursor-pointer w-4 accent-primary" type="radio" name={name} id={value} value={value} checked={watch(name) === value} {...register(name, validationSchema)} />
        <label htmlFor={value}>{label}</label>
    </div>
  )
}

export default RadioButton
