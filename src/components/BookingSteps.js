import React from "react";

export const BookingSteps = () => {
  return (
    <div>
      <section className="mt-20 md:p-20 text-center">
        <h1 className="text-primary text-xl font-bold underline underline-offset-4">
          PLAN YOUR TRIP NOW
        </h1>
        <h2 className="text-2xl my-3 font-bold md:text-4xl">
          Quick & easy car rental
        </h2>
        <div className="p-10 flex flex-col gap-10 md:flex-row">
          <div className="">
            <img
              className="mx-auto w-16 h-14"
              src="https://img.icons8.com/?size=100&id=OfsLeDL0pFpo&format=png&color=FD7E14"
              alt=""
            ></img>
            <h1 className="mt-3 text-lg font-bold">Select Car</h1>
            <p className="mt-3 text-sm">
              Choose your pick-up location, according to your pick-up location
              your pick-up location your pick-up location{" "}
            </p>
          </div>
          <div className="">
            <img
              className="mx-auto w-16 h-14"
              src="https://img.icons8.com/?size=100&id=11227&format=png&color=FD7E14"
              alt=""
            ></img>
            <h1 className="mt-3 text-lg font-bold">Contact Operator</h1>
            <p className="mt-3 text-sm">
              Choose your pick-up location, according to your pick-up location
              your pick-up location your pick-up location{" "}
            </p>
          </div>
          <div className="">
            <img
              className="mx-auto w-16 h-14"
              src="https://img.icons8.com/?size=100&id=9cYdU1VahNYC&format=png&color=FD7E14"
              alt=""
            ></img>
            <h1 className="mt-3 text-lg font-bold">Lets Drive</h1>
            <p className="mt-3 text-sm">
              Choose your pick-up location, according to your pick-up location
              your pick-up location your pick-up location{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
