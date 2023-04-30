export const SocialComponent = ({
  username,
  icon,
}: {
  username: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
      }}
    >
      {icon}
      <span
        style={{
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        {username}
      </span>
    </div>
  );
};
