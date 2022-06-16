import React from "react";

import { Divider } from "@mui/material";

import logo from "../assets/images/exp.png";

export default function Login() {
  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="shadow-lg grid w-3/6 h-4/6 rounded-2xl px-3 bg-gradient-to-r to-sky-900 from-blue-900 ">
        <div className="grid place-items-center py-6">
          <img className="w-36 mx-auto mb-1" src={logo} alt="" />
          <h3 className="text-white font-semibold">
            DATAEX | <span className="font-medium">dLabeler</span>
          </h3>
        </div>
        <Divider className="mx-4 text-white" />
        <div className="w-1/2 mx-auto">
          <form>
            <div className="mt-0">  
              <div>
                <label className="block text-white" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-white" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="************"
                  name="password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline gap-3 mx-auto">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
