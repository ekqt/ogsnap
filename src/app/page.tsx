import { Button } from "@components/button";
import { ProseH1, ProseLead } from "@components/typography";
import { baseMetadata } from "@config/meta";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = baseMetadata;

export default function Home() {
  return (
    <div className="py-28 md:py-32 grid place-content-center md:text-center gap-2">
      <ProseH1 className="mt-0 text-4xl md:text-5xl lg:text-6xl">
        Build Engaging Images fast with Dynamic Image Generation
      </ProseH1>
      <ProseLead>
        Transform your visual content with dynamic image generation
      </ProseLead>
      <div className="py-4 flex md:flex-row flex-col items-center justify-center gap-2">
        <Link className="w-full md:w-fit" href="https://github.com/ekqt/ogsnap">
          <Button>Visit GitHub</Button>
        </Link>
        <Link className="w-full md:w-fit" href="/templates">
          <Button variant="link">
            Go to Templates <span aria-hidden="true">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
