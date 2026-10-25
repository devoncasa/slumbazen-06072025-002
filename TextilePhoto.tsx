import React,{useRef,useState} from 'react';
import {useTranslation} from 'react-i18next';
import {specWords} from './catalogueSpecs';
export default function TextilePhoto({src,alt,className='',width=1200,height=900,srcSet,sizes,loading='lazy',caption}:{src:string,alt:string,className?:string,width?:number,height?:number,srcSet?:string,sizes?:string,loading?:'lazy'|'eager',caption?:string}){
 const {i18n}=useTranslation();const lang=i18n.language;const w=specWords[lang]||specWords.en;const dialog=useRef<HTMLDialogElement>(null);const [opened,setOpened]=useState(false);
 return <><button type="button" className="textile-photo-trigger" aria-label={w.viewImage+' · '+alt} onClick={()=>{setOpened(true);dialog.current?.showModal()}}><img src={src} alt={alt} width={width} height={height} srcSet={srcSet} sizes={sizes} loading={loading} decoding="async" className={className}/><span className="image-enlarge" aria-hidden="true">＋</span></button><dialog ref={dialog} className="textile-lightbox" aria-label={alt} onClose={()=>setOpened(false)} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}><button type="button" className="lightbox-close" onClick={()=>dialog.current?.close()}>{w.close} ×</button>{opened&&<img src={src} alt={alt} width={width} height={height}/>}<p>{caption||alt}</p></dialog></>;
}
