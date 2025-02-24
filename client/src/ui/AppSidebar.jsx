import { BsFillHCircleFill } from "react-icons/bs";


function AppSidebar({children}) {
  return (
    <div className="bg-bgT text-textT row-start-1 row-span-2 p-4 border border-brl">
      <div className="py-7 text-xl font-bold">
        <h2 className="font-bold text-[27px] flex gap-x-2">
          <BsFillHCircleFill size={32} className="text-btnS" />
          هاب فریلنسر
        </h2>
      </div>
        <ul className="flex flex-col gap-y-4 mt-4">
          {children}
        </ul>
    </div>
  )
}

export default AppSidebar;


