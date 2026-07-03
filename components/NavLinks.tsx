'use strict';
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
    <nav className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href === '/meetings' && pathname.startsWith('/meetings/'));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
              isActive ? 'text-blue-800 font-bold underline underline-offset-4' : 'text-gray-600'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
