import { Play } from "lucide-react";

export default function FavoriteAlbum(props: any){
    return(
        <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer rounded group">
            <img src={props.src} alt={props.alt} className="h-28"/>
            <span className="flex-1">{props.texto}</span>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </div>
    )
}