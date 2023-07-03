import { JSX } from "preact";
import { useState } from "preact/hooks";
import { FaSearch } from "react-icons/fa";

export default function SearchInput(
  props: JSX.HTMLAttributes<HTMLInputElement>,
) {
  const [message, setMessage] = useState<string>("");

  const handleClick = (event: JSX.TargetedMouseEvent<HTMLLabelElement>) => {
    console.log("search neee", { message });
  };

  const handleChange = (event: JSX.TargetedEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const handleKeyDown = (
    event: JSX.TargetedKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      console.log("enter neee", { message });
    }
  };

  return (
    <div className="min-w-[15rem] max-w-lg">
      <div className="flex items-center text-gray-400">
        <div className="relative w-full">
          <div className="absolute inset-y-0 right-0 flex items-center px-4">
            <label className="cursor-pointer" onClick={handleClick}>
              <FaSearch size={20} />
            </label>
          </div>
          <input
            {...props}
            className="w-full px-4 py-2 transition-all duration-200 ease-in-out border-2 outline-none rounded-3xl"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
