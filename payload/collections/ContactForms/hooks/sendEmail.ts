import { CollectionAfterChangeHook } from 'payload'

export const sendEmail: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express-like request object
  operation, // name of the operation ie. 'create', 'update'
}) => {
  if (operation !== 'create') return doc

  try {
    if (!req.payload.sendEmail) {
      req.payload.logger.warn('Email adapter not configured, skipping contact form notification email.')
      return doc
    }

    await req.payload.sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'admin@example.com',
      from: process.env.FROM_EMAIL || 'no-reply@example.com',
      subject: `New Contact Form Submission: ${doc.subject}`,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${doc.name}</p>
        <p><strong>Email:</strong> ${doc.email}</p>
        <p><strong>Subject:</strong> ${doc.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${doc.message}</p>
      `,
    })
  } catch (error) {
    req.payload.logger.error(`Error sending contact form email: ${error}`)
  }

  return doc
}
