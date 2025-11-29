import React from "react";
import { Link } from "react-router";
import { useAuth } from "../../../Context/useAuth";
import avatar from "../../../assets/user.png"
const UserOn = () => {
  const {logOutUser, user} = useAuth();

  const handleLogOut = () =>{
    logOutUser()
    .then(result =>{
      console.log('logout successful', result)
    })
    .catch(err =>{
      console.log(err)
    })
  }



  return (
    <div className="dropdown dropdown-end">
      {/* Avatar Button */}
      <div tabIndex={0} role="button" className="btn  btn-circle avatar">
        <div className="w-12 rounded-full">
          <img
            src={user ? user?.photoUrl : avatar }
            alt="user"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100  rounded-lg w-40 gap-3"
      >
        <li>
          <Link to="/dashboard" className="text-sm font-semibold">Dashboard</Link>
        </li>
        <li>
           <button
                      className="btn bg-red-700 font-bold text-white w-full rounded-lg"
                      type="button"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
        </li>
      </ul>
    </div>
  );
};

export default UserOn;
