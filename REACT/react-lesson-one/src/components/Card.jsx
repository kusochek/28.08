import React from 'react';
import './styles.css';

const Card = ({ title, description, quality, type, isFavorite, handleDelete, handleToggleFavorite }) => (
  <div className='card'>
    <div className='left__card'>
      <span onClick={handleDelete}>🗑</span>
      <span className='favorite' onClick={handleToggleFavorite}>{isFavorite ? '💜' : '🤍'}</span>
      <p className="title">{title}</p>
      <p className="description" dangerouslySetInnerHTML={{__html: description}}></p>
    </div>
    <div className='right__card'>
      <p className="quality"><b>Quality:</b> <br />{quality}</p>
      <p className="type"><b>Type:</b> <br /> {type}</p>
    </div>
  </div>
);

export default Card;