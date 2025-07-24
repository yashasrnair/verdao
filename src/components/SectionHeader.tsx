// components/SectionHeader.tsx

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-green-400">{title}</h1>
      <p className="text-lg text-gray-300">{subtitle}</p>
    </div>
  );
}
