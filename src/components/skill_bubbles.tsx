"use client"
import { useEffect, useState } from "react";


const SkillBubbles = () => {
    const [items,setItems] = useState<{[index:string]:string}|null>();
    useEffect(() => {
      fetch('/api/skills', { method: "POST" })
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])
  
    return items? Object.entries(items).map(([nam, desc])=>(<li key={nam}> <span>{nam}</span> <div>{desc}</div></li>)) : (<></>)
  }
export { SkillBubbles }