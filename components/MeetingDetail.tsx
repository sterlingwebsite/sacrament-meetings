'use client';

import { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <div className="bg-white text-slate-900 p-6 rounded-lg max-w-2xl mx-auto shadow border border-slate-200 print:shadow-none print:border-none print:p-0">
      <h2 className="text-2xl font-serif text-center border-b border-slate-200 pb-2 mb-4 font-bold">
        Sacrament Meeting Program
      </h2>

      <div className="no-print flex justify-end mb-4">
        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded shadow transition cursor-pointer"
        >
          🖨️ Print Program
        </button>
      </div>

      <div className="text-center text-slate-600 mb-6">
        <p className="font-medium">Date: {meeting.date}</p>
        <p className="text-sm mt-1">Presiding: {meeting.presiding} | Conducting: {meeting.conducting}</p>
      </div>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <div className="mb-6 bg-slate-50 p-4 rounded border border-slate-100">
          <h3 className="font-bold text-sm text-slate-800 mb-2">Announcements:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
            {meeting.announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4 text-sm text-slate-800">
        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span>Opening Hymn</span>
          <span className="font-medium">No. {meeting.openingHymn.number} - {meeting.openingHymn.title}</span>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span>Opening Prayer</span>
          <span className="font-medium">{meeting.openingPrayer}</span>
        </div>
        
        {meeting.wardBusiness.length > 0 && (
          <div className="border-b border-slate-100 pb-2">
            <span className="block mb-1 text-slate-500 font-medium">Ward Business:</span>
            {meeting.wardBusiness.map((item, index) => (
              <p key={index} className="pl-4 italic text-slate-700">— {item.description}</p>
            ))}
          </div>
        )}

        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span>Sacrament Hymn</span>
          <span className="font-medium">No. {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</span>
        </div>

        {meeting.speakers.length > 0 && (
          <div className="border-b border-slate-100 pb-2 space-y-2">
            <span className="block text-slate-500 font-medium">Program Items:</span>
            {meeting.speakers.map((item, index) => (
              <div key={index} className="flex justify-between pl-4">
                <span>{item.name} {item.topic && <span className="text-slate-500 font-normal">— {item.topic}</span>}</span>
                <span className="text-xs uppercase text-slate-400 self-center tracking-wider font-mono">{item.type}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span>Closing Hymn</span>
          <span className="font-medium">No. {meeting.closingHymn.number} - {meeting.closingHymn.title}</span>
        </div>
        <div className="flex justify-between pb-1">
          <span>Closing Prayer</span>
          <span className="font-medium">{meeting.closingPrayer}</span>
        </div>
      </div>
    </div>
  );
}
