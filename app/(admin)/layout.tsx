import React from 'react';

export default function AdminGroupFolderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-layout-wrapper w-full">
      {children}
    </div>
  );
}
