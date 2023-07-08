import { Airplay } from "lucide-react";
import {Home as HomeIcon, Search, Library, Volume, Plus, ChevronRight, ChevronLeftIcon, ChevronLeft, Box} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col mx-2">
      <div className="flex flex-1 h-32">
        <aside className="w-80  bg-zinc-800/40 p-2 rounded flex flex-col overflow-y-hidden">
            <nav className="flex flex-col gap-8 p-4 mb-4">
                    <a href="" className="flex gap-3  hover:text-zinc-100 ease-out duration-500"><HomeIcon/>Inicio</a>
                    <a href="" className="flex gap-3 hover:text-zinc-100 ease-out duration-500"><Search/>Buscar</a>
            </nav>
            <nav className="flex justify-between p-4">
                <a href="" className="flex gap-2 hover:text-zinc-100 ease-out duration-500"><Library/>Your library</a>
                <div className="flex gap-4">
                    <a href=""  className="hover:text-zinc-100 ease-out duration-500"><Plus/></a>
                    <a href="" className="hover:text-zinc-100 ease-out duration-500"><ChevronRight/></a>
                </div>
            </nav>
            <div className="flex overflow-auto scrollbar">
              <nav className="flex flex-col flex-1">
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> <span><h1 className="text-zinc-50">title</h1>playlist</span></a>
            </nav>
            </div>
        </aside>
        <main className="flex-1 p-4 bg-gradient-to-b from-green-900 from-10% to-zinc-800/40 to-30% ml-2 rounded">
        <div className="flex items-center justify-between">
            <div className="flex gap-3">
               <button className="p-1 rounded-full bg-black/40">
                <ChevronLeft/>
            </button>
            <button className="p-1 rounded-full bg-black/40">
                <ChevronRight/>
            </button> 
            </div>
            <div className="flex gap-3">
                <button className="rounded-full bg-black p-2"><Box size={20}/></button>
                <button className="rounded-full bg-black p-2"><Airplay size={20}/></button> 
            </div>
        </div>
        <h1 className="font-semibold text-4xl mt-10 text-green-200">Good Afternoon</h1>
            
        <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/10">playlist</div>
            <div className="bg-white/10">playlist</div>
            <div className="bg-white/10">playlist</div>
            <div className="bg-white/10">playlist</div>
            <div className="bg-white/10">playlist</div>
            <div className="bg-white/10">playlist</div>
        </div>

        </main>
      </div>
      <footer className="p-4">
        footerr
      </footer>
    </div>
  )
}