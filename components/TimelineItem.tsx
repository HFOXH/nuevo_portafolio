import { FaCalendarDays } from "react-icons/fa6";


export default function TimelineItem({
  title,
  subtitle,
  date,
}: {
  title: string;
  subtitle: string;
  date: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      
      <div className="flex flex-col items-center">
        <span className="w-3 h-3 bg-main rounded-full" />
        <span className="w-px flex-1 bg-main mt-1" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-neutral-400 text-sm">{subtitle}</span>
        <div className="text-neutral-500 text-xs mt-1 flex gap-2"><FaCalendarDays/>{date}</div>
      </div>
    </div>
  );
}
