export default function AboutProduct({ name, description }) {
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-lg'>
        <strong>{name}</strong>
      </span>
      <span className='font-light text-lg'>{description}</span>
    </div>
  );
}
