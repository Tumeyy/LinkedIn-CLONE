import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => {
    <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  };

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Stefan React is back", "Top news - 999 readers")}
        {newsArticle("Bitcoin has hit ATH", "Crypto News - 321 readers")}
    </div>
  )
}

export default Widgets