import { redirect } from 'next/navigation';
import { neon } from '@neondatabase/serverless';

export const dynamic = 'force-dynamic';

const sql = neon(process.env.DATABASE_URL!);

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

  const rows = await sql`
    SELECT id 
    FROM meetings 
    WHERE to_char(date, 'YYYY-MM-DD') = ${formattedSunday}
    LIMIT 1
  `;

  if (rows && rows.length > 0) {
    redirect(`/meetings/${rows[0].id}`);
  }

  const nextAvailableRows = await sql`
    SELECT id 
    FROM meetings 
    WHERE date >= CURRENT_DATE
    ORDER BY date ASC 
    LIMIT 1
  `;

  if (nextAvailableRows && nextAvailableRows.length > 0) {
    redirect(`/meetings/${nextAvailableRows[0].id}`);
  }

  redirect('/meetings');
}
