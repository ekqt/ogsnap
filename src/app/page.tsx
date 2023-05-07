import { Button } from "@components/Button";
import { ProseH1, ProseLead } from "@components/Typography";
import { baseMetadata } from "@config/meta";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = baseMetadata;

export default function Home() {
  return (
    <div className="py-28 md:py-32 grid place-content-center sm:text-center gap-2">
      <ProseH1 className="mt-0 text-4xl md:text-5xl lg:text-6xl">
        Build engaging Open Graph images faster
      </ProseH1>
      <ProseLead>
        Level up your content with dynamic image generation using our pre-built
        components and templates
      </ProseLead>
      <div className="py-4 flex sm:flex-row flex-col items-center justify-center gap-2">
        <Link
          className="w-full sm:w-fit"
          href="https://github.com/ekqt/ogsnap"
          tabIndex={-1}
        >
          <Button>Visit GitHub</Button>
        </Link>
        <Link className="w-full sm:w-fit" href="/components" tabIndex={-1}>
          <Button variant="link">
            Go to Components <span aria-hidden="true">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
