import Card from '@/components/card'
import { Button } from '@/components/ui/button'
import { PastInterviewData } from '@/data/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>Practice real interview questions & get instant feedback.</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href={'/interview'}>Start an Interview</Link>
          </Button>
        </div>
        <div>
          <Image
            alt='Banner Image'
            src={'/banner-01.png'}
            width={500}
            height={500}
            className='w-full h-auto object-cover rounded-lg max-sm:hidden'
          />
        </div>
      </section>
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {PastInterviewData.map((item) => (
            <Card key={item.id} cardData={item}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Page
