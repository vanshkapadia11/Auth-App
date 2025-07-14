import React from "react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useAuth();
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
        <div className="flex justify-between items-center py-6 px-3">
          <div className="">
            <span className="material-symbols-rounded text-2xl font-semibold">
              360
            </span>
          </div>
          <div className="">
            <nav className="">
              <ul className="flex items-center text-sm font-semibold space-x-4 justify-center ring-1 ring-inset dark:bg-[#242424] dark:ring-[#2a2a2a] ring-[#e8e8e8] bg-[#f9f9f9] transition-all py-2 px-4 rounded-xl">
                <li>HOME</li>
                <li className="link">
                  <span
                    className="material-symbols-rounded text-lg font-semibold"
                    onClick={() => setIsDark(!isDark)}
                  >
                    {isDark ? "backlight_high" : "bedtime"}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex justify-center items-center text-center mt-20">
          {user ? (
            <h2 className="font-semibold text-xl uppercase">
              Welcome, {user.displayName}
            </h2>
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
