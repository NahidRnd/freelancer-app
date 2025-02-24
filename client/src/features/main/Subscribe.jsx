import { FaRegCheckCircle } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdBookmark } from "react-icons/io";
import { TiSocialPinterest } from "react-icons/ti";


function Subscribe() {
    const handleSub = () => {

    }
  return (
    <div id="subscribe" className="pt-24">
    <div className="container bg-gradient-to-r from-grs to-grp  text-textT rounded-xl">
      <div className="h-[300px] bg-[url(/hero.png)] bg-center">
            <div className="container flex items-center  gap-x-20 h-full">
                <div className="max-w-2xl">
                    <h2 className="font-bold text-[32px] leading-[1.5] w-96">
                    تغییر به بهترین روش برای انجام پروژه ها
                    </h2>
                    <p className="text-xl pl-16 leading-[1.7]">
                     بهترین پروژه‌ها و کارفرمایان در انتظار شما هستند.
                    </p>
                    <div className='flex bg-white border border-border rounded-full mt-6 pr-8 pl-1 py-1 sm:max-w-[650px] max-w-[350px] items-center justify-between'>
                        <input

                        type="text" name="search" id="search" placeholder='ایمیل خود را وارد کنید...' className='pl-15 flex-grow-1' />
                        <button onClick={handleSub} className="bg-textT text-white p-4 sm:px-14 px-10 rounded-full">
                        عضویت
                        </button>
                    </div>
                </div>
                <div className="sm:block hidden relative w-full h-full">
                    <div className="bg-white p-4 border rounded-2xl shadow-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10">
                        <div className="flex gap-x-2 items-center">
                            <div className="border rounded-full p-2">
                                <FiFigma className="text-white bg-gradient-to-r from-btnP to-btnS text-2xl w-8 h-8 p-2 rounded-full" />
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    پروژه طراحی سایت وردپرس
                                </h4>
                                <div className="flex items-center text-sm">
                                    <span>
                                        فیگما دیزاین
                                    </span>
                                    <IoIosCheckmarkCircle className="text-blue-700 w-4 h-4" />
                                </div>   
                            </div>
                            <div className="border rounded-full mr-6 ">
                                <IoMdBookmark className="text-btnP w-8 h-8 p-1" />   
                            </div>  
                        </div> 
                        <div className="flex pt-4 gap-x-2">
                            <span className="text-txtD border rounded-full px-4 text-sm">
                                طراحی
                            </span>
                            <span className="text-txtD border rounded-full px-4 text-sm">
                                وردپرس
                            </span>
                        </div> 
                        <div className="flex items-center text-txtD mt-4 justify-between">
                            <IoLocationOutline />
                            <p className="text-sm pr-1">
                                تهران - ایران
                            </p>
                            <span className="grow text-left text-sm">
                                2000000 ریال
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 border rounded-2xl shadow-xl absolute -top-32 left-0">
                        <div className="flex gap-x-2 items-center">
                            <div className="border rounded-full p-2">
                                <TiSocialPinterest className="text-white bg-gradient-to-r from-btnP to-btnS text-2xl w-8 h-8 p-1 rounded-full" />
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    پروژه طراحی سایت وردپرس
                                </h4>
                                <div className="flex items-center text-sm">
                                    <span>
                                        پینترست 
                                    </span>
                                    <IoIosCheckmarkCircle className="text-blue-700 w-4 h-4" />
                                </div>   
                            </div>
                            <div className="border rounded-full mr-6 ">
                                <IoMdBookmark className="text-btnP w-8 h-8 p-1" />   
                            </div>  
                        </div> 
                        <div className="flex pt-4 gap-x-2">
                            <span className="text-txtD border rounded-full px-4 text-sm">
                                طراحی
                            </span>
                            <span className="text-txtD border rounded-full px-4 text-sm">
                                وردپرس
                            </span>
                        </div> 
                        <div className="flex items-center text-txtD mt-4 justify-between">
                            <IoLocationOutline />
                            <p className="text-sm pr-1">
                                تهران - ایران
                            </p>
                            <span className="grow text-left text-sm">
                                2000000 ریال
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Subscribe
