import Link from "next/link";
import { ProseH3 } from "./typography";
import { Button } from "./button";
import { navigation } from "src/config/navigation";

export function Navbar() {
  return (
    <div className="px-6 pt-12 pb-2 ">
      <nav className="max-w-4xl mx-auto grid">
        <Link href="/">
          <ProseH3 className="mt-0 font-extrabold">OG Snap</ProseH3>
        </Link>
        <section className="flex place-self-end">
          {navigation.map(({ label, href }, key) => (
            <Link key={key} href={href}>
              <Button className="px-2 opacity-80" variant="link">
                {label}
              </Button>
            </Link>
          ))}
        </section>
      </nav>
    </div>
  );
}
