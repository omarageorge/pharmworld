export default function AboutProduct({ name, description }) {
  return (
    <div className=''>
      <h2 className='font-medium text-xl'>{name}</h2>
      <p className='font-light'>{description}</p>
    </div>
  );
}
