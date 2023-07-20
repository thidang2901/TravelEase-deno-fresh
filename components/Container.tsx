import { JSX } from "preact";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Container({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pt-24 pb-16">
      {children}
    </div>
  );
}
