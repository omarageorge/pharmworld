export default function AboutProduct({ name, description }) {
  return (
    <div className='flex flex-col'>
      <span className='font-normal text-xl'>
        {/* <strong>{name}</strong> */}
        {name}
      </span>
      <span className='font-light text-lg'>{description}</span>
    </div>
  );
}
