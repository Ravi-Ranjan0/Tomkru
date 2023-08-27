import React, { useState } from "react";
// import signup_image from "../images/image_63630 1.png";

const Signup = () => {
  const [value, setValue] = useState({
    name: "",
    password: "",
    confirmpassword: "",
    currency: "",
    referalcode: "",
  });
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleOnClick = () => {
    try {
      //   console.log("Signup")
    } catch (e) {
      alert(e.message);
      console.log(e.massage);
    }
  };
  return (
    <div>
      <div className="bg-[#152238]">
        <p className="text-white text-end text-[8px] relative right-[10rem]">
          If you encounter issues, please contact{" "}
          <span className="text-red-500">Online CS</span>{" "}
        </p>
        <section>
          <div className=" flex  mx-40 md:flex-row flex-col items-center justify-center px-6 py-8  lg:justify-between border-yellow-400 border-8">
            <div className="w-full bg-[#1c2e4a]  sm:max-w-md  md:mr-8">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold underline underline-offset-[10px] decoration-4 decoration-yellow-400 text-white md:text-2xl ">
                  Sign Up
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Username<span className="text-red-900">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={value.name}
                      onChange={handleOnChange}
                      className="bg-gray-900  text-white sm:text-sm rounded-lg focus:ring-grey-600  block w-full p-2.5"
                      placeholder="Enter username/email"
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
                      placeholder="Enter password"
                      value={value.password}
                      onChange={handleOnChange}
                      className="bg-gray-900  text-white sm:text-sm rounded-lg  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmpassword"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Confirm Password<span className="text-red-900">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      value={value.confirmpassword}
                      onChange={handleOnChange}
                      placeholder="Enter confirm password"
                      className="bg-gray-900  text-white sm:text-sm rounded-lg  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="currency"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Currency
                    </label>
                    <select
                      name="currency"
                      id="currency"
                      className="bg-gray-900  text-white sm:text-sm rounded-lg focus:ring-grey-600  block w-full p-2.5"
                    >
                      <option value="inr">INR</option>
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                      <option value="cad">CAD</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="referalcode"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Referral Code
                    </label>
                    <input
                      type="text"
                      name="referalcode"
                      id="referalcode"
                      value={value.referalcode}
                      onChange={handleOnChange}
                      className="bg-gray-900  text-white sm:text-sm rounded-lg focus:ring-grey-600  block w-full p-2.5"
                      placeholder="Referral Code (Optional)"
                    />
                  </div>

                  <button
                    onChange={handleOnClick}
                    type="submit"
                    className="text-white bg-yellow-300 hover:bg-yellow-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                {/* <img src={signup_image} className="" alt="Sample" /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
