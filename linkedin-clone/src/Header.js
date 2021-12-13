import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption.js';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt="Linkedin Logo" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Chat'/>
                <HeaderOption Icon={NotificationIcon} title='Notifications'/>
                <HeaderOption Avatar='I:\linkedin_clone\linkedin-clone\src\test.jpg' title='me'/>


            </div>
        </div>
    )
}

export default Header
