import { JSX } from "preact";

export function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <div className="max-w-md px-4 mx-auto mt-12">
      {props.label && (
        <label for={props.id} className="block py-2 text-gray-500">
          {props.label}
        </label>
      )}
      <div className="flex items-center text-gray-400 border rounded-md">
        <input
          {...props}
          label=""
          id={props.id}
          className="w-full p-2.5 ml-2 bg-transparent outline-none"
        />
      </div>
    </div>
  );
}
