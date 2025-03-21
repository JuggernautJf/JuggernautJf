import style from './traitCard.module.css'

export function Card ({title}:Readonly<{title:string}>) {
    return (<div className={style.Card}>
        <h1 title={title}>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perferendis inventore hic nesciunt.</p>
    </div>)
}