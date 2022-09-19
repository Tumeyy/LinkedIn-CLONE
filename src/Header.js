import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HeaderOption from './HeaderOption'

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                alt="" 
            />
            <div className='header__search'>
                <SearchIcon />
                <input type='text'/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar='https://lh3.googleusercontent.com/a-/ACNPEu_GIdaFRyNvii7Y8guD9AXSvK056T05FcqBWPwJow=s288-p-rw-no' title='me' />

        </div>
    </div>
  )
}

export default Header