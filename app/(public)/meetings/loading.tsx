export default function MeetingsLoading() {
  return (
    <div className="w-full space-y-4 animate-pulse p-4">
      <div className="sr-only">Loading meeting schedule details...</div>
      
      <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-md" />
      
      <div className="space-y-3">
        <div className="h-24 w-full bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700" />
        <div className="h-24 w-full bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700" />
        <div className="h-24 w-full bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700" />
      </div>
    </div>
  );
}
