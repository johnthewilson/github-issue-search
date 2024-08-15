
'use client'

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const route = (searchText: string) => {
    router.push(`/search?url=${encodeURIComponent(searchText)}`);
  };
  return (
    <main className='min-h-screen  bg-stone-900 w-screen  flex flex-col pt-20 items-center'>
      <Header />
      <SearchBar onSearch={route} />
    </main>
  );
}
