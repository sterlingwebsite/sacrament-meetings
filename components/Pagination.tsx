'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <nav 
      aria-label="Pagination Control Navigation" 
      className="flex items-center justify-center gap-4 py-2 print:hidden select-none"
    >
      {currentPage > 1 ? (
        <Link 
          href={createPageURL(currentPage - 1)}
          className="flex h-9 items-center px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 shadow-sm"
        >
          ← Previous
        </Link>
      ) : (
        <span className="flex h-9 items-center px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-semibold text-slate-700 dark:text-slate-300 cursor-not-allowed opacity-60">
          ← Previous
        </span>
      )}

      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 min-w-[90px] text-center">
        Page <strong className="text-slate-900 dark:text-slate-100 font-semibold">{currentPage}</strong> of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link 
          href={createPageURL(currentPage + 1)}
          className="flex h-9 items-center px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 shadow-sm"
        >
          Next →
        </Link>
      ) : (
        <span className="flex h-9 items-center px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-semibold text-slate-600 dark:text-slate-400 cursor-not-allowed opacity-60">
          Next →
        </span>
      )}
    </nav>
  );
}
