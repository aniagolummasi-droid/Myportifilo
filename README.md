# Sylvester Portfolio

React + Vite portfolio site.

## EmailJS Setup

The contact form uses EmailJS, so it can send email directly from the browser without a backend server.

1. Create or log in to your EmailJS account.
2. Add an email service, for example Gmail.
3. Create an email template with these template variables:

```text
from_name
from_email
subject
message
to_email
```

4. Copy `.env.example` to `.env.local`.
5. Paste your real values into `.env.local`:

```text
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server after changing `.env.local`.

If the EmailJS values are missing, the form falls back to opening the visitor's email app with the message already filled in.
