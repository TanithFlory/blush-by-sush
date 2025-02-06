export default function VerticalObject({
  objectPosition,
}: {
  objectPosition: "left" | "right";
}) {
  return (
    <div
      className="bg-secondary w-[45px] h-full absolute"
      style={{
        left: objectPosition === "left" ? 0 : "auto",
        right: objectPosition === "right" ? 0 : "auto",
      }}
    ></div>
  );
}
