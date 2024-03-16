import React from 'react';
import '../styles/historyList.css';
import Image1 from '../assets/user.jpg';

const history = [
    {
        image: Image1,
        name: 'sachinakash_',
        service: 'Police Service',
        date: '06/03/2023',
    },
    {
        image: Image1,
        name: 'sachinakash_',
        service: 'Police Service',
        date: '05/03/2023',
    },
    {
        image: Image1,
        name: 'sachinakash_',
        service: 'Grama Niladhari Service',
        date: '28/02/2023',
    },
]

const HistoryList = () => {
  return (
    <div className='history--list'>
        <div className='list--header'>
            <h2 className='historyListTitle'>Recent</h2>
        </div>
        <div className='list--container'>
            {history.map((history) => ( 
                <div className='list'>
                    <div className='history--detail'>
                        <img src={history.image} alt={history.name} />
                        <h2 className='font-bold'>{history.name}</h2>
                    </div>
                    <span className='w-[500px] text-center'>{history.service}</span>
                    <span className='text-right'>{history.date}</span>
                    <span className='history--todo'>:</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default HistoryList