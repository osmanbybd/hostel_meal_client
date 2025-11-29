import React from "react";
import { Link } from "react-router";

const UserOff = () => {
  return (
    <div>
      <button
        className="px-5 py-2 bg-green-400 rounded-lg text-white font-semibold cursor-pointer"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        Join Now
      </button>

      <ul
        className="dropdown menu w-36 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li>
          <Link to="/signup" className="font-semibold">Sign Up</Link>
        </li>
        <li>
          
          <Link to="/login" className="font-semibold">Log In Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserOff;
