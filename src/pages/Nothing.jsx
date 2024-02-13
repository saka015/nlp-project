import { Link } from "react-router-dom";

const Nothing = () => {
  return (
    <div className="m-12 p-12 text-center text-7xl text-white">
      {" "}
      This page does not exist
      <Link to="/">
        {" "}
        <button className="p-2 m-4 bg-white text-black font-bold hover:opacity-90">
          Go to home page
        </button>
      </Link>
    </div>
  );
};

export default Nothing;
