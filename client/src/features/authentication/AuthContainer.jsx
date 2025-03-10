import { useState } from "react"
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
    // const[phoneNumber, setPhoneNumber] = useState("");
    const [step, setStep] = useState(1);

    const {register, handleSubmit, getValues} = useForm();

    const {isPending, data , mutateAsync} = useMutation({
        mutationFn: getOtp,
      })
        
    const sendOtpHandler = async (data) => {     
        try{
            const {message, code} = await mutateAsync(data);
            if(data.phoneNumber.length !== 11) return toast.error("شماره موبایل صحیح وارد کنید");
            setStep(2);
            toast.success(message);
            console.log("code", message, code);
            
            
        }
        catch(error){
          toast.error("شماره موبایل صحیح وارد کنید");
          // toast.error(error?.response?.data?.message);
        }
    }

    const renderStep = () => {
        switch(step){
            case 1:
                return <SendOTPForm setStep={setStep} register={register} onSubmit={handleSubmit(sendOtpHandler)} isPending={isPending} />;
            case 2: 
                return <CheckOTPForm phoneNumber={getValues("phoneNumber")} onBack={()=>setStep((s) => s-1)} onResendOtp={sendOtpHandler} />;
            default:
                return null;
        }
    }



  return (
    <div>
      {renderStep()}
    </div>
  )

}

export default AuthContainer
