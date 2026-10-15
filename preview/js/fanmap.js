(function(){
const gigs=[
 {id:'hut',y:'2004',v:'The Hut',t:'Rosyth',ll:[56.0440,-3.4310],n:'Where it all started. A soundproofed hut at the bottom of the Penman garden.',home:1},
 {id:'yard',y:'May 2005',v:'The Yard',t:'Rosyth',ll:[56.0470,-3.4220],n:'The first ever gig. Homemade banner.'},
 {id:'deathdisco',y:'2006',v:"Death Disco, Notting Hill Arts Club",t:'London',ll:[51.5094,-0.1966],n:"Alan McGee's club night, off the back of Garden City."},
 {id:'cavern',y:'2006',v:'The Cavern Club',t:'Liverpool',ll:[53.4064,-2.9879],n:'Garden City takes them to the Cavern.'},
 {id:'sxsw',y:'March 2007',v:'South by Southwest',t:'Austin, Texas',ll:[30.2672,-97.7431],n:'14 to 18 March. From The Hut to one of the biggest music festivals in the world.'},
 {id:'titp07',y:'2007',v:'T in the Park',t:'Balado',ll:[56.2050,-3.4560],n:'The first T in the Park.'},
 {id:'alh08',y:'2008',v:"Alhambra 2, the 'final' gig",t:'Dunfermline',ll:[56.0718,-3.4585],n:'Around 1,000 people say goodbye. It does not stick.'},
 {id:'tuts',y:'2009',v:"King Tut's Wah Wah Hut",t:'Glasgow',ll:[55.8626,-4.2653],n:'Back again, a year after the farewell.'},
 {id:'titp10',y:'10 July 2010',v:'T in the Park, T Break stage',t:'Balado',ll:[56.2035,-3.4600],n:'Saturday on the T Break stage, now a five-piece.'},
 {id:'pj13',y:'2013',v:"PJ Molloys",t:'Dunfermline',ll:[56.0712,-3.4620],n:'Save the Pars fundraising gigs.'},
 {id:'alh26',y:'3 October 2026',v:'Alhambra Theatre',t:'Dunfermline',ll:[56.0727,-3.4595],n:'First hometown show in 11 years. 1,700 people. Sold out.',big:1}
];
const KEY='draymin-was-there';let mine=new Set();try{mine=new Set(JSON.parse(localStorage.getItem(KEY)||'[]'))}catch(e){}
const real=gigs.filter(g=>!g.home);
const list=document.getElementById('gigList'),sel=document.getElementById('storyGig');
document.getElementById('stampTotal').textContent=real.length;
function save(){try{localStorage.setItem(KEY,JSON.stringify([...mine]))}catch(e){}}
function stamp(){const c=real.filter(g=>mine.has(g.id)).length;document.getElementById('stampCount').textContent=c;
 document.getElementById('stampBar').style.width=(c/real.length*100)+'%';
 const m=c===0?'Tick the ones you were at.':c<3?'A proper fan. Got a story from one of them?':c<6?'Serious mileage. Tell us about it.':c<real.length?'Were you in the band?':'Every single one. We owe you a pint.';
 document.getElementById('stampMsg').textContent=m;
 document.querySelectorAll('.wt').forEach(b=>{const on=mine.has(b.dataset.id);b.classList.toggle('on',on);b.textContent=on?'I was there \u2713':'I was there'});}
function toggle(id){mine.has(id)?mine.delete(id):mine.add(id);save();stamp();
 const b=document.querySelector('.wt[data-id="'+id+'"]');if(b&&mine.has(id)){b.classList.add('pop');setTimeout(()=>b.classList.remove('pop'),400)}}
let map=null,markers={};
if(window.L){
 map=L.map('gigmap',{scrollWheelZoom:false,tap:true,attributionControl:true}).setView([54.6,-3.2],5);
 L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap &copy; CARTO'}).addTo(map);
 gigs.forEach(g=>{const ic=L.divIcon({className:'pin'+(g.big?' big':'')+(g.home?' home':''),html:'<span></span>',iconSize:[22,22],iconAnchor:[11,11]});
  const m=L.marker(g.ll,{icon:ic}).addTo(map);
  m.bindPopup('<div class="pop-y">'+g.y+'</div><div class="pop-v">'+g.v+'</div><div class="pop-t">'+g.t+'</div><p>'+g.n+'</p>'+(g.home?'':'<button class="wt" data-id="'+g.id+'">I was there</button> <a href="#tellus" class="pop-l" data-g="'+g.id+'">Tell your story</a>'));
  m.on('popupopen',stamp);markers[g.id]=m});
}
gigs.forEach((g,i)=>{const li=document.createElement('li');li.innerHTML='<button class="gl" type="button"><span class="gy">'+g.y+'</span><span class="gv">'+g.v+'</span><span class="gt">'+g.t+'</span></button>'+(g.home?'':'<button class="wt" type="button" data-id="'+g.id+'">I was there</button>');
 li.querySelector('.gl').addEventListener('click',()=>{if(map){map.flyTo(g.ll,g.ll[0]<40?9:12,{duration:1.2});setTimeout(()=>markers[g.id].openPopup(),1250);document.getElementById('gigmap').scrollIntoView({behavior:'smooth',block:'center'})}});
 list.appendChild(li);
 if(!g.home){const o=document.createElement('option');o.value=g.id;o.textContent=g.y+', '+g.v+', '+g.t;sel.appendChild(o)}});
const o=document.createElement('option');o.value='other';o.textContent='One you forgot (tell us which)';sel.appendChild(o);
document.addEventListener('click',e=>{const b=e.target.closest('.wt');if(b){e.preventDefault();toggle(b.dataset.id)}
 const l=e.target.closest('.pop-l');if(l){sel.value=l.dataset.g}});
const views={fife:[[56.06,-3.45],10],uk:[[54.6,-3.2],5],austin:[[30.2672,-97.7431],11]};
document.querySelectorAll('[data-fly]').forEach(b=>b.addEventListener('click',()=>{if(map)map.flyTo(...views[b.dataset.fly],{duration:1.4})}));
let touring=false;document.getElementById('tourBtn').addEventListener('click',async function(){if(!map||touring)return;touring=true;this.textContent='Touring...';
 for(const g of gigs){map.flyTo(g.ll,g.ll[0]<40?9:11,{duration:1.6});await new Promise(r=>setTimeout(r,1700));markers[g.id].openPopup();await new Promise(r=>setTimeout(r,1900))}
 map.closePopup();map.flyTo(...views.uk,{duration:1.4});this.innerHTML='&#9654; Play the tour';touring=false});
document.getElementById('storyForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('storyNote').textContent='Thanks! Story sending goes live with the full site. This is a preview.'});
stamp();
})();
