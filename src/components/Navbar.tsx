import Link from "next/link";
import { Button } from "./Button";
import { navigation } from "src/config/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <div className="px-6 pt-12 pb-2 ">
      <nav className="max-w-5xl mx-auto grid">
        <Link className="w-fit" href="/">
          <Logo />
        </Link>
        <section className="flex justify-end flex-wrap pt-4 sm:pt-0">
          {navigation.map(({ label, href }, key) => (
            <Link key={key} href={href} tabIndex={-1}>
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
