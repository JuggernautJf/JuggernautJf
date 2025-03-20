import Image from "next/image";
import mstyle from "./main.module.css"
import { SkillBubbles } from "@/components/skill_bubbles";
import { Nav } from "./nav";
import curve1 from './wavesOpacity.svg'
import curve0 from './curveAsymmetricalNegative.svg'

export default function Home() {
  return (
    <div className={mstyle.body}>
      <main>
        <section id='hero' className={mstyle.hero}>
            <div>
                <h3>Welcome to my github page!! (v-0.0.0.3)</h3>
                <h1>Hello World!😁</h1>
            </div>
            <Image src={curve1} alt={''} width={1080} className={mstyle.transition_curve}/>
        </section>
        <section id="sec1" className={mstyle.sec1}>
            <h3>What I Work With:</h3>
            <ul className={mstyle.skill_bubbles}>
              <SkillBubbles/>
            </ul>
        </section>
    </main>
    </div>
  );
}

