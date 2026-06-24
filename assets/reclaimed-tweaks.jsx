/* Reclaimed Detailers — shared Tweaks control surface.
   Loads on every page so accent / type / hero / mood persist site-wide.
   Content stays static HTML; this only flips data-* attributes on <html>. */
var _storedMood=(function(){try{return localStorage.getItem('rd_theme')}catch(e){return null}})();
const RD_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "cinematic",
  "headline": "a",
  "accent": "purple",
  "fonts": "editorial",
  "darkSections": false,
  "motion": true
}/*EDITMODE-END*/;
if(_storedMood!==null)RD_DEFAULTS.darkSections=_storedMood==='dark';

function accentHex(a){return a==='gold'?'#a8842f':a==='green'?'#2f7a55':'#6a2fc0';}
function hexToAccent(h){return h==='#a8842f'?'gold':h==='#2f7a55'?'green':'purple';}

function ReclaimedTweaks(){
  const [t,setTweak]=useTweaks(RD_DEFAULTS);
  const r=document.documentElement;
  const hasHero = !!document.querySelector('.hero[id="top"]');
  React.useEffect(()=>{r.setAttribute('data-hero',t.hero);},[t.hero]);
  React.useEffect(()=>{r.setAttribute('data-headline',t.headline);},[t.headline]);
  React.useEffect(()=>{r.setAttribute('data-accent',t.accent);},[t.accent]);
  React.useEffect(()=>{r.setAttribute('data-fonts',t.fonts);},[t.fonts]);
  React.useEffect(()=>{var m=t.darkSections?'dark':'light';r.setAttribute('data-mood',m);try{localStorage.setItem('rd_theme',m)}catch(e){}},[t.darkSections]);
  React.useEffect(()=>{r.setAttribute('data-motion',t.motion?'on':'off');},[t.motion]);

  return (
    <TweaksPanel title="Tweaks">
      {hasHero && <TweakSection label="Hero" />}
      {hasHero && <TweakRadio label="Layout" value={t.hero} options={['cinematic','split','minimal']}
        onChange={v=>setTweak('hero',v)} />}
      {hasHero && <TweakRadio label="Headline" value={t.headline} options={['a','b','c']}
        onChange={v=>setTweak('headline',v)} />}
      {hasHero && <div style={{font:'11px var(--font-mono,monospace)',opacity:.55,margin:'-4px 0 4px',lineHeight:1.5}}>
        a · craftsmanship&nbsp;&nbsp; b · the motto&nbsp;&nbsp; c · reclaimed
      </div>}
      <TweakSection label="Brand" />
      <TweakColor label="Accent" value={accentHex(t.accent)}
        options={['#6a2fc0','#a8842f','#2f7a55']}
        onChange={v=>setTweak('accent', hexToAccent(v))} />
      <TweakRadio label="Type" value={t.fonts} options={['editorial','classic','modern']}
        onChange={v=>setTweak('fonts',v)} />
      <TweakSection label="Atmosphere" />
      <TweakToggle label="Dark sections" value={t.darkSections}
        onChange={v=>setTweak('darkSections',v)} />
      <TweakToggle label="Motion & animation" value={t.motion}
        onChange={v=>setTweak('motion',v)} />
    </TweaksPanel>
  );
}
ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<ReclaimedTweaks/>);
