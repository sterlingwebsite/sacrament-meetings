import Link from 'next/link';
import { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-lg">{meeting.date}</h3>
      <p className="text-gray-600 capitalize">Type: {meeting.meetingType}</p>
      <p className="text-sm">Conducting: {meeting.conducting}</p>
      <Link href={`/meetings/${meeting.id}`} className="text-blue-600 hover:underline inline-block mt-2">
        View Program →
      </Link>
    </div>
  );
}
