import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';

export type TaskType = {
  taskName: String;
  description: String;
  priority: String;
};

function App() {
  const [tasks, setTask] = useState<[TaskType] | []>([]);

  return (
    <div className='container mx-auto mt-5'>
      <Header />
      <div className='mt-12 md:flex '>
        <Form setTask={setTask} tasks={tasks} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
