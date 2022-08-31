import { TaskType } from '../App';
import Task from './Task';
type Props = {
  tasks: [TaskType] | [];
};
const TaskList = ({ tasks }: Props) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 '>
      <h2 className='font-black text-xl text-center mb-5 '>
        {tasks && tasks.length ? 'Lista de tareas' : 'No hay tareas'}
      </h2>
      <div className='md:h-screen md:overflow-y-scroll'>
        {tasks &&
          tasks.map((task, i) => {
            return (
              <Task
                key={task.taskName + i.toString()}
                taskName={task.taskName}
                description={task.description}
                priority={task.priority}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TaskList;
