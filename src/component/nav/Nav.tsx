import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShopPingCartContext";

import { useSearchContext } from "../../context/SearchContext";
import Listmenu from "./Listmenu";


const Nav = () => {

  const { cartQeantity, openCart } = useShoppingCart();
  const { setSearchName, handlesearchname } = useSearchContext();

  return (
    <div className="">
      <div className=" navbar  m-[auto] px-[20px] bg-[#8e6646]">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">
              <img
                className="w-[150px] h-[50px]"
                src="/logo.png"
                alt=""
              />
            </a>
          </Link>
     
     
        </div>

        <div className="flex-none">
          {/**start input */}
          <div className="   md:flex   hidden  mr-[50px] bg-white rounded-[20px]   rounded-r-[30px] ">
            <input
              type="text"
              onChange={(e) =>setSearchName(e.target.value)}
              placeholder="Search Menu"
              className=" ml-[20px] border-none focus: rounded-none text-[#8e6646] font-[500] text-[18px] focus:border-red-200 input input-bordered"
            />
            <Link to="/shop">
              <button
                onClick={handlesearchname}
                className=" bg-[#e6bb5c] flex items-center justify-center hover:bg-slate-400 p-[7px] h-[50px] w-[50px] rounded-full  text-[18px] font-[500] text-white"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </Link>
          </div>
          {/**end input */}
          {/**start cart */}

          <div className="dropdown  dropdown-end mr-[60px]">
            <button onClick={openCart} className="btn w btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[30px] w-[30px] text-white"
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
                <span className="badge badge-sm indicator-item w-[20px] h-[20px]  bg-red-600 text-white">
                  {cartQeantity}
                </span>
              </div>
            </button>
          </div>
          {/**End cart */}
        </div>
      </div>
      <Listmenu />
    </div>
  );
};

export default Nav;


