export default function AboutProduct({ image, name, description }) {
  return (
    <div className='w-full h-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row even:flex-row-reverse'>
      <div className='flex-1 w-full h-auto rounded-md overflow-hidden'>
        <img
          crossOrigin='anonymous'
          src={`/images/${image}`}
          className='block w-full h-full max-h-80 object-cover'
          alt=''
        />
      </div>

      <div className='flex-1 lg:px-6 space-y-3'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  );
}
