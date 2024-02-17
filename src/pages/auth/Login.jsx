import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../image/Logo/trans-logo.png";
import Forest from "../../image/forest.jpg";
import { useDispatch } from "react-redux";
import { useLoginMutation } from '../../services/AuthApi.js'
import { addUser } from '../../store/features/authSlice.js'
import { BsArrowRight } from 'react-icons/bs'
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Login, {isLoading , error}] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const { data } = await Login(user);
    console.log(data)
    if (data !== null) {
      dispatch(addUser({ user: data?.data, token: data?.access_token }));
      navigate("/");
    }
  };
  return (
      <div className="overflow-hidden w-screen h-screen bg-[#d4d8f0] lg:p-10">
        <div className="bg-white max-w-7xl mx-auto h-full rounded md:flex items-center overflow-hidden">
          <div className="md:flex-1">
            <div className="flex items-center justify-center cursor-pointer">
              <img
                  src={Logo}
                  className="w-20 bg-indigo-500 rounded-lg px-2"
                  alt=""
              />
              <p className="text-2xl ">Min Shop</p>
            </div>
            <p className="text-4xl text-center text-stroke font-semibold tracking-wider cursor-pointer">
              Welcome Back
            </p>
            <div className="flex items-center my-10 p-5">
              <p className="w-full h-1 bg-secondary flex-1"></p>
              <p className="flex-1 text-secondary font-semibold text-center cursor-pointer">
                <span className="text-2xl">Login From</span>
              </p>
              <p className="flex-1 w-full h-1 bg-secondary"></p>
            </div>
            <div className="px-10">
              <form
                  action=""
                  className="flex flex-col gap-5"
                  onSubmit={loginHandler}
              >
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="font-semibold">
                    Email Address
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-3 border-b-2 bg-transparent"
                      placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="p-3 border-b-2 bg-transparent"
                      placeholder="Your Password"
                  />
                </div>
                <button className="bg-primary text-white hover:bg-primary/50 transition-all duration-200 ease-in-out rounded-lg py-3 sm:w-full md:w-32">
                  Login
                </button>
                {isLoading ? "Please wait" : ""}
              </form>
              {error && (
                  <div className="mt-5 mb-0">
                    {error.status === 422 && (
                        <ul>
                          {Object.entries(error.data.errors).map(([field, errors]) => (
                              <li
                                  key={field}
                                  className="text-red-500 text-sm flex items-center gap-3"
                              >
                                <BsArrowRight />
                                {errors.join(", ")}
                              </li>
                          ))}
                        </ul>
                    )}
                    {error.status !== 422 && (
                        <div className="text-red-500">Error: Something Was Wrong.</div>
                    )}
                  </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-secondary my-3 text-center"></div>
            <p className="text-sm text-center">
              Don't have any account?{" "}
              <Link
                  to="/register"
                  className="text-textColor font-semibold tracking-wider underline"
              >
                Register
              </Link>{" "}
            </p>
          </div>
          <div className="md:flex-1">
            <div>
              <img
                  src={Forest}
                  className="w-full h-auto object-cover lg:h-screen"
                  alt=""
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login