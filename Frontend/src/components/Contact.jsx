import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loggedInUser = localStorage.getItem("Users");

    if (!loggedInUser) {
      toast.error("Please signup or login first to use the contact form.");
      navigate("/signup"); // 🔁 Redirect to signup
      return;
    }

    const contactInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await axios.post("http://localhost:4001/contact", contactInfo);
      console.log(res.data);
      toast.success("Message submitted successfully!");
      reset(); // ✅ Clear form after success
    } catch (error) {
      console.error("Error submitting contact:", error);
      if (error.response?.data?.message) {
        toast.error("Error: " + error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center items-center min-h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 space-y-10 text-center mt-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold">
          Contact <span className="text-blue-800">Us</span>
        </h1>

        {/* Paragraph */}
        <p className="text-xl">
          We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full dark:bg-slate-900 dark:text-white"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-sm text-red-500">Name is required</span>}

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full dark:bg-slate-900 dark:text-white"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-sm text-red-500">Email is required</span>}

          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-28 dark:bg-slate-900 dark:text-white"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <span className="text-sm text-red-500">Message is required</span>}

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-2">
            <button
              type="submit"
              className="btn btn-primary hover:scale-110"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            <Link to="/">
              <button type="button" className="btn btn-primary hover:scale-110">Back to Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
