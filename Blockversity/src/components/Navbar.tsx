import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  logIn,
  currentUser
} from "../Flow/actions";
import logo from "../assets/flow-logo.png";

interface NavBarItemProps {
  title: string;
  classprops: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    currentUser().subscribe(setUser);
  }, []);


  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <h1>User's Address: {user?.addr}</h1>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Signin", "Fetch addresses", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <button
          type="button"
          onClick={() => logIn()}
          className="flex flex-row justify-center items-center my-5 bg-[#0f9c45] p-3 rounded-full cursor-pointer hover:bg-[#76ef4e]"
        >
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            Connect Wallet
          </p>
        </button>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Flow", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
