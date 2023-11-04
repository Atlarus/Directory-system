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
  
    return (
      <div className="flex justify-center mt-8">
        <div className="max-w-md mx-4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Add New Business</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newBusiness.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={newBusiness.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={newBusiness.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={newBusiness.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={newBusiness.website}
            onChange={handleInputChange}
          />
        </div>
        <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleAddBusiness}
          >
            Add Business
          </button>
        </div>
        <div className="max-w-md mx-4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Remove Business</h2>
          <ul>
            {businesses.map((business, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>{business.name}</span>
                <button 
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleRemoveBusiness(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Admin;