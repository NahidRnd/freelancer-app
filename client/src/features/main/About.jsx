import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineClipboardCopy } from "react-icons/hi";

function About() {
  return (
    <div id="about" className="container">
      <div className="flex sm:flex-row flex-col sm:gap-x-48 items-center pt-16 pb-24">
      <div className="sm:max-w-[500px] relative mb-20">
        <img className="rounded-lg sm:max-w-[450px] max-w-[80%] " src="/aboutimg.jpg" alt="درباره" />
        <div className="border p-[10px] rounded-xl sm:w-[250px] w-[200px] absolute sm:-bottom-14 -bottom-10 sm:-left-36 left-0 bg-white">
          <img src="/about.jpg" alt="درباره" className="rounded-xl" />
        </div>
      </div>
      <div className="sm:max-w-[600px]">
        <h3 className="font-bold text-2xl">
            کتگوری میلیون ها پروژه
        </h3>
        <h3 className="font-bold text-2xl mb-6">
            از بین میلیون ها پروژه بهترین را انتخاب کنید.
        </h3>
        <p className="text-txtD pb-4">
        به فریلنسینگ هاب خوش آمدید! ما اینجا هستیم تا به شما کمک کنیم شغل رویایی خود را پیدا کنید. با دسترسی به هزاران فرصت شغلی جذاب از برترین شرکت‌های جهان، ما اطمینان حاصل می‌کنیم که شما بهترین‌ها را از دست نخواهید داد.
        </p>
        <ul className="flex flex-col text-txtD gap-y-2">
            <li className="sm:flex inline-block sm:gap-x-2 sm:items-center "><span><FaRegCheckCircle className="text-primary inline ml-2" /></span>جستجوی شغل: فرصت‌های شغلی مناسب با مهارت‌ها و تجربیات شما</li>
            <li className="sm:flex inline-block sm:gap-x-2 sm:items-center "><span><FaRegCheckCircle className="text-primary inline ml-2" /></span>تخمین حقوق شخصی‌سازی شده: اطلاع از میزان دستمزد بر اساس مهارت‌ها و موقعیت شما</li>
            <li className="sm:flex inline-block sm:gap-x-2 sm:items-center "><span><FaRegCheckCircle className="text-primary inline ml-2" /></span>نظرات واقعی: خواندن تجربیات واقعی کارکنان از بیش از ۳۰٬۰۰۰ شرکت</li>
        </ul>
        <button className="flex gap-x-2 btn btn--gr mt-6 rounded-full px-6"><HiOutlineClipboardCopy /> لیست پروژه ها</button>
      </div>
      </div>
    </div>
  )
}

export default About
