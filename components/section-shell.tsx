export default function SectionShell({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`shell section-space ${className}`}>
      {children}
    </section>
  );
}
