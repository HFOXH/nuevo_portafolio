
import { FaCalendarDays } from "react-icons/fa6";
import Image from "next/image";

export default function TimelineItem({
  title,
  subtitle,
  date,
  logo,
}: {
  title: string;
  subtitle: string;
  date: string;
  logo?: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 py-1">

      {/* Timeline indicator */}
      <div className="flex flex-col items-center">
        <span className="w-3 h-3 bg-main rounded-full" />
        <span className="w-px flex-1 bg-main mt-1" />
      </div>

      {/* Content */}
      <div className="flex items-center gap-4">

        {/* Company / Institution logo */}
        {logo && (
          <div className="relative w-14 h-14 shrink-0 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <Image
              src={logo}
              alt={`${subtitle} logo`}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
        )}

        {/* Information */}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{title}</h3>

          <span className="text-neutral-600 dark:text-neutral-400 text-sm">
            {subtitle}
          </span>

          <div className="text-neutral-600 dark:text-neutral-400 text-xs mt-2 flex items-center gap-2">
            <FaCalendarDays />
            {date}
          </div>
        </div>

      </div>
    </div>
  );
}
