import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { MdOutlineEdit } from 'react-icons/md'
import logo from '../../image/Logo/logo.png'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1 border border-primary p-5 rounded-lg">
                    <Link to={`profile/edit/${user?.id}`} className="flex items-center gap-x-3 hover:text-primary transition-all ease-in-out duration-200" >
                        <MdOutlineEdit /> Edit
                    </Link>
                    <img src={logo} className="w-full h-auto object-cover aspect-square rounded-full" alt="user profile"/>
                    <h3 className="font-semibold">{user?.name}</h3>
                </div>
                <div className="col-span-3 overflow-auto border border-primary p-5 rounded-lg">
                    User Ordered Items
                </div>
            </div>
        </div>
    );
};

export default Profile
