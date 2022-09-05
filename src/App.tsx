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
  const [tasks, setTasks] = useState<[TaskType] | []>([]);
  const [task, setTask] = useState<TaskType |{}>({})

  return (
    <div className='container mx-auto mt-5'>
      <Header />
      <div className='mt-12 md:flex '>
        <Form setTasks={setTasks} tasks={tasks} task={task}/>
        <TaskList tasks={tasks} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
