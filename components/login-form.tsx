'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-1.5">
        <label 
          htmlFor="email" 
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Email Address
        </label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          placeholder="bishop@churchofjesuschrist.org"
          required 
          className="w-full h-11 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label 
          htmlFor="password" 
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Password
        </label>
        <input 
          id="password" 
          type="password" 
          name="password" 
          minLength={6} 
          placeholder="••••••••"
          required 
          className="w-full h-11 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <button 
        type="submit"
        disabled={isPending}
        className="w-full h-11 flex items-center justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all mt-2"
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Signing In...
          </span>
        ) : (
          'Sign In'
        )}
      </button>

      {errorMessage && (
        <div 
          role="alert" 
          className="flex items-center gap-2 p-3 text-sm rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 animate-shake"
        >
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
