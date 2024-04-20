import Link from "next/link";
import NavBar from "./NavBar";


const Header = () => {
    return (
        <header className="px-[5%] py-5  shadow-lg">
            <nav className="flex justify-between items-center">
                <span className="flex items-center gap-8">
                    <img src="./catmelogoapp.png" style={{ width: '100px' }} alt="catme"></img>
                    <span className="hidden lg:flex">
                        <ul className="flex gap-10">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </span>
                </span>
                <span className="hidden lg:flex items-center gap-10">
                    <Link href={'././app/signin'}>         
                            Sign in
                    </Link>
                    <Link  href={'./app/signup'} className=" py-2 px-4 rounded text-white">Sign up</Link>
                </span>
                <NavBar />
            </nav>
        </header >
    );
};

export default Header;
