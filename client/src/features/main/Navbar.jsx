import { Link } from "react-router-dom"
import { BsFillHCircleFill } from "react-icons/bs";


function Navbar() {
  return (
    <nav>
      <div className="container sm:flex absolute inset-0 justify-between hidden">
        <div>
          <h2 className="font-bold text-3xl flex gap-x-2">
            <BsFillHCircleFill size={32} className="text-btnS" />
            هاب فریلنسر
          </h2>
        </div>
        <div>
          <ul className="flex gap-x-6 text-lg">
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
        <div>
          <Link to="/auth" className="border border-gray-500 rounded-full px-6 py-[10px] hover:bg-black hover:text-light">
            ورود به سیستم
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
