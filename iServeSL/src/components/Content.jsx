import React from 'react'
import ContentHeader from './ContentHeader';
import Card from './Card';
import HistoryList from './HistoryList';
import '../styles/content.css';

const Content = () => {
  return (
    <div className='content'>
        <ContentHeader />
        <Card />
        <HistoryList />
    </div>
  )
}

export default Content;
