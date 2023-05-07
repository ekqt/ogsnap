import { navigation } from "@config/navigation";
import { Logo } from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./Sheet";
import Link from "next/link";
import { Button } from "./Button";
import { GitHubIcon } from "./icons/GitHubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const SideNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Sheet defaultOpen={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        size="full"
        className="bg-white border-none dark:bg-slate-800 text-slate-800 dark:text-white transition-colors py-[50px] px-6 grid"
      >
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <section className="flex flex-col py-4">
            {navigation.map(({ label, href }, key) => (
              <Link key={key} href={href} tabIndex={-1}>
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-fit w-fit text-xl"
                  variant="link"
                >
                  {label}
                </Button>
              </Link>
            ))}
          </section>
        </SheetHeader>
        <SheetFooter className="mt-auto">
          <section className="flex justify-start gap-x-1 items-center">
            <Link href={"https://github.com/ekqt/opengraphui"} tabIndex={-1}>
              <Button variant={"ghost"} className="w-fit p-3 h-fit">
                <GitHubIcon className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={"https://hectorsosa.me/twitter"} tabIndex={-1}>
              <Button variant={"ghost"} className="w-fit p-3 h-fit">
                <TwitterIcon className="w-8 h-8" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </section>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
