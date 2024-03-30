import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello this is my github page</h1>
      <Image
        alt={""}
        src={"meauman.svg"}
        height={895}
        width={598}
      />
    </main>
  );
}
