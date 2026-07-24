import Link from 'next/link';

export default function EditMeetingPlaceholderPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4 text-center">
      <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mx-auto text-xl">
          ✏️
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Edit Meeting — Coming in Week 04
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          The forms, update mutation handlers, and field population parameters needed to modify existing sacrament agendas will be built out next week.
        </p>
        <div className="pt-2">
          <Link
            href="/meetings"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            ← Back to Overview
          </Link>
        </div>
      </div>
    </main>
  );
}
