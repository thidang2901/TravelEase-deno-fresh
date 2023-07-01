import { FaUser } from "react-icons/fa";

import { routes } from "@/libs/constants/layouts.ts";

export function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-10 py-5">
        <a className="w-36" href="#">
          <img src="/logo.svg" />
        </a>

        <div class="flex font-semibold gap-14 text-md">
          {routes.map((item) => (
            <a
              id={item.id}
              className="transition-all duration-300 text-accentColor hover:text-primaryColor"
              href="#"
            >
              {item.name}
            </a>
          ))}
        </div>

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
