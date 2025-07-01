import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";

function ContactusPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <SearchResults />
      </div>
      <Footer />
    </>
  );
}

export default ContactusPage;
