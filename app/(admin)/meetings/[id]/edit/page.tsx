import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import EditFormWrapper from './EditFormWrapper';

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditMeetingPage({ params }: EditPageProps) {
  const resolvedParams = await params;
  const numericId = parseInt(resolvedParams.id, 10);

  if (isNaN(numericId)) notFound();

  const meeting = await getMeetingById(numericId);
  if (!meeting) notFound();

  const announcementsString = meeting.announcements?.join('\n') || '';
  const wardBusinessString = meeting.wardBusiness?.map(b => b.description).join('\n') || '';
  
  const speakersString = meeting.speakers?.map(s => {
    const label = s.type === 'musical-number' ? 'Music: ' : 'Speaker: ';
    return `${label}${s.name} - ${s.topic}`;
  }).join('\n') || '';

  const openingHymnString = meeting.openingHymn ? `${meeting.openingHymn.number} - ${meeting.openingHymn.title}` : '';
  const sacramentHymnString = meeting.sacramentHymn ? `${meeting.sacramentHymn.number} - ${meeting.sacramentHymn.title}` : '';
  const closingHymnString = meeting.closingHymn ? `${meeting.closingHymn.number} - ${meeting.closingHymn.title}` : '';

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Edit Sacrament Meeting Agenda
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Modify any element of the full sacrament meeting program below.
          </p>
        </div>

        <EditFormWrapper 
          id={numericId}
          defaultValues={{
            date: meeting.date,
            meetingType: meeting.meetingType,
            presiding: meeting.presiding,
            conducting: meeting.conducting,
            announcements: announcementsString,
            openingHymn: openingHymnString,
            openingPrayer: meeting.openingPrayer,
            wardBusiness: wardBusinessString,
            stakeBusiness: meeting.stakeBusiness,
            sacramentHymn: sacramentHymnString,
            speakers: speakersString,
            closingHymn: closingHymnString,
            closingPrayer: meeting.closingPrayer,
          }}
        />
      </div>
    </main>
  );
}
