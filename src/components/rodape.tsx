import { ListMinus, Maximize2, Play, Repeat, Shuffle, StepBack, StepForward, Volume2 } from "lucide-react";
import Image from "next/image";
export default function Rodape() {
    return(
        <footer className="flex p-4 justify-between">
		<div className="flex gap-2">
			<Image src="/images/coldplay.jpeg" alt="album" width={70} height={70}/>
			<div className="flex flex-col justify-center">
			<span className="font-bold">Coldplay</span>
			<span>paradise</span>
			</div>
		</div>
		  <div className="flex gap-2 flex-col items-center">
			<div className="flex gap-8 cursor-pointer">
			<Shuffle />
			<StepBack />
			<Play />
			<StepForward />
			<Repeat />
			</div>
			<div className="flex gap-2 items-center">
				<span>1:32</span>
				<div className="h-1 rounded-full w-96 bg-zinc-600">
					<div className="bg-zinc-200 w-32 h-1 rounded-full"></div>
				</div>
				<span>3:50</span>
			</div>
		  </div>
		  <div className="flex gap-4 items-center">
			<ListMinus />
			<Volume2 />
			<Maximize2 />
		  </div>
      </footer>
    )
}

