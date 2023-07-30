import { ChevronRight, HomeIcon, Library, Plus, Search } from "lucide-react";
import ListAlbum from "./ListAlbum";

const AlbumImage = [
    {
        src: "/images/coldplay.jpeg",
        alt:"album coldplay",
        content: "coldplay"
    },
    {
        src: "/images/imaginedragons.jpg",
        alt:"album imagine dragons",
        content: "imagine Dragons"
    },
    {
        src: "/images/justin.jpg",
        alt:"album justin",
        content: "imagine Dragons"
    },
    {
        src: "/images/shawn.jpg",
        alt:"album shawn mendes",
        content: "shawn mendes"
    },
    {
        src: "/images/shawn2.jpg",
        alt:"album shawn mendes",
        content: "shawn mendes"
    },
    {
        src: "/images/download.jpg",
        alt:"album imagine dragons",
        content: "imagine Dragons"
    },
]
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
                {
                    AlbumImage.map(function(item){
                        return (
                            <ListAlbum urlImage={item.src} alt={item.alt} content={item.content}/>
                        )
                    })
                }
            </nav>
            </div>
        </aside>
    )
}