import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../assets/themes/Themes";
import Theme from "../assets/themes/Theme";

import { FaBarsProgress } from "react-icons/fa6";

export default function Header() {
  const { isDark } = useTheme();
  const [profile, setProfile] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${
        isDark
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-black"
      } w-full h-16 backdrop-blur-2xl shadow-lg border-b border-gray-500 flex items-center justify-between px-9 z-50`}
    >
      <div className="text-lg font-bold select-none"><FaBarsProgress/> AIMovie</div>

      <div className="flex items-center gap-6">
        <Theme/>

        <motion.div
          onClick={() => setProfile(true)}
          className={`w-40 h-11 rounded-lg border border-gray-700 cursor-pointer ${
            isDark ? "bg-gray-700" : "bg-white"
          } flex items-center justify-between p-3`}
        >
          <span className="border rounded-full p-1 border-gray-700">👤</span>

          <div className="flex items-center gap-1">
            <h4>
              NAME
              <p className="text-[10px] text-gray-500">Super Admin</p>
            </h4>
            👇
          </div>
        </motion.div>

        {profile && (
          <div
            onClick={() => setProfile(false)}
            className="absolute top-0 left-0 w-screen h-screen"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`absolute right-10 top-20 w-80 h-96 rounded-3xl border border-gray-700 ${
                isDark ? "bg-gray-900" : "bg-white"
              }`}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
