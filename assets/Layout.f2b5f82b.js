var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&o(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{e as u,g as c,h as d,i as v,j as p,k as m,l as h,m as b,r as k,o as g,c as f,w as L,n as y,a as w,t as x,p as N,q as T,s as B,v as S,x as C,y as $,b as P,F as M,z as A,A as O,B as I,f as R,C as H,D as z,E as D,G as E,H as j,I as G,J as W,K as _,L as F,M as U,u as q,N as V,O as X,T as Y,P as J,Q as K}from"./app.c2bb64c1.js";var Q=u({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=c(),a=b(),{item:l}=d(e),n=v((()=>p(l.value.link))),r=v((()=>m(l.value.link)||h(l.value.link))),o=v((()=>{if(!r.value)return l.value.target?l.value.target:n.value?"_blank":void 0})),s=v((()=>"_blank"===o.value)),i=v((()=>!n.value&&!r.value&&!s.value)),u=v((()=>{if(!r.value)return l.value.rel?l.value.rel:s.value?"noopener noreferrer":void 0})),k=v((()=>l.value.ariaLabel||l.value.text)),g=v((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===l.value.link)):"/"!==l.value.link}));return{isActiveInSubpath:v((()=>!(!i.value||!g.value)&&t.path.startsWith(l.value.link))),isBlankTarget:s,isRouterLink:i,linkRel:u,linkTarget:o,linkAriaLabel:k}}});Q.render=function(e,t,a,l,n,r){const o=k("RouterLink"),s=k("OutboundLink");return e.isRouterLink?(g(),f(o,N({key:0,class:["nav-link",{"router-link-active":e.isActiveInSubpath}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:L((()=>[y(e.$slots,"before"),w(" "+x(e.item.text)+" ",1),y(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):(g(),f("a",N({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[y(e.$slots,"before"),w(" "+x(e.item.text)+" ",1),e.isBlankTarget?(g(),f(s,{key:0})):T("",!0),y(e.$slots,"after")],16,["href","rel","target","aria-label"]))};var Z=u({name:"Home",components:{NavLink:Q},setup(){const e=B(),t=S(),a=v((()=>e.value.heroImage?C(e.value.heroImage):null)),l=v((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),n=v((()=>e.value.heroAlt||l.value||"hero")),r=v((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),o=v((()=>$(e.value.actions)?e.value.actions.map((({text:e,link:t,type:a="primary"})=>({text:e,link:t,type:a}))):[])),s=v((()=>$(e.value.features)?e.value.features:[])),i=v((()=>e.value.footer)),u=v((()=>e.value.footerHtml));return{heroImage:a,heroAlt:n,heroText:l,tagline:r,actions:o,features:s,footer:i,footerHtml:u}}});const ee={class:"hero"},te={key:1,id:"main-title"},ae={key:2,class:"description"},le={key:3,class:"actions"},ne={key:0,class:"features"},re={class:"theme-default-content custom"};Z.render=function(e,t,a,l,n,r){const o=k("NavLink"),s=k("Content");return g(),f("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[P("header",ee,[e.heroImage?(g(),f("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):T("",!0),e.heroText?(g(),f("h1",te,x(e.heroText),1)):T("",!0),e.tagline?(g(),f("p",ae,x(e.tagline),1)):T("",!0),e.actions.length?(g(),f("p",le,[(g(!0),f(M,null,A(e.actions,(e=>(g(),f(o,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):T("",!0)]),e.features.length?(g(),f("div",ne,[(g(!0),f(M,null,A(e.features,(e=>(g(),f("div",{key:e.title,class:"feature"},[P("h2",null,x(e.title),1),P("p",null,x(e.details),1)])))),128))])):T("",!0),P("div",re,[P(s)]),e.footer?(g(),f(M,{key:1},[e.footerHtml?(g(),f("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):(g(),f("div",{key:1,class:"footer",textContent:x(e.footer)},null,8,["textContent"]))],64)):T("",!0)],8,["aria-labelledby"])};const oe=e=>!p(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,se={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ie=()=>{const e=R(),t=H(),a=B();return v((()=>{var l,n;if(!(null==(n=null!=(l=a.value.editLink)?l:e.value.editLink)||n))return null;const{repo:r,docsRepo:o=r,docsBranch:s="main",docsDir:i="",editLinkText:u}=e.value;if(!o)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:n})=>{const r=oe(e);let o;return n?o=n:null!==r&&(o=se[r]),o?o.replace(/:repo/,p(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,O(`${I(a)}/${l}`)):null})({docsRepo:o,docsBranch:s,docsDir:i,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))};var ue=u({name:"PageMeta",components:{NavLink:Q},setup:()=>({themeLocale:R(),editNavLink:ie(),lastUpdated:(()=>{const e=S(),t=R(),a=H(),l=B();return v((()=>{var n,r,o,s;return(null==(r=null!=(n=l.value.lastUpdated)?n:t.value.lastUpdated)||r)&&(null==(o=a.value.git)?void 0:o.updatedTime)?new Date(null==(s=a.value.git)?void 0:s.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=R(),t=H(),a=B();return v((()=>{var l,n,r,o;return null!=(n=null!=(l=a.value.contributors)?l:e.value.contributors)&&!n||null==(o=null==(r=t.value.git)?void 0:r.contributors)?null:o}))})()})});const ce={class:"page-meta"},de={key:0,class:"meta-item edit-link"},ve={key:1,class:"meta-item last-updated"},pe={class:"meta-item-label"},me={class:"meta-item-info"},he={key:2,class:"meta-item contributors"},be={class:"meta-item-label"},ke={class:"meta-item-info"},ge=w(", ");ue.render=function(e,t,a,l,n,r){const o=k("NavLink");return g(),f("footer",ce,[e.editNavLink?(g(),f("div",de,[P(o,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):T("",!0),e.lastUpdated?(g(),f("div",ve,[P("span",pe,x(e.themeLocale.lastUpdatedText)+": ",1),P("span",me,x(e.lastUpdated),1)])):T("",!0),e.contributors&&e.contributors.length?(g(),f("div",he,[P("span",be,x(e.themeLocale.contributorsText)+": ",1),P("span",ke,[(g(!0),f(M,null,A(e.contributors,((t,a)=>(g(),f(M,{key:a},[P("span",{class:"contributor",title:`email: ${t.email}`},x(t.name),9,["title"]),a!==e.contributors.length-1?(g(),f(M,{key:0},[ge],64)):T("",!0)],64)))),128))])])):T("",!0)])};const fe=e=>!1===e?null:D(e)?E(e):!!j(e)&&e,Le=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return(null==t?void 0:t.link)?t:null}for(const n of e)if(n.children){const e=Le(n.children,t,a);if(e)return e}return null};var ye=u({name:"PageNav",components:{NavLink:Q},setup(){const e=B(),t=z(),a=c();return{prevNavLink:v((()=>{const l=fe(e.value.prev);return!1!==l?l:Le(t.value,a.path,-1)})),nextNavLink:v((()=>{const l=fe(e.value.next);return!1!==l?l:Le(t.value,a.path,1)}))}}});const we={key:0,class:"page-nav"},xe={class:"inner"},Ne={key:0,class:"prev"},Te=w(" ← "),Be={key:1,class:"next"},Se=w(" → ");ye.render=function(e,t,a,l,n,r){const o=k("NavLink");return e.prevNavLink||e.nextNavLink?(g(),f("nav",we,[P("p",xe,[e.prevNavLink?(g(),f("span",Ne,[Te,P(o,{item:e.prevNavLink},null,8,["item"])])):T("",!0),e.nextNavLink?(g(),f("span",Be,[P(o,{item:e.nextNavLink},null,8,["item"]),Se])):T("",!0)])])):T("",!0)};const Ce=u({name:"Page",components:{PageMeta:ue,PageNav:ye}}),$e={class:"page"},Pe={class:"theme-default-content"};Ce.render=function(e,t,a,l,n,r){const o=k("Content"),s=k("PageMeta"),i=k("PageNav");return g(),f("main",$e,[y(e.$slots,"top"),P("div",Pe,[P(o)]),P(s),P(i),y(e.$slots,"bottom")])};var Me=u({name:"DropdownLink",components:{NavLink:Q},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=d(e),a=v((()=>t.value.ariaLabel||t.value.text)),l=G(!1),n=c();W((()=>n.path),(()=>{l.value=!1}));return{open:l,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;l.value=!!t&&!l.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});const Ae={class:"title"},Oe=P("span",{class:"arrow down"},null,-1),Ie={class:"title"},Re={class:"nav-dropdown"},He={class:"dropdown-subtitle"},ze={key:1},De={class:"dropdown-subitem-wrapper"};Me.render=function(e,t,a,l,n,r){const o=k("NavLink");return g(),f("div",{class:["dropdown-wrapper",{open:e.open}]},[P("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[P("span",Ae,x(e.item.text),1),Oe],8,["aria-label"]),P("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[P("span",Ie,x(e.item.text),1),P("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),_(P("ul",Re,[(g(!0),f(M,null,A(e.item.children,((t,a)=>(g(),f("li",{key:t.link||a,class:"dropdown-item"},[t.children?(g(),f(M,{key:0},[P("h4",He,[t.link?(g(),f(o,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):(g(),f("span",ze,x(t.text),1))]),P("ul",De,[(g(!0),f(M,null,A(t.children,(a=>(g(),f("li",{key:a.link,class:"dropdown-subitem"},[P(o,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):(g(),f(o,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[F,e.open]])],2)};const Ee=e=>D(e)?E(e):e.children?i(s({},e),{children:e.children.map(Ee)}):e;var je=u({name:"NavbarLinks",components:{NavLink:Q,DropdownLink:Me},setup(){const e=(()=>{const e=R();return v((()=>(e.value.navbar||[]).map(Ee)))})(),t=(()=>{const e=U(),t=q(),a=S(),l=R();return v((()=>{var n,r;const o=Object.keys(a.value.locales);if(o.length<2)return[];const s=e.currentRoute.value.path,i=e.currentRoute.value.fullPath;return[{text:null!=(n=l.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(r=l.value.selectLanguageAriaLabel)?r:"unkown language",children:o.map((n=>{var r,o,u,c,d,v;const p=null!=(o=null==(r=a.value.locales)?void 0:r[n])?o:{},m=null!=(c=null==(u=l.value.locales)?void 0:u[n])?c:{},h=`${p.lang}`,b=null!=(d=m.selectLanguageName)?d:h;let k;if(h===a.value.lang)k=i;else{const a=s.replace(t.value,n);k=e.getRoutes().some((e=>e.path===a))?a:null!=(v=m.home)?v:n}return{text:b,link:k}}))}]}))})(),a=(()=>{const e=R(),t=v((()=>e.value.repo)),a=v((()=>t.value?oe(t.value):null)),l=v((()=>t.value&&!p(t.value)?`https://github.com/${t.value}`:t.value)),n=v((()=>l.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return v((()=>l.value&&n.value?[{text:n.value,link:l.value}]:[]))})();return{navbarLinks:v((()=>[...e.value,...t.value,...a.value]))}}});const Ge={key:0,class:"navbar-links"};je.render=function(e,t,a,l,n,r){const o=k("DropdownLink"),s=k("NavLink");return e.navbarLinks.length?(g(),f("nav",Ge,[(g(!0),f(M,null,A(e.navbarLinks,(e=>(g(),f("div",{key:e.text,class:"navbar-links-item"},[e.children?(g(),f(o,{key:0,item:e},null,8,["item"])):(g(),f(s,{key:1,item:e},null,8,["item"]))])))),128))])):T("",!0)};const We={class:"icon",focusable:"false",viewBox:"0 0 32 32"},_e=P("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),Fe=P("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),Ue=P("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),qe=P("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),Ve=P("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),Xe=P("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),Ye=P("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),Je=P("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),Ke=P("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),Qe={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ze=P("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);var et=u({expose:[],setup(e){const t=G(!1),a=()=>{t.value=!t.value},l=()=>{const e=null==window?void 0:window.document.querySelector("html");null==e||e.classList.toggle("dark",t.value)};return V((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");t.value=e.matches,e.addEventListener("change",(e=>{t.value=e.matches})),W(t,l,{immediate:!0})})),(e,l)=>(g(),f("button",{class:"toggle-dark-button",onClick:a},[_((g(),f("svg",We,[_e,Fe,Ue,qe,Ve,Xe,Ye,Je,Ke],512)),[[F,!t.value]]),_((g(),f("svg",Qe,[Ze],512)),[[F,t.value]])]))}}),tt=u({name:"ToggleSidebarButton",emits:["toggle"]});const at=P("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[P("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1);tt.render=function(e,t,a,l,n,r){return g(),f("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[at])};var lt=u({name:"Navbar",components:{NavbarLinks:je,ToggleDarkButton:et,ToggleSidebarButton:tt},emits:["toggle-sidebar"],setup(){const e=q(),t=S(),a=R(),l=G(null),n=G(null),r=v((()=>a.value.home||e.value)),o=v((()=>a.value.logo)),s=v((()=>t.value.title)),i=G(0),u=v((()=>i.value?{maxWidth:i.value+"px"}:{}));return V((()=>{const e=nt(l.value,"paddingLeft")+nt(l.value,"paddingRight"),t=()=>{var t;window.innerWidth<719?i.value=0:i.value=l.value.offsetWidth-e-((null==(t=n.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),{navbar:l,siteBrand:n,siteBrandLink:r,siteBrandLogo:o,siteBrandTitle:s,linksWrapperStyle:u,withBase:C}}});function nt(e,t){var a,l,n;const r=null==(n=null==(l=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:l.getComputedStyle(e,null))?void 0:n[t],o=Number.parseInt(r,10);return Number.isNaN(o)?0:o}const rt={ref:"navbar",class:"navbar"},ot={ref:"siteBrand"};lt.render=function(e,t,a,l,n,r){const o=k("ToggleSidebarButton"),s=k("RouterLink"),i=k("NavbarLinks"),u=k("ToggleDarkButton"),c=k("NavbarSearch");return g(),f("header",rt,[P(o,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),P("span",ot,[P(s,{to:e.siteBrandLink},{default:L((()=>[e.siteBrandLogo?(g(),f("img",{key:0,class:"logo",src:e.withBase(e.siteBrandLogo),alt:e.siteBrandTitle},null,8,["src","alt"])):T("",!0),e.siteBrandTitle?(g(),f("span",{key:1,class:["site-name",{"can-hide":e.siteBrandLogo}]},x(e.siteBrandTitle),3)):T("",!0)])),_:1},8,["to"])],512),P("div",{class:"navbar-links-wrapper",style:e.linksWrapperStyle},[y(e.$slots,"before"),P(i,{class:"can-hide"}),y(e.$slots,"after"),P(u),P(c)],4)],512)};const st=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),it=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||st(e.path)===st(t)))(e,t.link)||!!t.children&&t.children.some((t=>it(e,t))),ut=(e,t)=>e.link?X(Q,i(s({},t),{item:e})):X("p",t,e.text),ct=(e,t)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?X("ul",{class:{"sidebar-sub-headers":t>0}},e.children.map((e=>X("li",X(dt,{item:e,depth:t+1}))))):null},dt=({item:e,depth:t=(e.isGroup?0:1)})=>{const a=c(),l=it(a,e);return e.isGroup?[X("section",{class:"sidebar-group"},[ut(e,{class:{"sidebar-heading":!0,active:l}}),ct(e,t)])]:[ut(e,{class:{"sidebar-link":!0,active:l}}),ct(e,t)]};dt.displayName="SidebarChild",dt.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};var vt=u({name:"Sidebar",components:{NavbarLinks:je,SidebarChild:dt},setup:()=>({sidebarItems:z()})});const pt={class:"sidebar"},mt={class:"sidebar-links"};vt.render=function(e,t,a,l,n,r){const o=k("NavbarLinks"),s=k("SidebarChild");return g(),f("aside",pt,[P(o),y(e.$slots,"top"),P("ul",mt,[(g(!0),f(M,null,A(e.sidebarItems,(e=>(g(),f(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),y(e.$slots,"bottom")])};var ht=u({name:"Layout",components:{Home:Z,Page:Ce,Navbar:lt,Sidebar:vt,Transition:Y},setup(){const e=H(),t=B(),a=R(),l=v((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),n=z(),r=G(!1),o=e=>{r.value="boolean"==typeof e?e:!r.value},s={x:0,y:0},i=v((()=>[{"no-navbar":!l.value,"no-sidebar":!n.value.length,"sidebar-open":r.value},t.value.pageClass]));let u;V((()=>{const e=U();u=e.afterEach((()=>{o(!1)}))})),J((()=>{u()}));const c=K(),d=c.resolve,p=c.pending;return{frontmatter:t,page:e,containerClass:i,shouldShowNavbar:l,toggleSidebar:o,onTouchStart:e=>{s.x=e.changedTouches[0].clientX,s.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-s.x,a=e.changedTouches[0].clientY-s.y;Math.abs(t)>Math.abs(a)&&Math.abs(t)>40&&(t>0&&s.x<=80?o(!0):o(!1))},onBeforeEnter:d,onBeforeLeave:p}}});ht.render=function(e,t,a,l,n,r){const o=k("Navbar"),s=k("Sidebar"),i=k("Home"),u=k("Page");return g(),f("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?(g(),f(o,{key:0,onToggleSidebar:e.toggleSidebar},{before:L((()=>[y(e.$slots,"navbar-before")])),after:L((()=>[y(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):T("",!0),P("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),P(s,null,{top:L((()=>[y(e.$slots,"sidebar-top")])),bottom:L((()=>[y(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?(g(),f(i,{key:1})):(g(),f(Y,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:L((()=>[P(u,{key:e.page.path},{top:L((()=>[y(e.$slots,"page-top")])),bottom:L((()=>[y(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)};export default ht;