import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen w-screen flex items-end'>
      <div className='text-[70px]'>
        hi! this is <span className='font-bold hover:italic'>sid</span>, an <span className='font-bold hover:italic'>ux designer</span> by profession and a <span className='font-bold hover:italic'>developer</span> by passion.
      </div>
    </div>
  )
}
