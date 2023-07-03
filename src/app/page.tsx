import {Home as HomeIcon, Search, Library, Volume, Plus, ChevronRight} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col mx-2">
      <div className="flex flex-1">
        <aside className="w-80 bg-zinc-800/40 p-2 rounded flex flex-col">
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
            <nav className="flex flex-col flex-1 ">
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
              <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500"> <Image src="/images/coldplay.jpeg" alt="album coldplay" width={50} height={50}/> Playlist</a>
            </nav>
        </aside>
        <main className="flex-1 p-4 bg-gradient-to-b from-green-900 from-10% to-zinc-800/40 to-30% ml-2 rounded">
        main
        </main>
      </div>
      <footer className="p-4">
        footerr
      </footer>
    </div>
  )
}