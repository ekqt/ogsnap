/* eslint-disable @next/next/no-img-element */
import { ImageResponse, type NextRequest } from "next/server";
import { HrefComponent } from "src/library/components/HrefComponent";
import { GitHubIcon } from "src/library/components/Icons/GitHubIcon";
import { TwitterIcon } from "src/library/components/Icons/TwitterIcon";
import { SocialComponent } from "src/library/components/SocialComponent";
import { TagComponent } from "src/library/components/TagComponent";
import { TitleComponent } from "src/library/components/TitleComponent";

export const config = {
  runtime: "edge",
};

type ImageComponentProps = {
  path: string;
  title: string;
  hasTags: boolean;
};

const ImageComponent = ({ path, title, hasTags }: ImageComponentProps) => {
  return (
    <div
      style={{
        fontFamily: '"Inter"',
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "60px",
        textAlign: "center",
        color: "#f8fafc",
        backgroundColor: "#1e293b",
      }}
    >
      {/* Blue Blob */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 300,
          backgroundColor: "#80afff",
          filter: "blur(90px)",
          opacity: "0.5",
        }}
      ></div>
      {/* Purple Blob */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 300,
          top: "30%",
          left: "40%",
          backgroundColor: "#9089fc",
          filter: "blur(90px)",
          opacity: "0.5",
        }}
      ></div>
      {/* Plus Grid */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 300,
          top: "-26%",
          left: "64%",
          opacity: "0.5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: "60px",
          left: "60px",
        }}
      >
        <HrefComponent baseUrl="ogsnap.io" path={path} />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: `${path && hasTags ? "flex-start" : "center"}`,
          justifyContent: `${path && hasTags ? "flex-end" : "center"}`,
          gap: "16px",
        }}
      >
        <TitleComponent
          title={title}
          textAlign={path && hasTags ? "left" : "center"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
          {path && hasTags && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
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
          )}
        </div>
      </div>
    </div>
  );
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? String(searchParams.get("title")?.slice(0, 100))
      : "OpenGraph";

    const hasPath = searchParams.has("path");
    const path = hasPath ? String(searchParams.get("path")?.slice(0, 100)) : "";

    const hasTags = searchParams.has("tags");

    const interMedium = await fetch(
      new URL("../../../public/Inter-Medium.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const interBold = await fetch(
      new URL("../../../public/Inter-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <ImageComponent path={path} title={title} hasTags={hasTags} />,
      {
        debug: false,
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interMedium,
            style: "normal",
            weight: 500,
          },
          {
            name: "Inter",
            data: interBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
