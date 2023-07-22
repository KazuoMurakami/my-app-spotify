export default function AlbumPrincipal(props: any) {
    return(
        <div className="bg-white/10 flex gap-3 flex-col p-2">
                <img src={props.src} alt={props.alt} width={300} height={300}/>
                <h2 className="text-white font-bold">{props.text}</h2>
                <span>{props.content}</span>
            </div>
    )
}

