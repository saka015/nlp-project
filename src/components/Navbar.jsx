import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="shadow-md  bg-[#1B1A55] flex justify-between px-12 p-4 text-white ">
        <div>{/* <h1 className="text-2xl font-bold">Summarize</h1> */}</div>
        <div className="gap-x-3">
          <Link to="loginuser">
            {" "}
            <button className="mx-4 hover:bg-gray-200 hover:text-black  border border-white text-white font-light px-2 p-1 rounded-sm">
              Login
            </button>
          </Link>
          <Link to="createuser">
            <button className="mx-4 hover:bg-gray-200 hover:text-black  border border-white text-white font-light px-2 p-1 rounded-sm">
              Signup
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;
