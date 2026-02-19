import { motion } from "motion/react";
import { useTheme } from "./Themes";

export default function Theme() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${isDark ? 'bg-gray-800': 'bg-gray-50'} w-15 h-9 shadow p-1 flex justify-center items-center rounded-lg border border-gray-700`}
    >
      <div
        className={`${isDark ? 'bg-gray-900': 'bg-gray-50   '}w-10 h-5 bg-gray-900 rounded-full cursor-pointer relative`}
        onClick={toggleTheme}
      >
        <motion.div
          animate={{ x: isDark ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 bg-gray-800 rounded-full mt-0.5 ml-0.5 flex justify-center items-center text-[14px] border border-gray-700"
        >
          {isDark ? "☀️" : "🌑"}
        </motion.div>
      </div>
    </motion.div>
  );
}
