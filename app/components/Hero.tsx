import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity';
import Link from 'next/link';


async function getData() {
  const query = "*[_type == 'heroImages'][0]";
  const data = await client.fetch(query);
  return data;
}
const Hero = async () => {
  const data = await getData();
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
      <div className='flex flex-wrap mb-8 justify-between md:mb-16'>
        <div className='mb-6 flex flex-col w-full justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
          <h1 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>Optimal Style Comes At A <span className='text-primary/90'>Premium Cost!</span></h1>
          <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>Discover unparalleled excellence with our exclusive, high-quality products. Embrace the best – shop with us now!          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
          <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image
              src={urlFor(data.image1).url()}
              alt='Fashion Image'
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>
          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image
              src={urlFor(data.image2).url()}
              alt='Fashion Image'
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div><h1 className='text-primary text-xl font lg:text-3xl'>BUY NOW!!</h1></div>
        <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
          <Link href="/Mens" className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-300'>
            Men</Link>
          <Link href="/Womens" className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-300'>
            Women</Link>
          <Link href="/Kids" className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-300'>
            Kids</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero