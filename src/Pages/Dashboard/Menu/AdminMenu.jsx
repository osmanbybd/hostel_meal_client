import React from 'react';
import MenuItem from './MenuItem';
import { RiFunctionAddFill } from "react-icons/ri";
const AdminMenu = () => {
    return (
        <div>
            <MenuItem icon={RiFunctionAddFill} label='Add Menu' address='add-menu' ></MenuItem>
        </div>
    );
};

export default AdminMenu;