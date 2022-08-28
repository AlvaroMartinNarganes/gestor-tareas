import Form from './components/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='container mx-auto mt-5'>
      <Header />
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
