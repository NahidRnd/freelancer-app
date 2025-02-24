

function RHFSelect({name, label, register, options, required}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">{label}{required && <span className="text-red-600">*</span>}</label>
      <select {...register(name)} id={name} className="textField__input bg-input-dark">
        {
            options.map((option) => {
                return <option key={option.value} value={option.value}>{option.label}</option>
            })
        }
      </select>
    </div>
  )
}

export default RHFSelect
