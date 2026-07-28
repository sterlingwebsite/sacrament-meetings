import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SignOutButton } from '@/components/sign-out-button';

export default async function AdminGroupFolderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="admin-layout-wrapper w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl border border-amber-200 dark:border-amber-950/40 bg-amber-50/50 dark:bg-amber-950/10 gap-3">
        <div className="space-y-0.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            Bishopric Administration Dashboard
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Logged in as: <span className="font-medium text-slate-900 dark:text-white">{session.user.name}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <SignOutButton />
        </div>
      </div>

      <div className="admin-content-card">
        {children}
      </div>
    </div>
  );
}
