import { contacts } from "@/libs/constants/layouts.ts";

export function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 flex justify-center w-full h-16 py-5 bg-gray-50">
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
