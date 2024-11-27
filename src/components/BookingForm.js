import React from "react";

export const BookingForm = () => {
  const data = [
    {
      id: 1,
      url: "https://img.icons8.com/?size=100&id=59751&format=png&color=FD7E14",
      title: "Select your car",
      placeholder: "Select your car type",
      type: "select",
    },
    {
      id: 2,
      url: "https://img.icons8.com/?size=100&id=7880&format=png&color=FD7E14",
      title: "Pick-up",
      placeholder: "Select pick up location",
      type: "",
    },
    {
      id: 3,
      url: "https://img.icons8.com/?size=100&id=7880&format=png&color=FD7E14",
      title: "Drop-of",
      placeholder: "Select drop off location",
      type: "",
    },
    {
      id: 4,
      url: "https://img.icons8.com/?size=100&id=16152&format=png&color=FD7E14",
      title: "Pick-up",
      placeholder: "Select drop off location",
      type: "date",
    },
    {
      id: 5,
      url: "https://img.icons8.com/?size=100&id=16152&format=png&color=FD7E14",
      title: "Drop-of",
      type: "date",
    },
  ];
  return (
    <div id="BookingForm" className="mt-20 px-20">
      <h1 className=" text-center text-primary text-xl font-bold md:text-left underline underline-offset-4">
        {" "}
        BOOK A CAR
      </h1>
      <form
        onSubmit={() => {
          let res = window.confirm("Car is available, clisk OK to proceed");
          res ? alert("Thank you for booking") : alert("Bokking canceled");
        }}
        className="p-10 grid grid-flow-row gap-8 justify-center md:grid-cols-3 md:justify-around md:gap-5"
      >
        {data.map((d) => {
          return (
            <div key={d.id}>
              <label
                className="flex gap-2 items-center text-sm"
                htmlFor="carTpe"
              >
                <img className="w-5 h-4" src={d.url} alt="" />
                {d.title}
                <img
                  className="w-1.5 h-1.5 mb-2"
                  src="https://img.icons8.com/?size=100&id=102962&format=png&color=FD7E14"
                  alt=""
                />
              </label>
              {d.type === "select" ? (
                <select className="px-7 py-0.5 text-xs w-fit">
                  <option>BMW</option>
                  <option>Audi</option>
                  <option>Benz</option>
                  <option>Honda</option>
                  <option>Nissan</option>
                </select>
              ) : (
                <input
                  className="w-60 px-7 py-0.5 text-xs"
                  id="carType"
                  placeholder={d.placeholder}
                  type={d.type}
                  required
                />
              )}
            </div>
          );
        })}
        <button className="py-2 text-xs bg-primary text-secondary self-center md:h-1/2 md:p-0">
          Search
        </button>
      </form>
    </div>
  );
};
