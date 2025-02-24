import { FaExclamationCircle } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"


function NotAccess() {

  return (
    <div className="text-red-600 m-auto mt-48 box w-fit text-center">
        <FaExclamationCircle className="mb-10 text-4xl m-auto" />
        <h1 className="text-2xl mb-10">

        شما به محتویات این صفحه دسترسی ندارید

        
        </h1>
        <Link to="/auth" className="btn text-black">صفحه ورود</Link>

    </div>
  )
}

export default NotAccess
