import Task from './Task';

const TaskList = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 '>
      <h2 className='font-black text-xl text-center mb-5 '>Lista de tareas</h2>
      <div className='md:h-screen md:overflow-y-scroll'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TaskList;
