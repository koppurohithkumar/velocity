import React, { useState } from "react";
import car1 from "../assets/img/1.png";
import car2 from "../assets/img/2.png";
import car3 from "../assets/img/3.png";
import car4 from "../assets/img/4.png";
import car5 from "../assets/img/5.png";
import car6 from "../assets/img/6.png";

export const VehicleModel = () => {
  const cars = [
    {
      id: 1,
      carName: "Audi AI S-Line",
      image: car1,
      modle: "320",
      mark: "Audi",
      year: "2016",
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      rent: 4500,
    },
    {
      id: 2,
      carName: "Fortuner",
      image: car2,
      modle: "M14",
      mark: "Toyota",
      year: "2018",
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      rent: 4000,
    },
    {
      id: 3,
      carName: "Corolla Altis",
      image: car3,
      modle: "AM2",
      mark: "Corolla",
      year: "2021",
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      rent: 48500,
    },
    {
      id: 4,
      carName: "Hyundai Tucson",
      image: car4,
      modle: "Tucson",
      mark: "Hyundai",
      year: "2022",
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      rent: 4000,
    },
    {
      id: 5,
      carName: "KIA Rio",
      image: car5,
      modle: "R14",
      mark: "KIA",
      year: "2022",
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      rent: 3000,
    },
    {
      id: 6,
      carName: "Toyota Corolla",
      image: car6,
      modle: "C20",
      mark: "Toyota",
      year: "2018",
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      rent: 2500,
    },
  ];
  const [car, setCar] = useState(cars[0]);
  return (
    <div id="VehicleModel" className="mt-20 text-center">
      <section>
        <h1 className="font-bold text-xl text-primary underline underline-offset-4">
          VEHICLE MODELS
        </h1>
        <h1 className="my-2 text-4xl font-bold">Our rental fleet</h1>
        <p className="w-[50%] mx-auto text-xs md:text-sm">
          Choose from a variaty of our amazing vehicles to rent for your next
          adventure or bussiness trip
        </p>
      </section>
      <section className="p-10 flex flex-col gap-10 md:flex-row justify-center">
        <div className="md:basis-1/5 grid grid-flow-row gap-2 justify-center ">
          {cars.map((car) => (
            <li
              key={car.id}
              className="p-1 w-[300px] text-center list-none text-sm flex items-center justify-center hover:bg-primary hover:text-secondary"
              onClick={() => {
                setCar(car);
              }}
            >
              {car.carName}
            </li>
          ))}
        </div>
        <div className="md:basis-1/2 flex items-center">
          {car && (
            <img
              className="h-72 object-contain mx-auto"
              src={car.image || car1}
              alt=""
            ></img>
          )}
        </div>
        <div className="md:basis-1/4 flex flex-col">
          <div className="border-2 border-tertiary divide-y">
            <div>
              <h6 className="py-2 bg-primary text-secondary text-sm">
                <span className="font-bold text-base">Rs {car.rent} </span>/
                rent per day
              </h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>Model</h6>
              <h6>{car.modle}</h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>Mark</h6>
              <h6>{car.mark}</h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>Year</h6>
              <h6>{car.year}</h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>Doors</h6>
              <h6>{car.doors}</h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>AC</h6>
              <h6>{car.ac}</h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>Transmission</h6>
              <h6>{car.transmission}</h6>
            </div>
            <div className="grid grid-cols-2 divide-x text-xs font-semibold py-2">
              <h6>Fuel</h6>
              <h6>{car.fuel}</h6>
            </div>
          </div>
          <a
            href="#BookingForm"
            className="mt-3 py-2 bg-primary text-secondary text-base font-bold decoratio"
          >
            RESERVE NOW
          </a>
        </div>
      </section>
    </div>
  );
};
