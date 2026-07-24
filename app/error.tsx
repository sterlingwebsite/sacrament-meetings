"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalMeetingsError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Caught Unhandled Route Error:", error);
  }, [error]);

  return (
    <main className="max-w-xl mx-auto py-16 px-4 text-center">
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5">
        <div className="w-12 h-12 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center mx-auto text-xl font-bold">
          ⚠️
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Something went wrong!
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            An unexpected error occurred while processing the sacrament meeting agenda records.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto h-10 px-4 inline-flex items-center justify-center rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700 transition cursor-pointer"
          >
            Try Again
          </button>
          
          <Link
            href="/meetings"
            className="w-full sm:w-auto h-10 px-4 inline-flex items-center justify-center rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            Back to Meetings List
          </Link>
        </div>
      </div>
    </main>
  );
}
