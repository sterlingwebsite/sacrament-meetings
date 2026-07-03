import Link from 'next/link';
import MeetingCard from '@/components/MeetingCard';
import { SacramentMeeting } from '@/lib/types';

export default async function MeetingsPage() {
  const res = await fetch('http://localhost:3000/api/meetings', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <div className="text-center p-6 text-red-500 font-semibold">
        Failed to load sacrament meeting configurations.
      </div>
    );
  }

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <main className="space-y-6">
      <header className="flex justify-between items-center print:hidden">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Scheduled Services
        </h1>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {meetings.length} Total Programs
        </span>
      </header>

      {meetings.length === 0 ? (
        <p className="text-slate-500 text-sm">No scheduled meetings found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {meetings.map((meeting) => (
            <Link 
              key={meeting.id} 
              href={`/meetings/${meeting.id}`}
              className="transition transform hover:-translate-y-0.5"
            >
              <MeetingCard meeting={meeting} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
