export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1200px] mx-auto relative px-[60px] box-border max-xs:px-[6px]">
      {children}
    </section>
  );
}
