import { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const longDate = new Date(meeting.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-white text-slate-900 p-8 max-w-2xl mx-auto print:p-0 print:text-black">
      
      <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <h2 className="text-3xl font-serif font-bold tracking-wide uppercase">
          Sacrament Meeting
        </h2>
        <p className="text-sm font-medium text-slate-600 mt-1 print:text-black">
          Oak Hills Ward — {longDate}
        </p>
      </div>

      <div className="grid grid-cols-2 text-xs border border-slate-200 p-3 rounded-lg mb-6 bg-slate-50 print:bg-transparent print:border-none print:p-0 print:mb-4">
        <p><span className="text-slate-500 print:text-black font-semibold">Presiding:</span> {meeting.presiding}</p>
        <p><span className="text-slate-500 print:text-black font-semibold">Conducting:</span> {meeting.conducting}</p>
      </div>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <div className="mb-6 bg-slate-50 border border-slate-100 p-4 rounded-xl print:bg-transparent print:border-none print:p-0 print:mb-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 print:text-black">
            Announcements
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 print:text-black">
            {meeting.announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4 text-sm">
        
        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span className="font-medium text-slate-600 print:text-black">Opening Hymn</span>
          <span className="font-semibold">No. {meeting.openingHymn.number} — {meeting.openingHymn.title}</span>
        </div>

        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span className="font-medium text-slate-600 print:text-black">Opening Prayer</span>
          <span>{meeting.openingPrayer}</span>
        </div>

        {meeting.wardBusiness.length > 0 && (
          <div className="border-b border-slate-100 pb-2">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Ward Business</span>
            {meeting.wardBusiness.map((item, index) => (
              <p key={index} className="pl-4 italic text-slate-700 print:text-black">— {item.description}</p>
            ))}
          </div>
        )}

        {meeting.stakeBusiness && (
          <div className="border-b border-slate-100 pb-2">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Stake Business</span>
            <p className="pl-4 italic text-slate-700 print:text-black">— Time turned over to stake representatives.</p>
          </div>
        )}

        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span className="font-medium text-slate-600 print:text-black">Sacrament Hymn</span>
          <span className="font-semibold">No. {meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}</span>
        </div>

        {meeting.speakers.length > 0 && (
          <div className="border-b border-slate-100 pb-2 space-y-2">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">Speakers & Musical Numbers</span>
            {meeting.speakers.map((item, index) => (
              <div key={index} className="flex justify-between pl-4">
                <div>
                  <span className="font-medium">{item.name}</span>
                  {item.topic && <span className="text-slate-500 print:text-black text-xs block italic">Topic: {item.topic}</span>}
                </div>
                <span className="text-xs uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded self-start print:bg-transparent print:text-black">
                  {item.type === 'musical-number' ? '🎵 Music' : '🎙️ Speaker'}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between border-b border-slate-100 pb-1">
          <span className="font-medium text-slate-600 print:text-black">Closing Hymn</span>
          <span className="font-semibold">No. {meeting.closingHymn.number} — {meeting.closingHymn.title}</span>
        </div>

        <div className="flex justify-between pb-1">
          <span className="font-medium text-slate-600 print:text-black">Closing Prayer</span>
          <span>{meeting.closingPrayer}</span>
        </div>

      </div>
    </div>
  );
}
