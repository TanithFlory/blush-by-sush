export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1200px] mx-auto relative px-[90px] box-border">
      {children}
    </section>
  );
}
