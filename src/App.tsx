import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';

export type TaskType = {
  taskName: string;
  description: string;
  priority: string;
  taskId: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[] | []>(
    JSON.parse(localStorage.getItem('tasks') || '[]'), //Start the app with the localStorage
  );
  const [task, setTask] = useState<TaskType | {}>({});

  //UseEffect to save in localstorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //Function to delete a task (send to Task)
  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className='container mx-auto'>
      <Header />
      <div className='mt-12 md:flex '>
        <Form setTasks={setTasks} setTask={setTask} tasks={tasks} task={task} />
        <TaskList tasks={tasks} setTask={setTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
