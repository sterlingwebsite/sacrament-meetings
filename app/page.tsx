import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-20 animate-fadeIn">
      <div className="grid gap-12 lg:grid-cols-2 items-center w-full">
        
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wide">
            📅 Ward Administration Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Simplify Your Weekly Sacrament Planning
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
            Efficiently manage agendas, track ward business, organize speakers, and generate beautifully formatted print programs for ward members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Link
              href="/meetings/current"
              className="flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/30 active:scale-95"
            >
              View Current Program
            </Link>
            {/* Updated the button label below from 'Browse Meeting Archives' to 'All Meetings' */}
            <Link
              href="/meetings"
              className="flex h-12 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 font-semibold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              All Meetings
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <Image
              src="/chapel.jpg" 
              alt="An LDS chapel"
              fill
              priority
              className="object-cover transition-opacity duration-300"
              sizes="(max-w-768px) 100vw, 450px"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
