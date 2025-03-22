import React, { Component } from "react";

export default class ReadyToFunding extends Component {
  render() {
    return (
      <div className=" flex flex-col justify-center items-center">
        <div className="w-[60rem]">
          <h1 className=" text-[3rem] text-gray-800 mt-[5rem] tracking-wider">
            Ready to fund the future?
          </h1>
          <p className=" text-[1.2rem] font-[500] text-gray-700 mt-2">
            Invest in the founders, products, and missions you love
          </p>
        </div>

        <div className=" flex flex-col mt-12">
          <button className=" flex justify-center items-center text-[0.9rem] font-[600] w-[35rem] h-[3.2rem] rounded-xl border-[1px] mb-3 hover:border-gray-700">
            <span class="-ml-[11rem] mr-[11rem] material-symbols-outlined">
              mail
            </span>
            Continue with Email
          </button>
          <button className=" flex justify-center items-center text-[0.9rem] font-[600] w-[35rem] h-[3.2rem] rounded-xl border-[1px] hover:border-gray-700 mb-3">
            <svg
              class="-ml-[11rem] mr-[11rem] material-symbols-outlined"
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
          <button className=" flex justify-center items-center text-[0.9rem] font-[600] w-[35rem] h-[3.2rem] rounded-xl border-[1px] hover:border-gray-700 mb-3">
            <svg
              class="-ml-[10rem] mr-[11rem] material-symbols-outlined"
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
        </div>
      </div>
    );
  }
}
