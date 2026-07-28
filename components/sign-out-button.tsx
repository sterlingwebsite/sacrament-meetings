import { signOut } from '@/auth';

export function SignOutButton() {
  return (
    <form 
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button 
        type="submit"
        className="flex h-9 items-center justify-center rounded-lg px-4 text-sm font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-400 active:scale-95"
      >
        Sign Out
      </button>
    </form>
  );
}
