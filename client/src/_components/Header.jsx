import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/jms_logo.jpg";
import Dashbord from "./Dashbord";
import Login from "./Login";
import Logout from "./Logout";

const Header = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto h-24  flex items-center justify-between overflow-hidden  ">
                <img
                    src={logo}
                    className="h-[70px] w-100px object-contain"
                    alt=""
                />
                <ul className="hidden md:flex items-center space-x-8 text-[18px] cursor-pointer">
                    <Link to={"/"}>
                        <li>Home</li>
                    </Link>

                    <Link to={"/notes"}>
                        <li>Notes</li>
                    </Link>
                </ul>
                <div className="flex items-center space-x-4 cursor-pointer">
                    <button className="md:hidden">
                        <MdMenu size={35} />
                    </button>

                    <span>
                        <Login />
                    </span>
                    <span>
                        <Logout />
                    </span>
                    <button>
                        <Dashbord />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
