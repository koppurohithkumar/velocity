import React from "react";
import play from "../assets/img/play.png";
import app from "../assets/img/app.png";
import phone from "../assets/img/phone.png";

export const Footer = () => {
  return (
    <div className="mt-20 p-2 md:p-20 bg-tertiary/5">
      <div className="flex flex-col md:flex-row items-center">
        <section className="px-20 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            Download our app to get most out of it
          </h1>
          <p className="text-sm mt-3">
            Thrown shy danote ten ladies though ask saw, Or by to the going
            think order event music, Incommade so intention defective at
            convinced, Led income months itself and houses you.
          </p>
          <div className="flex justify-center md:justify-start">
            <img className="w-52 object-contain" src={play} alt=""></img>
            <img className="w-48 object-contain" src={app} alt=""></img>
          </div>
        </section>
        <img
          className="h-0 md:h-[500px] mx-auto my-auto object-contain"
          src={phone}
          alt=""
        ></img>
      </div>
      <div className="px-20 flex flex-col md:grid md:grid-cols-4 gap-5 justify-between text-center md:text-left font-medium">
        <section className="">
          <h2 className="font-bold text-lg text-primary">CAR RENTAL</h2>
          <p className="my-3 text-sm">
            We offer a big range of vehicles for all your driving needs, we have
            the perfect car for your needs
          </p>
          <h5 className="text-sm">123-456-7891</h5>
          <h5 className="text-sm">velocity@gmail.com</h5>
        </section>
        <section className="w-fit mx-auto">
          <h2 className="font-bold text-lg mb-3 text-primary">COMPANY</h2>
          <div className="text-sm grid gap-2">
            <h5>India</h5>
            <h5>Careers</h5>
            <h5 id="Contact">Mobile</h5>
            <h5>Blog</h5>
            <h5>How we work</h5>
          </div>
        </section>
        <section className="">
          <h2 className="font-bold text-lg mb-3 text-primary">WORKING HOURS</h2>
          <div className="text-sm grid gap-2">
            <h2>Mon - Fri; 9:00AM - 9:00PM</h2>
            <h5>Sat 9:00AM - 19:00PM</h5>
            <h5>Sun Closed</h5>
          </div>
        </section>
        <section>
          <h2 className="font-bold text-lg mb-3 text-primary">SUBSCRIPTION</h2>
          <div className="text-sm grid gap-2">
            <h5>Subscribe your e-mail address for latest news and updates</h5>
            <input
              className="text-center"
              placeholder="Enter Email Address"
            ></input>
            <br></br>
            <button className="bg-primary py-2 text-secondary">Submit</button>
          </div>
        </section>
      </div>
    </div>
  );
};
