import { Container } from '@mui/material';
import FilterHead from './components/FilterHead';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Container maxWidth="md">
      <Provider store={store}>
        <FilterHead />
        <TodoList />
        <TodoForm />
      </Provider>
    </Container>
  );
}

export default App;
