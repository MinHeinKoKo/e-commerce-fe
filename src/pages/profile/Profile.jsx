import React, { useState } from "react";

const Profile = () => {
    // Sample user data
    const [user, setUser] = useState({
        username: "john_doe",
        email: "john@example.com",
        orders: [
            { id: 1, name: "Product 1", quantity: 2 },
            { id: 2, name: "Product 2", quantity: 1 },
            { id: 3, name: "Product 3", quantity: 3 },
        ],
    });

    const [newPassword, setNewPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    const handlePasswordChange = () => {
        // Implement password change logic
        console.log("New password:", newPassword);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Implement logic to upload and save profile image
        console.log("New profile image:", file);
        setProfileImage(file);
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">My Profile</h2>
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Orders</h3>
                <ul>
                    {user.orders.map((order) => (
                        <li key={order.id}>
                            {order.name} - Quantity: {order.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Change Password</h3>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="border border-gray-300 px-3 py-2 rounded-md w-64 mb-2"
                />
                <button
                    onClick={handlePasswordChange}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Change Password
                </button>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Change Profile Image</h3>
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="mb-2"
                />
                {profileImage && (
                    <img
                        src={URL.createObjectURL(profileImage)}
                        alt="Profile"
                        className="rounded-full w-20 h-20 mb-2"
                    />
                )}
            </div>
        </div>
    );
};

export default Profile;
