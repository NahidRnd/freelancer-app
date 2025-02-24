import MobileNavbar from "../../responsive/MobileNavbar"
import Navbar from "./Navbar"
import Search from "./Search"


function Hero() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <div id="home" className="bg-gradient-to-r from-grs to-grp text-textT">
        <div className="h-screen bg-[url(/hero.png)] bg-center">
            <div className="container flex sm:flex-row flex-col items-center gap-x-20 h-full">
                <div className="sm:max-w-2xl w-full pt-10">
                    <h2 className="font-bold sm:text-4xl text-3xl leading-[1.5] sm:w-96">
                    با برترین کارفرمایان، پروژه‌های بی‌نظیر را تجربه کنید
                    </h2>
                    <p className="sm:text-xl sm:pl-16 pl-6 leading-[1.7]">
                    با همکاری با محبوب‌ترین و معتبرترین کارفرمایان، فرصت‌های حرفه‌ای و پروژه‌های شگفت‌انگیزی را کشف کنید. بهترین پروژه‌ها و کارفرمایان در انتظار شما هستند.
                    </p>
                    <Search />
                </div>
                <div className="b">
                    <img src="/heromain.png" alt="فریلنسر" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
