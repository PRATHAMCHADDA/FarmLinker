import React, { useState, useRef, useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";
import { motion, AnimatePresence } from "framer-motion";

const WeatherWidget = () => {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef(null);

  // Close on outside click (except on toggle button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target) &&
        !event.target.closest("#weather-toggle-btn")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col items-end gap-2">
      {/* Weather Toggle Button (outside ref detection) */}
      <motion.button
        id="weather-toggle-btn"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-tr from-yellow-400 to-orange-300 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        title="Toggle Weather"
      >
        <WiDaySunny className="text-3xl drop-shadow-md" />
      </motion.button>

      {/* Weather Widget */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={widgetRef}
            key="weather-widget"
            initial={{ opacity: 0, scale: 0.8, y: -10, filter: "blur(8px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 160,
                damping: 18,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: -10,
              filter: "blur(6px)",
              transition: { duration: 0.2 },
            }}
            className="w-72 bg-white rounded-2xl shadow-xl border border-green-200 backdrop-blur-md"
          >
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <WiDaySunny className="text-yellow-400 text-5xl" />
                <div>
                  <h2 className="text-xl font-bold text-green-700 flex items-center gap-1">
                    ☀️ Sunny
                  </h2>
                  <p className="text-sm text-gray-500">Chandigarh, India</p>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-600 font-medium mt-2">
                <div className="flex flex-col items-center">
                  🌡️
                  <span className="mt-1 text-gray-800 font-semibold">28°C</span>
                  <span className="text-xs text-gray-500">Temp</span>
                </div>
                <div className="flex flex-col items-center">
                  💧
                  <span className="mt-1 text-gray-800 font-semibold">48%</span>
                  <span className="text-xs text-gray-500">Humidity</span>
                </div>
                <div className="flex flex-col items-center">
                  💨
                  <span className="mt-1 text-gray-800 font-semibold">14 km/h</span>
                  <span className="text-xs text-gray-500">Wind</span>
                </div>
              </div>

              <div className="text-center mt-2 text-xs text-gray-400">
                Last updated: just now
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeatherWidget;
