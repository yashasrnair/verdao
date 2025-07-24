import React from 'react';

const Contact = () => {
  return (
    <section className="px-8 py-20 text-white max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Contact Us</h1>
      <p className="text-gray-300 text-lg mb-4">We’d love to connect with partners, contributors, and eco warriors!</p>
      <ul className="text-gray-400 space-y-2">
        <li><strong>Email:</strong> hello@verdao.org</li>
        <li><strong>Discord:</strong> discord.gg/verdao</li>
        <li><strong>Telegram:</strong> t.me/verdao</li>
      </ul>
    </section>
  );
};

export default Contact;
