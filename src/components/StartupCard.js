import React, { Component } from "react";
import { Button } from "@material-tailwind/react";
export default class StartupCard extends Component {
  constructor(props){
    super(props);
    this.state={
      isHovered:false
    }
  }

  handleMouseEnter = () => {
    this.setState({
      isHovered:true
    })
  }

  handleMouseLeave=()=>{
    this.setState({
      isHovered:false
    })
  }

  render() {
    return (
      <div class="ml-5 h-[70vh]  group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-lg border-2 text-black ">
        <div class="h-1/2 w-72">
          <img
            class="h-full w-full object-cover transition-transform duration-500"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div class="transition-up absolute top-[228px] z-[100] h-full w-full border-t-[1px] border-[#F0ECEC] bg-white duration-300 ease-in-out hover:top-[156px] group-hover:top-[156px]">
          <div>
            <div>
              <img
                class="float-end -mt-6 mr-5 h-12 w-12 rounded-3xl border-2"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex flex-col items-center justify-center h-40 mt-5">
            <div className="flex w-10/12 text-gray-500 text-[16px] font-semibold tracking-wide">
              Freebird Rides
            </div>
            <p className="flex text-left mt-2 w-10/12 font-bold text-[15px]">
              Cash and Rewar for Using Ubar and Repido
            </p>
            <div className="flex text-left mt-2 w-10/12 text-blue-gray-600 leading-5 mb-10">
              Raise $30 million of funding in development round
            </div>
          </div>
          <div>
            <div className=" flex mt-6 items-center justify-around">
              <Button className=" h-2 w-auto flex items-center justify-center tracking-widest text-[10px] bg-opacity-55 bg-purple-300  text-gray-700">
                VENTURE BACKED
              </Button>
              <Button className=" h-2 w-auto flex items-center justify-center tracking-widest text-[10px] bg-opacity-55 bg-green-200 text-gray-700">
                ROBOTICS
              </Button>
            </div>
            <div className=" ml-3 w-[92%] h-[1.5px] bg-blue-gray-100 mt-6 flex item-center "></div>
            <div className="mt-3 flex flex-col justify-start items-start">
              <div>
                <span className=" font-bold text-[15px] ml-4">$81,61439 </span>
                <span className=" text-[15px] text-gray-400 font-[500]">
                  from 1,482 investors
                </span>
              </div>
              <div>
                <span className=" font-bold text-[15px] ml-4">$75M </span>
                <span className=" text-[15px] text-gray-400 font-[500]">
                  valuaion
                </span>
              </div>

              <div class="relative group -mt-6 ml-[15.5rem]">
                <button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} class="relative z-10 middle none center rounded-lg  font-sans text-xs transition-all hover:shadow-lg  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <span className="material-symbols-outlined ">info</span>
                </button>
                {this.state.isHovered && (<div  class="-ml-32 -mt-1 absolute top-0 group-hover:-top-[3rem] transition-all ease-in-out duration-500">
                  <div class="z-0 w-36 whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-black   text-white shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                    <h3 class="font-sans font-normal text-[9px] py-3 px-5">
                      This offering is hosted by VentureList Portal LLC
                    </h3>
                  </div>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
