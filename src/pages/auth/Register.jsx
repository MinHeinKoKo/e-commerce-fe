import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../image/Logo/trans-logo.png";
import { useRegisterMutation } from "../../services/authApi";
import { addUser } from "../../store/features/authSlice";
import Forest from "../../image/forest.jpg";
import Window from "../../image/windows.jpg";
import { BsArrowRight } from "react-icons/bs";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };
    const { data } = await register(user);
    if (!isSuccess) {
      dispatch(addUser({ user: data?.user, token: data?.token }));
      if (data?.success) {
        navigate("/");
      }
    }
  };
  return (
    <div
      className="overflow-hidden h-screen w-screen lg:p-10"
      style={{ backgroundImage: `url(${Forest})` }}
      >
      <div className="bg-[#f9f8fc] max-w-7xl mx-auto h-full rounded md:flex items-center overflow-hidden">
        <div className="md:flex-1">
          <div className="flex items-center justify-center cursor-pointer">
            <img
              src={Logo}
              className="w-20 bg-indigo-500 rounded-lg px-2"
              alt=""
            />
            <p className="text-2xl">Min Shop</p>
          </div>
          <p className="text-4xl text-center text-stroke font-semibold tracking-wider cursor-pointer">
            Welcome
          </p>
          <div className="flex items-center p-5">
            <p className="w-full h-1 bg-secondary flex-1"></p>
            <p className="flex-1 text-secondary font-semibold text-center cursor-pointer">
              <span className="text-2xl">Register From</span>
            </p>
            <p className="flex-1 w-full h-1 bg-secondary"></p>
          </div>
          <div className="px-10">
            {isSuccess && <div>User created successfully</div>}
            <form
              action=""
              className="flex flex-col gap-2"
              onSubmit={registerHandler}
              >
              {error && (
                <div>
                  {error.status === 422 && (
                    <ul>
                      {Object.entries(error.data.errors).map(
                        ([field, errors]) => (
                          <li
                            key={field}
                            className="text-red-500 text-sm flex items-center gap-3"
                            >
                            <BsArrowRight />
                            {errors.join(", ")}
                          </li>
                          )
                          )}
                    </ul>
                    )}
                  {error.status !== 422 && <div>Error: {error.message}</div>}
                </div>
                )}
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-semibold ">
                  Username
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border-b-2 bg-transparent"
                  placeholder="Enter Your Name"
                />
              </div>
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
              <div className="flex gap-1 w-full">
                <div className="flex flex-col gap-3 flex-1">
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
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <label htmlFor="password" className="font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    className="p-3 border-b-2 bg-transparent"
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-tertiary text-main rounded-lg py-3 sm:w-full md:w-32"
                >
                Register
              </button>
              {isLoading ? "Creating User..." : ""}
            </form>
          </div>
          <div className="h-[1px] w-full bg-secondary my-3 text-center"></div>
          <p className="text-sm text-center">
            Do you have any account?{" "}
            <Link
              to="/login"
              className="text-tertiary font-semibold tracking-wider underline"
              >
              Login
            </Link>{" "}
          </p>
        </div>
        <div className="md:flex-1">
          <div>
            <img
              src={Window}
              className="w-full h-auto object-cover lg:h-screen"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;
