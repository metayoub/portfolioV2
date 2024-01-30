import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineUser,
} from "react-icons/hi2";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

const Header = () => {
  const menu = [
    {
      name: "About",
      href: "#about",
      icon: HiOutlineUser,
    },
    {
      name: "Experience",
      href: "#experience",
      icon: HiOutlineBriefcase,
    },
    {
      name: "Eduction",
      href: "#education",
      icon: HiOutlineAcademicCap,
    },
    {
      name: "Skills",
      href: "#skill",
      icon: HiOutlineDesktopComputer,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: HiOutlineDeviceMobile,
    },
  ];
  return (
    <div className="w-full sticky top-0 z-50 flex p-4 justify-center">
      <div className="w-full flex justify-center rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <nav className="flex w-full justify-evenly">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md  "
            >
              <span className="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-black transition dark:hover:text-gray-100">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
