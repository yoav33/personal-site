(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return u},urlQueryToSearchParams:function(){return a}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function u(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let u=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",a=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(u.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${s}${o}${c}${a}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=u(e,n)),t&&(o.current=u(t,n))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return P},MissingStaticPage:function(){return v},NormalizeError:function(){return m},PageNotFoundError:function(){return b},SP:function(){return _},ST:function(){return y},WEB_VITALS:function(){return u},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return s},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return E}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let u=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>a.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=s();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let _="u">typeof performance,y=_&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class m extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class P extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=e.r(18967),o=e.r(52817);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return b}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let u=e.r(90809),i=e.r(43476),a=u._(e.r(71645)),l=e.r(95057),s=e.r(8372),c=e.r(18581),f=e.r(18967),d=e.r(5550);e.r(33525);let p=e.r(91949),h=e.r(73668),_=e.r(9396);function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(t){var r;let n,o,u,[l,g]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,a.useRef)(null),{href:v,as:P,children:E,prefetch:O=null,passHref:j,replace:x,shallow:T,scroll:w,onClick:S,onMouseEnter:C,onTouchStart:R,legacyBehavior:N=!1,onNavigate:k,ref:A,unstable_dynamicOnHover:U,...M}=t;n=E,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let L=a.default.useContext(s.AppRouterContext),I=!1!==O,$=!1!==O?null===(r=O)||"auto"===r?_.FetchStrategy.PPR:_.FetchStrategy.Full:_.FetchStrategy.PPR,{href:D,as:B}=a.default.useMemo(()=>{let e=y(v);return{href:e,as:P?y(P):e}},[v,P]);if(N){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(n)}let F=N?o&&"object"==typeof o&&o.ref:A,K=a.default.useCallback(e=>(null!==L&&(b.current=(0,p.mountLinkInstance)(e,D,L,$,I,g)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[I,D,L,$,g]),z={ref:(0,c.useMergedRef)(K,F),onClick(t){N||"function"!=typeof S||S(t),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!L||t.defaultPrevented||function(t,r,n,o,u,i,l){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){u&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);a.default.startTransition(()=>{f(n||r,u?"replace":"push",i??!0,o.current)})}}(t,D,B,b,x,w,k)},onMouseEnter(e){N||"function"!=typeof C||C(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&I&&(0,p.onNavigationIntent)(e.currentTarget,!0===U)},onTouchStart:function(e){N||"function"!=typeof R||R(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&I&&(0,p.onNavigationIntent)(e.currentTarget,!0===U)}};return(0,f.isAbsoluteUrl)(B)?z.href=B:N&&!j&&("a"!==o.type||"href"in o.props)||(z.href=(0,d.addBasePath)(B)),u=N?a.default.cloneElement(o,z):(0,i.jsx)("a",{...M,...z,children:n}),(0,i.jsx)(m.Provider,{value:l,children:u})}e.r(84508);let m=(0,a.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,a.useContext)(m);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63784,e=>{"use strict";var t=e.i(43476);e.i(71645);var r=e.i(22016);function n(){let e=`ABOUT
=====

Welcome to RainDrop2!
Raindrop2 allows you to quickly send photos from any device on your network to your browser. It was built to (hopefully) solve the current annoying flow of either:

- Take photo on Apple device -> AirDrop -> Convert from HEIC to PNG -> Drag PNG from downloads to browser, or worse,
- Take photo on any device -> Email to yourself -> Download image -> Drag image from downloads to browser.

At least for me, this extension has reduced this 3-5 minute task to a 15 second one. 

Features:
- Runs locally
- No fees
- Full privacy
- Super fast
- Direct copy to clipboard
`,n=`
-----------------------------------------------------------
`;return(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0",paddingBottom:"4rem"},children:[(0,t.jsx)("style",{children:`
        .retro-nav {
          color: inherit;
          text-decoration: none;
          padding: 0 4px;
          margin-left: -4px;
        }
        .retro-nav:hover {
          background-color: rgba(128, 128, 128, 0.2);
        }

        .retro-toggle {
          background: none;
          border: none;
          color: inherit;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          padding: 0 4px;
          margin-left: -4px;
          text-align: left;
          text-decoration: underline;
          text-underline-offset: 2px;
          display: block;
          width: 100%;
        }

        .retro-toggle:hover {
          background-color: rgba(128, 128, 128, 0.2);
          text-decoration: none;
        }
      `}),(0,t.jsxs)("pre",{style:{fontSize:"0.85rem",lineHeight:"1.3",whiteSpace:"pre-wrap",maxWidth:"800px",width:"100%"},children:[(0,t.jsx)(()=>{let e=`
           _           _                ____  
 _ __ __ _(_)_ __   __| |_ __ ___  _ __|___ \\ 
| '__/ _\` | | '_ \\ / _\` | '__/ _ \\| '_ \\ __) |
| | | (_| | | | | | (_| | | | (_) | |_) / __/ 
|_|  \\__,_|_|_| |_|\\__,_|_|  \\___/| .__/_____|
                                  |_|         
ABOUT
`;return(0,t.jsx)("div",{style:{color:"#147114",fontWeight:"bold",marginBottom:"1.5rem",lineHeight:"1.2"},children:e})},{}),e,n,(0,t.jsx)(r.default,{href:"/",className:"retro-nav",children:"[ <- RETURN TO HOMEPAGE ]"}),(0,t.jsx)(r.default,{href:"/raindrop2/setup",className:"retro-nav",children:"[ SETUP GUIDE ]"})]})]})}e.s(["default",()=>n])}]);