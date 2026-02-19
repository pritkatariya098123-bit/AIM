// import React from 'react'
import { useTheme } from "./assets/themes/Themes"
import Header from "./Component/Header"
import Sidebar from "./Component/Sidebar"


export default function Layout() {
    const { isDark } = useTheme()
    return (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} min-h-screen w-screen`}>
            <Header />
            <Sidebar />
        </div>
    )
}
