import { getPayloadClient } from '@/lib/payload';
import { NextRequest, NextResponse } from 'next/server';

export async function OPTIONS(req: NextRequest) {
  // Respond to CORS preflight requests
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*'); // Adjust as needed
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return new NextResponse(null, { headers, status: 204 });
}

export async function POST(req: NextRequest) {
  try {
    const { collection, data } = await req.json();

    if (!collection || !data) {
      return NextResponse.json({ error: 'Collection and data are required.' }, { status: 400 });
    }

    const payload = await getPayloadClient();

    const record = await payload.create({
      collection: collection,
      data: data,
    });

    return NextResponse.json({ message: 'Form submitted successfully!', record }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
