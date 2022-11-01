export default function AboutProduct({ name, description }) {
  return (
    <div>
      <span className='font-bold text-xl'>
        <strong>{name}</strong>
      </span>
      <span className='font-light text-xl'>{description}</span>
    </div>
  );
}
