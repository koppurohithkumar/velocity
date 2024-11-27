import React from "react";
import about from "../assets/img/about.png";

export const About = () => {
  return (
    <div id="About" className="mt-20">
      <section className="bg-tertiary text-secondary py-16">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Save big with our cheap car rental!
        </h1>
        <h5 className="text-center mt-3 font-bold">
          Top Airports, Local Suppliers,
          <span className="text-primary"> 24/7</span> support
        </h5>
      </section>
      <img className="mx-auto my-16" src={about} alt=""></img>
      <section className="mx-auto p-10 md:px-28 grid md:grid-cols-2 gap-10 md:gap-32">
        <div className="h-fit my-auto text-center md:text-left">
          <h4 className="text-lg font-bold text-primary underline underline-offset-4">
            WHY CHOOSE US
          </h4>
          <h2 className="my-3 text-2xl md:text-3xl font-bold">
            Best valued deals you will ever find
          </h2>
          <p className="text-sm">
            Discover your best deals with our unbeatable offers, we're dedicated
            to providing you with the best value for your money as you can enjoy
            top-quality services and products without breaking the bank, Our
            deals are designed to give you the ultimate renting experience, So
            don't miss your chance to save big.
          </p>
          <a
            href="#VehicleModel"
            className="w-fit mt-5 mx-auto md:mx-0 px-5 py-2 text-secondary text-xs bg-primary rounded shadow-md shadow-primary/70 flex items-center gap-1 "
          >
            Find Details{" "}
            <img
              className="w-3 h-3 inline"
              src="https://img.icons8.com/?size=100&id=79025&format=png&color=FFFFFF"
              alt=""
            ></img>
          </a>
        </div>
        <section className="grid gap-5">
          <div className="flex gap-10">
            <img
              className="h-12 w-12 my-auto"
              src="https://img.icons8.com/?size=100&id=VUny0nXQK6rD&format=png&color=FD7E14"
              alt=""
            ></img>
            <div>
              <h2 className="text-lg font-bold">Cross Country Drive</h2>
              <p className="text-sm mt-2">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventure
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <img
              className="h-12 w-12 my-auto"
              src="https://img.icons8.com/?size=100&id=8iklxVfKbpJS&format=png&color=FD7E14"
              alt=""
            ></img>
            <div>
              <h2 className="text-lg font-bold">All Inclusive Pricing</h2>
              <p className="text-sm mt-2">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventure
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <img
              className="h-12 w-12 my-auto"
              src="https://img.icons8.com/?size=100&id=79307&format=png&color=FD7E14"
              alt=""
            ></img>
            <div>
              <h2 className="text-lg font-bold">No Hidden Charges</h2>
              <p className="text-sm mt-2">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventure
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
