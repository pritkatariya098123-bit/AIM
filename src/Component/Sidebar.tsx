// import React from 'react'

import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
        style={{
            height: "calc(100vh - 70px)",
            top: '70px',
            width: '250px'
        }}
        className='absolute left-0 top-17.5 border-l'
    >

    </motion.div>
  )
}
