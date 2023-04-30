export const TitleComponent = ({
  title,
  textAlign = "left",
  fontSize = "62px",
}: {
  title: string;
  textAlign?: "left" | "center";
  fontSize?: React.CSSProperties["fontSize"];
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
          fontSize,
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
