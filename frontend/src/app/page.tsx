'use client';
import {useSelector} from 'react-redux'

export default function Home() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
  const pets = useSelector((state: any) => state.pets.list)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Pet Finder 🐾</h1>
        <p>Is Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
        <p>Total Pets: {pets.length}</p>
      </main>
    </div>
  )
}
