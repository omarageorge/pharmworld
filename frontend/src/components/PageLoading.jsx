import PulseLoader from 'react-spinners/PulseLoader';

export default function PageLoading() {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
      <div>
        <PulseLoader color='green' />
        <span className='font-light text-lg mt-4'>Loading...</span>
      </div>
    </div>
  );
}
