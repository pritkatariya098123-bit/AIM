// import React from 'react'
import { motion } from 'framer-motion'
import Theme from '../assets/themes/Theme'
import React from 'react'

export default function Header() {
    const [profile, setProfile] = React.useState(false)

    const opens = () => {
        setProfile(true)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-17.5 bg-gray-800/45 text-white backdrop-blur-2xl flex items-center justify-between px-9 z-50"
        >
            <div className="text-lg font-bold select-none"> 🪄 AIM</div>
            <div
                className='flex items-center justify-between gap-6'
            >
                <Theme />
                <motion.div
                    onClick={opens}
                    className='w-40 h-11 rounded-lg border border-gray-700 cursor-pointer bg-gray-800 flex items-center justify-between p-3'
                >
                    <span className='border rounded-full p-1 border-gray-700'>👤</span>
                    <div
                        className='flex items-center justify-between gap-1'
                    >
                        <h4>NAME
                            <p className='text-[10px] text-gray-500'>super Admin</p>
                        </h4>
                        👇
                    </div>
                </motion.div>
                {profile === true ? (
                    <div
                        onClick={() => setProfile(false)}
                        className=' absolute top-0 left-0 w-screen h-screen'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className=' absolute right-10 top-20 w-90 h-100 rounded-4xl border border-gray-700 bg-gray-900 z-40'
                        >

                        </motion.div>
                    </div>

                ) : (
                    <motion.div className=' hidden'></motion.div>
                )}
            </div>

        </motion.div>
    )
}
