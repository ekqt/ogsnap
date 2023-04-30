export const TagComponent = ({
  label,
  background,
}: {
  label: string;
  background: React.CSSProperties["background"];
}) => {
  return (
    <span
      style={{
        background,
        padding: "9px 18px",
        borderRadius: "18px",
        fontSize: "16px",
        fontWeight: 700,
        color: "#f8fafc",
        textTransform: "uppercase",
        letterSpacing: "0",
        opacity: "0.9",
      }}
    >
      {label}
    </span>
  );
};
