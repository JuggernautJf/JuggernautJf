"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from './skill_bubbles.module.css'
import { Bubble } from './skill_bubbles_partial'
import { useRouter } from "next/navigation";

interface skillApiRes {
  [index: string]: Partial<skillApiResData>
}
export interface skillApiResData {
  desc: string,
  img: string,
  web: string
}

const SkillBubbles = () => {
  const [items, setItems] = useState<skillApiRes | undefined>();
  const router = useRouter();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    fetch("/api/skills", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setItems(data));
    window.scrollTo(0, 0.1 * window.innerHeight);
  }, []);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const li = entry.target as HTMLLIElement;
        const div = li.children[1] as HTMLDivElement;
        if (div) {
          div.setAttribute(
            "data-posx",
            ((li.clientWidth * li.getBoundingClientRect().x) /
              window.innerWidth).toString()
          );
        }
      });
    });

    [...list.children].forEach((li) => {
      if (li instanceof HTMLLIElement) {
        observer.observe(li);
      }
    });

    return () => observer.disconnect(); // Cleanup observer
  }, [items]); // Rerun effect when items change

  return (
    <ul className={style.skill_bubbles} ref={listRef}>
      {items
        && Object.entries(items).map(([nam, data]) => (
          <Bubble
            key={nam}
            nam={nam}
            data={data}
            onClick={data.web ? () => router.push(data.web || "/error") : () => { }}
          />
        ))}
    </ul>
  );
};


/*********
(ev) => {
  const trg = (ev.currentTarget.parentElement);
  const div = trg?.children[1];
  if (!trg || !div || div instanceof HTMLDivElement) return;
  trg.children[1].setAttribute('data-posx',
    ((trg.clientWidth * trg.getBoundingClientRect().x) / window.innerWidth).toString()
  );
}
*/




export { SkillBubbles }