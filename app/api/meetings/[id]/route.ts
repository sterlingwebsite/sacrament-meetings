import { NextRequest, NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<Response> {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return NextResponse.json(
      { error: 'id parameter is not a valid number' }, 
      { status: 400 }
    );
  }

  const numericId = parseInt(id, 10);
  
  const meeting = await getMeetingById(numericId);

  if (!meeting) {
    return NextResponse.json(
      { error: 'No meeting with the given ID exists' }, 
      { status: 404 }
    );
  }

  return NextResponse.json(meeting);
}
