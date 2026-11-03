import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import TextilePhoto from './TextilePhoto';

export function FitGuide(){
 const {t,i18n}=useTranslation();
 return <section className="selection-guide fit-guide" id="check-mattress-fit" aria-labelledby="fit-guide-title">
  <div className="selection-guide-copy"><p className="eyebrow">SlumbaZEN / {t('selectionGuide.width')} × {t('selectionGuide.length')}</p>
   <h2 id="fit-guide-title">{t('selectionGuide.fitTitle')}</h2>
   <p>{t('selectionGuide.fitIntro')}</p><p className="small">{t('selectionGuide.fitNote')}</p>
   <Link className="button" to={`/${i18n.language}/bedding-finder/`}>{t('selectionGuide.fitAction')}</Link>
  </div>
  <figure className="mattress-measurement">
   <svg viewBox="0 0 440 280" role="img" aria-label={t('selectionGuide.diagram')}>
    <g fill="#f8f1e7" stroke="#987b64" strokeWidth="1.5" strokeLinejoin="round">
     <path d="M95 118 L264 53 L358 109 L188 177 Z"/>
     <path d="M95 118 L188 177 L188 220 L95 161 Z" fill="#e5d9c9"/>
     <path d="M188 177 L358 109 L358 152 L188 220 Z" fill="#eee3d5"/>
     <path d="M102 120 L188 173 L351 109" fill="none" stroke="#c5b49f"/>
    </g>
    <g stroke="#73594b" fill="none" strokeWidth="1.5">
     <path d="M70 138 L162 198 M65 143 L75 133 M157 203 L167 193"/>
     <path d="M208 237 L378 169 M205 232 L211 242 M375 164 L381 174"/>
     <path d="M379 107 L379 150 M373 107 L385 107 M373 150 L385 150"/>
    </g>
    <g fill="#73594b" fontSize="17" textAnchor="middle"><text x="101" y="192">1</text><text x="298" y="224">2</text><text x="401" y="137">3</text></g>
   </svg>
   <figcaption className="measurement-legend"><span><b>1</b> {t('selectionGuide.width')}</span><span><b>2</b> {t('selectionGuide.length')}</span><span><b>3</b> {t('selectionGuide.depth')}</span></figcaption>
  </figure>
 </section>;
}

export function SetGuide(){
 const {t,i18n}=useTranslation();
 const pieces=[{key:'sheet',type:'fittedSheet',note:'sheetNote'},{key:'pillow',type:'pillowCase',note:'pillowNote'},{key:'duvet',type:'duvetCover',note:'duvetNote'}];
 return <section className="selection-guide set-guide" id="choose-set-pieces" aria-labelledby="set-guide-title">
  <div className="selection-guide-heading"><h2 id="set-guide-title">{t('selectionGuide.setTitle')}</h2><p>{t('selectionGuide.setIntro')}</p></div>
  <nav className="set-piece-grid" aria-label={t('selectionGuide.steps')}>
   {pieces.map((piece,index)=><Link className="set-piece" key={piece.key} to={`/${i18n.language}/gallery/?productType=${piece.type}`}>
    <svg viewBox="0 0 240 150" aria-hidden="true" focusable="false" fill="#f6efe4" stroke="#987b64" strokeWidth="1.5" strokeLinejoin="round">
     {piece.key==='sheet'?<><path d="M30 64 L148 23 L211 65 L94 111 Z"/><path d="M30 64 L94 111 L94 133 L30 89 Z M94 111 L211 65 L211 87 L94 133 Z"/><path d="M40 75 L45 87 M195 82 L195 92"/></>:piece.key==='pillow'?<><path d="M48 35 Q120 20 192 35 Q180 74 192 116 Q120 130 48 116 Q60 74 48 35 Z"/><path d="M61 43 Q120 32 179 43 Q170 75 179 108 Q120 119 61 108 Q70 75 61 43 Z" fill="none"/></>:<><path d="M39 23 L200 23 L200 130 L39 130 Z"/><path d="M47 31 L192 31 L192 116 L47 116 Z" fill="none"/><path d="M84 124 L155 124"/></>}
    </svg>
    <h3><span className="piece-step">0{index+1}</span>{t('selectionGuide.'+piece.key)}</h3><p>{t('selectionGuide.'+piece.note)}</p><span className="text-link">{t('selectionGuide.browse')}</span>
   </Link>)}
  </nav>
  <div className="selection-guide-footer"><p className="small">{t('selectionGuide.setNote')}</p><a className="button secondary" href="#enquiry">{t('selectionGuide.setAction')}</a></div>
 </section>;
}

export function TowelSelectionGuide(){
 const {t}=useTranslation();
 return <section className="selection-guide towel-selection-guide" id="choose-towels" aria-labelledby="towel-selection-title">
  <div className="selection-guide-copy"><h2 id="towel-selection-title">{t('selectionGuide.towelTitle')}</h2><p>{t('selectionGuide.towelIntro')}</p>
   <div className="selection-guide-actions"><a className="button" href="#towel-products">{t('selectionGuide.towelAction')}</a><a href="#first-wash">{t('selectionGuide.careAction')}</a></div>
  </div>
  <figure className="terry-detail"><TextilePhoto src="/assets/editorial/terry-detail.webp" srcSet="/assets/editorial/terry-detail-640.webp 640w, /assets/editorial/terry-detail.webp 1200w" sizes="(max-width:767px) calc(100vw - 56px), 42vw" width={1200} height={900} alt={t('selectionGuide.texture')} caption={t('selectionGuide.textureNote')}/><figcaption>{t('selectionGuide.textureNote')}</figcaption></figure>
 </section>;
}
