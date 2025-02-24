import AuthContainer from "../features/authentication/AuthContainer"


function Auth() {
  return (
    <div className="bg-[url(/bg1.jpg)] pt-40 bg-cover h-screen w-full">
      <div className="w-full sm:max-w-md m-auto box backdrop-blur-lg border-[#dec5e2] shadow-xl auth-dark text-textT">
        <AuthContainer />
      </div>
    </div>
  )
}

export default Auth
