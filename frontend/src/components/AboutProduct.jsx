export default function AboutProduct({ name, description }) {
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-xl'>
        <strong>{name}</strong>
      </span>
      <span className='font-light text-xl'>{description}</span>
    </div>
  );
}
