import Hero from "./Components/Hero";
import Sliders from "./Components/Sliders";
import { SliderData } from "./Components/SliderData";
import Instagram from "./Components/Instagram";

export default function Home() {
  return (
    <main className="">
    <Hero heading='Capture PhotoGrapy' message='I capture moment is nature and keep them alive'/>
    <Sliders sliders={SliderData}/>
    <Instagram/>
    </main>
  )
}
