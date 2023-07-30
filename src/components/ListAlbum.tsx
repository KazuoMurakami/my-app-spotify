import Image from "next/image";
export default function ListAlbum(props: any) {
    return(
    <a href="" className="flex-1 items-center flex gap-2 hover:bg-zinc-600/20 ease-out duration-500 pt-2 pr-2 pb-2"> 
    <Image src={props.urlImage} alt={props.alt} width={100} height={100}/><span><h1 className="text-zinc-50">{props.alt}</h1>{props.content}</span>
    </a>
    )
}