import { NextRequest } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url);
  
  const query = searchParams.get('query') || searchParams.get('date') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  
  const meetings = await getMeetings(query, page);
  
  return Response.json(meetings);
}
