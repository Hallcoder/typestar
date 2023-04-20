import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import Button from '@/components/common/button';
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <React.StrictMode>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <Head>
      <title>TypeStar ~ The fastest and enjoyable typing race and game</title>
      <link rel="icon" href="./favicon.png" />
    </Head>
      <div>
     
            <h2 className='font-bold m-4 text-3xl'> <Typewriter
  onInit={(typewriter:any) => {
    typewriter.typeString('TypeStar!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .typeString('You can earn money')
      .pauseFor(2500)
      .stop()
      .start();
  }}
/></h2>
    </div>
            <img src="./favicon.png" alt="" />
           <Button clickHandler={() => router.push('/home')}>&rarr;</Button>
    </main>
    </React.StrictMode>
  )
}
