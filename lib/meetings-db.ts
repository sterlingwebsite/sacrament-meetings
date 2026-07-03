import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: 'He Sent His Son', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Brother Miller',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Do Believe Well-Nigh' },
    speakers: [], // Fast Sunday meetings usually don't have assigned speakers
    closingHymn: { number: 166, title: 'Abide with Me!' },
    closingPrayer: 'Sister Taylor',
    announcements: ['Tithing declaration signups are open.']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'President Young (Stake)',
    conducting: 'Bishop Smith',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Clark',
    wardBusiness: [{ description: 'Release of Sunday School counselor' }],
    stakeBusiness: true,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { name: 'Brother Adams', topic: 'The Power of the Book of Mormon', type: 'speaker' },
      { name: 'President Young', topic: 'Strengthening our Stakes of Zion', type: 'speaker' }
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Brother White',
    announcements: ['Youth Conference starts this Thursday.']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'President Young (Stake)',
    conducting: 'President Pratt (Stake Counselor)',
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Nelson',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 0, title: 'No Sacrament - Stake Conference' }, // Stake conference has no sacrament
    speakers: [
      { name: 'Sister Lee', topic: 'Covenant Keeping', type: 'speaker' },
      { name: 'Elder Holland', topic: 'Discipleship', type: 'speaker' }
    ],
    closingHymn: { number: 209, title: 'Hark, All Ye Nations!' },
    closingPrayer: 'Brother Kimball',
    announcements: ['General Sessions broadcast available online.']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Evans',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Brother Martinez',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Sister Garcia', topic: 'The Comfort of the Holy Ghost', type: 'speaker' },
      { name: 'Primary Children', topic: 'Scripture Songs Medley', type: 'musical-number' },
      { name: 'Brother Johnson', topic: 'Living a Christ-Centered Life', type: 'speaker' }
    ],
    closingHymn: { number: 243, title: 'Let Us All Press On' },
    closingPrayer: 'Sister Robinson',
    announcements: ['Ward BBQ on Saturday at 5:00 PM.']
  }
];

export function getMeetings(date?: string | string[] | null): SacramentMeeting[] {
  if (!date) return meetings;
  
  const targetDate = Array.isArray(date) ? date[0] : date;
  
  return meetings.filter(m => m.date === targetDate);
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}