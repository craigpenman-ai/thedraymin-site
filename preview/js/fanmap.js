(function(){
const FORM='https://docs.google.com/forms/d/e/1FAIpQLSd1uoWgXTMYtx4Shh2RttLLd91NYPomJK_LLczsitA3o9xQyw/viewform?usp=pp_url';
const E={venue:'entry.1992486931',town:'entry.1215064003',when:'entry.963311938',pin:'entry.40672679'};
function formUrl(o){let u=FORM;for(const k in o)if(o[k])u+='&'+E[k]+'='+encodeURIComponent(o[k]);return u}
const gigs=[
 {y:2005,d:'May 2005',v:'The Yard',t:'Rosyth',ll:[56.0470,-3.4220],n:'The first ever gig. Homemade banner.'},
 {y:2006,d:'2006',v:'Death Disco, Notting Hill Arts Club',t:'London',ll:[51.5094,-0.1966],n:"Alan McGee's club night, off the back of Garden City."},
 {y:2006,d:'2006',v:'The Cavern Club',t:'Liverpool',ll:[53.4064,-2.9879],n:'Garden City takes them to the Cavern.'},
 {y:2007,d:'March 2007',v:'South by Southwest',t:'Austin, Texas',ll:[30.2672,-97.7431],n:'14 to 18 March. From The Hut to one of the biggest music festivals in the world.'},
 {y:2007,d:'2007',v:'T in the Park',t:'Balado',ll:[56.2050,-3.4560],n:'A packed T Break tent at the first T in the Park.'},
 {y:2008,d:'2008',v:"Alhambra, the 'final' gig",t:'Dunfermline',ll:[56.0718,-3.4585],n:'Around 1,000 people say goodbye. It does not stick.'},
 {y:2009,d:'2009',v:"King Tut's Wah Wah Hut",t:'Glasgow',ll:[55.8626,-4.2653],n:'Back again, a year after the farewell.'},
 {y:2010,d:'10 July 2010',v:'T in the Park, T Break stage',t:'Balado',ll:[56.2035,-3.4600],n:'Saturday on the T Break stage, now a five-piece.'},
 {y:2013,d:'2013',v:'PJ Molloys',t:'Dunfermline',ll:[56.0712,-3.4620],n:'Save the Pars fundraising gigs.'},
 {y:2015,d:'2015',v:"Weekend Revolution festival, Lourenzo's",t:'Dunfermline',ll:[56.0705,-3.4630],n:'The final gig, before 11 years away.'},
 {y:2026,d:'3 October 2026',v:'Alhambra Theatre',t:'Dunfermline',ll:[56.0727,-3.4595],n:'First hometown show in 11 years. 1,700 people. Sold out.',big:1}
];
document.getElementById('addGig').href=FORM;
let map=null,markers=[],temp=null;
const views={fife:[[56.06,-3.45],10],uk:[[54.6,-3.2],5],austin:[[30.2672,-97.7431],11]};
if(window.L){
 map=L.map('gigmap',{scrollWheelZoom:false,tap:true}).setView(...views.uk);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
 gigs.forEach((g,i)=>{const ic=L.divIcon({className:'pin'+(g.big?' big':'')+(g.home?' home':''),html:'<span></span>',iconSize:[22,22],iconAnchor:[11,11]});
  const m=L.marker(g.ll,{icon:ic}).addTo(map);
  m.bindPopup('<div class="pop-y">'+g.d+'</div><div class="pop-v">'+g.v+'</div><div class="pop-t">'+g.t+'</div><p>'+g.n+'</p>'+(g.home?'':'<a class="pop-btn" target="_blank" rel="noopener" href="'+formUrl({venue:g.v,town:g.t,when:g.d,pin:g.ll.join(',')})+'">I was there. Tell your story</a>'));
  markers[i]=m});
 map.on('click',e=>{const ll=[+e.latlng.lat.toFixed(4),+e.latlng.lng.toFixed(4)];
  document.getElementById('mapHint').style.opacity=0;
  if(temp)map.removeLayer(temp);
  temp=L.marker(ll,{icon:L.divIcon({className:'pin new',html:'<span>+</span>',iconSize:[30,30],iconAnchor:[15,15]})}).addTo(map);
  const pop=t=>'<div class="pop-y">New gig</div><div class="pop-v">Played here?</div><div class="pop-t">'+(t||'Somewhere we forgot')+'</div><p>Tell us the venue, roughly when, and what happened.</p><a class="pop-btn" target="_blank" rel="noopener" href="'+formUrl({town:t,pin:ll.join(',')})+'">Add this gig</a>';
  temp.bindPopup(pop('')).openPopup();
  fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=10&lat='+ll[0]+'&lon='+ll[1]).then(r=>r.json()).then(j=>{const a=j.address||{};const t=a.city||a.town||a.village||a.county||'';if(t&&temp){temp.setPopupContent(pop(t))}}).catch(()=>{});
 });
}
// year accordion
const yl=document.getElementById('yearList');const years=[...new Set(gigs.map(g=>g.y))];
years.forEach(y=>{const d=document.createElement('details');d.className='yr';const gs=gigs.map((g,i)=>[g,i]).filter(([g])=>g.y===y);
 d.innerHTML='<summary><span>'+y+'</span><em>'+gs.length+(gs.length>1?' gigs':' gig')+'</em></summary>';
 const ul=document.createElement('ul');gs.forEach(([g,i])=>{const li=document.createElement('li');li.innerHTML='<button type="button"><b>'+g.v+'</b><span>'+g.t+' &middot; '+g.d+'</span></button>';
  li.querySelector('button').addEventListener('click',()=>{if(!map)return;document.getElementById('gigmap').scrollIntoView({behavior:'smooth',block:'center'});map.flyTo(g.ll,g.ll[0]<40?10:13,{duration:1.2});setTimeout(()=>markers[i].openPopup(),1300)});ul.appendChild(li)});
 const add=document.createElement('li');add.innerHTML='<a target="_blank" rel="noopener" href="'+formUrl({when:String(y)})+'">+ Another '+y+' gig we forgot</a>';ul.appendChild(add);
 d.appendChild(ul);yl.appendChild(d)});
const more=document.createElement('a');more.className='yr-more';more.target='_blank';more.rel='noopener';more.href=FORM;more.textContent='+ A year we have not listed';yl.appendChild(more);
document.querySelectorAll('[data-fly]').forEach(b=>b.addEventListener('click',()=>{if(map)map.flyTo(...views[b.dataset.fly],{duration:1.4})}));
let touring=false;document.getElementById('tourBtn').addEventListener('click',async function(){if(!map||touring)return;touring=true;this.textContent='Touring...';
 for(const [i,g] of gigs.entries()){map.flyTo(g.ll,g.ll[0]<40?9:11,{duration:1.6});await new Promise(r=>setTimeout(r,1700));markers[i].openPopup();await new Promise(r=>setTimeout(r,1900))}
 map.closePopup();map.flyTo(...views.uk,{duration:1.4});this.innerHTML='&#9654; Play the tour';touring=false});
})();
