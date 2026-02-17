// import React from 'react'

import { motion } from "motion/react";
import React from "react";

interface ThemeProps {
    isDark?: boolean
}

export default function Theme({ isDark }: ThemeProps) {
    const [isDarkMode, setIsDarkMode] = React.useState(isDark || false)
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-15 h-9 bg-gray-800 flex justify-center items-center rounded-lg border border-gray-700"
        >
            <div
                className="w-10 h-5 bg-gray-900 rounded-full cursor-pointer"
                onClick={toggleTheme}
            >
                {isDarkMode ? (
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-4 bg-gray-800 rounded-full mt-0.5 ml-0.5 select-none flex justify-center items-center text-[14px] border border-gray-700"
                    >
                        ☀️
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-4 bg-gray-800 rounded-full mt-0.5 ml-0.5 select-none flex justify-center items-center text-[14px] border border-gray-700"
                    >
                        🌑
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}
