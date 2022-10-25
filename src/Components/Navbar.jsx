import React from "react";
import logo from "../Asssets/logo.png";
function Navbar() {
  return (
    <div className="bg-slate-200">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-10" src={logo} alt="" />
            <span className="ml-3 text-xl">Parky</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">
              Home
            </a>
          </nav>
          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">
              Home
            </a>
          </nav> */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
