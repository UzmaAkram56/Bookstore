import React, { useState } from "react";
import axios from "axios";
import banner from "../../public/banner.png";

function Banner() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4001/subscribe", {
        email,
      });

      if (res.status === 201) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } 
    } catch (error) {
      if (error.response?.status === 409) {
        setMessage("Already subscribed!");
      } else {
        setMessage("Something went wrong.");
      }
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2">
          <div className="space-y-12 mt-12 md:mt-32">
            <h1 className="text-4xl font-bold">
              Hello, Welcome Here to learn Something{" "}
              <span className="text-blue-800"> New Everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              at nihil, laboriosam quam omnis tempore? Nulla necessitatibus, at
              iure etttagsh.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
            >
              <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              {message && (
                <p
                  className={`text-sm mt-2 ${
                    message === "Something went wrong."
                      ? "text-red-600 dark:text-red-400"
                      : "text-green-600 dark:text-green-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <button className="btn btn-primary mt-4 hover:scale-110">Get Started</button>
            </form>
          </div>
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2 px-12 mt-32">
          <img
            src={banner}
            alt="image here"
            className="md:w-[530px] md:h[440px] md:ml-12"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
