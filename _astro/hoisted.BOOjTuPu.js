import{c,g as m,r as d}from"./hoisted.CHQ4MIKl.js";const n=document.getElementById("slList"),h=document.getElementById("slEmpty"),u=document.getElementById("slActions"),r=document.getElementById("slEmail"),s=()=>{const o=m();n.replaceChildren(),o.forEach(e=>{const t=document.createElement("div");t.className="shortlist-item",t.innerHTML='<a class="shortlist-item__img"><img width="240" height="240" loading="lazy" alt=""></a><div class="shortlist-item__body"><a class="shortlist-item__range"></a><span class="shortlist-item__colour"></span></div><button type="button" class="shortlist-item__remove" aria-label="Remove">Remove</button>',t.querySelectorAll("a").forEach(i=>{i.href=e.href});const l=t.querySelector("img");l.src=e.thumb,l.alt=`${e.range}, ${e.colour}`,t.querySelector(".shortlist-item__range").textContent=e.range,t.querySelector(".shortlist-item__colour").textContent=e.colour,t.querySelector("button").addEventListener("click",()=>{d(e.key),s()}),n.append(t)}),h.hidden=o.length>0,u.hidden=o.length===0;const a=`Hi Victoria Carpets,

I've shortlisted these on your website. Could you let me know prices and availability?

${o.map(e=>`- ${e.range}, ${e.colour}`).join(`
`)}

Room sizes (approx):
Area / postcode:
Best number to call me on:

Thanks`;r.href=`mailto:${r.dataset.email}?subject=${encodeURIComponent("My shortlist")}&body=${encodeURIComponent(a)}`};document.getElementById("slClear").addEventListener("click",()=>{c(),s()});s();
