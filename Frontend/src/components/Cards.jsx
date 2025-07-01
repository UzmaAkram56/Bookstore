import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card bg-base-100 w-92 h-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="bg-blue-100">
            <img src={item.image} alt="img here"   className=" object-cover mix-blend-multiply"  />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-primary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline cursor-pointer  px-2 py-1 rounded-full border-[2px] hover:border-transparent hover:bg-blue-500 hover:text-white duration-200 border-gray-600 dark:border-white  dark:hover:border-black ">
                ${item.price}
              </div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:border-transparent hover:bg-blue-500 hover:text-white duration-200 border-gray-600 dark:border-white dark:hover:border-black">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
