import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

function ContactusPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default ContactusPage;
