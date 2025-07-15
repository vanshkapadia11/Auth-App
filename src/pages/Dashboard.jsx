import React from "react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get current user

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === "dark";
  });
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <div>
      <section className="container">
        <Navbar />

        <div className="flex justify-center items-center text-center mt-20">
          {user ? (
            <>
              <div className="">
                <div className="">
                  <h2 className="font-semibold text-xl uppercase">
                    Welcome, {user.displayName}
                  </h2>
                </div>
                <div className="">
                  <button
                    className=" text-sm font-semibold uppercase mt-8  p-3 ring-1 ring-inset dark:bg-red-500 dark:ring-[#2a2a2a] ring-[#e8e8e8] bg-red-300 rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <h2 className="font-semibold text-xl uppercase">
              Bro Who Are You ???
            </h2>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
