import { Button } from "@components/Button";
import { ProseH1, ProseLead } from "@components/Typography";
import { baseMetadata } from "@config/meta";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = baseMetadata;

export default function Home() {
  return (
    <div className="py-28 md:py-32 grid place-content-center md:text-center gap-2">
      <ProseH1 className="mt-0 text-4xl md:text-5xl lg:text-6xl">
        Build Engaging Open Graph Images Fast
      </ProseH1>
      <ProseLead>
        Level up your content with dynamic image generation using our pre-built
        components and templates
      </ProseLead>
      <div className="py-4 flex md:flex-row flex-col items-center justify-center gap-2">
        <Link className="w-full md:w-fit" href="https://github.com/ekqt/ogsnap">
          <Button>Visit GitHub</Button>
        </Link>
        <Link className="w-full md:w-fit" href="/components">
          <Button variant="link">
            Go to Components <span aria-hidden="true">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
