import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import { getMeetingById } from '@/lib/meetings-db';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    notFound();
  }

  const meeting = await getMeetingById(numericId);

  if (!meeting) {
    notFound();
  }

  return (
    <main className="container mx-auto p-6 max-w-3xl">
      <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200 print:shadow-none print:border-none print:p-0">
        <MeetingDetail meeting={meeting} />
      </div>
    </main>
  );
}
