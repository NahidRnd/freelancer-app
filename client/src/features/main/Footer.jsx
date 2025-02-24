import { BsFillHCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div id="footer" className="container">
      <div className="h-[300px] flex sm:flex-row flex-col gap-y-8 justify-between pt-20">
      <div className="sm:grow">
        <h2 className="font-bold text-3xl flex sm:justify-start justify-center gap-x-2 sm:text-right text-center">
            <BsFillHCircleFill size={32} className="text-btnS" />
            هاب فریلنسر
        </h2>
        <p className="w-72 m-auto sm:py-4 sm:text-right text-center">
        ما یک تیم متخصص و مجرب در حوزه‌های مختلف هستیم که با هدف اتصال فریلنسرهای حرفه‌ای به کارفرمایان، خدمات با کیفیت و تخصصی را ارائه می‌دهیم. 
        </p>
        <div className="flex sm:justify-start justify-center gap-x-4 pt-4">
        <FaFacebook size={32} />
        <AiFillInstagram size={32} />
        <AiFillLinkedin size={32} />
        <FaXTwitter size={32} />
        </div>
      </div>
      <div className="px-16">
        <h2 className="font-bold text-2xl pb-4 sm:text-right text-center">
            لینک ورود 
        </h2>
        <ul className="text-txtD flex flex-col gap-y-2 *:sm:text-right *:text-center">
            <li>
                <Link to="/auth">
                    ورود کارفرما
                </Link>
            </li>
            <li>
                <Link to="/auth">
                    ورود فریلنسر               
                </Link>
            </li>
            <li>
                <Link to="/auth">
                    ورود به سایت               
                </Link>
            </li>
        </ul>
      </div>
      <div className="px-16">
        <h2 className="font-bold text-2xl pb-4 sm:text-right text-center">
            آیتم های منو 
        </h2>
        <ul className="text-txtD flex flex-col gap-y-2 *:sm:text-right *:text-center">
            <li>
                <Link to="/">
                    درباره ما
                </Link>
            </li>
            <li>
                <Link to="/">
                    لیست پروژه ها                
                </Link>
            </li>
            <li>
                <Link to="/">
                    کتگوری ها                 
                </Link>
            </li>
        </ul>
      </div>
      <div className="px-16">
        <h2 className="font-bold text-2xl pb-4 sm:text-right text-center">
            لینک های مفید 
        </h2>
        <ul className="text-txtD flex flex-col gap-y-2 *:sm:text-right *:text-center">
            <li>
                <Link to="/">
                    حفاظت شخصی 
                </Link>
            </li>
            <li>
                <Link to="/">
                    حریم خصوصی                
                </Link>
            </li>
            <li>
                <Link to="/">
                    سوالات متداول                 
                </Link>
            </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
