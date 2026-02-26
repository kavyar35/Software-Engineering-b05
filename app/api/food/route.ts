import { NextResponse } from 'next/server';

let foodDonations: any[] = [];

export async function GET() {
  // Return all available food donations
  return NextResponse.json(foodDonations);
}

export async function POST(request: Request) {
  const data = await request.json();
  // Basic validation
  if (!data.foodName || !data.quantity || !data.expiryDate) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  const donation = {
    id: Date.now(),
    ...data,
  };
  foodDonations.push(donation);
  return NextResponse.json(donation, { status: 201 });
}
