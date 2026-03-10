import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'Wypełnij wymagane pola.' }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Formularz TravelPL <kontakt@travelpl-wieruszow.pl>',
      to: ['kontakt@travelpl-wieruszow.pl'],
      subject: `Nowe zapytanie od ${name}`,
      replyTo: email || undefined,
      html: `
        <h2>Nowe zapytanie z formularza</h2>
        <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${email ? escapeHtml(email) : 'nie podano'}</p>
        <hr />
        <p><strong>Wiadomość:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Resend error:', error);
    return new Response(
      JSON.stringify({ error: 'Nie udało się wysłać wiadomości.' }),
      { status: 500 }
    );
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
