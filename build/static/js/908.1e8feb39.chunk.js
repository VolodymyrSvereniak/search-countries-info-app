"use strict";(self.webpackChunkcountries=self.webpackChunkcountries||[]).push([[908],{832:(n,e,r)=>{r.d(e,{A:()=>t});var o=r(43);const t=()=>{const[n,e]=(0,o.useState)(!0);function r(){e(navigator.onLine)}return(0,o.useEffect)((()=>(window.addEventListener("online",r),window.addEventListener("offline",r),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",r)})),[]),n}},908:(n,e,r)=>{r.r(e),r.d(e,{default:()=>b});var o,t=r(216),a=r(528),i=r(702),s=r(394),c=r(579);const d=i.Ay.button(o||(o=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0 2.1rem;\n  margin-top: 0.5rem;\n  color: var(--colors-text);\n  background-color: var(--colors-ui-base);\n  border-radius: var(--radius);\n  border: none;\n  box-shadow: var(--shadow);\n  line-height: 2.8;\n  cursor: pointer;\n  font-size: var(--fs-sm);\n"])));function l(n){let{handleBackNavigation:e}=n;return(0,c.jsxs)(d,{onClick:e,children:[(0,c.jsx)(s.NEn,{size:20}),"Back"]})}var u=r(43),g=r(3),h=r(693),f=r(918),v=r(381),m=r(832);const p=(0,u.lazy)((()=>r.e(441).then(r.bind(r,822)))),x=()=>{const n=(0,m.A)(),e=(0,g.wA)(),{name:r}=(0,t.g)(),{country:o,status:a,borderCountriesNames:i}=(0,g.d4)(h.gD),s=o.map((n=>({img:n.flags.png,name:n.name.common,nativeName:n.name.nativeName,population:n.population.toLocaleString("en-US"),region:n.region,subregion:n.subregion,capital:n.capital,topLevelDomain:n.tld,currencies:n.currencies,languages:n.languages,borders:n.borders})));return(0,u.useEffect)((()=>{e((0,h.lR)(r))}),[r,e]),"loading"===a?(0,c.jsx)(f.X,{}):(0,c.jsx)(c.Fragment,{children:n?(0,c.jsx)(u.Suspense,{fallback:(0,c.jsx)(f.X,{}),children:(0,c.jsx)(p,{...s[0],handleBorderCountry:function(n){e((0,h.tA)(n))},borderCountriesNames:i})}):(0,c.jsx)(v.A,{})})};function b(){const n=(0,t.Zp)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{handleBackNavigation:function(){n(-1)}}),(0,c.jsx)(x,{})]})}},381:(n,e,r)=>{r.d(e,{A:()=>m});var o,t,a,i,s=r(528),c=r(196),d=r(866),l=r(702),u=r(579);const g=(0,l.Ay)(c._4D)(o||(o=(0,s.A)(["\n  width: 100%;\n  height: 30%;\n"]))),h=l.Ay.h1(t||(t=(0,s.A)([""]))),f=l.Ay.h3(a||(a=(0,s.A)([""]))),v=l.Ay.button(i||(i=(0,s.A)(["\n  margin-top: 20px;\n  padding: 10px 20px;\n  background-color: var(--colors-ui-base);\n  box-shadow: var(--shadow);\n  color: var(--colors-text);\n  border-radius: var(--radius);\n  font-size: var(--fs-md);\n  font-weight: var(--fw-normal);\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n"])));function m(){return(0,u.jsxs)(d.d,{children:[(0,u.jsx)(g,{}),(0,u.jsx)(h,{children:"OFFLINE"}),(0,u.jsx)(f,{children:"Please check your internet connection"}),(0,u.jsx)(v,{onClick:()=>window.location.reload(),children:"RETRY"})]})}}}]);
//# sourceMappingURL=908.1e8feb39.chunk.js.map