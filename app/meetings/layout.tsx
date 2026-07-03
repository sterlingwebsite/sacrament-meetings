import React from 'react';

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <div className="print:hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Sacrament Meeting Archives
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select a weekly program block below to review, configure, or print physical flyers.
          </p>
        </div>
      </div>
      
      <div>
        {children}
      </div>
    </div>
  );
}
