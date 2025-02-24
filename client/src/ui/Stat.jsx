import { toPersianNumbersWithComma } from "../utils/toPersianNumbers"

const colors = {
    primary: "hover:bg-[#fa6ba2]",
    secondary: "hover:bg-[#fca6b1]",
    nextc: "hover:bg-[#e077be]",
}

function Stat({icon, value, title, color}) {
  return (
    <div className={`box p-8 col-span-1 grid gird-rows-2 grid-cols-[6.4rem_1fr] gap-x-5 items-center`}>
        <div className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full text-bgT bg-dark ${colors[color]}`}>
            {icon}
        </div>
        <h5 className="text-txtD">{title}</h5>
        <p className="text-3xl font-bold text-dark">{toPersianNumbersWithComma(value)}</p>
    </div>
  )
}

export default Stat
