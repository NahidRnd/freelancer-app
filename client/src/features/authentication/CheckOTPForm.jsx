import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { checkOtp } from '../../services/authService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { TbPasswordMobilePhone } from "react-icons/tb";

const RESEND_TIME = 30 ;

function CheckOTPForm({phoneNumber, onBack, onResendOtp}) {
    const [otp, setOtp] = useState('');
    const [time, setTime] = useState(RESEND_TIME);

    const navigate = useNavigate();

    const {isPending, mutateAsync} = useMutation({
      mutationFn: checkOtp,
    })
    
    

    const checkOtpHandler = async (e) => {
      e.preventDefault();
      try {
        const {user, message} = await mutateAsync({phoneNumber, otp});              
        toast.success(message);  

        // if(!user.isActive) return navigate("/complete-profile");
        
        if(user.isActive){
          if(user.status !== 2) {
            navigate("/");
            toast("پروفایل شما در انتظار تایید است", {icon: '👏',});
            return;
          }
          if(user.role === "OWNER") return navigate("/owner");
          if(user.role === "FREELANCER") return navigate("/freelancer");
          if(user.role === "ADMIN") return navigate("/admin");
        } else{
          navigate("/complete-profile");
        }       
      } catch (error) {  
        toast.error("کد وارد شده یا شماره تلفن صحیح نمی باشد");
        // toast.error(error.response);
      }
    }

    useEffect(()=>{
      const timer = time > 0 && setInterval(()=> setTime((t) => t-1) ,1000);
      return() =>{
        if(timer) clearInterval(timer);
      }
    },[time])
    
  return (
    <div>
      <div className="bg-white w-16 h-16 m-auto p-[10px] rounded-2xl shadow-lg mb-8">
        <TbPasswordMobilePhone className='text-[#0c1321] text-4xl m-auto' />
      </div>
      <div className="text-center text-sm pb-8 flex items-center justify-center gap-x-2">
        <span>
        کد تایید برای شماره {phoneNumber} ارسال گردید
        </span>
        <button className='text-textT' onClick={onBack}><FaPen /></button>
      </div>
      <button onClick={onBack} className=' text-textT border-0'><FaArrowRightLong /></button>
      <form className='space-y-8' onSubmit={checkOtpHandler}>
        <p className='font-bold text-textT text-right'>کد تایید را وارد کنید</p>
        <OtpInput 
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input type='number' {...props} />}
        containerStyle="flex flex-row-reverse gap-x-2 justify-center"
        inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid #cbd5e1",
            borderRadius: "0.5rem",
            background: "#ddcadf",
        }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className={`btn btn--dark w-full`}>تایید</button>
        )}
      </form>
      <p className='text-center pt-4 text-textT'>  
        {time>0 ? time : <button onClick={()=>{onResendOtp({phoneNumber}), setTime(RESEND_TIME)}}>ارسال مجدد</button>}
      </p>
    </div>
  )
}

export default CheckOTPForm
