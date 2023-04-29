import { ReactNode } from "react";
import { HrefComponent } from "./HrefComponent";
import { SocialComponent } from "./SocialComponent";
import { TagComponent } from "./TagComponent";

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
    name: "All-purpose",
    description: "Components that could be used everywhere",
    previews: [
      {
        name: "Link with Icon",
        component: <HrefComponent baseUrl="ogsnap.io" path="components" />,
        filename: "HrefComponent.tsx",
      },
      {
        name: "Social with Icon",
        component: <SocialComponent username="ekqt" />,
        filename: "SocialComponent.tsx",
      },
      {
        name: "Tag with Background",
        component: (
          <TagComponent
            label="React"
            background="linear-gradient(to right, #4f46e5, #0891b2)"
          />
        ),
        filename: "TagComponent.tsx",
      },
    ],
  },
];
