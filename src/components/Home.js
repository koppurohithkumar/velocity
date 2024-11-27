import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { BookingForm } from "./BookingForm";
import { BookingSteps } from "./BookingSteps";
import { VehicleModel } from "./VehicleModel";
import { About } from "./About";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div id="Home" className="font-poppins tracking-wide leading-relaxed">
      <Navbar />
      <Hero />
      <BookingForm />
      <BookingSteps />
      <VehicleModel />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};
