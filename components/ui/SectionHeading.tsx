type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.35em] text-black/45">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-light leading-tight md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-6 text-black/62 md:text-lg md:leading-8">{description}</p>
      )}
    </div>
  );
}
