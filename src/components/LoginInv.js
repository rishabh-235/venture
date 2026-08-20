import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/slice/authSlice";

const LoginInv = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bordercolor, setBorderColor] = useState("gray-300");
  const [passworderror, setPasswordError] = useState("");
  const [user, setUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    try {
      const resultAction = await dispatch(loginUserThunk(formData));

      if (loginUserThunk.fulfilled.match(resultAction)) {
        setEmail("");
        setPassword("");
        setBorderColor("gray-300");
        setPasswordError("");
        setUser(true);
      } else {
        setPassword("");
        setBorderColor("red-600");
        setPasswordError(resultAction.payload || "Password is Incorrect");
      }
    } catch (error) {
      setPassword("");
      setBorderColor("red-600");
      setPasswordError("Password is Incorrect");
    }
  };

  const handleLogin = (provider) => {
    const authBaseUrl = process.env.REACT_APP_AUTH_BASE_URL || "http://localhost:8000";
    window.location.href = `${authBaseUrl}/auth/${provider}`;
  };

  if (user) return <Navigate to="/" />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[4rem] text-[1.78rem] font-[600] tracking-wider">
          Hi! Welcome back!
        </p>
        <p className="mt-3 text-[1.05rem] text-gray-400 tracking-wide">
          New to VentureList?{" "}
          <span>
            <a href="/">Signup</a>
          </span>
        </p>
        <div className="mb-16 mt-12 flex justify-around items-start h-[25rem] w-[70rem]">
          <div className="flex flex-col items-start justify-start">
            <button
              className=" flex justify-center items-center text-[0.9rem] font-[600] w-[25rem] h-[3.5rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              onClick={() => handleLogin("google")}
            >
              <svg
                class="-ml-[4rem] mr-[0.5rem] material-symbols-outlined"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Continue with Google
            </button>

            <button
              className=" flex justify-center items-center text-[0.9rem] font-[600] w-[25rem] h-[3.5rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              onClick={() => this.handleLogin("github")}
            >
              <svg
                class="-ml-[4rem] mr-[0.5rem] material-symbols-outlined"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              Continue with Github
            </button>

            <button
              className=" flex justify-center items-center text-[0.9rem] font-[600] w-[25rem] h-[3.5rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              onClick={() => this.handleLogin("linkedin")}
            >
              <svg
                class="-ml-[4rem] mr-[0.5rem] material-symbols-outlined"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
              Continue with Linkedin
            </button>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  id="email"
                  className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[22.1rem] h-[3.7rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <label
                  for="email"
                  className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  className={`peer placeholder-transparent flex justify-center items-center text-[1.2rem] tracking-wider pt-6 font-[900] w-[22.1rem] h-[3.7rem] rounded-xl border-${bordercolor} border-[1px] hover:border-gray-700 mb-3`}
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label
                  for="password"
                  className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
                >
                  Password
                </label>
                <p className="text-start text-red-600 text-[0.8rem] -mt-2">
                  {passworderror}
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  data-ripple-light="true"
                  className="mt-4 align-middle select-none text-center transition-all  disabled:pointer-events-none font-[600] text-[0.9rem] tracking-wider py-3 px-[9.6rem] rounded-md bg-light-blue-800 text-white hover:to-transparent hover:shadow-lg hover border-y border-x border-light-blue-700"
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInv;
