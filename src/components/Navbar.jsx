import React, { useContext } from "react";
import CartBody from "./CartBody";
import logo from "../assets/Logo.svg";
import { StoreContext } from "../StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { items } = useContext(StoreContext);
  const totItems = items.reduce((qty, item) => qty + item.qty, 0);
  return (
    <div className="flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 md:px-28 z-10">
      <div className="navbar">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={logo} alt="logo" className="w-6 h-6" />
            Halal Bihalal
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totItems ? (
                  <span className="badge badge-accent badge-sm indicator-item">
                    {totItems}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow"
            >
              <div className="p-3">
                <CartBody />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
