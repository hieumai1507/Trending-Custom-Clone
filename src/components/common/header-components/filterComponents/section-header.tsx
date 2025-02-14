interface SectionHeaderProps {
  title: string;
  count?: number;
}

export function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-[24px] font-semibold">{title}</h3>
      {typeof count !== "undefined" && (
        <span className="text-sm text-gray-500">({count})</span>
      )}
    </div>
  );
}
