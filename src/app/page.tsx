import { Lateral } from "@/components/lateral";
import { Principal } from "@/components/principal";
import Rodape from "@/components/rodape";
const AlbumImage = [
    {
        src: "/images/coldplay.jpeg",
        alt:"album coldplay"
    },
    {
        src: "/images/imaginedragons.jpg",
        alt:"album imaginedragons"
    },
    {
        src: "/images/justin.jpg",
        alt:"album justin"
    },
    {
        src: "/images/shawn.jpg",
        alt:"album shawn mendes"
    },
    {
        src: "/images/shawn2.jpg",
        alt:"album shawn mendes"
    },
    {
        src: "/images/download.jpg",
        alt:"album imagine dragons"
    },
]

export default function Home() {
  return (
    <div className="h-screen flex flex-col mx-2">
      <div className="flex flex-1 h-32">
        <Lateral/>
        
        <Principal/>
      </div>
        <Rodape/>
    </div>
  )
}