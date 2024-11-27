import React from "react";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";

export const Testimonials = () => {
  return (
    <div id="Testimonials" className="mt-20 md:p-20 text-center">
      <h3 className="text-xl font-bold text-primary underline underline-offset-4">
        REVIEWED BY PEOPLE
      </h3>
      <h2 className="my-3 text-2xl md:text-4xl font-bold">
        Client's Testimonials
      </h2>
      <p className="text-xs md:text-sm w-[70%] mx-auto">
        Descover the positive impact we've made on the our client's by reading
        through their testimonials, our client's have experirnced our service
        and results and they are eger to share their positive experience with
        you.
      </p>
      <section className="p-10 flex flex-col md:flex-row gap-16 md:gap-32 md:text-start">
        <div className="">
          <div>
            <h4 className="font-semibold">
              "We rented a car this website and had an amazing experience! The
              booking was easy and the rental rates were very affordable"
            </h4>
          </div>
          <div className="w-fit mx-auto md:mx-0 mt-8 flex items-center gap-5">
            <img
              className="w-14 h-14 object-fill rounded-full"
              src={p1}
              alt=""
            ></img>
            <section className="w-44">
              <h5 className="text-sm font-bold">Subash Chandra</h5>
              <h6 className="text-xs font-semibold">Hyderabad</h6>
            </section>
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/?size=100&id=qEe8u0P2pJcE&format=png&color=FD7E14"
              alt=""
            ></img>
          </div>
        </div>

        <div className="">
          <div>
            <h4 className="font-semibold">
              "We rented a car this website and had an amazing experience! The
              booking was easy and the rental rates were very affordable"
            </h4>
          </div>
          <div className="w-fit mx-auto md:mx-0 mt-8 flex items-center gap-5">
            <img
              className="w-14 h-14 object-fill rounded-full"
              src={p2}
              alt=""
            ></img>
            <section className="w-44">
              <h5 className="text-sm font-bold">Subash Chandra</h5>
              <h6 className="text-xs font-semibold">Hyderabad</h6>
            </section>
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/?size=100&id=qEe8u0P2pJcE&format=png&color=FD7E14"
              alt=""
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};
