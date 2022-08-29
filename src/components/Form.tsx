import { useState } from 'react';

const Form = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Alta');

  return (
    <div className='md:w-1/2 lg:w-2/5 text-center'>
      <h2 className='font-black text-xl '>Agregar tarea</h2>
      <form className='mt-5 bg-white shadow-md rounded-md px-5 py-100'>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-semibold'
            htmlFor='taskName'
          >
            Nombre de la tarea
          </label>
          <input
            id='taskName'
            type='text'
            placeholder='Nueva tarea'
            className='border-2 w-full p-1 mt-1 rounded-md'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-semibold'
            htmlFor='taskDescription'
          >
            Descripción
          </label>
          <textarea
            id='taskDescription'
            className='border-2 w-full p-1 mt-1 rounded-md'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-semibold'>
            Prioridad
          </label>
          <select
            className='border-2 w-full p-1 mt-1 rounded-md text-center'
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value='Alta'>Alta</option>
            <option value='Media'>Media</option>
            <option value='Baja'>Baja</option>
          </select>
        </div>
        <input
          type='submit'
          value='Enviar'
          className='bg-indigo-400 w-full py-5 mt-3 text-white font-bold hover:bg-indigo-600  cursor-pointer transition hover:scale-105 rounded-lg'
        />
      </form>
    </div>
  );
};

export default Form;
