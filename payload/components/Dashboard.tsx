import React from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import './Dashboard.scss'; // Import the SCSS file

async function Dashboard() {
  const payload = await getPayload({ config });

  const [poojaBookings, volunteers, donations, contactForms, events] = await Promise.all([
    payload.find({ collection: 'pooja-bookings', limit: 0 }),
    payload.find({ collection: 'volunteers', limit: 0 }),
    payload.find({ collection: 'donations', limit: 0 }),
    payload.find({ collection: 'contact-forms', limit: 0 }),
    payload.find({ collection: 'events', limit: 5, sort: '-createdAt' }),
  ]);

  const stats = [
    { label: 'Pooja Bookings', value: poojaBookings.totalDocs, href: '/admin/collections/pooja-bookings' },
    { label: 'Volunteers', value: volunteers.totalDocs, href: '/admin/collections/volunteers' },
    { label: 'Donations', value: donations.totalDocs, href: '/admin/collections/donations' },
    { label: 'Contact Forms', value: contactForms.totalDocs, href: '/admin/collections/contact-forms' },
  ];

  return (
    <div className='dashboard-container'>
      <h1>Admin Dashboard</h1>
      <div className='stats-grid'>
        {stats.map(stat => (
          <div key={stat.label} className='stat-card'>
            <h3>{stat.label}</h3>
            <p>{stat.value}</p>
            <a href={stat.href}>View all</a>
          </div>
        ))}
      </div>
      <div className='recent-events'>
        <h2>Recent Events</h2>
        <ul>
          {events.docs.map(event => (
            <li key={event.id}>
              <a href={`/admin/collections/events/${event.id}`}>
                {event.name}
              </a>
              <span>
                {new Date(event.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;