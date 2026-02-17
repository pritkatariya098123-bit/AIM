// import React from 'react'
import Header from "./Component/Header"
import Sidebar from "./Component/Sidebar"

export default function Layout() {
    return (
        <div className="min-h-screen w-screen bg-gray-900">
            <Header />
            <Sidebar />
        </div>
    )
}
