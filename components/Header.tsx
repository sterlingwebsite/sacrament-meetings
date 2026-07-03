import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Header() {
  const displayDate = "Sunday, May 3, 2026";

  return (
    <header className="print:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="text-center sm:text-left">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <h1 className="text-xl font-bold text-blue-900 dark:text-blue-400 tracking-tight">
              Oak Hills Ward
            </h1>
          </Link>
          <p className="text-xs text-gray-500 dark:text-slate-400 font-medium mt-0.5">
            {displayDate}
          </p>
        </div>

        <NavLinks />

      </div>
    </header>
  );
}
