import './App.css';

function App() {
  const firstCity = 'Kiyv';
  const secondCity = 'Lviv';
  const thirdCity = 'Odesa';

  // const stykeForLviv = {
  //   fontSize: '30px',
  // };

  const handleClick = () => {
    console.log('Hello world!');
  }

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='example-wrapper'>
      <div>
        Hello world!
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, eum?</p>
      </div>
      <ul>
        <li>{firstCity}</li>
        <li
          style={{
            fontSize: '30px',
            color: 'blue',
            textDecoration: 'underline',
          }}
        >
          {secondCity}
        </li>
        <li>{thirdCity}</li>
      </ul>
      <button onClick={handleClick}>Click me!</button>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
