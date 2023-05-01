import { ReactNode } from "react";
import { HrefComponent } from "./HrefComponent";
import { SocialComponent } from "./SocialComponent";
import { TagComponent } from "./TagComponent";
import { TitleComponent } from "./TitleComponent";
import { GitHubIcon } from "./Icons/GitHubIcon";
import { TwitterIcon } from "./Icons/TwitterIcon";

type Components = {
  name: string;
  description: string;
  componentPreviews: {
    name: string;
    filename: string;
    preview: ReactNode;
  }[];
}[];

export const components: Components = [
  {
    name: "The Basics",
    description: "Components that could be used everywhere",
    componentPreviews: [
      {
        name: "Dynamic Title",
        filename: "TitleComponent.tsx",
        preview: (
          <TitleComponent title="A Powerful Open-Sourced Dynamic Image Generation Library" />
        ),
      },
      {
        name: "Link with Icon",
        filename: "HrefComponent.tsx",
        preview: <HrefComponent baseUrl="ogsnap.io" path="components" />,
      },
      {
        name: "Social with Icon",
        filename: "SocialComponent.tsx",
        preview: (
          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <SocialComponent
              username="@ekqt"
              icon={
                <GitHubIcon
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              }
            />
            <SocialComponent
              username="@_ekqt"
              icon={
                <TwitterIcon
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              }
            />
          </div>
        ),
      },
      {
        name: "Tag with Background",
        filename: "TagComponent.tsx",
        preview: (
          <div
            style={{
              display: "flex",
              gap: "9px",
            }}
          >
            <TagComponent
              label="React"
              background="linear-gradient(to right, #4f46e5, #0891b2)"
            />
            <TagComponent
              label="Next"
              background="linear-gradient(to right, #ca8a04, #dc2626)"
            />
          </div>
        ),
      },
    ],
  },
];
