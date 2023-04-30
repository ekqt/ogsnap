import { ReactNode } from "react";
import { HrefComponent } from "./HrefComponent";
import { SocialComponent } from "./SocialComponent";
import { TagComponent } from "./TagComponent";
import { TitleComponent } from "./TitleComponent";
import { GitHubIcon } from "./Icons/GitHubIcon";
import { TwitterIcon } from "./Icons/TwitterIcon";

type Components = {
  type: string;
  name: string;
  description: string;
  previews: {
    name: string;
    component: ReactNode;
    filename: string;
  }[];
}[];

export const components: Components = [
  {
    type: "general",
    name: "The Basics",
    description: "Components that could be used everywhere",
    previews: [
      {
        name: "Title centered",
        component: (
          <TitleComponent
            title="A Powerful Open-Sourced Dynamic Image Generation Library"
            textAlign="center"
            fontSize={"52px"}
          />
        ),
        filename: "TitleComponent.tsx",
      },
      {
        name: "Title with left align",
        component: (
          <TitleComponent
            title="A Powerful Open-Sourced Dynamic Image Generation Library"
            fontSize={"52px"}
          />
        ),
        filename: "TitleComponent.tsx",
      },
      {
        name: "Link with Icon",
        component: <HrefComponent baseUrl="ogsnap.io" path="components" />,
        filename: "HrefComponent.tsx",
      },
      {
        name: "Social with Icon",
        component: (
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
        filename: "SocialComponent.tsx",
      },
      {
        name: "Tag with Background",
        component: (
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
        filename: "TagComponent.tsx",
      },
    ],
  },
];
