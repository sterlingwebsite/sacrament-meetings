import Link from 'next/link';
import NavLinks from './NavLinks';
import { auth } from '@/auth';
import { SignOutButton } from './sign-out-button';

export default async function Header() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const displayDate = new Date().toLocaleDateString('en-US', options);

  return (
    <header className="print:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="text-center sm:text-left">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <h1 className="text-xl font-bold text-blue-900 dark:text-blue-400 tracking-tight">
              Oak Hills Ward
            </h1>
          </Link>
          <p 
            suppressHydrationWarning 
            className="text-xs text-gray-500 dark:text-slate-400 font-medium mt-0.5"
          >
            {displayDate}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <NavLinks />
          
          <div className="h-4 w-px bg-gray-200 dark:bg-slate-800 hidden sm:block" />

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 hidden md:inline max-w-[120px] truncate">
                {session?.user?.name}
              </span>
              <SignOutButton />
            </div>
          ) : (
            <Link 
              href="/login" 
              className="inline-flex h-8 items-center justify-center rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 px-3 text-xs font-semibold text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/30 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
