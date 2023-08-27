import React, { useState } from "react";
// import login_image from "../images/image 10.png";
const LoginPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleOnClick = () => {
    try {
      console.log("Signin");
    } catch (e) {
      alert(e.message);
      console.log(e.massage);
    }
  };
  return (
    <>
      <div className="bg-[#152238]">
        <p className="text-white  text-end text-[8px] relative right-[10rem]">
          If you encounter issues, please contact{" "}
          <span className="text-red-500">Online CS</span>{" "}
        </p>
        <section>
          <div className=" flex  mx-40 md:flex-row flex-col items-center justify-center px-6 py-8  lg:justify-between border-yellow-400 border-8">
            <div className="w-full bg-[#1c2e4a]  sm:max-w-md  md:mr-8">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold underline underline-offset-[10px] decoration-4 decoration-yellow-400 text-white md:text-2xl ">
                  Sign in
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Username<span className="text-red-900">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={value.email}
                      onChange={handleOnChange}
                      className="bg-gray-900  text-white sm:text-sm rounded-lg focus:ring-grey-600  block w-full p-2.5"
                      placeholder="Enter username/email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Password<span className="text-red-900">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleOnChange}
                      placeholder="Enter password"
                      className="bg-gray-900  text-white sm:text-sm rounded-lg  block w-full p-2.5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleOnClick}
                    className="text-white bg-yellow-300 hover:bg-yellow-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Login
                  </button>
                  <p
                    href="#"
                    className="text-sm font-medium text-white hover:underline "
                  >
                    Forgot password?
                  </p>
                </form>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                {/* <img src={login_image} className="" alt="Sample" /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
