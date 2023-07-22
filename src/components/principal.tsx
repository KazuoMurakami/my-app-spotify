import { Airplay, Box, ChevronLeft, ChevronRight, Play } from "lucide-react";
import AlbumPrincipal from "./AlbumPrincipal";
import FavoriteAlbum from "./FavoriteAlbum";
const AlbumImage = [
    {
        src: "/images/coldplay.jpeg",
        alt:"album coldplay",
        content: "coldplay"
    },
    {
        src: "/images/imaginedragons.jpg",
        alt:"album imaginedragons",
        content: "imagineDragons"
    },
    {
        src: "/images/justin.jpg",
        alt:"album justin",
        content: "imagineDragons"
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
        content: "imagineDragons"
    },
]
export function Principal(){
    return(
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
            {
            AlbumImage.map(function(item){
                return(
                    <FavoriteAlbum src={item.src} alt={item.alt} texto={item.content}/>
                )
            })
        }
        </div>
        <h1 className="font-semibold text-4xl mt-10 text-green-200">Seus favoritos</h1>
        <div className="grid grid-cols-6 gap-6">
            {
                AlbumImage.map(function(item){
                    return(
                        <AlbumPrincipal src={item.src} alt={item.alt} content={item.content}/>
                    )
                })
            }
           
        </div>
        </main>
    )
}