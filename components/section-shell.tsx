export default function SectionShell({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`shell section-space ${className}`}>{children}</section>;
}
