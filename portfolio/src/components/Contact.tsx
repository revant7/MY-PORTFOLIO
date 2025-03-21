import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <input name="name" placeholder="Your Name" className="block w-full p-2 mb-4 bg-gray-700 rounded" onChange={handleChange} />
        <input name="email" placeholder="Your Email" className="block w-full p-2 mb-4 bg-gray-700 rounded" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" className="block w-full p-2 mb-4 bg-gray-700 rounded" onChange={handleChange} />
        <button className="bg-primary px-6 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
