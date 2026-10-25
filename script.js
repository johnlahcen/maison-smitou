// Replace with your international WhatsApp number, digits only (e.g. 33612345678).
const WHATSAPP_NUMBER = '';
// DEMO ONLY: names, prices, sizes, descriptions and photos are fictional.
const products = [
{name:'Robe Alba',price:149,sizes:'S · M · L',desc:'Une silhouette aérienne pour les journées baignées de soleil.',photo:'photo-1515372039744-b8f02a3ae446'},
{name:'Robe Calista',price:179,sizes:'XS · S · M · L',desc:'Une allure romantique et libre, inspirée des étés méditerranéens.',photo:'photo-1539008835657-9e8e9680c956'},
{name:'Robe Naya',price:129,sizes:'S · M · L',desc:'La simplicité d’une coupe fluide, pensée pour les beaux jours.',photo:'photo-1483985988355-763728e1935b'},
{name:'Robe Soline',price:189,sizes:'XS · S · M',desc:'Une pièce au charme intemporel, pour les longues soirées d’été.',photo:'photo-1496747611176-843222e1e57c'},
{name:'Robe Dalia',price:159,sizes:'S · M · L · XL',desc:'Légèreté, douceur et mouvement : l’esprit des vacances.',photo:'photo-1509631179647-0177331693ae'},
{name:'Robe Inès',price:139,sizes:'XS · S · M · L',desc:'Une silhouette lumineuse à porter du matin jusqu’au soir.',photo:'photo-1525507119028-ed4c629a60a3'}
];
const photo=(id,w=800)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const grid=document.querySelector('#product-grid');
products.forEach((p,i)=>{const card=document.createElement('article');card.className='card';card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`Voir ${p.name}`);card.innerHTML=`<div class="card-image"><img loading="lazy" src="${photo(p.photo)}" alt="Photographie de mode illustrative pour ${p.name}"></div><div class="card-info"><h3>${p.name}</h3><span class="price">${p.price} €</span></div><small>VOIR LE MODÈLE ↗</small>`;card.addEventListener('click',()=>openProduct(i));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProduct(i)}});grid.append(card)});
const dialog=document.querySelector('#product-dialog');
function whatsappLink(message){return WHATSAPP_NUMBER?`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`:null}
function configureLink(el,message){const url=whatsappLink(message);if(url){el.href=url;el.target='_blank';el.rel='noopener noreferrer'}else{el.removeAttribute('href');el.style.cursor='not-allowed';el.title='Numéro WhatsApp à configurer';el.addEventListener('click',e=>e.preventDefault())}}
function openProduct(i){const p=products[i];document.querySelector('#dialog-image').src=photo(p.photo);document.querySelector('#dialog-image').alt=`Photo illustrative : ${p.name}`;document.querySelector('#dialog-title').textContent=p.name;document.querySelector('#dialog-price').textContent=`${p.price} € · prix fictif`;document.querySelector('#dialog-description').textContent=p.desc;document.querySelector('#dialog-sizes').textContent=`Tailles fictives : ${p.sizes}`;configureLink(document.querySelector('#dialog-whatsapp'),`Bonjour Maison Smitou, je souhaite des informations sur ${p.name}.`);dialog.showModal()}
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});configureLink(document.querySelector('#general-whatsapp'),'Bonjour Maison Smitou, je souhaite des informations sur votre collection.');document.querySelector('#year').textContent=new Date().getFullYear();document.querySelector('.menu').addEventListener('click',()=>{const n=document.querySelector('#nav');const open=n.classList.toggle('open');document.querySelector('.menu').setAttribute('aria-expanded',String(open))});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#nav').classList.remove('open')));
