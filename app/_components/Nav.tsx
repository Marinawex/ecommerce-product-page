import logo from "../../public/images/logo.svg";
import MenuIcon from "../_components/icons/MenuIcon";
import Image from "next/image";
import SideMenu from "./SideMenu";

const Nav = () => {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <nav className="flex space-x-2 content-evenly items-start">
      <div className="self-center">
        <SideMenu
          triggerElement={
            <MenuIcon
              fillColor={
                "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer lg:hidden "
              }
            />
          }
        >
          {
            <ul className="flex flex-col gap-5 font-bold text-VeryDarkBlue ">
              {navLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          }
        </SideMenu>
      </div>
      <Image src={logo} alt="logo" className="self-center lg:self-start" />
      <ul className=" hidden lg:flex flex-row text-DarkGrayishBlue space-x-5 pl-8">
        {navLinks.map((link) => (
          <li className="hover:text-Black pb-4 border-transparent border-b-2 lg:hover:border-Orange cursor-pointer" key={link}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
