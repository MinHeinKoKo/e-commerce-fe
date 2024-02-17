import { Link } from 'react-router-dom'
import { MdOutlineEdit } from 'react-icons/md'
import logo from '../../../image/Logo/logo.png'

export default function UserInformation({user}) {

    return (
        <div className="border border-primary p-5 rounded-lg h-auto">
            <Link to={`/profile/edit`} className="flex items-center gap-x-3 hover:text-primary transition-all ease-in-out duration-200" >
                <MdOutlineEdit /> Edit
            </Link>
            <img src={logo} className="w-full h-auto object-cover aspect-square rounded-full" alt="user profile"/>
            <div className="text-center text-textColor cursor-pointer">
                <h3 className="font-semibold hover:text-textColor/75 pt-5 pb-3">{user?.name}</h3>
                <p >{user?.email}</p>
            </div>
        </div>
    )
}