import Image from 'next/image'
import { skillApiResData } from './skill_bubbles';
import { MouseEventHandler } from 'react';
export const Bubble = ({
    nam,
    data,
    onClick,
}: Readonly<{
    nam: string;
    data: Partial<skillApiResData>;
    onClick: MouseEventHandler<HTMLLIElement>;
}>) => (
    <li onClick={onClick}>
        <span>{nam}</span>
        {data.desc ? <div>{data.desc}</div> : null}
        {data.img ? (
            <Image
                src={data.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`img of how ${nam} code looks`}
                fill
            />
        ) : null}
    </li>
);

