"use client";

import Link from 'next/link';
import { SacramentMeeting } from '@/lib/types';
import { DeleteButton } from './DeleteButton';

interface MeetingCardProps {
  meeting: SacramentMeeting;
  isAdmin?: boolean;
}

export default function MeetingCard({ meeting, isAdmin = false }: MeetingCardProps) {
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
      
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-2">
        
        <Link 
          href={`/meetings/${meeting.id}`}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Program Details →
        </Link>

        {isAdmin && (
          <div className="flex items-center gap-2 print:hidden">
            <Link
              href={`/meetings/${meeting.id}/edit`}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Edit
            </Link>

            <DeleteButton id={meeting.id} />
          </div>
        )}

      </div>
    </div>
  );
}
