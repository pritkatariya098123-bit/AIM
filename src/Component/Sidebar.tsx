// import React from 'react'

import { motion } from "framer-motion";
import { useTheme } from "../assets/themes/Themes";

export default function Sidebar() {
  const { isDark } = useTheme()
  return (
    <motion.div
      style={{
        height: 'calc(100vh - 64px)'
      }}
      className={`${isDark ? 'bg-gray-100' : 'bg-gray-800'}absolute left-0 top-16 z-50 w-50 border-r border-gray-500 shadow-lg flex flex-col items-center p-2 pt-3.5`}
    >
      <motion.div
        className={`${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100'} w-full select-none font-bold text-lg font h-11 shadow-lg rounded-2xl flex justify-center items-center`}
      >
        Populer
      </motion.div>
    </motion.div>
  )
}
