import React, { useState } from 'react';

const Home = ({businesses}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const renderEntries = () => {
    const filteredBusinesses = businesses.filter(business => {
      return (
        (categoryFilter === 'all' || business.category === categoryFilter) &&
        business.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    return filteredBusinesses.map((business, index) => (
      <div
        key={index}
        className="p-4 border rounded-md bg-white cursor-pointer shadow-lg"
        onClick={() => showModal(business)}
      >
        <img src={"https://clipground.com/images/placeholder-logo-5.png"} alt={business.name} className="w-full mb-2" />
        <p className="text-center">{business.name}</p>
      </div>
    ));
  };

  const showModal = (business) => {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    const modalTitle = document.getElementById('modalTitle');
    const modalEmail = document.getElementById('modalEmail');
    const modalAddress = document.getElementById('modalAddress');
    const modalWebsite = document.getElementById('modalWebsite');

    modalTitle.textContent = business.name;
    modalEmail.textContent = business.email;
    modalAddress.textContent = 'Address: ' + business.address;
    modalWebsite.textContent = business.website;
    modalWebsite.href = 'http://' + business.website;

    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => modal.classList.add('hidden'));
  };

  return (
    <div className="bg-gray-100 p-4 max-h-screen">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded-md mb-2 w-full"
        placeholder="Search for a business"
      />

      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="p-2 border rounded-md mb-4"
      >
        <option value="all">All Industries</option>
        <option value="technology">Technology</option>
        <option value="finance">Finance</option>
        <option value="hospitality">Hospitality</option>
        <option value="construction">Construction</option>
        <option value="tourism">Tourism</option>
        <option value="fnb">Food and Beverages</option>
        <option value="agriculture">Agriculture</option>
        <option value="design">Design</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderEntries()}
      </div>

      <div id="modal" className="fixed inset-0 bg-black bg-opacity-50 hidden flex justify-center items-center">
        <div className="modal-content bg-white p-8 mx-auto max-w-md rounded">
          <h2 className="text-2xl font-bold mb-4 text-blue-900" id="modalTitle"></h2>
          <p className="mb-2 text-gray-700" id="modalEmail"></p>
          <p className="mb-2 text-gray-700" id="modalAddress"></p>
          <p className="mb-4"><a id="modalWebsite" href="#" className="text-blue-500"></a></p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" id="closeModal">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Home;