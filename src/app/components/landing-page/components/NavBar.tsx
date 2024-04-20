"use client"
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <span className="lg:hidden"  >

                {/* Toggle button for mobile */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    {isMenuOpen ? (
                        <IconX
                            size={24}
                            strokeWidth={2}
                           
                        />
                    ) : (

                        <IconMenu2
                            size={24}
                            strokeWidth={2}
                        
                        />
                    )}
                </button>
            </span>
            {/* Mobile menu */}
            <div className={`absolute top-[15%] left-0 w-full shadow-lg lg:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center py-5`}>
                <a href="#" className="py-2">Home</a>
                <a href="#" className="py-2">About</a>
                <a href="#" className="py-2">Contact</a>
                <button className="mt-4">Sign in</button>
                <button className="py-2 px-4 rounded text-white mt-2">Sign up</button>
            </div>
        </>
    )
}
export default NavBar