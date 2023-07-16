import { Lateral } from "@/components/lateral";
import { Principal } from "@/components/principal";

export default function Home() {
  return (
    <div className="h-screen flex flex-col mx-2">
      <div className="flex flex-1 h-32">
        <Lateral/>

        <Principal/>

      </div>
      <footer className="p-4">
        footerr
      </footer>
    </div>
  )
}