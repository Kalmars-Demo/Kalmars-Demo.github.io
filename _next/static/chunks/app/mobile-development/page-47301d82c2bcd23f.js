(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{4016:function(e,s,t){Promise.resolve().then(t.bind(t,8149)),Promise.resolve().then(t.bind(t,2938)),Promise.resolve().then(t.bind(t,6432)),Promise.resolve().then(t.bind(t,1295))},8149:function(e,s,t){"use strict";t.r(s),t.d(s,{Applications:function(){return Applications}});var l=t(7437),i=t(258);t(2265);var r=t(251),a=t(2381);let Applications=()=>{let{t:e}=(0,r.$G)(),s=[{description:e("Drusku apraksta. Lectus sit amet est placerat in egestas erat imperdiet sed. Magna fermentum iaculis eu non diam phasellus vestibulum. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit."),number:"01",title:e("Front-end development"),smallTitle:e("explore work"),serviceLink:"/frontend-development"},{description:e("Drusku apraksta. Lectus sit amet est placerat in egestas erat imperdiet sed. Magna fermentum iaculis eu non diam phasellus vestibulum. Risus at ultrices mi temp us imperdiet nulla malesuada pellentesque elit."),number:"02",title:e("Backend system development"),smallTitle:e("explore work")},{description:e("Drusku apraksta. Lectus sit amet est placerat in egestas erat imperdiet sed. Magna fermentum iaculis eu non diam phasellus vestibulum. Risus at ultrices mi temp us imperdiet nulla malesuada pellentesque elit."),number:"03",title:e("Mobile app development"),smallTitle:e("explore work"),serviceLink:"/mobile-development"},{description:e("Drusku apraksta. Lectus sit amet est placerat in egestas erat imperdiet sed. Magna fermentum iaculis eu non diam phasellus vestibulum. Risus at ultrices mi temp us imperdiet nulla malesuada pellentesque elit."),number:"04",title:e("E-commerce development"),smallTitle:e("explore work")},{description:e("Drusku apraksta. Lectus sit amet est placerat in egestas erat imperdiet sed. Magna fermentum iaculis eu non diam phasellus vestibulum. Risus at ultrices mi temp us imperdiet nulla malesuada pellentesque elit."),number:"05",title:e("AI development"),smallTitle:e("explore work")}];return(0,l.jsxs)("div",{className:"px-4 pt-10 lg:px-0 lg:pt-36 pb-20 min-h-[calc(100vh-2rem)]",children:[(0,l.jsx)("div",{className:"flex pb-16 grid lg:grid-cols-2",children:(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{text:e("Applications of our products")})})}),(0,l.jsx)("div",{className:"grid gap-10",children:s.map((e,s)=>(0,l.jsx)(a.Z,{description:e.description,number:e.number,title:e.title,smallTitle:e.smallTitle,serviceLink:e.serviceLink},s))})]})}},2938:function(e,s,t){"use strict";t.r(s),t.d(s,{Hero:function(){return Hero}});var l=t(7437),i=t(4124),r=t(258),a=t(9303),n=t(2265),o=t(251),c=t(7837),d=t(5887),m=t(4977),x=t(6375),u=t(6264);function PhoneModel(e){let s=(0,n.useRef)(),{nodes:t,materials:i}=(0,u.L)("/glass_smartphone_design.glb");return n.useEffect(()=>{if(s.current){let e=new x.Box3().setFromObject(s.current),t=e.getCenter(new x.Vector3);s.current.position.x+=s.current.position.x-t.x,s.current.position.y+=s.current.position.y-t.y,s.current.position.z+=s.current.position.z-t.z,s.current.rotation.y-=15*(Math.PI/180)}},[s]),(0,l.jsxs)("group",{ref:s,...e,dispose:null,children:[(0,l.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Object_4.geometry,material:i.tela1}),(0,l.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Object_6.geometry,material:i.GRAFENO}),(0,l.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Object_7.geometry,material:i.DETALHE}),(0,l.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Object_8.geometry,material:i.black}),(0,l.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Object_10.geometry,material:i.transparente})]})}u.L.preload("/glass_smartphone_design.glb");let LightFollowingCamera=()=>{let e=n.useRef();return(0,c.C)(s=>{let{camera:t}=s;e.current&&e.current.position.copy(t.position)}),(0,l.jsx)("directionalLight",{ref:e,intensity:15,position:[0,0,8],color:"#2fc7e5"})};var Phone_Phone3DObject=()=>(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,l.jsxs)(d.Xz,{gl:{alpha:!0},camera:{position:[0,0,6],fov:2},children:[(0,l.jsx)(m.z,{makeDefault:!0,autoRotate:!1,enablePan:!1,enableZoom:!1,autoRotateSpeed:.5,zoomSpeed:.1}),(0,l.jsx)(LightFollowingCamera,{}),(0,l.jsx)(n.Suspense,{fallback:null,children:(0,l.jsx)(PhoneModel,{})})]})})});let Hero=()=>{let{t:e}=(0,o.$G)();return(0,l.jsx)("div",{className:"px-4 pt-40 lg:px-0 lg:pt-36 pb-20 min-h-[calc(100vh-2rem)]",children:(0,l.jsxs)("div",{className:"flex grid lg:grid-cols-2 min-h-[70vh] h-full",children:[(0,l.jsxs)("div",{className:"overflow-y-auto",children:[(0,l.jsx)(i.Z,{text:e("Mobile Mastery")}),(0,l.jsx)(r.Z,{text:e("Exploring the Realm of Mobile Development")}),(0,l.jsx)(a.Z,{text:e("Dive into the dynamic world of mobile development, where innovation meets practicality. Learn about the latest trends, tools, and techniques that are shaping the mobile landscape. From native to cross-platform solutions, discover how mobile development is continuously evolving to enhance user experience and meet the demands of the digital age. Whether you’re a seasoned developer or a curious beginner, this journey into mobile development offers valuable insights and exciting challenges. Join us as we navigate through this fascinating field, one app at a time.")})]}),(0,l.jsx)("div",{className:"lg:flex hidden w-full h-full",children:(0,l.jsx)(Phone_Phone3DObject,{})})]})})}},6432:function(e,s,t){"use strict";t.r(s),t.d(s,{Offers:function(){return Offers}});var l=t(7437),i=t(4124),r=t(258);t(2265);var a=t(251),n=t(9303),o=t(9246),c=t(4534);let Offers=()=>{let{t:e}=(0,a.$G)();return(0,l.jsxs)("div",{className:"px-4 pt-10 lg:px-0 lg:pt-36 pb-20 min-h-[calc(100vh-2rem)]",children:[(0,l.jsx)("div",{className:"flex pb-4 grid lg:grid-cols-2",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(i.Z,{text:e("offers")}),(0,l.jsx)(r.Z,{text:e("Check what we can offer")}),(0,l.jsx)("div",{className:"pb-16",children:(0,l.jsx)(n.Z,{text:e("We offer everything you need, some more long text here.  some more long text here.  some more long text here.  some more long text here.  some more long text here.  some more long text here.")})})]})}),(0,l.jsxs)("div",{className:"grid gap-4 text-primary lg:grid-cols-2",children:[(0,l.jsxs)("div",{className:"grid gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"01"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"02"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"03"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"04"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]})]}),(0,l.jsxs)("div",{className:"grid gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"05"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"06"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"07"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:"08"}),(0,l.jsx)("div",{className:"px-8",children:(0,l.jsx)("div",{className:"font-archivo text-xl lg:text-3xl",children:e("Offer")})})]})]})]}),(0,l.jsx)("div",{className:"grid pt-16 lg:grid-cols-3",children:(0,l.jsxs)("div",{className:"lg:col-span-1",children:[(0,l.jsx)("div",{className:"text-secondary pb-8",children:"Liked what we offer or want to discuss something unique? Message us and let us know."}),(0,l.jsx)(c.Z,{onClick:()=>(0,o.M)(),text:e("Connect with us"),className:"button bg-primary !w-auto hover:opacity-40"})]})})]})}},1295:function(e,s,t){"use strict";t.r(s),t.d(s,{ServiceValues:function(){return ServiceValues}});var l=t(7437),i=t(4124),r=t(258);t(2265);var a=t(251),n=t(1084);let ServiceValues=()=>{let{t:e}=(0,a.$G)();return(0,l.jsxs)("div",{className:"px-4 pt-10 lg:px-0 lg:pt-36 pb-20 min-h-[calc(100vh-2rem)]",children:[(0,l.jsx)("div",{className:"flex pb-16 grid lg:grid-cols-2",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(i.Z,{text:e("Values")}),(0,l.jsx)(r.Z,{text:e("What we value in mobile development")})]})}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-3 gap-10 lg:gap-8",children:[(0,l.jsx)(n.Z,{children:(0,l.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-primary text-lg font-bold font-kalmars",children:"01"}),(0,l.jsx)("div",{className:"text-primary pt-2 font-bold font-archivo text-xl lg:text-3xl",children:e("High success rate in reaching innovation goals")})]}),(0,l.jsx)("div",{className:"text-secondary pt-10",children:"Veiksmīgai izaicinājuma izzināšanai, mēs izmantojam dažādāko jaunākās klases tehnoloģijas pieejas, lai izzinātu visus aspektus un potenciālos izaicinājumus"})]})}),(0,l.jsx)(n.Z,{children:(0,l.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-primary text-lg font-bold font-kalmars",children:"02"}),(0,l.jsx)("div",{className:"text-primary pt-2 font-bold font-archivo text-xl lg:text-3xl",children:e("High success rate in reaching innovation goals")})]}),(0,l.jsx)("div",{className:"text-secondary pt-10",children:"Viemmēr esam uz pulsa (skatāmies apkārt uz zināšanu apvāršņa/horizonta) par aktuālajām tenoloģiju tendencēm, lai spētu piedāvāt labākos risinājumus ar mūsdienīgu pieeju."})]})}),(0,l.jsx)(n.Z,{children:(0,l.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-primary text-lg font-bold font-kalmars",children:"03"}),(0,l.jsx)("div",{className:"text-primary pt-2 font-bold font-archivo text-xl lg:text-3xl",children:e("High success rate in reaching innovation goals")})]}),(0,l.jsx)("div",{className:"text-secondary pt-10",children:"Izzinot visas izaicinājuma niances, spējam sniegt pilnvērtīgu konsultāciju, pielietojot pašu pieredzi un pētijumus.\u2028\u2028"})]})})]})]})}},1084:function(e,s,t){"use strict";var l=t(7437);t(2265),s.Z=e=>{let{children:s,color:t,padding:i,small:r}=e,a=t?"bg-mediumgray":"bg-gray";return(0,l.jsxs)("div",{className:"card-with-corner relative w-full ".concat(null!=i?i:"p-8"," ").concat(a),children:[s,(0,l.jsx)("div",{className:"bottom-corner after:".concat(a," ").concat(a," ").concat(r?"small":"")})]})}},2381:function(e,s,t){"use strict";var l=t(7437),i=t(2265),r=t(2815),a=t(4686),n=t(8829);r.p8.registerPlugin(a.i),s.Z=e=>{let{description:s,number:t,title:a,smallTitle:o,reverse:c,serviceLink:d="/mobile-development"}=e,m=[],x=[],[u,p]=(0,i.useState)(0),initTwoColorCardAnimation=()=>{window.innerWidth>=1024?(r.p8.utils.toArray(".merge-card-left").forEach((e,s)=>{m[s]&&(m[s].kill(),m[s]=null,r.p8.set(e,{clearProps:"all"})),m[s]=r.p8.to(e,{scrollTrigger:{trigger:e,start:"-=300%",end:"+=50%",scrub:!0},xPercent:-43,delay:.1*s})}),r.p8.utils.toArray(".merge-card-right").forEach((e,s)=>{x[s]&&(x[s].kill(),x[s]=null,r.p8.set(e,{clearProps:"all"})),x[s]=r.p8.to(e,{scrollTrigger:{trigger:e,start:"-=300%",end:"+=50%",scrub:!0},xPercent:43,delay:.1*s})})):(m.forEach(e=>e&&e.kill()),x.forEach(e=>e&&e.kill()),r.p8.utils.toArray(".merge-card-left").forEach(e=>r.p8.set(e,{clearProps:"all"})),r.p8.utils.toArray(".merge-card-right").forEach(e=>r.p8.set(e,{clearProps:"all"})),m.length=0,x.length=0)};return(0,i.useEffect)(()=>{initTwoColorCardAnimation(),window.addEventListener("resize",initTwoColorCardAnimation)},[]),(0,l.jsxs)("div",{className:"".concat(c?"lg:bg-transparent bg-gray":""," grid border-32px lg:grid-cols-2"),children:[(0,l.jsx)("div",{className:" ".concat(c?"order-2 merge-card-right lg:rounded-e-[32px] lg:rounded-s-[32px] rounded-b-[32px] lg:rounded-s-[0]":"order-1 merge-card-left rounded-t-[32px]  lg:rounded-e-[0] lg:rounded-s-[32px]","  bg-gray pb-16 lg:pb-0 px-4 lg:px-24 py-6 lg:py-14 text-secondary"),children:s}),(0,l.jsx)("div",{className:"".concat(c?"order-1 merge-card-left lg:rounded-s-[32px] bg-primary rounded-t-[32px] lg:rounded-e-[0] rounded-b-[32px]":"order-2 merge-card-right rounded-b-[32px] lg:rounded-s-[0] lg:rounded-e-[32px] bg-gray","  "),children:(0,l.jsxs)("div",{className:"p-8 bg-primary text-black border-32px font-bold h-full",children:[(0,l.jsx)("div",{className:"font-kalmars text-lg",children:t}),(0,l.jsxs)("div",{className:"lg:px-8",children:[(0,l.jsx)("div",{className:"font-archivo uppercase text-lg md:text-xl lg:text-3xl",children:a}),o&&(0,l.jsx)(n.Z,{classes:"mt-8 block",text:o,color:"black",link:d})]})]})})]})}}},function(e){e.O(0,[705,922,689,964,304,724,704,667,977,63,971,864,744],function(){return e(e.s=4016)}),_N_E=e.O()}]);