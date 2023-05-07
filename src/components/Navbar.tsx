"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { navigation } from "src/config/navigation";
import { Logo } from "./Logo";
import { SideNav } from "./Sidenav";
import { GitHubIcon } from "./icons/GitHubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { MenuIcon } from "./icons/MenuIcon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="px-6 pt-12 pb-2">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex gap-x-9 items-center">
            <Link className="w-fit" href="/">
              <Logo />
            </Link>
            <section className="justify-end flex-wrap hidden md:flex">
              {navigation.map(({ label, href }, key) => (
                <Link key={key} href={href} tabIndex={-1}>
                  <Button variant="link" className="px-3">
                    {label}
                  </Button>
                </Link>
              ))}
            </section>
          </div>
          <div className="flex gap-x-2 items-center">
            <section className="hidden md:flex gap-x-1 items-center">
              <Link href={"https://github.com/ekqt/opengraphui"} tabIndex={-1}>
                <Button variant={"ghost"} className="w-fit p-2">
                  <GitHubIcon />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={"https://hectorsosa.me/twitter"} tabIndex={-1}>
                <Button variant={"ghost"} className="w-fit p-2">
                  <TwitterIcon />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </section>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              className="w-fit p-2 md:hidden"
            >
              <MenuIcon />
            </Button>
          </div>
        </nav>
      </div>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
