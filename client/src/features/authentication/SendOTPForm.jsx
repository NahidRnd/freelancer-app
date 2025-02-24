import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { IoLogIn } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

function SendOTPForm({onSubmit, isPending, register}) {
  return (
    <div>
      <div className="bg-white w-16 h-16 m-auto p-4 rounded-2xl shadow-lg">
        <FiLogIn className="text-[#0c1321] text-4xl m-auto" />
      </div>
      <h1 className="text-2xl font-bold text-center mt-5 mb-2">صفحه ورود</h1>
      <p className="text-center mb-8 text-dark">به وب سایت فریلنسر هاب خوش آمدید</p>
      <form className="space-y-6 bg-input" onSubmit={onSubmit}>
        <TextField label="شماره موبایل" name="phoneNumber" register={register} />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--dark w-full">ارسال کد تایید</button>
        )}
      </form>
    </div>
  )
}

export default SendOTPForm
