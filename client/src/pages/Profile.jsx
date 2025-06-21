import React, { useState, useRef, useContext } from 'react';
import { AuthContext } from '../store/authStore';

const Profile = () => {
  const { user, handleUpdateProfile, isProcessing, error } = useContext(AuthContext);

  const [newUser, setNewUser] = useState(
    {
      fullName:user.fullName,
      email:user.email,
      profilePhoto:user.profilePhoto,
      phone:user.phone || ''
    });

  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(newUser.profilePhoto);
  const fileInputRef = useRef(null);

  const handleEditToggle = () => {
    if (isEditing) {
      setPreview(newUser.profilePhoto);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setNewUser(prev => ({ ...prev, profilePhoto: file }));
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('fullName', newUser.fullName);
    formData.append('phone', newUser.phone);
    formData.append('profilePhoto', newUser.profilePhoto);

    console.log("Updating new profile to : ", newUser);
    handleUpdateProfile(formData, setIsEditing);
  };

  return (
    <div className="min-h-screen text-sm md:text-base bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex justify-center -mt-16">
          <div className="relative">
            <img
              className="h-32 w-32 rounded-full border-4 border-white shadow-md object-cover"
              src={preview}
              alt="User avatar"
            />
            {isEditing && (
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-0 right-0 general_button text-white p-1 rounded-full transition"
                title="Change Profile Image"
              >
                ✎
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="mt-4">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={newUser.fullName}
                  onChange={handleInputChange}
                  className="w-full py-2 input"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleInputChange}
                  className="w-full py-2 input"
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleEditToggle}
                  className="px-4  cancel_button text-gray-700 rounded transition"
                >
                  Cancel
                </button>
                <button
                  disabled={isProcessing}
                  onClick={handleSave}
                  className="button save_button !px-10"
                >
                  {!isProcessing?'Save':'Updating...'}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800">{newUser.fullName}</h1>
              <p className="mt-2 text-gray-500">{newUser.email}</p>
              <p className="mt-2 text-gray-500">{newUser.phone}</p>
            </div>

          )}
        </div>

        {!isEditing && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleEditToggle}
              className="save_button button"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
