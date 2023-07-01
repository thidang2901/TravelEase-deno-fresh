import { contacts } from "@/libs/constants/layouts.ts";

export function Footer() {
  return (
    <footer className="w-full py-5">
      <div className="flex items-center justify-center gap-6 text-gray-500">
        <p className="text-lg">© Thi Dang 2023</p>
        <div className="flex gap-3 text-3xl">
          {contacts.map((item) => {
            const { Icon } = item;
            return (
              <a id={item.id} href={item.url}>
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
