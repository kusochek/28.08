import React, { useEffect } from 'react';

const ModalWindow = ({ hadleCloseModal, hanleInputChange, handleAddNewMagicItem }) => {
  // useEffect(() => {
  //   console.log('mounted');

  //   return () => {
  //     console.log('unmounted');
  //   };
  // }, []);
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <h2>Add New Magic Item</h2>
        <input type='text' className='title-input' placeholder='Title' name='name' onChange={hanleInputChange} />
        <input type='text' className='description-input' placeholder='Description' name='description' onChange={hanleInputChange} />
        <input type='text' className='quality-input' placeholder='Quality' name='quality' onChange={hanleInputChange} />
        <input type='text' className='type-input' placeholder='Type' name='type' onChange={hanleInputChange} />
        <button onClick={handleAddNewMagicItem} className='add-button'>Add Item</button>
        <button onClick={hadleCloseModal} className='cancel-button'>Cancel</button>
      </div>
    </div>
  );
};

export default ModalWindow;
