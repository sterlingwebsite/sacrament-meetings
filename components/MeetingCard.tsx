import { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const cleanDate = new Date(meeting.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">
          {cleanDate}
        </h2>
        
        <div className="mt-2 space-y-1 text-sm font-medium">
          <p className="text-slate-600 dark:text-slate-400 capitalize flex justify-between">
            <span className="text-slate-600 dark:text-slate-400 font-normal">Type:</span> 
            {meeting.meetingType}
          </p>
          <p className="text-slate-600 dark:text-slate-400 flex justify-between">
            <span className="text-slate-600 dark:text-slate-400 font-normal">Conducting:</span> 
            {meeting.conducting}
          </p>
        </div>
      </div>
      
      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 group-hover:underline">
        View Program Details →
      </div>
    </div>
  );
}
