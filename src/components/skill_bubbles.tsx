"use client"
import { MouseEventHandler, useEffect, useState } from "react";
import Image from 'next/image'



const SkillBubbles = () => {

  //fetch skills data from '/api/skills'
    const [items,setItems] = useState<{[index:string]:string[2]}|null>();
    useEffect(() => {
      fetch('/api/skills', { method: "POST" })
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])
  
  
    return items? Object.entries(items).map(([nam, desc])=>(
      <li 
        onMouseOverCapture={ (ev) => {
          const trg = ( ev.currentTarget );
          trg.children[1].setAttribute('data-posx',
            ((trg.clientWidth*trg.getBoundingClientRect().x)/window.innerWidth).toString()
          )
        } }
        key={nam}
      > 
        <span>{nam}</span> <div>{desc}</div> <Image src={'/skills/react.png'} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={`img of how ${nam} code looks`} fill objectFit="cover" />
      </li>)) : (<></>)
  }

export { SkillBubbles }