import type { CSSProperties } from 'react';
export function Icon({name,size=24,filled=false}:{name:string;size?:number;filled?:boolean}) {
 const paths: Record<string,React.ReactNode>={
 diandianOutline:<path d="M3 20V12a9 9 0 1 1 9 9H4a1 1 0 0 1-1-1Z"/>,chevronDown:<path d="m5 9 7 7 7-7"/>,
 box:<><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><path d="m3 7 9 5 9-5M12 12v10M7 4l10 6v6"/></>,shield:<><path d="m12 2 9 4v7c0 5-9 9-9 9s-9-4-9-9V6l9-4Z"/><path d="m8 12 3 3 5-6"/></>,
 filter:<path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z"/>,
 back:<path d="m15 3-9 9 9 9"/>,close:<path d="m5 5 14 14M19 5 5 19"/>,next:<path d="m9 5 7 7-7 7"/>,
 heart:<path d="M12 21S2 14.6 2 7.8C2 2.3 8.7 1.4 12 6c3.3-4.6 10-3.7 10 1.8C22 14.6 12 21 12 21Z"/>,
 star:<path d="m12 2 3.1 6.5 7.2 1-5.2 5.1 1.3 7.2-6.4-3.4-6.4 3.4 1.3-7.2L1.7 9.5l7.2-1Z"/>,
 comment:<><path d="M21.5 11.6a9.5 9.5 0 0 1-13.8 8.5L2 22l1.7-6A9.5 9.5 0 1 1 21.5 11.6Z"/><circle cx="8" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="11" r="1" fill="currentColor" stroke="none"/></>,
 share:<path d="m14 2 8 7-8 7v-5C7 11 4.3 14.6 2 20c0-10 4.4-14 12-14Z"/>,
 search:<><circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 6 6"/></>,
 edit:<><path d="m4 16 12-12a2 2 0 0 1 3 3L7 19l-4 1 1-4ZM3 23h18"/></>,
 more:<>{[4,12,20].map(x=><circle key={x} cx={x} cy="12" r="1.6" fill="currentColor" stroke="none"/>)}</>,
 check:<path d="m5 12 4 4L19 6"/>, bag:<><path d="M5 6h14l2 16H3L5 6Z"/><path d="M8 8V5a4 4 0 0 1 8 0v3"/></>,
 clock:<><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></>,
 sun:<><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></>,
 face:<><circle cx="12" cy="12" r="9"/><path d="M8 9h.01M16 9h.01M8 15q4 4 8 0"/></>,
 info:<><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-11v.2"/></>,
 grid:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
 cart:<><path d="M2 3h3l3 13h11l3-10H6"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></>,
 plus:<path d="M12 4v16M4 12h16"/>,arrow:<path d="M3 12h18m-7-7 7 7-7 7"/>,home:<><path d="m2 10 10-8 10 8M5 8v14h14V8M10 22v-8h4v8"/></>
 };
 return <svg width={size} height={size} viewBox="0 0 24 24" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.info}</svg>;
}
export function Diandian({size=30}:{size?:number}){ return <span className="diandian" style={{width:size,height:size} as CSSProperties} aria-hidden="true"/>; }
const crops:Record<string,[string,number,number,number,number,number,number]>={
 hero:['02',1122,1402,260,338,600,376],
 portrait:['08',1055,1491,216,548,300,253],
 cheek:['08',1055,1491,539,548,300,253],
 bottleFace:['08',1055,1491,216,958,300,223],
 eye:['08',1055,1491,539,958,300,223],
 product:['09',1024,1536,244,365,157,155]
};
export function Photo({kind='hero',className='',label='粉底液体验配图'}:{kind?:string;className?:string;label?:string}){
 if(/^n[1-9]$/.test(kind)||kind==='product')return <span role="img" aria-label={label} className={`photo ${className}`}><img className="note-photo-original" src={`${import.meta.env.BASE_URL}assets/notes/${kind==='product'?'n9':kind}.webp`} alt="" loading="lazy" decoding="async"/></span>;
 const [file,W,H,x,y,w,h]=crops[kind]||crops.hero;
 return <span role="img" aria-label={label} className={`photo ${className}`}><span className="photo-crop" style={{width:`max(100cqw, ${w/h*100}cqh)`,height:`max(100cqh, ${h/w*100}cqw)`,backgroundImage:`url(${import.meta.env.BASE_URL}assets/reference-${file}.png)`,backgroundSize:`${W/w*100}% ${H/h*100}%`,backgroundPosition:`${x/(W-w)*100}% ${y/(H-h)*100}%`}}/></span>;
}
