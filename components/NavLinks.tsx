'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'All Meetings', href: '/meetings' },
    { name: 'Current Week', href: '/meetings/current' },
  ];

  return (
    <div className="flex gap-2 bg-slate-200/60 dark:bg-slate-800/60 p-1 rounded-xl">
      {links.map((link) => {
        let isActive = false;

        if (link.href === '/') {
          // Highlight Home only when exactly on the root page
          isActive = pathname === '/';
        } else if (link.href === '/meetings/current') {
          // Highlight Current Week on its base link OR when looking at its target page (/meetings/1)
          isActive = pathname === '/meetings/current' || pathname === '/meetings/1';
        } else if (link.href === '/meetings') {
          // Highlight All Meetings ONLY on the index list page, not when viewing specific items
          isActive = pathname === '/meetings';
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
              isActive 
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
