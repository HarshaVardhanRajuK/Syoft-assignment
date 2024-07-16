import React from "react";
import profilePic from "/user.png";
import Card from "../components/Card";
import TodoCard from "../components/TodoCard";
import sunset from "/sunset.jpg";
import sunset2 from "/sunset 2.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    // remove cookie
    navigate("/login");
  }

  return (
    <div className="w-full">
      <section className=" text-white pb-10">
        <div className="flex items-center p-4">
          <img
            className="w-[75px] md:w-[100px] mr-4"
            src={profilePic}
            alt="profile pic"
          />
          <h1 className="text-xl md:text-2xl font-semibold">
            Hello Harsha Vardhan, Welcome Back
          </h1>
          <hr />
        </div>

        <div className="px-6 text-xl font-semibold">
          <p>Checkout your feed 👉</p>
          <div className="card-container flex gap-12 flex-wrap mt-6">
            <Card img={sunset2} />
            <Card img={sunset} />
            <Card img={sunset2} />
          </div>
          <p className="mt-4">
            Checkout your Todos or Make your todo{" "}
            <a
              className="text-blue-400 underline"
              target="_blank"
              href="https://harshavktodosapp.netlify.app/"
            >
              here
            </a>
          </p>
          <TodoCard heading="Today" />
          <TodoCard heading="Previous" />
        </div>
        <div className="text-center">
          <button
            onClick={handleClick}
            className="bg-blue-500 px-2 py-1 font-bold rounded-md"
          >
            Logout
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserDashboard;
