import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get('name')?.toString() || '';
  const email = data.get('email')?.toString() || '';
  const company = data.get('company')?.toString() || '';
  const subject = data.get('subject')?.toString() || '';
  const message = data.get('message')?.toString() || '';

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  await resend.emails.send({
    from: 'Website <onboarding@resend.dev>',
    to: 'francesco@fravallec.com',
    replyTo: email,
    subject: `New enquiry from ${name}${subject ? ` — ${subject}` : ''}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${subject ? `<p><strong>Service:</strong> ${subject}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
