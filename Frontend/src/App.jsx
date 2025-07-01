import React, { useEffect, useState } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ContactusPage from "./Contact us/ContactusPage";
import AboutusPage from "./Aboutus/AboutusPage";
import Search from "./Search/Search";
function App() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState("light"); // default

  // Read theme from localStorage
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);

    // Set or remove dark class on html tag
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white bg-white text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactusPage />}/>
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
