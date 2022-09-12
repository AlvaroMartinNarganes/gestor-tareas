import { useEffect, useState } from 'react';

type Props = {
  taskName: String;
  description: String;
  priority: String;
  taskId: String;
  setTask: any;
};
const Task = ({ taskName, description, priority, taskId, setTask }: Props) => {
  const [colorPriority, setColorPriority] = useState('');
  //Control color
  useEffect(() => {
    if (priority === 'Alta') {
      setColorPriority(
        'mb-3 w-fit uppercase bg-red-500 p-1 text-black font-semibold',
      );
    } else if (priority === 'Media') {
      setColorPriority(
        'mb-3 w-fit uppercase bg-orange-500 p-1 text-black font-semibold',
      );
    } else {
      setColorPriority(
        'mb-3 w-fit uppercase bg-green-500 p-1 text-black font-semibold',
      );
    }
  }, [priority]);

  const edit = () => {
    const task = {
      taskName,
      description,
      priority,
      taskId,
    };
    setTask(task);
  };

  return (
    <div className='mb-5 ml-3 bg-white shadow-md rounded-md px-5 py-10'>
      <p className='font-bold mb-3 uppercase text-center border-b'>
        {taskName}
      </p>
      <p className='font-bold mb-3 uppercase'>
        <span className='font-normal normal-case'>{description}</span>
      </p>
      <p className={colorPriority}>Prioridad {priority}</p>
      <div className='border-t'>
        <button
          className='py-2 px-10 bg-indigo-500 hover:bg-indigo-700 font-bold rounded-sm mr-5 mt-2'
          type='button'
          onClick={edit}
        >
          Editar
        </button>
        <button
          className='py-2 px-10 bg-red-500 hover:bg-red-700 font-bold rounded-sm'
          type='button'
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;
