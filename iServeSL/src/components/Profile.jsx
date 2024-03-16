import React from 'react'
import ProfileHeader from './ProfileHeader';
import '../styles/profile.css';
import userImage from '../assets/user.jpg';
import { BiEnvelope , BiLock, BiMobile  } from 'react-icons/bi';

const details = [
    {
        title: 'Email',
        data: 'sachin@wso2.com',
        icon: <BiEnvelope   />,
    },
    {
        title: 'Password',
        data: '********',
        icon: <BiLock  />,
    },
    {
        title: 'Contact',
        data: '+94783439022',
        icon: <BiMobile  />,
    },
]

const Profile = () => {
  return (
    <div className='profile'>
        <ProfileHeader />

        <div className='user--profile'>
            <div className='user--detail'>
                <img src={userImage} alt="" />
                <h3 className='username'>sachinakash_</h3>
                <span className='profession'>Software Engineer</span>
            </div>

            <div className='user-details'>
                {details.map((details => (
                    <div className='user'>
                        <div className='user-detail'>
                            <div className='user-cover'>{details.icon}</div>
                            <div className='user-name'>
                                <h5 className='title'>{details.title}</h5>
                                <span  className='duration'>{details.data}</span>
                            </div>
                        </div>
                        <div className='action'>:</div>  
                    </div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default Profile;
