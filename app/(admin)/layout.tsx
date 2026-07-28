import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

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
    <div className="admin-layout-wrapper w-full pt-4">
      <div className="admin-content-card">
        {children}
      </div>
    </div>
  );
}
