import React from 'react';
import '../styles/historyList.css';
import Image1 from '../assets/user.jpg';

const history = [
    {
        image: Image1,
        name: 'K D Sachin Akash',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image1,
        name: 'K D Sachin Akash',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image1,
        name: 'K D Sachin Akash',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image1,
        name: 'K D Sachin Akash',
        duration: '20 hours lesson',
        cost: '100',
    }
]

const HistoryList = () => {
  return (
    <div className='history--list'>
        <div className='list--header'>
            <h2 className='historyListTitle'>History</h2>
            <select>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>
        <div className='list--container'>
            {history.map((history) => ( 
                <div className='list'>
                    <div className='history--detail'>
                        <img src={history.image} alt={history.name} />
                        <h2>{history.name}</h2>
                    </div>
                    <span>{history.duration}</span>
                    <span>{history.cost}</span>
                    <span className='history--todo'>:</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default HistoryList