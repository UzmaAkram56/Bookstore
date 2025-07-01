import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center items-center min-h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 space-y-10 text-center mt-12">
        <h1 className="text-4xl font-bold">
          About <span className="text-blue-800">My Bookstore</span>
        </h1>

        <p className="text-xl">
          Welcome to My Bookstore — your one-stop platform for discovering and
          reading great books. Our platform helps developers, students, and
          readers find valuable resources, free books, and premium reads across
          various categories.
        </p>

        <p className="text-xl">
          Our mission is to make quality books accessible to everyone — whether
          you're a student looking for free resources or a developer searching
          for the latest tech reads. We aim to build a global platform where
          learning never stops.
        </p>

        <Link to="/">
          <button className="btn btn-primary mt-4 hover:scale-110">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
