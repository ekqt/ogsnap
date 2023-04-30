import Link from "next/link";
import { ProseH3 } from "./Typography";
import { Button } from "./Button";
import { navigation } from "src/config/navigation";

export function Navbar() {
  return (
    <div className="px-6 pt-12 pb-2 ">
      <nav className="max-w-4xl mx-auto grid">
        <Link className="w-fit" href="/">
          <ProseH3 className="mt-0 font-extrabold flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            </svg>
            OpenGraph
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
