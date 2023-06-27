import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Input(
  props: JSX.HTMLAttributes<HTMLInputElement>,
  label: string,
) {
  return (
    <div className="max-w-md px-4 mx-auto mt-12">
      <label for="username" className="block py-2 text-gray-500">
        {label}
      </label>
      <div className="flex items-center text-gray-400 border rounded-md">
        <input
          {...props}
          disabled={!IS_BROWSER || props.disabled}
          type="text"
          placeholder="Sidi Dev"
          id="username"
          className="w-full p-2.5 ml-2 bg-transparent outline-none"
        />
      </div>
    </div>
  );
}
