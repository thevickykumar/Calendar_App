import React, { useState, useEffect } from 'react';
import { addCompany, updateCompany } from '../services/api';

const CompanyForm = ({ onClose, fetchCompanies, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedInProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    communicationPeriodicity: 'Weekly',
  });

  useEffect(() => {
    if (initialData) setFormData({
      ...initialData,
      emails: initialData.emails || [''],
      phoneNumbers: initialData.phoneNumbers || [''],
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, fieldName, index) => {
    const newValue = e.target.value;
    const updatedArray = [...formData[fieldName]];
    updatedArray[index] = newValue;
    setFormData({ ...formData, [fieldName]: updatedArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialData) {
      await updateCompany(initialData.id, formData);
    } else {
      await addCompany(formData);
    }
    fetchCompanies();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-bold">
          {initialData ? 'Edit Company' : 'Add Company'}
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 w-full mb-2"
          />
          <input
            type="url"
            name="linkedInProfile"
            value={formData.linkedInProfile}
            onChange={handleChange}
            placeholder="LinkedIn Profile"
            className="border p-2 w-full mb-2"
          />
          <input
            type="email"
            name="Email"
            value={formData.emails}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 w-full mb-2"
          />

            <input
            type="number"
            name="PhoneNumber"
            value={formData.phoneNumbers}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-2 w-full mb-2"
          />
         

          {formData.phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => handleArrayChange(e, 'phoneNumbers', index)}
                placeholder="Phone Number"
                className="border p-2 w-full"
              />
             
            </div>
          ))}
         
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comments"
            className="border p-2 w-full mb-2"
          />

    
          <select
            name="communicationPeriodicity"
            value={formData.communicationPeriodicity}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>

          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;
