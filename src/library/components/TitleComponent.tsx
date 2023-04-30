export const TitleComponent = ({
  title,
  textAlign = "left",
}: {
  title: string;
  textAlign?: "left" | "center";
}) => {
  return (
    <div
      style={{
        display: "flex",
        paddingRight: `${textAlign === "left" ? "120px" : "0"}`,
        textAlign: `${textAlign === "left" ? "start" : "center"}`,
        paddingTop: `${textAlign === "left" ? "0" : "24px"}`,
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          lineHeight: 1,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        {title}
      </h1>
    </div>
  );
};
