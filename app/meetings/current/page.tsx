import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export const dynamic = 'force-dynamic';

export default async function CurrentMeetingPage() {
  const today = new Date();
  
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const yyyy = sunday.getFullYear();
  const mm = String(sunday.getMonth() + 1).padStart(2, '0');
  const dd = String(sunday.getDate()).padStart(2, '0');
  const formattedSunday = `${yyyy}-${mm}-${dd}`;

  const matchingMeetings = getMeetings(formattedSunday);

  if (matchingMeetings && matchingMeetings.length > 0) {
    redirect(`/meetings/${matchingMeetings[0].id}`);
  } else {
    redirect('/meetings');
  }
}
