type Props = {
  errLog: String;
};
const ErrorModal = ({ errLog }: Props) => {
  return (
    <div className='bg-red-800 text-white font-bold p-3 rounded-md mb-2'>
      <p>{errLog}</p>
    </div>
  );
};

export default ErrorModal;
