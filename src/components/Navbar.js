import React, { useState } from "react";
import icon from "../assets/img/icon.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = () => (
    <>
      <a className="hover:bg-primary" href="#Home">
        Home
      </a>
      <a className="hover:bg-primary" href="#About">
        About
      </a>
      <a className="hover:bg-primary" href="#VehicleModel">
        Vehicle Models
      </a>
      <a className="hover:bg-primary" href="#Testimonials">
        Testimonials
      </a>
      <a className="hover:bg-primary" href="#Faq">
        Our Team
      </a>
      <a className="hover:bg-primary" href="#Contact">
        Contact
      </a>
      <div className="mt-7 md:hidden">
        <button>Sign in</button>
        <button className="ml-5 px-3 py-1 bg-primary text-secondary rounded shadow-md shadow-primary/60">
          Register
        </button>
      </div>
    </>
  );
  const handleHmaburger = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full fixed p-2 flex flex-wrap justify-between md:justify-around items-center text-secondary text-sm bg-tertiary">
      <div className="flex items-center">
        <img className="w-8 h-8" src={icon} alt="logo"></img>
        <h1 className="pl-3 font-extrabold text-lg">VELOCITY</h1>
      </div>
      <div className="hidden md:flex gap-8 mx-auto">{navLinks()}</div>
      <div className="hidden md:flex">
        <button>Sign in</button>
        <button className="ml-5 px-3 py-1 bg-primary text-secondary rounded shadow-md shadow-primary/60">
          Register
        </button>
      </div>
      <div className=" md:hidden">
        {open === false ? (
          <img
            className="w-8 h-8"
            onClick={handleHmaburger}
            src="https://img.icons8.com/?size=100&id=YOrgWKvUdGE3&format=png&color=FD7E14"
            alt=""
          />
        ) : (
          <img
            className="w-8 h-8"
            onClick={handleHmaburger}
            src="https://img.icons8.com/?size=100&id=23537&format=png&color=FD7E14"
            alt=""
          />
        )}
      </div>
      {open && (
        <div className=" md:hidden absolute w-[50%] p-5 top-12 right-0 text-center bg-tertiary/55 flex flex-col gap-5">
          {navLinks()}
        </div>
      )}
    </div>
  );
};
