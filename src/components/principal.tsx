import { Airplay, Box, ChevronLeft, ChevronRight } from "lucide-react";

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
            <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer"><img src="/images/coldplay.jpeg" alt="" className="h-28"/><span className="flex-1">playlist</span></div>
            <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer"><img src="/images/coldplay.jpeg" alt="" className="h-28"/><span className="flex-1">playlist</span></div>
            <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer"><img src="/images/coldplay.jpeg" alt="" className="h-28"/><span className="flex-1">playlist</span></div>
            <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer"><img src="/images/coldplay.jpeg" alt="" className="h-28"/><span className="flex-1">playlist</span></div>
            <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer"><img src="/images/coldplay.jpeg" alt="" className="h-28"/><span className="flex-1">playlist</span></div>
            <div className="bg-white/10 flex items-center gap-3 hover:bg-white/30 cursor-pointer"><img src="/images/coldplay.jpeg" alt="" className="h-28"/><span className="flex-1">playlist</span></div>
        </div>
        </main>
    )
}