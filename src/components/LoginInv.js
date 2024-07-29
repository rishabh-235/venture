import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login as authLogin } from '../redux/slice/authSlice';

const LoginInv = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bordercolor, setBorderColor] = useState('gray-300');
  const [passworderror, setPasswordError] = useState('');
  const [user, setUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    axios.post('http://localhost:8000/api/v1/user/login', formData, {withCredentials: true })
      .then(response => {  
        if (response.data.massage === 'User Logged In successfully') {
          setEmail('');
          setPassword('');
          setBorderColor('gray-300');
          setPasswordError('');
          setUser(true);
          dispatch(authLogin(response.data.data.loggedInUser));
        }
      })
      .catch(error => {
        setPassword('');
          setBorderColor('red-600');
          setPasswordError('Password is Incorrect');
      });
  };

  const handleLogin = (provider) => {
    window.location.href = `http://localhost:8000/auth/${provider}`;
  };

  if (user) return <Navigate to='/' />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[4rem] text-[1.78rem] font-[600] tracking-wider">Hi! Welcome back!</p>
        <p className="mt-3 text-[1.05rem] text-gray-400 tracking-wide">
          New to VentureList?{" "}
          <span>
            <a href="/">Signup</a>
          </span>
        </p>
        <div className="mb-16 mt-12 flex justify-around items-start h-[25rem] w-[70rem]">
          <div className="flex flex-col items-start justify-start">
          <button className=" flex justify-center items-center text-[0.9rem] font-[600] w-[25rem] h-[3.5rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
            onClick={() => handleLogin('google')}>
                <svg
                  class="-ml-[4rem] mr-[4rem] material-symbols-outlined"
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

              <button className=" flex justify-center items-center text-[0.9rem] font-[600] w-[25rem] h-[3.5rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
                onClick={() => this.handleLogin('github')}>
                <svg
                  class="-ml-[3rem] mr-[4rem] material-symbols-outlined"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#3856d0"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M11.666,2.005c-5.046,0.165 -9.292,4.246 -9.641,9.283c-0.369,5.329 3.442,9.832 8.481,10.589v-7.227h-1.614c-0.726,0 -1.314,-0.588 -1.314,-1.314v0c0,-0.726 0.588,-1.314 1.314,-1.314h1.613v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c0.357,0 0.662,0.008 0.921,0.021c0.636,0.031 1.129,0.561 1.129,1.198v0c0,0.663 -0.537,1.2 -1.2,1.2h-0.442c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h1.87c0.591,0 1.043,0.527 0.953,1.111l-0.108,0.701c-0.073,0.47 -0.477,0.817 -0.953,0.817h-1.762v7.247c4.883,-0.663 8.648,-4.837 8.648,-9.899c0,-5.634 -4.659,-10.179 -10.334,-9.995z"></path>
                    </g>
                  </g>
                </svg>
                Continue with Facebook
              </button>

              <button className=" flex justify-center items-center text-[0.9rem] font-[600] w-[25rem] h-[3.5rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              onClick={() =>this.handleLogin('linkedin')}
              >
                <svg
                  class="-ml-[4rem] mr-[4rem] material-symbols-outlined"
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
                <p className='text-start text-red-600 text-[0.8rem] -mt-2'>{passworderror}</p>
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
