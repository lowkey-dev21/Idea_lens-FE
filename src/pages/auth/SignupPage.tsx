import { useState } from "react";
import google from '../../assets/google.png'
import github from '../../assets/github.png'
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState<string>('')
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-8 md:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10 font-semibold text-center">Create an account</h2>
      <div className="w-full max-w-md flex flex-col items-center">
        <form className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="caret-black outline-none p-3 border-gray-500 rounded-md border w-full py-4 text-base md:text-lg"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="!bg-black p-3 h-[50px] md:h-[60px] rounded-md w-full text-white text-base md:text-lg hover:opacity-90 transition-opacity"
          >
            Continue
          </button>

          <div className="text-center text-sm md:text-base">
            Already have account ? <span className="text-blue-600 cursor-pointer hover:underline">Login</span>
          </div>

          <div className="flex items-center p-2 md:p-3 gap-4 rounded-md !bg-white border border-gray-500 hover:border-gray-700 transition-colors cursor-pointer">
            <img
              src={google}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full"
              alt="Google logo"
            />
            <p className="text-sm md:text-base">Continue with Google</p>
          </div>

          <div className="flex items-center p-2 md:p-3 gap-4 rounded-md !bg-white border border-gray-500 hover:border-gray-700 transition-colors cursor-pointer">
            <img
              src={github}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full"
              alt="GitHub logo"
            />
            <p className="text-sm md:text-base">Continue with Github</p>
          </div>
        </form>

        <div className="mt-7 flex gap-2 items-center text-sm md:text-base">
          <Link className="!underline !text-gray-500 hover:!text-gray-700" to={""}>
            Terms of Use
          </Link>
          <span>|</span>
          <Link className="!underline !text-gray-500 hover:!text-gray-700" to={""}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;