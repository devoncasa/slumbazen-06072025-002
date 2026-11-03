import {useEffect} from 'react';
// Decorative backgrounds only. Content images keep native responsive <img> markup.
export function useDeferredBackgrounds(path:string,lang:string){useEffect(()=>{
 const elements=[...document.querySelectorAll<HTMLElement>('[data-background]')];
 const show=(el:HTMLElement)=>{el.style.backgroundImage=el.dataset.background||''};
 if(!('IntersectionObserver' in window)){elements.forEach(show);return;}
 const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){show(entry.target as HTMLElement);observer.unobserve(entry.target)}},{rootMargin:'300px 0px'});
 elements.forEach(el=>observer.observe(el));return()=>observer.disconnect();
},[path,lang]);}
