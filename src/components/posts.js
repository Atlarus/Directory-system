import React, { useState } from 'react';

const Posts = ({posts}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState('');

  const showContactForm = (businessName) => {
    setIsModalOpen(true);
    setSelectedBusiness(businessName);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form Data:', data);
    closeModal(); // Close modal after form submission
  }
  return (
    <div className="bg-gray-100 p-4 max-h-screen">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded-md bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">{post.title}</h2>
            <h2 className="text-xl font-bold mb-2 text-blue-900">{post.name}</h2>
            <p className="text-gray-700 mb-4">{post.desc}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => showContactForm(post.name)}
            >
              Contact
            </button>
          </div>
        ))}
      </div>

      <div id="contactFormModal" className={`fixed inset-0 bg-black bg-opacity-50 ${isModalOpen ? '' : 'hidden'} flex justify-center items-center`}>
        <div className="modal-content bg-white p-8 mx-auto max-w-md rounded">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{`Contact ${selectedBusiness}`}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" className="p-2 border rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" className="p-2 border rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="p-2 border rounded-md w-full h-32" required></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Send Message</button>
          </form>
          <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
