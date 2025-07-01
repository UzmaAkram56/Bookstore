import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      //for calling api
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 dark:bg-slate-900 dark:text-white  ">
        <div className=" items-center justify-center text-center  ">
          <h1 className="text-2xl  md:text-4xl ">
            Thank you for joining us — we're pleased to have you{" "}
            <span className="text-blue-700">Here!!! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur doloremque corrupti et quos provident eum assumenda
            tempore beatae deserunt commodi at quibusdam expedita officiis,
            perferendis cupiditate cum, voluptatibus aut nemo harum blanditiis!
            Blanditiis, officiis, quas rem, consequuntur harum adipisci sequi
            expedita ipsa a eos ullam error ea asperiores quia placeat dolor
            tempore labore esse ut.
          </p>
          <Link to="/">
            <button className=" mt-6 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 text-white hover:scale-110">
              Back
            </button>
          </Link>
          <div className="mt-12  grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
