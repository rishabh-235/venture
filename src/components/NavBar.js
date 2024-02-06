import React, { Component } from "react";
import SearchBar from "./SearchBar";
import logo512 from "./images/venturelist-high-resolution-logo-transparent.png";
import logo from "./images/venturelist-favicon-color.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-16 z-10">
        {/* <!-- logo --> */}
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <div className="hidden md:block w-44 mr-4">
              <img
                src={logo512}
                alt="logo"
                className=" h-10 rounded-2xl hover:bg-gray-200"
              />
            </div>
            <div className="block md:hidden w-12">
              <img
                src={logo}
                alt="logo"
                className=" w-12 h-auto rounded-2xl hover:bg-gray-200"
              />
            </div>
          </a>

          <a
            className="hidden lg:inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
            href="/"
          >
            <div className="flex items-center relative cursor-pointer whitespace-nowrap">
              Explore
            </div>
          </a>
        </div>

        {/* <!-- end logo --> */}

        <SearchBar />

        {/* <!-- login --> */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <a
                className="hidden lg:inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                href="/"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                  Raise Money
                </div>
              </a>

              <nav>
                <div className="container mx-auto flex items-center ">
                  <div className="hidden sm:flex">
                    {/* Dropdown */}
                    <div className="group relative">
                      <div className="hover:bg-gray-200 rounded-3xl px-4 py-2.5">
                        <button
                          id="dropdownUsersButton"
                          data-dropdown-toggle="dropdownUsers"
                          data-dropdown-placement="bottom"
                          class="text-black text-center inline-flex items-center"
                          type="button"
                        >
                          Learn
                          <svg
                            class="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className=" hidden group-hover:block absolute   p-2 z-10 bg-white rounded-lg shadow-md w-60 dark:bg-gray-700 left-1/2 transform -translate-x-1/2">
                        {/* Dropdown Items */}
                        <ul className=" py-2 overflow-y-auto text-gray-700 dark:text-gray-200 ">
                          <li>
                            <a
                              href="#action/1"
                              className="flex items-center px-4 py-2 hover:border-b hover:border-gray-700"
                            >
                              Traning Startup
                            </a>
                          </li>
                          <li>
                            <a
                              href="#action/2"
                              className="flex items-center px-4 py-2 hover:border-b hover:border-gray-700"
                            >
                              Traning Investor
                            </a>
                          </li>
                          
                          <li>
                            <a
                              href="#action/2"
                              className="flex items-center px-4 py-2 hover:border-b hover:border-gray-700"
                            >
                              Investor FAQ
                            </a>
                          </li>

                          <li>
                            <a
                              href="#action/2"
                              className="flex items-center px-4 py-2 hover:border-b hover:border-gray-700"
                            >
                              Founder FAQ
                            </a>
                          </li>

                          <li>
                            <a
                              href="#action/3"
                              className="flex items-center px-4 py-2 hover:border-b hover:border-gray-700"
                            >
                              Fundrasing Playbook
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div className=" hidden md:flex">
              <a
                className="inline-block ml-6 py-2 px-3 hover:bg-gray-200 rounded-full"
                href="/"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                  Login
                </div>
              </a>

              <a
                className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                href="/"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                  Signup
                </div>
              </a>
            </div>

            <div className="block md:hidden">
              <div className="inline relative ">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentcolor",
                        strokewidth: "3",
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
