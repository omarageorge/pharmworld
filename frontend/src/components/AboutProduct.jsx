export default function AboutProduct() {
  return (
    <div className='w-full h-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row even:flex-row-reverse'>
      <div className='flex-1 w-full h-auto rounded-md overflow-hidden'>
        <img
          src='/pill.jpg'
          className='block w-full h-full object-cover'
          alt=''
        />
      </div>

      <div className='flex-1 lg:px-6 space-y-3'>
        <h1 className='text-xl font-bold'>Oxycodone Pill</h1>
        <p className='text-gray-500'>
          Oxycodone Pill is White, Capsule-shape and has been identified as
          Acetaminophen and Oxycodone Hydrochloride 325 mg / 10 mg. It is
          supplied by Mallinckrodt Pharmaceuticals. Acetaminophen/oxycodone is
          used in the treatment of Chronic Pain and belongs to the drug class
          narcotic.analgesic combinations Risk cannot be ruled out during
          pregnancy. Acetaminophen/oxycodone 325 mg / 10 mg is classified as a
          Schedule 2 controlled substance under the Controlled Substance Act
          (CSA).
        </p>

        <button className='bg-lime-700 text-gray-100 px-4 py-2 rounded-md'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
