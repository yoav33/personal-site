(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},58211,e=>{"use strict";var t=e.i(43476),i=e.i(45508),n=e.i(22016);function a({src:e,alt:n,width:a,height:s,caption:o}){return(0,t.jsxs)("div",{style:{margin:"1rem 0"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{textDecoration:"underline",textUnderlineOffset:"2px"},children:"[IMAGE]:"})," ",o]}),(0,t.jsx)("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"flex-start"},children:(0,t.jsx)(i.default,{src:e,alt:n,width:a,height:s,className:"terminal-image",style:{maxWidth:"100%",height:"auto"}})})]})}function s(){let e=`
▗     ▖      ▐  ▗       
▄ ▛▀▖▗▖▞▀▖▞▀▖▜▀ ▄ ▞▀▖▛▀▖
▐ ▌ ▌ ▌▛▀ ▌ ▖▐ ▖▐ ▌ ▌▌ ▌
▀▘▘ ▘▄▘▝▀▘▝▀  ▀ ▀▘▝▀ ▘ ▘
       ▜   ▌            
▛▚▀▖▞▀▖▐ ▞▀▌            
▌▐ ▌▌ ▌▐ ▌ ▌            
▘▝ ▘▝▀  ▘▝▀▘            
▐        ▜ ▗            
▜▀ ▞▀▖▞▀▖▐ ▄ ▛▀▖▞▀▌     
▐ ▖▌ ▌▌ ▌▐ ▐ ▌ ▌▚▄▌     
 ▀ ▝▀ ▝▀  ▘▀▘▘ ▘▗▄▘     

Project overview
================
`,i=`
This is a project I was part of at uni, my role was injection mold design engineer.
The project was in collaboration with Kraft Heinz and my group (which, besides mechanical engineering students, consisted of industrial design and industrial management students) designed a closure for a ketchup bottle.
I was responsible for taking a basic CAD model and adapting it to be manufacturable with injection molding, then designing a single-cavity prototype mold.
This mold uses an industry standard base mold (DME A-Series) and was designed in Solidworks.
`,s=`
Design decisions
================

Material: 1.2312 (P20-style) tool steel
I chose this as one of two tool steels recommended by DME for this application. This one is slightly harder than the other option which made it more suitable for the ejection system (stripper plate) as it might wear the mold over time.

The closure's living hinge was designed specifically for the cap material (polypropylene) because the dimensions have to be very specific so it doesn't whiten or crack after a few uses. This material was chosen because it's one of the few materials that can actually have such a living hinge (that doesn't snap after 10 uses) affordably.

The closure is ejected with a stripper plate, this was chosen as the ejection method as it keeps a fairly low amount of possible parts that can break and scales well with quantity. The main downside is that this limits the amount of undercut that is permissible, but this size was already fairly low in existing closures.

Cooling is done with standard cooling channels at the cavity and a bubbler at the core. The cavity cooling is fairly standard, but the core cooling was selected specifically to maximize cooling at the product's thickest regions but also to remain compatible with the moving stripper plate mechanism.

Four vents are present throughout the parting surface with a thickness of 0.02mm. This is a standard thickness for use with polypropylene though it is conservative.
`,o=`
[ <- HOMEPAGE ]
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
      `}),(0,t.jsxs)("pre",{style:{fontSize:"0.85rem",lineHeight:"1.3",whiteSpace:"pre-wrap",maxWidth:"800px"},children:[(0,t.jsx)("span",{style:{lineHeight:"1",display:"block"},children:e}),i,(0,t.jsx)(a,{src:"/imt1.jpg",alt:"Regular view",width:300,height:200,caption:"Regular view"}),(0,t.jsx)(a,{src:"/imt2.jpg",alt:"Exploded view",width:300,height:200,caption:"Exploded view"}),(0,t.jsx)(a,{src:"/imt3.jpg",alt:"Section view",width:300,height:200,caption:"Section view"}),s,(0,t.jsx)(n.default,{href:"/",className:"retro-nav",children:o})]})]})}e.s(["default",()=>s])}]);