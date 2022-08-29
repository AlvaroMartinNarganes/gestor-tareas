import Form from './components/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='container mx-auto mt-5'>
      <Header />
      <div className='mt-12 md:flex '>
        <Form />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
