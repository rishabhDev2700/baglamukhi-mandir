import { CollectionAfterChangeHook } from 'payload'

export const sendEmail: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  if (operation !== 'create') return doc

  try {
    if (!req.payload.sendEmail) {
      req.payload.logger.warn('Email adapter not configured, skipping pooja booking notification email.')
      return doc
    }

    const poojaName = typeof doc.pooja === 'object' ? doc.pooja.name : doc.pooja

    await req.payload.sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'admin@example.com',
      from: process.env.FROM_EMAIL || 'no-reply@example.com',
      subject: `New Pooja Booking: ${poojaName}`,
      html: `
        <p>You have a new pooja booking:</p>
        <p><strong>Name:</strong> ${doc.name}</p>
        <p><strong>Email:</strong> ${doc.email}</p>
        <p><strong>Phone:</strong> ${doc.phone || 'N/A'}</p>
        <p><strong>Pooja:</strong> ${poojaName}</p>
        <p><strong>Date:</strong> ${doc.date ? new Date(doc.date).toLocaleDateString() : 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${doc.message || 'N/A'}</p>
      `,
    })
  } catch (error) {
    req.payload.logger.error(`Error sending pooja booking email: ${error}`)
  }

  return doc
}
