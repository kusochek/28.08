import React from 'react';
import './styles.css';
import Card from '../components/Card';

const MagicItems = ({ magicItems}) => {
  return (
    <div className='card-wrapper'>
      {magicItems.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          description={item.description}
          quality={item.quality}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default MagicItems;
