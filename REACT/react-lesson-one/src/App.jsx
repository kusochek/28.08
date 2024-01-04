import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { magicItems } from './constants';
import MagicItems from './pages/MagicItems';
import ModalWindow from './components/ModalWIndow';
import { generateRandomId } from './utils';

// EXAMPLE HOW WORK USE_SATE
// function useState(initialState) {
//   let state = initialState;
//   const setState = (newState) => {
//     state = newState;
//     // ...;
//   }
//   // ...;
//   return [state, setState];
// }

const App = () => {
  const [arrayOfNewMagicItems, setArrayOfNewMagicItems] = useState([]); 
  const [magicItemsToShow, setMagicItemsToShow] = useState([...arrayOfNewMagicItems, ...magicItems]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMagicItemData, setNewMagicItemData] = useState({
    name: '',
    description: '',
    quality: '',
    type: '',
  });

  const filterMagicItems = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const filteredMagicItems = [...arrayOfNewMagicItems, ...magicItems].filter((item) => item.name.toLowerCase().indexOf(inputValue) !== -1);
    setMagicItemsToShow(filteredMagicItems);
  };

  const hadleOpenModal = () => {
    setIsModalOpen(true)
  };

  const hadleCloseModal = () => {
    setIsModalOpen(false)
  };

  const hanleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMagicItemData({
      ...newMagicItemData,
      [name]: value,
    });
  };

  const addNewMagicItem = () => {
    const newMagicItem = {
      ...newMagicItemData,
      id: generateRandomId(),
    };

    setArrayOfNewMagicItems([newMagicItem, ...arrayOfNewMagicItems]);
    setMagicItemsToShow([newMagicItem, ...magicItemsToShow]);
    hadleCloseModal();
  };

  return (
    <>
      <Header
        hanldeFilterMagicItems={filterMagicItems}
        hadleOpenModal={hadleOpenModal}
      />
      <MagicItems magicItems={magicItemsToShow} />
      {isModalOpen &&
        <ModalWindow
          hadleCloseModal={hadleCloseModal}
          hanleInputChange={hanleInputChange}
          handleAddNewMagicItem={addNewMagicItem}
        />
      }
    </>
  );
}

export default App;
