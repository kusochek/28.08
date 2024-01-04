import React from 'react';
import './styles.css';

const Header = ({ hanldeFilterMagicItems, hadleOpenModal }) => (
  <header className='header'>
    <h1>MAGIC ITEMS</h1>
    <div>
      <button className='heder__button' onClick={hadleOpenModal}>Create New Item</button>
      <input type='text' placeholder='Find Magic Item...' className='header__input' onChange={hanldeFilterMagicItems} />
    </div>
  </header>
);

export default Header;
