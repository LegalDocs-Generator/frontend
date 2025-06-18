import React, { useState, useRef } from 'react';

const Profile = () => {
  const initialUser = {
    avatarUrl: '/images/DefaultProfile.png',
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Legal professional with 5 years of experience specializing in corporate law and compliance.',
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(user.avatarUrl);
  const fileInputRef = useRef(null);

  const handleEditToggle = () => {
    if (isEditing) {
      setPreview(user.avatarUrl);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setUser(prev => ({ ...prev, avatarUrl: preview }));
    setIsEditing(false);
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
                  value={user.fullName}
                  onChange={handleInputChange}
                  className="w-full py-2 input"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  className="w-full input py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">About</label>
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  rows={4}
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
                  onClick={handleSave}
                  className="button save_button !px-10"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800">{user.fullName}</h1>
              <p className="mt-2 text-gray-500">{user.email}</p>
              <p className="text-gray-500">{user.phone}</p>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="mt-6">
            <h2 className="text-gray-700 font-medium">About</h2>
            <p className="mt-2 text-gray-600 text-sm">{user.bio}</p>
          </div>
        )}

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
