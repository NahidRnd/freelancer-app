import { Link } from "react-router-dom"
import { BsFillHCircleFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


function MobileNavbar() {
    const [click, setClick] = useState(false);

  return (
    <nav className="py-4">
      <div className="container flex justify-between sm:hidden gap-x-4">
        <div className="grow">
          <h2 className="font-bold flex gap-x-2">
            <BsFillHCircleFill size={24} className="text-btnS" />
            هاب فریلنسر
          </h2>
        </div>
        <div>
          <Link to="/auth" className="border border-gray-500 rounded-full px-4 py-1 hover:bg-black hover:text-light">
            ورود به سیستم
          </Link>
        </div>
        { click ?
            <IoClose size={24} className="sm:absolute left-10 " onClick={()=>setClick(!click) } />
            : 
            <FiMenu size={24} className="sm:absolute left-10 " onClick={()=>setClick(!click) } />
        }
        {click && 
        <div>
          <ul className="flex bg-white flex-col gap-y-6 text-lg absolute top-16 left-2 p-10 rounded-lg">
              <li>
                  <Link to="/">
                      خانه 
                  </Link>
              </li>
              <li>
                  <Link to="#about">
                      درباره ما
                  </Link>
              </li>
              <li>
                  <Link to="#projects">
                      لیست پروژه ها                
                  </Link>
              </li>
              <li>
                  <Link to="#category">
                      کتگوری ها                 
                  </Link>
              </li>
              <li>
                  <Link to="#subscribe">
                       تماس با ما                 
                  </Link>
              </li>
          </ul>
        </div>
        }
        
      </div>
    </nav>
  )
}

export default MobileNavbar
