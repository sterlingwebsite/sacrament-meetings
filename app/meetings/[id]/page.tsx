import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import { SacramentMeeting } from '@/lib/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetailPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/meetings/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    notFound();
  }

  const meeting: SacramentMeeting = await res.json();

  return (
    <main className="container mx-auto p-6 max-w-3xl">
      <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200 print:shadow-none print:border-none print:p-0">
        <MeetingDetail meeting={meeting} />
      </div>
    </main>
  );
}
