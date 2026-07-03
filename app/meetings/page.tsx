import Link from 'next/link';
import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default async function MeetingsPage() {
  const meetings = getMeetings();

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
              className="transition transform hover:-translate-y-0.5 group"
            >
              <MeetingCard meeting={meeting} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
