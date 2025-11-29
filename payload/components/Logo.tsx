import Image from 'next/image'

function Logo() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <Image className='mx-auto block pb-12' src={"/om.svg"} width={350} height={200} quality={4000} alt='om'/>
        <h1 className='p-12 bg-red-500'>Shree Baglamukhi Mandir</h1>
    </div>
  )
}

export default Logo