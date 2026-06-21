(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51282,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},85313,e=>{"use strict";var t=e.i(49828),i=e.i(90700),n=e.i(5399);function r({src:e,alt:n,width:r,height:o,caption:a}){return(0,t.jsxs)("div",{style:{margin:"1rem 0"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{textDecoration:"underline",textUnderlineOffset:"2px"},children:"[IMAGE]:"})," ",a]}),(0,t.jsx)("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"flex-start"},children:(0,t.jsx)(i.default,{src:e,alt:n,width:r,height:o,className:"terminal-image",style:{maxWidth:"100%",height:"auto"}})})]})}function o(){let e=`
▞▀▖         ▜▜ ▞▀▖▐           ▐  
▚▄ ▞▀▖▙▀▖▞▀▖▐▐ ▚▄ ▜▀ ▙▀▖▞▀▖▞▀▖▜▀ 
▖ ▌▌ ▖▌  ▌ ▌▐▐ ▖ ▌▐ ▖▌  ▛▀ ▛▀ ▐ ▖
▝▀ ▝▀ ▘  ▝▀  ▘▘▝▀  ▀ ▘  ▝▀▘▝▀▘ ▀ 

Project overview
================
`,i=`
This is a project I made during my 2nd year of uni. You can find it in the iOS app store right now. It is a blend between a simulator and a game for day trading where the main mechanism is deciding on trades by swiping meant to train your gut instinct.
This essentially tries to replace your doomscrolling time with something a tiny bit less dystopian (though not by much).
It was released on the app store on December 28, 2025.
`,o=`
Some numbers
============

Within 72 hours of launch, the app:
- reached >275 users across 63 countries having had a marketing budget of €0
- converted free users to paying
- achieved a day-1 retention of 39.2%

`,a=`[ <- HOMEPAGE ]
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

        /* Styling for the new interactive image toggle button */
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
        }

        .retro-toggle:hover {
          background-color: rgba(128, 128, 128, 0.2);
          text-decoration: none;
        }

        .terminal-image {
          border: 2px solid currentColor;
          /* The grayscale filter has been removed so photos render in full color */
        }
      `}),(0,t.jsxs)("div",{style:{fontSize:"0.85rem",lineHeight:"1.3",whiteSpace:"pre-wrap",maxWidth:"800px",fontFamily:"monospace"},children:[(0,t.jsx)("span",{style:{lineHeight:"1",display:"block"},children:e}),i,(0,t.jsx)(r,{src:"/scs1.png",alt:"",width:300,height:200,caption:"Main page"}),(0,t.jsx)(r,{src:"/scs2.png",alt:"",width:300,height:200,caption:"Trade outcome"}),(0,t.jsx)(r,{src:"/scs3.png",alt:"",width:300,height:200,caption:"Trade analysis"}),o,(0,t.jsx)(n.default,{href:"/",className:"retro-nav",children:a})]})]})}e.s(["default",()=>o])}]);