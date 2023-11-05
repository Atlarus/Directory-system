import React, { useState } from 'react';

const Admin = ({ businesses, setBusinesses }) => {
  const [newBusiness, setNewBusiness] = useState({
    name: "",
    category: "",
    image: "",
    email: "",
    address: "",
    website: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBusiness({ ...newBusiness, [name]: value });
  };

  const handleAddBusiness = () => {
    setBusinesses([...businesses, newBusiness]);
    setNewBusiness({
      name: "",
      category: "",
      image: "https://clipground.com/images/placeholder-logo-5.png",
      email: "",
      address: "",
      website: "",
    });
  };

  const handleRemoveBusiness = (index) => {
    const updatedBusinesses = businesses.filter((_, i) => i !== index);
    setBusinesses(updatedBusinesses);
  };

  const handleEditBusiness = (index) => {
    setEditIndex(index);
    setNewBusiness(businesses[index]);
  };

  const handleSaveEdit = () => {
    const updatedBusinesses = [...businesses];
    updatedBusinesses[editIndex] = newBusiness;
    setBusinesses(updatedBusinesses);
    setEditIndex(null);
    setNewBusiness({
      name: "",
      category: "",
      email: "",
      address: "",
      website: "",
    });
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-xl mx-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Business</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={newBusiness.name}
              onChange={handleInputChange}
              className="border rounded-md w-full"
            />
          </div>
          <div>
            <label>Category:</label>
          </div>
          <div>
            <select
              name="category"
              value={newBusiness.category}
              onChange={handleInputChange}
              className="border rounded-md w-full"
            >
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="hospitality">Hospitality</option>
              <option value="construction">Construction</option>
              <option value="tourism">Tourism</option>
              <option value="fnb">Food and Beverages</option>
              <option value="agriculture">Agriculture</option>
              <option value="design">Design</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label>Email:</label>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={newBusiness.email}
              onChange={handleInputChange}
              className="border rounded-md w-full"
            />
          </div>
          <div>
            <label>Address:</label>
          </div>
          <div>
            <textarea
              name="address"
              value={newBusiness.address}
              onChange={handleInputChange}
              className="border rounded-md w-full h-16" // Set height to 16 units (adjust as needed)
            />
          </div>
          <div>
            <label>Website:</label>
          </div>
          <div>
            <input
              type="text"
              name="website"
              value={newBusiness.website}
              onChange={handleInputChange}
              className="border rounded-md w-full"
            />
          </div>
        </div>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={editIndex !== null ? handleSaveEdit : handleAddBusiness}
        >
          {editIndex !== null ? "Save Edit" : "Add Business"}
        </button>
      </div>

      <div className="max-w-md mx-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Remove/Edit Business</h2>
        <ul>
          {businesses.map((business, index) => (
            <li key={index} className="flex justify-between items-center space-x-2 mb-2">
              <span>{business.name}</span>
              <div className="grid grid-cols-2 space-x-4">
              <button 
                  className="px-1 text-blue-600 hover:text-blue-800 border-2 border-blue-600 hover:border-blue-800 rounded-md"
                  onClick={() => handleEditBusiness(index)}
                >
                  Edit
                </button>
                <button 
                  className="px-4 text-red-600 hover:text-red-800 border-2 border-red-600 hover:border-red-800 rounded-md"
                  onClick={() => handleRemoveBusiness(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        {editIndex !== null && (
          <div className="mt-4">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleSaveEdit}
            >
              Save Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;