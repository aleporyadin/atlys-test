import * as React from "react";
import LogoIcon from "../icons/LogoIcon";
import ShowIcon from "../icons/ShowIcon";


const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-12 justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <LogoIcon/>
      <div className="w-full  shadow border-2 border-gray-400 rounded-lg mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-8 bg-container rounded-lg">
          <div>
            <div className="mb-2 text-sm text-center leading-tight tracking-tight text-gray-400">
              WELCOME BACK
            </div>
            <div className="text-xl font-medium text-center leading-tight tracking-tight text-white">
              Log into your account
            </div>
          </div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email or Username
              </label>
              <input type="email" name="email" id="email"
                     className="bg-transparent border border-gray-600  text-gray-300 text-md rounded-lg block w-full p-2.5 "
                     placeholder="Enter your email or username" required/>
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-300">Password</label>
                <span
                  className="flex items-center text-xs  font-medium text-gray-300 hover:underline dark:text-primary-500">
                  Forgot
                  password?
                </span>
              </div>
              <div className="relative">
                <input type="password" name="password" id="password" placeholder="Enter your password"
                       className="border border-gray-600 text-gray-300 rounded-lg block w-full p-2.5 bg-transparent"
                       required/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <ShowIcon/>
                </div>
              </div>
            </div>
            <button type="submit"
                    className="bg-blue-500 w-full text-white  font-medium rounded-md text-md px-5 py-2.5 text-center">
              Login now
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Not registered yet?{ " " }
              <span className="font-medium text-gray-300 hover:underline dark:text-primary-500">
                Register →
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
