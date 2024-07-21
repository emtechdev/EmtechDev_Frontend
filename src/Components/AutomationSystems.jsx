import React from 'react'
import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";

function AutomationSystems() {
    return (
        <>
            <Navbar />
            <Navbar_second />
            <div className="container mx-auto">
                <h1
                    className="pb-3 mx-4 mt-5 font-open-sans text-[34px]">
                    Automation Systems</h1>
            </div>
        </>
    )
}

export default AutomationSystems