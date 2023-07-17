import { Lateral } from "@/components/lateral";
import { Principal } from "@/components/principal";
import Rodape from "@/components/rodape";

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