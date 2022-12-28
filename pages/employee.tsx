import React from "react";
import Header from "./components/header";
import FilterIcon from "./components/icons/filterIcon";
import GridIcon from "./components/icons/gridIcon";
import Link from "next/link";
import Sidebar from "./components/sidebar";

function employee() {
  return (
    <div>
      <div id="heading">
        <Header />
        <div
          id="employee-head"
          className="flex space-x-20 justify-between max-w-1280px mx-auto py-2 px-4 bg-red-50 border-solid border-y-2 border-black-500"
        >
          <div>
            <h3 className="font-bold my-3">Employee</h3>
          </div>
          <div className="hidden md:inline-flex space-x-10 ">
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="bg-white text-gray text-sm rounded-full focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>

            <FilterIcon />
            <GridIcon />
            <button className="text-white bg-[#202020] rounded-full px-6">
              <Link href="AddEmployee">Add</Link>
            </button>
          </div>
        </div>
      </div>
      <div id="sidebar" className="hidden md:flex">
        <Sidebar />
      </div>
    </div>
  );
}

export default employee;
