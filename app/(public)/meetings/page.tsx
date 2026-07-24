import Link from 'next/link';
import MeetingCard from '@/components/MeetingCard';
import { MeetingSearch } from '@/components/MeetingSearch';
import { Pagination } from '@/components/Pagination';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';

interface PageProps {
  searchParams: Promise<{ query?: string; page?: string }>;
}

export default async function MeetingsPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query ?? '';
  const currentPage = Number(resolvedParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Scheduled Services
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Browse agendas, leadership presidencies, and speaker rosters.
          </p>
        </div>
        
        <MeetingSearch />
      </header>

      {meetings.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
          <p className="text-slate-500 text-sm">No scheduled meetings found matching your filter criteria.</p>
        </div>
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

      <div className="pt-4 flex justify-center border-t border-slate-100 dark:border-slate-800 print:hidden">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
