import Image from "next/image";
import styles from "./page.module.css";
import mstyle from "./main.module.css"
import { SkillBubbles } from "@/components/skill_bubbles";

export default function Home() {
  return (
    <div className={mstyle.body}>
      <main>
        <section className={mstyle.hero}>
            <div>
                <h3>Welcome to my github page!! (v-0.0.0.3)</h3>
                <h1>Hello World!😁</h1>
            </div>
        </section>
        <section className={mstyle.sec1}>
            <h3>What I specialize in:</h3>
            <ul className={mstyle.skill_bubbles}>
              <SkillBubbles/>
            </ul>
        </section>
    </main>
    </div>
  );
}

