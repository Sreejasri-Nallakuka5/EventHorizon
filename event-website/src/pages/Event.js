import React from 'react';

const Event = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: 'June 15, 2025',
      location: 'San Francisco, CA',
      description: 'A gathering of tech enthusiasts, developers, and startups.',
    },
    {
      id: 2,
      title: 'Design Thinking Workshop',
      date: 'July 10, 2025',
      location: 'New York, NY',
      description: 'Hands-on workshop focusing on user-centered design methods.',
    },
    {
      id: 3,
      title: 'AI & Future Forum',
      date: 'August 5, 2025',
      location: 'Online',
      description: 'Discussions on the latest trends and ethics in artificial intelligence.',
    },
  ];

  const containerStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#333',
  };

  const eventCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle = {
    marginBottom: '0.5rem',
    color: '#1e1e2f',
  };

  return (
    <div style={containerStyle}>
      <h1>Upcoming Events</h1>
      {events.map((event) => (
        <div key={event.id} style={eventCardStyle}>
          <h2 style={titleStyle}>{event.title}</h2>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Event;
