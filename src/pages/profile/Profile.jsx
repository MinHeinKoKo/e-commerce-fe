import React, { useState } from "react";
import { useSelector } from 'react-redux'
import UserInformation from './container/UserInformation.jsx'
import OrderedItems from './container/OrderedItems.jsx'
import FavouriteItems from './container/FavouriteItems.jsx'

const Profile = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1">
                    <UserInformation user={user} />
                </div>
                <div className="col-span-3 overflow-auto p-5">
                    <OrderedItems />
                    <FavouriteItems />
                </div>
            </div>
        </div>
    );
};

export default Profile
