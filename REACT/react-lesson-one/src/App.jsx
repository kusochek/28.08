import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MagicItems from './pages/MagicItems';
import ModalWindow from './components/ModalWIndow';
import { generateRandomId } from './utils';
import { magicItems } from './api';

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
  const [allMagicItems, setAllMagicItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMagicItemData, setNewMagicItemData] = useState({
    name: '',
    description: '',
    quality: '',
    type: '',
    isFavorite: false,
    source: 'Dungeon master\'s guide',
  });

  const fetchMagicItems = useCallback(async () => {
    const { data } = await magicItems.get();
    setAllMagicItems(data);
  }, []);

  useEffect(() => {
    fetchMagicItems();
  }, []);

  const magicItemsToShow = useMemo(() => allMagicItems.filter((item) => item.name.toLowerCase().indexOf(inputValue) !== -1), [allMagicItems, inputValue]);

  const filterMagicItems = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setInputValue(inputValue);
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

  const addNewMagicItem = async () => {
    const newMagicItem = {
      ...newMagicItemData,
      id: generateRandomId(),
    };

    try {
      const { data } = await magicItems.post(newMagicItem);

      setAllMagicItems([...allMagicItems, data])
    } catch (error) {
      console.log(error);
    } finally {
      hadleCloseModal();
    }
  };

  const handleDelete = async (id) => {
    try {
      await magicItems.delete(id);
      console.log('deleted');

      setAllMagicItems(allMagicItems.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleFavorite = async (id) => {
    try {
      const clickedMagicItem = allMagicItems.find((item) => item.id === id);
      const params = {
        ...clickedMagicItem,
        isFavorite: !clickedMagicItem.isFavorite,
      };
      
      const { data } = await magicItems.put(id, params);
      const updatedMagicItems = allMagicItems.map((item) => {
        if (item.id === id) {
          return data;
        }

        return item;
      });

      setAllMagicItems(updatedMagicItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header
        hanldeFilterMagicItems={filterMagicItems}
        hadleOpenModal={hadleOpenModal}
      />
      <MagicItems
        magicItems={magicItemsToShow}
        handleDelete={handleDelete}
        handleToggleFavorite={handleToggleFavorite}
      />
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
