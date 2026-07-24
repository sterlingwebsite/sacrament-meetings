import Link from 'next/link';

export default function GlobalMeetingNotFound() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4 text-center">
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl flex items-center justify-center mx-auto text-xl">
          🔍
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Sacrament Planner Not Found
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            The requested sacrament meeting planner entry does not exist or has been deleted from the system.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/meetings"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Return to Meetings Overview
          </Link>
        </div>
      </div>
    </main>
  );
}
