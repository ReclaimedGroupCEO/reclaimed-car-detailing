/* Reclaimed Detailers — shared page behaviours (nav, drawer, reveal-on-scroll). */
(function(){
  var nav=document.getElementById('nav');
  var top=document.getElementById('top');
  function onScroll(){
    var y=window.scrollY;
    if(nav){
      nav.classList.toggle('scrolled', y>40);
      if(top) nav.classList.toggle('over-hero', y < (top.offsetHeight - 120));
    }
    var fb=document.getElementById('floatBook');
    if(fb) fb.classList.toggle('show', y>700);
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var d=document.getElementById('drawer'),s=document.getElementById('scrim');
  if(d&&s){
    var open=function(){d.classList.add('open');s.classList.add('open')};
    var close=function(){d.classList.remove('open');s.classList.remove('open')};
    var b=document.getElementById('burger'),x=document.getElementById('drawerX');
    if(b)b.onclick=open; if(x)x.onclick=close; s.onclick=close;
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
  }

  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  var rev=document.querySelectorAll('.reveal');
  rev.forEach(function(el){io.observe(el)});
  /* Fail-safe for environments that freeze CSS transitions (e.g. offscreen iframes):
     snap any still-hidden, in-view element straight to visible with no transition. */
  function snap(){var vh=window.innerHeight||document.documentElement.clientHeight;rev.forEach(function(el){var r=el.getBoundingClientRect();if(r.top<vh&&r.bottom>0&&parseFloat(getComputedStyle(el).opacity)<0.05){el.style.transition='none';el.classList.add('in');}});}
  setTimeout(snap,700);
  window.addEventListener('scroll',snap,{passive:true});

  /* cookie consent */
  if(!localStorage.getItem('rd_cookie_consent')){
    var bar=document.createElement('div');
    bar.className='cookie-bar';
    bar.innerHTML='<div class="wrap"><p>We use cookies to remember your preferences and understand how visitors use this site. See our <a href="privacy-policy.html">Privacy Policy</a> for details.</p>'+
      '<div class="cookie-actions"><button class="btn btn-ghost btn-sm" id="cookieDecline">Decline</button><button class="btn btn-primary btn-sm" id="cookieAccept">Accept</button></div></div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function(){bar.classList.add('show')});
    function dismiss(val){
      localStorage.setItem('rd_cookie_consent',val);
      bar.classList.remove('show');
      setTimeout(function(){bar.remove()},500);
    }
    document.getElementById('cookieAccept').onclick=function(){dismiss('accepted')};
    document.getElementById('cookieDecline').onclick=function(){dismiss('declined')};
  }

  document.querySelectorAll('[data-ba]').forEach(function(ba){
    var after=ba.querySelector('.after'),div=ba.querySelector('.divider'),knob=ba.querySelector('.knob');
    var active=false;
    function set(px){var r=ba.getBoundingClientRect();var p=Math.max(2,Math.min(98,(px-r.left)/r.width*100));
      after.style.clipPath='inset(0 0 0 '+p+'%)';div.style.left=p+'%';knob.style.left=p+'%';}
    ba.addEventListener('mousedown',function(e){active=true;set(e.clientX)});
    window.addEventListener('mousemove',function(e){if(active)set(e.clientX)});
    window.addEventListener('mouseup',function(){active=false});
    ba.addEventListener('touchstart',function(e){active=true;set(e.touches[0].clientX)},{passive:true});
    ba.addEventListener('touchmove',function(e){if(active)set(e.touches[0].clientX)},{passive:true});
    ba.addEventListener('touchend',function(){active=false});
  });
})();
