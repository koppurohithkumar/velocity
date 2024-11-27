import React from "react";
import hero from "../assets/img/hero.png";

export const Hero = () => {
  return (
    <div className="pt-20">
      <div className="flex items-center justify-center flex-col md:flex-row-reverse md:p-10">
        <div>
          <img className="object-fill md:w-[800px] " src={hero} alt="" />
        </div>
        <div className="p-5 text-center md:px-10 md:text-left">
          <h1 className="text-xl font-bold">Plan your trip now</h1>
          <h1 className="mt-2 text-5xl font-bold">
            Save <span className="text-primary">big</span> with our
          </h1>
          <h1 className="text-primary text-5xl font-bold py-2"> VELOCITY</h1>
          <p className="my-5 text-sm">
            Rent the car of your dreams, Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <section className="my-10 flex gap-5 justify-center md:justify-start">
            <a
              href="#BookingForm"
              className=" flex items-center gap-1 bg-primary text-secondary text-xs px-5 py-2 rounded shadow-md shadow-primary/70"
            >
              Book Ride
              <img
                className="w-3 h-3"
                src="https://img.icons8.com/?size=100&id=99285&format=png&color=FFFFFF"
                alt=""
              ></img>
            </a>
            <a
              href="#About"
              className=" flex items-center gap-1 bg-tertiary text-secondary text-xs px-5 py-2 rounded shadow-md shadow-tertiary/70"
            >
              Learn More{" "}
              <img
                className="w-3 h-3 inline"
                src="https://img.icons8.com/?size=100&id=79025&format=png&color=FFFFFF"
                alt=""
              ></img>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
