import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function ContactusPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default ContactusPage;
