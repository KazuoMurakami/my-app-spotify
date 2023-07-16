import { ChevronRight, HomeIcon, Library, Plus, Search } from "lucide-react";
import Image from "next/image";
export function Lateral(){
    return(
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
    )
}