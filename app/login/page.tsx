import type { Metadata } from 'next';
import { LoginForm } from '@/components/login-form';

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in with your bishopric administration credentials to schedule services.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 animate-fadeIn">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 space-y-6">
        <div className="space-y-2 text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-xl">
            🔐
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Bishopric Sign In
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter your credentials to manage the sacrament schedule.
          </p>
        </div>
        
        <LoginForm />
      </div>
    </main>
  );
}
