import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email requis' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
      }),
    });

    const data = await response.json();
    console.log('Brevo response:', JSON.stringify(data));

    if (!response.ok) {
      return NextResponse.json({ error: data.message || 'Erreur Brevo' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('Error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}