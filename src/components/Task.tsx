import { TaskType } from '../App';
type Props = {
  taskName: String;
  description: String;
  priority: String;
};
const Task = ({ taskName, description, priority }: Props) => {
  return (
    <div className='mb-5 ml-3 bg-white shadow-md rounded-md px-5 py-10'>
      <p className='font-bold mb-3 uppercase'>
        Tarea: <span className='font-normal normal-case'>{taskName}</span>
      </p>
      <p className='font-bold mb-3 uppercase'>
        Descripción:
        <span className='font-normal normal-case'>{description}</span>
      </p>
      <p className='mb-3 w-fit uppercase bg-red-500 p-1 text-black font-semibold'>
        Prioridad {priority}
      </p>
    </div>
  );
};

export default Task;
