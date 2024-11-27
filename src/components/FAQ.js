import React, { useState } from "react";

export const FAQ = () => {
  const [faq, setFaq] = useState({
    q1: false,
    q2: false,
    q3: false,
  });
  return (
    <div id="Faq" className="mt-20">
      <section className="text-center">
        <h5 className="text-xl font-bold text-primary underline underline-offset-4">
          FAQ
        </h5>
        <h2 className="my-3 text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="w-[70%] text-sm mx-auto">
          Frequently Asked Questions about the car rental booking process on our
          website answers to common concerns and inquiries
        </p>
      </section>
      <section className="md:w-[70%] mx-auto p-10 flex flex-col gap-3">
        <div>
          <h6
            onClick={() => setFaq({ q1: true, q2: false, q3: false })}
            className="p-2 flex items-center justify-between hover:bg-primary hover:text-secondary"
          >
            1. What is special about comparing rental car deals?
            <img
              className="w-4 h-4"
              src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000"
              alt=""
            />
          </h6>
          {faq.q1 === true && (
            <p className="p-2 text-sm">
              comparing rental car details is important as it helps find the
              best deal that fits your budget and requirements ensuring you get
              the most value for your money, By comparing various options you
              can find best deals that offer lower prices
            </p>
          )}
        </div>
        <div>
          <h6
            onClick={() => setFaq({ q1: false, q2: true, q3: false })}
            className="p-2 flex items-center justify-between hover:bg-primary hover:text-secondary"
          >
            1. What is special about comparing rental car deals?
            <img
              className="w-4 h-4"
              src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000"
              alt=""
            />
          </h6>
          {faq.q2 === true && (
            <p className="p-2 text-sm">
              comparing rental car details is important as it helps find the
              best deal that fits your budget and requirements ensuring you get
              the most value for your money, By comparing various options you
              can find best deals that offer lower prices
            </p>
          )}
        </div>
        <div>
          <h6
            onClick={() => setFaq({ q1: false, q2: false, q3: true })}
            className="p-2 flex items-center justify-between hover:bg-primary hover:text-secondary"
          >
            1. What is special about comparing rental car deals?
            <img
              className="w-4 h-4"
              src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000"
              alt=""
            />
          </h6>
          {faq.q3 === true && (
            <p className="p-2 text-sm">
              comparing rental car details is important as it helps find the
              best deal that fits your budget and requirements ensuring you get
              the most value for your money, By comparing various options you
              can find best deals that offer lower prices
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
