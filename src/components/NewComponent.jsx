import React from "react";
import { Link } from "react-router-dom";

const NewComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-2xl font-semibold text-slate-500">
        Register Now and Join the Developers Community of thousands of devs and
        interact with them.
      </h2>
      <div className="text-white font-semibold mt-3">
        <Link to="/register">
          <button className="bg-blue-600 px-4 py-2 rounded-md cursor-pointer mr-3 text-sm">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-blue-600 px-4 py-2 rounded-md cursor-pointer text-sm">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewComponent;
