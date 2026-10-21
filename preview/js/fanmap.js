(function(){
const FORM='https://docs.google.com/forms/d/e/1FAIpQLSd1uoWgXTMYtx4Shh2RttLLd91NYPomJK_LLczsitA3o9xQyw/viewform?usp=pp_url';
const E={venue:'entry.1992486931',town:'entry.1215064003',when:'entry.963311938',pin:'entry.40672679'};
function formUrl(o){let u=FORM;for(const k in o)if(o[k])u+='&'+E[k]+'='+encodeURIComponent(o[k]);return u}
const gigs=[
 {y:2005,d:'28 May 2005',v:'The Yard',t:'Rosyth',ll:[56.0470,-3.4220],n:'The first ever gig, with The Coviets and Dayken. Free entry. Homemade banner.',hl:1},
 {y:2005,d:'1 September 2005',v:'The Arches, Musicworks',t:'Glasgow',ll:[55.8578,-4.2577],n:'A Musicworks showcase, with Clearfall, Butterfly Explosion and The Favours.'},
 {y:2006,d:'2006',v:'Death Disco, Notting Hill Arts Club',t:'London',ll:[51.5094,-0.1966],n:"Alan McGee's club night, off the back of Garden City.",hl:1},
 {y:2006,d:'2006',v:'The Cavern Club',t:'Liverpool',ll:[53.4064,-2.9879],n:'Garden City takes them to the Cavern.',hl:1},
 {y:2007,d:'March 2007',v:'South by Southwest',t:'Austin, Texas',ll:[30.2672,-97.7431],n:'14 to 18 March. From The Hut to one of the biggest music festivals in the world.',hl:1},
 {y:2007,d:'9 May 2007',v:"King Tut's Wah Wah Hut, T Break showcase",t:'Glasgow',ll:[55.8626,-4.2653],n:'T Break Showcases 2007, with Little Doses, Radars and San Sebastian.'},
 {y:2007,d:'28 June 2007',v:"PJ Molloy's",t:'Dunfermline',ll:[56.0712,-3.4620],n:'Doors at 9pm.'},
 {y:2007,d:'29 June 2007',v:'The Doghouse',t:'Dundee',ll:[56.4627,-2.9710],n:''},
 {y:2007,d:'30 June 2007',v:'Barrowland 2',t:'Glasgow',ll:[55.8553,-4.2366],n:''},
 {y:2007,d:'4 July 2007',v:'Glen Pavilion, supporting The Skids',t:'Dunfermline',ll:[56.0690,-3.4700],n:'The first of two nights with The Skids.'},
 {y:2007,d:'5 July 2007',v:'Glen Pavilion, supporting The Skids',t:'Dunfermline',ll:[56.0692,-3.4696],n:'Night two with The Skids.'},
 {y:2007,d:'6 July 2007',v:'T in the Park, T Break tent',t:'Balado',ll:[56.2050,-3.4560],n:'A packed T Break tent at the first T in the Park. Onstage 6.25pm.',hl:1},
 {y:2007,d:'17 July 2007',v:'Underground',t:'Dundee',ll:[56.4600,-2.9760],n:'25 South Tay Street.'},
 {y:2007,d:'4 August 2007',v:'The Crow Bar',t:'Paisley',ll:[55.8456,-4.4239],n:'With Beatnic Prestige.'},
 {y:2007,d:'2 September 2007',v:'Anima',t:'Glenrothes',ll:[56.1960,-3.1740],n:''},
 {y:2007,d:'9 September 2007',v:'The Jam House, Radio 1 showcase',t:'Edinburgh',ll:[55.9545,-3.1960],n:'Radio 1 showcase night, and a Draymin video shoot.'},
 {y:2007,d:'15 September 2007',v:'Legends Bar, East End Park',t:'Dunfermline',ll:[56.0756,-3.4442],n:"'Live' at Legends. Tickets a fiver."},
 {y:2007,d:'22 September 2007',v:'Capitol',t:'Glasgow',ll:[55.8640,-4.2600],n:"With Root System and The Motion."},
 {y:2007,d:'27 September 2007',v:'Paisley Students Union',t:'Paisley',ll:[55.8433,-4.4290],n:''},
 {y:2007,d:'29 September 2007',v:'The Barfly',t:'Glasgow',ll:[55.8570,-4.2620],n:'Plus a Draymin DJ set.'},
 {y:2007,d:'19 October 2007',v:'The Tolbooth',t:'Stirling',ll:[56.1199,-3.9395],n:''},
 {y:2007,d:'27 October 2007',v:"Oxjam, PJ Molloy's",t:'Dunfermline',ll:[56.0714,-3.4618],n:'Oxjam charity gig, and another video shoot.'},
 {y:2007,d:'29 December 2007',v:'The Yard',t:'Rosyth',ll:[56.0472,-3.4218],n:'With Stopstarts and Val Verde.'},
 {y:2008,d:'17 July 2008',v:'Box',t:'Glasgow',ll:[55.8660,-4.2580],n:'EP tour opener, the pre Live at Loch Lomond show.'},
 {y:2008,d:'18 July 2008',v:'The Windsor',t:'Kirkcaldy',ll:[56.1110,-3.1590],n:'EP tour.'},
 {y:2008,d:'19 July 2008',v:'The Ironworks',t:'Inverness',ll:[57.4790,-4.2250],n:'EP tour.'},
 {y:2008,d:'26 July 2008',v:'The Wickerman Festival',t:'Dumfries and Galloway',ll:[54.8070,-3.9380],n:'EP tour.'},
 {y:2008,d:'2 August 2008',v:'Live at Loch Lomond',t:'Balloch',ll:[56.0040,-4.5830],n:'EP tour.'},
 {y:2008,d:'8 August 2008',v:'Velocity, EP launch',t:'Dunfermline',ll:[56.0730,-3.4560],n:'Kinema Live presents the EP launch, with Val Verde and The Rutlands. Aftershow till 2am.'},
 {y:2008,d:'9 August 2008',v:'Belladrum Festival',t:'Inverness-shire',ll:[57.4590,-4.5000],n:'2pm slot, then off to Dundee the same night.'},
 {y:2008,d:'9 August 2008',v:'The Doghouse',t:'Dundee',ll:[56.4629,-2.9712],n:'9pm, after Belladrum that afternoon.'},
 {y:2008,d:'10 August 2008',v:'Metro',t:'Falkirk',ll:[56.0020,-3.7840],n:'EP tour.'},
 {y:2008,d:'15 August 2008',v:'Capitol',t:'Glasgow',ll:[55.8642,-4.2598],n:'EP tour.'},
 {y:2008,d:'16 August 2008',v:'The Waterfront',t:'Arbroath',ll:[56.5570,-2.5850],n:'EP tour.'},
 {y:2008,d:'17 August 2008',v:'Mucky Mulligans',t:'Perth',ll:[56.3960,-3.4330],n:'EP tour.'},
 {y:2008,d:'21 August 2008',v:'Snafu',t:'Aberdeen',ll:[57.1460,-2.1000],n:'EP tour.'},
 {y:2008,d:'22 August 2008',v:'The Market Inn',t:'Ayr',ll:[55.4640,-4.6250],n:'EP tour.'},
 {y:2008,d:'13 September 2008',v:'Carling Academy',t:'Glasgow',ll:[55.8490,-4.2620],n:'EP tour finale.'},
 {y:2008,d:'4 October 2008',v:'Dry Bar, In The City fringe',t:'Manchester',ll:[53.4840,-2.2340],n:'ITC Fringe Festival, Oldham Street.',g:1},
 {y:2008,d:'December 2008',v:"Alhambra, the 'final' gig",t:'Dunfermline',ll:[56.0718,-3.4585],n:'Around 1,000 people say goodbye. It does not stick.',hl:1},
 {y:2009,d:'2009',v:"King Tut's Wah Wah Hut",t:'Glasgow',ll:[55.8628,-4.2651],n:'Back again, a year after the farewell.',hl:1},
 {y:2010,d:'7 May 2010',v:'The Cape',t:'Stirling',ll:[56.1180,-3.9370],n:'Heart Attack // Hold Your Position release weekend.'},
 {y:2010,d:'8 May 2010',v:"Kenny's Music, CD launch",t:'Dunfermline',ll:[56.0715,-3.4600],n:'Instore acoustic gig for the CD launch.'},
 {y:2010,d:'14 May 2010',v:'The Doghouse',t:'Dundee',ll:[56.4631,-2.9708],n:''},
 {y:2010,d:'22 May 2010',v:'Liverpool Sound City, Heebie Jeebies Courtyard',t:'Liverpool',ll:[53.4050,-2.9800],n:'Sound City stage, Saturday at 7pm.'},
 {y:2010,d:'29 May 2010',v:'Alhambra',t:'Dunfermline',ll:[56.0727,-3.4595],n:'With Val Verde, Crayons and DJ Fusion Project.'},
 {y:2010,d:'3 July 2010',v:"PJ Molloy's, T Party",t:'Dunfermline',ll:[56.0710,-3.4622],n:'Warm-up the week before T in the Park. A fiver at the door.'},
 {y:2010,d:'10 July 2010',v:'T in the Park, T Break stage',t:'Balado',ll:[56.2035,-3.4600],n:'Saturday on the T Break stage at 12.50pm, now a five-piece.',hl:1},
 {y:2010,d:'13 November 2010',v:'Queen of Hoxton',t:'London',ll:[51.5240,-0.0790],n:'Here We Are Again tour.'},
 {y:2010,d:'19 November 2010',v:'The Doghouse',t:'Dundee',ll:[56.4625,-2.9714],n:'Here We Are Again tour.'},
 {y:2010,d:'27 November 2010',v:'The Liquid Room',t:'Edinburgh',ll:[55.9490,-3.1920],n:'Here We Are Again tour.'},
 {y:2010,d:'3 December 2010',v:'The Attic',t:'Bathgate',ll:[55.9020,-3.6430],n:'Here We Are Again tour.'},
 {y:2010,d:'4 December 2010',v:'Stereo',t:'Glasgow',ll:[55.8590,-4.2540],n:'Here We Are Again tour.'},
 {y:2010,d:'18 December 2010',v:'The Grove Tavern',t:'London',ll:[51.4930,-0.2240],n:'Here We Are Again tour.'},
 {y:2010,d:'31 December 2010',v:"Velocity, New Year's Eve",t:'Dunfermline',ll:[56.0732,-3.4558],n:'With Val Verde, Shanty Town and DJ Fusion.',g:1},
 {y:2012,d:'30 March 2012',v:"PJ Molloy's, DJ set",t:'Dunfermline',ll:[56.0716,-3.4616],n:'DJ set only.'},
 {y:2012,d:'31 March 2012',v:'Chambre 69',t:'Glasgow',ll:[55.8610,-4.2550],n:''},
 {y:2012,d:'14 April 2012',v:'Queen of Hoxton, This Feeling',t:'London',ll:[51.5242,-0.0788],n:'This Feeling club night, with Filthy Boy and Murray James.'},
 {y:2012,d:'20 April 2012',v:'Escobar',t:'Leeds',ll:[53.7960,-1.5440],n:''},
 {y:2012,d:'21 April 2012',v:'The Cobden',t:'Sheffield',ll:[53.3810,-1.4900],n:''},
 {y:2012,d:'5 May 2012',v:'Big Stooshie Festival',t:'Fife',ll:[56.1900,-3.1500],n:''},
 {y:2012,d:'1 June 2012',v:"Sneaky Pete's",t:'Edinburgh',ll:[55.9488,-3.1903],n:'Sold out.'},
 {y:2012,d:'2 June 2012',v:'The Doghouse',t:'Dundee',ll:[56.4633,-2.9706],n:''},
 {y:2012,d:'8 to 10 June 2012',v:'RockNess',t:'Loch Ness',ll:[57.3000,-4.3700],n:'On the bill with Mumford and Sons, Biffy Clyro and The View.'},
 {y:2012,d:'23 June 2012',v:'Glen Pavilion',t:'Dunfermline',ll:[56.0688,-3.4702],n:'With Fridge Magnets, for The Mary Leishman Foundation. In association with Weekend Revolution.',g:1},
 {y:2012,d:'3 August 2012',v:'Voodoo Lounge',t:'Peterhead',ll:[57.5050,-1.7840],n:''},
 {y:2012,d:'4 August 2012',v:'The Tunnels',t:'Aberdeen',ll:[57.1470,-2.0990],n:''},
 {y:2013,d:'12 and 13 April 2013',v:"PJ Molloy's",t:'Dunfermline',ll:[56.0712,-3.4620],n:'Save the Pars fundraising gigs.',hl:1},
 {y:2015,d:'2015',v:"Weekend Revolution festival, Lourenzo's",t:'Dunfermline',ll:[56.0705,-3.4630],n:'The final gig, before 11 years away.',hl:1},
 {y:2026,d:'3 October 2026',v:'Alhambra Theatre',t:'Dunfermline',ll:[56.0727,-3.4595],n:'First hometown show in 11 years. 1,700 people. Sold out.',big:1,hl:1}
];
document.getElementById('addGig').href=FORM;
let map=null,markers=[],temp=null;
const views={fife:[[56.06,-3.45],10],uk:[[54.6,-3.2],5],austin:[[30.2672,-97.7431],11]};
if(window.L){
 map=L.map('gigmap',{scrollWheelZoom:false,tap:true}).setView(...views.uk);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
 gigs.forEach((g,i)=>{const ic=L.divIcon({className:'pin'+(g.big?' big':'')+(g.home?' home':''),html:'<span></span>',iconSize:[22,22],iconAnchor:[11,11]});
  const m=L.marker(g.ll,{icon:ic}).addTo(map);
  m.bindPopup('<div class="pop-y">'+(g.y?g.d:'Year unknown')+(g.g?' <small>(year is our best guess)</small>':'')+'</div><div class="pop-v">'+g.v+'</div><div class="pop-t">'+g.t+'</div>'+(g.n?'<p>'+g.n+'</p>':'')+(g.home?'':'<a class="pop-btn" target="_blank" rel="noopener" href="'+formUrl({venue:g.v,town:g.t,when:g.d,pin:g.ll.join(',')})+'">I was there. Tell your story</a>'));
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
const yl=document.getElementById('yearList');const years=[...new Set(gigs.map(g=>g.y))].sort((a,b)=>(a||9999)-(b||9999));
years.forEach(y=>{const d=document.createElement('details');d.className='yr';const gs=gigs.map((g,i)=>[g,i]).filter(([g])=>g.y===y);
 d.innerHTML='<summary><span>'+(y||'Year unknown')+'</span><em>'+gs.length+(gs.length>1?' gigs':' gig')+'</em></summary>';
 const ul=document.createElement('ul');gs.forEach(([g,i])=>{const li=document.createElement('li');li.innerHTML='<button type="button"><b>'+g.v+'</b><span>'+g.t+' &middot; '+g.d+(g.g?' (best guess)':'')+'</span></button>';
  li.querySelector('button').addEventListener('click',()=>{if(!map)return;document.getElementById('gigmap').scrollIntoView({behavior:'smooth',block:'center'});map.flyTo(g.ll,g.ll[0]<40?10:13,{duration:1.2});setTimeout(()=>markers[i].openPopup(),1300)});ul.appendChild(li)});
 const add=document.createElement('li');add.innerHTML='<a target="_blank" rel="noopener" href="'+formUrl({when:y?String(y):''})+'">+ Another '+(y||'')+' gig we forgot</a>';ul.appendChild(add);
 d.appendChild(ul);yl.appendChild(d)});
const more=document.createElement('a');more.className='yr-more';more.target='_blank';more.rel='noopener';more.href=FORM;more.textContent='+ A year we have not listed';yl.appendChild(more);
document.querySelectorAll('[data-fly]').forEach(b=>b.addEventListener('click',()=>{if(map)map.flyTo(...views[b.dataset.fly],{duration:1.4})}));
let touring=false;document.getElementById('tourBtn').addEventListener('click',async function(){if(!map||touring)return;touring=true;this.textContent='Touring...';
 for(const [i,g] of gigs.entries()){if(!g.hl)continue;map.flyTo(g.ll,g.ll[0]<40?9:11,{duration:1.6});await new Promise(r=>setTimeout(r,1700));markers[i].openPopup();await new Promise(r=>setTimeout(r,1900))}
 map.closePopup();map.flyTo(...views.uk,{duration:1.4});this.innerHTML='&#9654; Play the tour';touring=false});
})();
