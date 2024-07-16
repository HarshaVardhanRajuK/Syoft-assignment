import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthSection = () => {
  return (
    <>
    <section className="left md:w-[60vw] w-full md:min-h-[100vh] bg-transparent flex justify-center items-center py-8 md:py-0">
        <div className="max-w-[90%] md:max-w-[75%]">
          <h1 className="mb-3 text-white text-3xl font-bold text-center md:text-left">
            Welcome to our community
          </h1>
          <p className="text-base text-slate-500 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam
            rerum iste? Ullam illum rerum ipsam labore architecto fugiat eius
            quas, dolores eligendi repellat debitis impedit similique
            exercitationem iste recusandae.
          </p>
        </div>
      </section>
      <section className="right md:w-[40vw] md:min-h-[100vh] flex justify-center items-center bg-transparent md:bg-[#F1FAFF] pb-8 md:pb-0">
        <Outlet />
      </section>
    </>
  )
}

export default AuthSection