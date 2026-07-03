import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export const dynamic = 'force-dynamic';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  const upcomingSunday = new Date(today);

  if (dayOfWeek !== 0) {
    const daysUntilSunday = 7 - dayOfWeek;
    upcomingSunday.setDate(today.getDate() + daysUntilSunday);
  }

  const yyyy = upcomingSunday.getFullYear();
  const mm = String(upcomingSunday.getMonth() + 1).padStart(2, '0');
  const dd = String(upcomingSunday.getDate()).padStart(2, '0');
  const formattedSunday = `${yyyy}-${mm}-${dd}`;

  const matchingMeetings = getMeetings(formattedSunday);

  if (matchingMeetings && matchingMeetings.length > 0) {
    redirect(`/meetings/${matchingMeetings[0].id}`);
  } else {
    redirect('/meetings');
  }
}
