import PulseLoader from 'react-spinners/PulseLoader';

export default function PageLoading() {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
      <PulseLoader color='green' />
    </div>
  );
}
