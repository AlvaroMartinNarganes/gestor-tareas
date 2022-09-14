import { TaskType } from '../App';
import Task from './Task';
type Props = {
  tasks: TaskType[] | [];
  setTask: any;
  deleteTask: (id: string) => void;
};
const TaskList = ({ tasks, setTask, deleteTask }: Props) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 '>
      <h2 className='font-black text-xl text-center mb-5 '>
        {tasks && tasks.length ? 'Lista de tareas' : 'No hay tareas'}
      </h2>
      <div className='md:h-screen md:overflow-y-auto'>
        {tasks &&
          tasks.map((task, i) => {
            return (
              <Task
                key={task.taskName + i.toString()}
                taskName={task.taskName}
                description={task.description}
                priority={task.priority}
                taskId={task.taskId}
                setTask={setTask}
                deleteTask={deleteTask}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TaskList;
