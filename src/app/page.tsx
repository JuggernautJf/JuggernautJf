import Image from "next/image";
import mstyle from "./main.module.css"
import mstyle2 from "./main.abt_me.module.css"
import { SkillBubbles } from "@/components/skill_bubbles";
import curve1 from './wavesOpacity.svg'
import { Card } from "@/components/traitCard"


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
            <h3>My Tools:</h3>
            <SkillBubbles/>
        </section>
        <section id="sec2" className={mstyle2.sec2}>
          <div className={mstyle2.blobby}>
            <h3>About Me:</h3>
            <p>Myself, Harsha Sur.☺️</p>
          </div>
        </section>
        <section id="sec3">
          <ul>
            <Card title={'lorem'}/>
            <Card title={'ipsum'}/>
            <Card title={'dolor'}/>
            <Card title={'sit'}/>
            <Card title={'amit'}/>
          </ul>
        </section>
    </main>
    </div>
  );
}

