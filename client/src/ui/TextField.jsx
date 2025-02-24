
function TextField({label, name, register, required, validationSchema, errors, disabled=false, value}) {
  return (
    <div>
        <label className="mb-2 block" htmlFor="name">
            {label} {required && <span className="text-red-600">*</span>}
        </label>
        <input 
        value={value} 
        {...register(name, validationSchema)}
        className="textField__input bg-input-dark" 
        type="text" id={name}
        autoComplete="off"
        disabled={disabled}
        />
        {
          errors && errors[name] && <span className="text-red-600 block text-sm mt-2">{errors[name]?.message}</span>
        }
    </div>
  )
}

export default TextField
