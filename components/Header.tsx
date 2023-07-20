import { FaUser } from "react-icons/fa";

import { menus } from "@/libs/constants/layouts.ts";

type Props = {
  active: string;
};

export function Header({ active }: Props) {
  return (
    <header className="fixed top-0 z-50 flex justify-center w-full h-24 bg-gray-50">
      <div className="flex items-center justify-between w-full px-10">
        {/* Logo */}
        <a className="w-36" href="#">
          <img src="logo.svg" />
        </a>

        {/* Menu */}
        <div class="flex gap-14 text-md">
          {menus.map((menu) => (
            <a
              id={menu.id}
              href={menu.href}
              className={`transition-all duration-300 ease-in-out text-accentColor hover:text-primaryColor 
              ${(menu.id === active
                ? "border-b-2 border-accentColor hover:border-primaryColor"
                : "")}`}
            >
              {menu.name}
            </a>
          ))}
        </div>

        {/* User */}
        <div className="cursor-pointer">
          <FaUser
            size={25}
            className="text-red-500 transition-colors duration-300 hover:text-red-400 "
          />
        </div>
      </div>
    </header>
  );
}
