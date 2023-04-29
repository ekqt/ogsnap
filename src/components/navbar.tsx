import Link from "next/link";
import { ProseH3 } from "./Typography";
import { Button } from "./Button";
import { navigation } from "src/config/navigation";

export function Navbar() {
  return (
    <div className="px-6 pt-12 pb-2 ">
      <nav className="max-w-4xl mx-auto grid">
        <Link href="/">
          <ProseH3 className="mt-0 font-extrabold flex items-center justify-center w-fit gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 lg:w-8 lg:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            OG Snap
          </ProseH3>
        </Link>
        <section className="flex justify-end flex-wrap pt-4 sm:pt-0">
          {navigation.map(({ label, href }, key) => (
            <Link key={key} href={href}>
              <Button className="px-2 py-2 opacity-80 h-fit" variant="link">
                {label}
              </Button>
            </Link>
          ))}
        </section>
      </nav>
    </div>
  );
}
