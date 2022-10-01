import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
        <div className='widget__articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widget__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  );

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Stefan React is back", "Top news - 999 readers")}
        {newsArticle("Bitcoin has hit ATH", "Crypto News - 321 readers")}
        {newsArticle("Covid-19", "World News - 9999 readers")}
        {newsArticle("Am I good at React?", "Opinion - 5643 readers")}
        {newsArticle("Am I good at Redux?", "Opinion - 333 readers")}
        {newsArticle("Elon Musk buys Twitter", "Top news - 9999 readers")}
    </div>
  );
}

export default Widgets