(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[2],{106:function(e,t,n){"use strict";var a=n(75),r=n(0),i=n(339),o=n(343),c=n(117),l=n(279),u=n(274),s=n(88),m=n(3),d=n(76),p=n.n(d),f=Object(l.a)((function(e){return Object(u.a)({duration:{color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.75)",borderRadius:e.shape.borderRadius,width:60,height:24,fontSize:12}})}));function v(e){var t=f(),n=e.duration;"s"===e.unit&&(n*=1e3);var a=p.a.duration(n,"ms").hours()+"",o=p.a.duration(n,"ms").minutes()+"",c=p.a.duration(n,"ms").seconds()+"",l=a.padStart(2,"0")+":"+o.padStart(2,"0")+":"+c.padStart(2,"0");return r.createElement(i.a,{className:Object(m.a)(t.duration,e.classes.root,e.className),display:"flex",justifyContent:"center",alignItems:"center"},l)}v.defaultProps={unit:"ms"};var h=v,b=n(64),E=n(48),g=Object(l.a)((function(e){return Object(u.a)({wrap:{width:"100%"},cover:{position:"relative"},avatar:Object(a.a)({width:56,height:56,border:"3px solid #fff",position:"absolute",bottom:-28,right:10},e.breakpoints.down("md"),{width:40,height:40,bottom:-20,right:8}),duration:{position:"absolute",left:10,bottom:10}})})),y=function(e){var t=Object(E.a)(),n=g();return r.createElement(i.a,{className:n.wrap,onClick:function(n){n.stopPropagation(),t.gotoMovie(null===e||void 0===e?void 0:e.id)}},r.createElement("div",{className:n.cover},r.createElement(s.b,{src:b.c||e.cover,aspectRatio:16/9}),e.duration&&r.createElement(h,{classes:{root:n.duration},duration:e.duration}),r.createElement(o.a,{onClick:function(n){var a;n.stopPropagation(),t.gotoProfile(null===e||void 0===e||null===(a=e.author)||void 0===a?void 0:a.username)},className:n.avatar,src:e.author&&e.author.avatar})),r.createElement(i.a,{padding:1},r.createElement(c.a,{variant:"body2",color:"textSecondary"},e.author&&(e.author.nickname||e.author.username)),r.createElement(c.a,{variant:"subtitle1",noWrap:!0},e.title),r.createElement(i.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(c.a,{variant:"caption",color:"textSecondary"},"\u89c2\u770b\u6b21\u6570\uff1aTODO"),r.createElement(c.a,{variant:"caption",color:"textSecondary"},p()(e.create_at).format("YYYY-MM-DD")))))};y.defaultProps={title:"\u89c6\u9891\u6807\u9898",subtitle:"\u89c6\u9891\u526f\u6807\u9898",create_at:new Date,duration:3242341,author:{username:"sma2lbao",nickname:"\u6635\u79f0",avatar:""}};var O=Object(l.a)((function(e){return Object(u.a)({wrap:{width:"100%"},cover:{position:"relative"},duration:{position:"absolute",left:10,bottom:10}})})),j=function(e){var t=Object(E.a)(),n=O();return r.createElement(i.a,{className:n.wrap,onClick:function(n){n.stopPropagation(),t.gotoMovie(null===e||void 0===e?void 0:e.id)}},r.createElement("div",{className:n.cover},r.createElement(s.b,{src:b.c||e.cover,aspectRatio:16/9}),e.duration&&r.createElement(h,{classes:{root:n.duration},duration:e.duration})),r.createElement(i.a,{padding:1},r.createElement(c.a,{variant:"subtitle1",noWrap:!0},e.title),r.createElement(i.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(c.a,{variant:"caption",color:"textSecondary"},"\u89c2\u770b\u6b21\u6570\uff1aTODO"),r.createElement(c.a,{variant:"caption",color:"textSecondary"},p()(e.create_at).format("YYYY-MM-DD")))))};j.defaultProps={title:"\u89c6\u9891\u6807\u9898",subtitle:"\u89c6\u9891\u526f\u6807\u9898",create_at:new Date,duration:3242341};var _=Object(l.a)((function(e){return Object(u.a)({wrap:{width:"100%"},cover:{position:"relative"},duration:{position:"absolute",left:10,bottom:10}})})),w=function(e){var t=Object(E.a)(),n=_();return r.createElement(i.a,{className:n.wrap,onClick:function(n){n.stopPropagation(),t.gotoMovie(null===e||void 0===e?void 0:e.id)}},r.createElement("div",{className:n.cover},r.createElement(s.b,{src:b.c||e.cover,aspectRatio:16/9}),e.duration&&r.createElement(h,{classes:{root:n.duration},duration:e.duration})))};w.defaultProps={create_at:new Date,duration:3242341};n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return w}))},118:function(e,t,n){"use strict";var a=n(0),r=n(75),i=n(279),o=n(274),c=n(3),l=Object(i.a)((function(e){return Object(o.a)({container:{maxWidth:400,flex:1},agent:function(t){var n,a,i=Object.keys(e.mixins.toolbar),o=+((null===(n=e.mixins.toolbar)||void 0===n?void 0:n.height)||(null===(a=e.mixins.toolbar)||void 0===a?void 0:a.minHeight)||0)+((null===t||void 0===t?void 0:t.top)||0),c={position:"sticky",top:o,overflow:"auto",maxHeight:"calc(100vh - ".concat(o,"px)")};return i.forEach((function(n){var a=e.mixins.toolbar[n];if("object"===typeof a&&((null===a||void 0===a?void 0:a.height)||(null===a||void 0===a?void 0:a.minHeight))){var i=+((null===a||void 0===a?void 0:a.height)||(null===a||void 0===a?void 0:a.minHeight))+((null===t||void 0===t?void 0:t.top)||0);Object.assign(c,Object(r.a)({},n,{top:i,maxHeight:"calc(100vh - ".concat(i,"px)")}))}})),c},root:{}})}));function u(e){var t=l(e);return e.sticky?a.createElement("div",{className:Object(c.a)(t.container)},a.createElement("div",{className:Object(c.a)(t.agent)},a.createElement("div",{className:Object(c.a)(t.root,e.className)},e.children))):a.createElement("div",{className:Object(c.a)(t.container,e.className)},e.children)}var s=Object(i.a)((function(e){return Object(o.a)({root:{maxWidth:1600,display:"flex",margin:"0 auto"}})}));function m(e){var t=s();return a.createElement("div",{className:Object(c.a)(t.root,e.className)},e.children)}var d=Object(i.a)((function(e){return Object(o.a)({root:{maxWidth:1200,flex:3}})}));function p(e){var t=d();return a.createElement("div",{style:Object.assign({},e.width?{width:e.width}:{}),className:Object(c.a)(t.root,e.className)},e.children)}var f=Object(i.a)((function(e){return Object(o.a)({root:{width:"100%"}})}));function v(e){var t=f();return a.createElement("div",{className:Object(c.a)(t.root,e.className)},e.children)}n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return u}))},217:function(e,t,n){e.exports=n(272)},272:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),c=n(338),l=n(337),u=n(336),s=n(188),m=n(111),d=n(199),p={MuiTabs:{root:{}},MuiTab:{root:{}}},f={layout:{size:{parent:{width:80}}}},v=Object(d.a)({palette:{tertiary:{main:"#ccc"}},overrides:p,typography:{}},{custom:f}),h=n(141),b=n(20),E=n(75),g=n(52),y=n(279),O=n(274),j=n(326),_=n(131),w=n(341),S=n(314),P=n(117),x=n(309),A=n(310),k=n(311),C=n(312),N=n(144),z=n(3),I=Object(y.a)((function(e){var t;return Object(O.a)({toolbar:e.mixins.toolbar,root:{display:"flex"},parent:{width:null===(t=e.custom)||void 0===t?void 0:t.layout.size.parent.width,flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},child:{flex:1,overflow:"hidden",padding:e.spacing(2,1)}})})),R=[{icon:a.createElement(x.a,null),label:"Home",value:"home",path:"",children:[{icon:a.createElement(A.a,null),label:"Home",value:"home",path:"/home"},{icon:a.createElement(A.a,null),label:"History Topics",value:"topic",path:"/topics",disabled:!0}]},{icon:a.createElement(k.a,null),label:"Movie",value:"movie",path:"/movie-home",children:[]},{icon:a.createElement(C.a,null),label:"My",value:"user",path:"",children:[{icon:a.createElement(A.a,null),label:"My Homepage",value:"personal",path:"/personal"},{icon:a.createElement(A.a,null),label:"Setting",value:"setting",path:"/setting",disabled:!0}]}];function T(e){var t=e.closeSidebarHandler,n=Object(_.a)(e,["closeSidebarHandler"]),r=I(),i=Object(b.f)(),o=a.useState("home"),c=Object(g.a)(o,2),l=c[0],u=c[1],s=a.useMemo((function(){var e=R.find((function(e){return e.value===l}));return(null===e||void 0===e?void 0:e.children)||[]}),[l]),m=a.useState((function(){return s.length?s[0].value:""})),d=Object(g.a)(m,2),p=d[0],f=d[1];return a.useEffect((function(){var e=R.find((function(e){return e.value===l}));if(e&&e.path)i.push(e.path);else if(s.length&&p){var t=s.find((function(e){return e.value===p}));(null===t||void 0===t?void 0:t.path)&&i.push(t.path)}}),[l,p,i,s]),a.createElement(w.a,Object.assign({},n,{onClose:t}),a.createElement("div",{className:r.toolbar}),a.createElement("div",{className:r.root},a.createElement("div",{className:r.parent},R.map((function(e,t){return a.createElement("div",{key:t},a.createElement(S.a,{color:l===e.value?"primary":"default",onClick:function(){return u(e.value)}},a.createElement(N.a,{width:"1em",height:"1em",variant:"circle",animation:"wave"})))}))),a.createElement("div",{className:r.child},s.map((function(e,t){return a.createElement("div",{key:t,onClick:function(){return f(e.value)},className:Object(z.a)({active:e.value===p})},a.createElement(P.a,{variant:"subtitle1",gutterBottom:!0},a.createElement(N.a,{width:"70%",height:"100%",animation:"wave"})))})))),a.createElement("div",{onClick:t},"close menu"))}var M=n(320),D=n(321),L=n(339),q=n(322),$=n(325),B=n(323),U=n(324),F=n(315),H=n(342),W=n(24),Y=Object(y.a)((function(e){return Object(O.a)({search:{borderRadius:e.shape.borderRadius,backgroundColor:Object(W.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.c)(e.palette.common.white,.25)},display:"inline-flex",alignItems:"center",margin:e.spacing(0,1)},icon:{pointerEvents:"none",margin:e.spacing(0,1)},input:{color:"inherit",paddingRight:e.spacing(1),transition:e.transitions.create("width"),width:120,"&:focus":{width:200}}})}));function G(){var e=Y();return a.createElement("div",{className:e.search},a.createElement(F.a,{className:e.icon}),a.createElement(H.a,{classes:{input:e.input},placeholder:"\u641c\u7d22",inputProps:{"aria-label":"Search"}}))}var J=n(316),K=n(284),Q=n(318);function V(){var e=a.useState(null),t=Object(g.a)(e,2),n=t[0],r=t[1];function i(){r(null)}return a.createElement(a.Fragment,null,a.createElement(S.a,{"aria-controls":"account-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit"},a.createElement(J.a,null)),a.createElement(K.a,{id:"account-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i},a.createElement(Q.a,{onClick:i},"Resume")))}var X=n(319);function Z(){return a.createElement(S.a,{color:"inherit"},a.createElement(X.a,null))}var ee=n(48),te=Object(y.a)((function(e){return Object(O.a)({appBar:{zIndex:e.zIndex.drawer+1,boxShadow:e.shadows[0]},icon:{marginLeft:e.spacing(2)},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},search:{margin:e.spacing(0,1)}})}));function ne(e){var t=te(),n=Object(ee.a)();return a.createElement(a.Fragment,null,a.createElement(M.a,{color:"inherit",position:"fixed",className:t.appBar},a.createElement(D.a,{classes:{root:t.toolbar}},a.createElement(L.a,{display:"flex",alignItems:"center"},a.createElement("div",null,a.createElement(q.a,{fontSize:"large",className:Object(z.a)("iconfont icon-logo")})),a.createElement(S.a,{size:"small",onClick:e.toggleSidebar,className:t.icon},a.createElement(B.a,{fontSize:"small"})),a.createElement(S.a,{onClick:n.gotoMovieUpload,size:"small",className:t.icon},a.createElement(U.a,{fontSize:"small"}))),a.createElement(L.a,{display:"flex",alignItems:"center"},a.createElement(G,null),a.createElement(Z,null),a.createElement(V,null))),a.createElement($.a,null)),a.createElement(D.a,null))}var ae=Object(y.a)((function(e){return Object(O.a)({root:{height:"100%",backgroundColor:"#f5f5f5",minHeight:"100vh"},drawer:{width:290},shiftMain:{marginLeft:290},main:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}})})),re=function(e){var t=e.children,n=e.hideSidebar,r=ae(),i=Object(j.a)("(min-width: 1600px)"),o=a.useState(!1),c=Object(g.a)(o,2),l=c[0],u=c[1];return a.createElement("div",{className:r.root},a.createElement(ne,{toggleSidebar:function(){return u(!l)}}),a.createElement("div",null,!n&&a.createElement(T,{classes:{paper:r.drawer},open:l,variant:i?"persistent":"temporary",closeSidebarHandler:function(){return u(!1)}}),a.createElement("main",{className:Object(z.a)(r.main,Object(E.a)({},r.shiftMain,l&&i))},t)))},ie=re;function oe(e){var t=e.layout,n=e.component,r=e.loading,i=e.lazy,o=Object(_.a)(e,["layout","component","loading","lazy"]);return t?a.createElement(b.a,Object.assign({},o,{render:function(e){return a.createElement(t,null,i?a.createElement(a.Suspense,{fallback:r?a.createElement(r,null):a.createElement("div",null,"loading")},a.createElement(n,e)):a.createElement(n,e))}})):a.createElement(b.a,Object.assign({},o,{render:function(e){return i?a.createElement(a.Suspense,{fallback:r?a.createElement(r,null):a.createElement("div",null,"loading")},a.createElement(n,e)):a.createElement(n,e)}}))}var ce=n(317),le=n(280),ue=n(327),se=n(343),me=n(328),de=n(329),pe=n(330),fe=n(85),ve=Object(y.a)((function(e){return Object(O.a)({root:{},title:{padding:e.spacing(1,2)}})}));function he(){var e=ve(),t=Object(ee.a)(),n=Object(fe.n)().data,r=null===n||void 0===n?void 0:n.user_urges;return a.createElement(a.Fragment,null,a.createElement("div",{className:e.root},a.createElement(P.a,{className:e.title,variant:"h6"},"\u8d21\u732e\u699c"),a.createElement(ce.a,null,r&&r.map((function(e,n){return a.createElement(le.a,{key:n,onClick:function(){return t.gotoProfile(null===e||void 0===e?void 0:e.username)}},a.createElement(ue.a,null,a.createElement(se.a,{src:e.avatar})),a.createElement(me.a,null,a.createElement(P.a,null,e.nickname)),a.createElement(de.a,null,a.createElement(pe.a,null,a.createElement(P.a,null,"\u5173\u6ce8"))))})))))}var be=n(331),Ee=n(307),ge=n(106),ye=n(332),Oe=n(333);function je(){var e=Object(ee.a)(),t=Object(fe.h)().data,n=null===t||void 0===t?void 0:t.movie_urges;return a.createElement(L.a,{padding:0},a.createElement(L.a,{paddingY:1,display:"flex",alignItems:"center",justifyContent:"space-between"},a.createElement(P.a,{component:"span",variant:"h6"},"\u7535\u5f71\u63a8\u8350"),a.createElement(be.a,{onClick:e.gotoMovieHome,color:"textSecondary",variant:"caption"},"\u66f4\u591a")),n&&a.createElement(ye.a,{cellHeight:"auto",cols:4},n.map((function(e,t){return a.createElement(Ee.a,{key:t,in:!0,timeout:800*t},a.createElement(Oe.a,{cols:e.cols||1},a.createElement(ge.a,Object.assign({key:t},e))))}))))}function _e(){return a.createElement(a.Fragment,null,a.createElement(L.a,{paddingTop:4},a.createElement(je,null)))}var we=n(334),Se=n(335),Pe=n(181),xe=n.n(Pe),Ae=n(184),ke=Object(Ae.virtualize)(xe.a),Ce=Object(y.a)((function(e){return Object(O.a)({head:{display:"flex",alignItems:"flex-end",padding:e.spacing(4,0)},headItem:{flex:1,overflow:"hidden","& + &":{marginLeft:e.spacing(4)}},bannerRoot:{flex:1,overflow:"hidden"},banner:{paddingRight:"50%"},bannerItem:{minHeight:200,margin:e.spacing(0,.25),display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}})}));var Ne=function(){var e=a.useState(0),t=Object(g.a)(e,2),n=t[0],r=t[1],i=Ce(),o=Object(fe.b)().data;return console.log(o),a.createElement("div",{className:i.head},a.createElement("div",{className:i.headItem},a.createElement(L.a,null,a.createElement(L.a,{mb:3},a.createElement(P.a,{variant:"h6",gutterBottom:!0},a.createElement(N.a,{animation:"wave",height:"100%",width:160})),a.createElement(P.a,{variant:"h5",gutterBottom:!0},a.createElement(N.a,{animation:"wave",height:"100%",width:40})),a.createElement(P.a,{variant:"body2",color:"textSecondary"},a.createElement(N.a,{animation:"wave",height:"100%",width:400}),a.createElement(N.a,{animation:"wave",height:"100%",width:100}))),a.createElement(L.a,{display:"flex",alignItems:"center"},a.createElement(L.a,null,a.createElement(S.a,{size:"small",onClick:function(){return r(n-1)}},a.createElement(we.a,null))),a.createElement("div",{className:i.bannerRoot},a.createElement(ke,{className:i.banner,index:n,onChangeIndex:function(e){return r(e)},enableMouseEvents:!0,slideRenderer:function(e){var t=e.key;return a.createElement("div",{key:t,className:Object(z.a)(i.bannerItem)},a.createElement(ge.a,null))}})),a.createElement(L.a,null,a.createElement(S.a,{size:"small",onClick:function(){return r(n+1)}},a.createElement(Se.a,null)))))),a.createElement("div",{className:i.headItem},a.createElement(ge.a,null)))},ze=n(118),Ie=Object(y.a)((function(e){return Object(O.a)({main:{backgroundColor:"#fff",paddingLeft:e.spacing(8),paddingRight:e.spacing(8)},aider:{backgroundColor:"#fff",width:"100%",padding:e.spacing(2,2),borderLeft:"1px solid",borderColor:e.palette.divider},head:{display:"flex",alignItems:"flex-end",padding:e.spacing(4,0)},headItem:{flex:1,overflow:"hidden","& + &":{marginLeft:e.spacing(4)}}})}));function Re(){var e=Ie();return a.createElement(ze.b,null,a.createElement(ze.c,{className:e.main},a.createElement(Ne,null),a.createElement($.a,null),a.createElement(_e,null)),a.createElement(ze.a,{sticky:!0,className:e.aider},a.createElement(he,null)))}var Te=a.lazy((function(){return n.e(9).then(n.bind(null,413))})),Me=a.lazy((function(){return n.e(20).then(n.bind(null,388))})),De=a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,414))})),Le=a.lazy((function(){return Promise.all([n.e(5),n.e(14)]).then(n.bind(null,409))})),qe=a.lazy((function(){return n.e(15).then(n.bind(null,419))})),$e=a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,420))})),Be=a.lazy((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,417))})),Ue=a.lazy((function(){return n.e(7).then(n.bind(null,416))})),Fe=a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(22)]).then(n.bind(null,412))})),He=a.lazy((function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,418))})),We=a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,411))})),Ye=a.lazy((function(){return n.e(19).then(n.bind(null,421))})),Ge=a.lazy((function(){return n.e(16).then(n.bind(null,422))})),Je=a.lazy((function(){return n.e(18).then(n.bind(null,423))})),Ke=a.lazy((function(){return n.e(17).then(n.bind(null,407))})),Qe=a.lazy((function(){return n.e(11).then(n.bind(null,408))}));var Ve=function(){return/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?a.createElement(h.a,null,a.createElement(b.c,null,a.createElement(oe,{lazy:!0,component:Ke}))):a.createElement(h.a,null,a.createElement(b.c,null,a.createElement(oe,{path:"/",exact:!0,component:Re,layout:ie}),a.createElement(oe,{lazy:!0,path:"/home",component:Re,layout:ie}),a.createElement(oe,{path:"/movie-home",lazy:!0,component:Te,layout:ie}),a.createElement(oe,{lazy:!0,path:"/movie/:id",component:De,layout:ie}),a.createElement(oe,{lazy:!0,path:"/movie-play/:id",component:Le,layout:ie}),a.createElement(oe,{lazy:!0,path:"/movie-upload/*",component:qe,layout:ie}),a.createElement(oe,{lazy:!0,path:"/tv-home",component:Me,layout:ie}),a.createElement(oe,{lazy:!0,path:"/tv",component:$e,layout:ie}),a.createElement(oe,{lazy:!0,path:"/profile/:username",component:Be,layout:ie}),a.createElement(oe,{lazy:!0,path:"/personal",component:Ue,layout:ie}),a.createElement(oe,{lazy:!0,path:"/resume",component:Fe}),a.createElement(oe,{lazy:!0,path:"/login",component:He}),a.createElement(oe,{lazy:!0,path:"/completion",component:We}),a.createElement(oe,{lazy:!0,path:"/403",exact:!0,component:Ge}),a.createElement(oe,{lazy:!0,path:"/404",exact:!0,component:Ye}),a.createElement(oe,{lazy:!0,path:"/50x",exact:!0,component:Je}),a.createElement(oe,{lazy:!0,path:"/test",exact:!0,component:Qe}),a.createElement(oe,{lazy:!0,component:Ye})))},Xe=n(161),Ze=document.createElement("div");document.body.appendChild(Ze);var et={success:function(e){this.toast(e,{variant:"success"})},warning:function(e){this.toast(e,{variant:"warning"})},info:function(e){this.toast(e,{variant:"info"})},error:function(e){this.toast(e,{variant:"error"})},toast:function(e,t){var n=function(e){return(0,Object(m.b)().enqueueSnackbar)(e.message,e.options),null};i.render(a.createElement(m.a,{maxSnack:3},a.createElement(n,{message:e,options:t})),Ze)}},tt=n(43),nt=n(97),at=n(124),rt=n(126),it=n(125),ot=n(200),ct=n(195),lt=n(196),ut=n(201),st=n(127),mt=n(56),dt=n(64),pt=new st.a({typePolicies:{User:{fields:{avatar:{read:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt.b;return e||dt.b}}}},PlatformAuthWay:{fields:{http_domain:{read:function(){return ft()}}}}}}),ft=Object(mt.b)(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_FIREBASE_MEASUREMENTID:"G-8DLV2JEGMF",REACT_APP_FIREBASE_STORAGEBUCKET:"miss-806b9.appspot.com",REACT_APP_FIREBASE_AUTHDOMAIN:"miss-806b9.firebaseapp.com",REACT_APP_FIREBASE_MESSAGINGSENDERID:"235168205247",REACT_APP_FIREBASE_PROJECTID:"miss-806b9",REACT_APP_FIREBASE_APPID:"1:235168205247:web:205b138db89e2819cdf90a",REACT_APP_SENTRY_DSN:"https://dd33ce2bcf8742db81848a0a8809cca8@o394912.ingest.sentry.io/5245935",REACT_APP_FIREBASE_APIKEY:"AIzaSyCizAPnqkLpEsJzaiOTsvl0L-Dy8_tYhvA",REACT_APP_HTTP_URL:"https://sma2lbao.cn/api/graphql",REACT_APP_FIREBASE_DATABASEURL:"https://miss-806b9.firebaseio.com",REACT_APP_WEBSOCKET_URL:"wss://sma2lbao.cn/api/graphql",REACT_APP_UPLOAD_URL:"https://sma2lbao.cn/api/graphql"}).REACT_APP_HTTP_DOMAIN_URL||""),vt=n(29),ht=n(87);function bt(){var e=Object(vt.a)(["\n  directive @client on FIELD\n\n  extend type PlatformAuthWay {\n    http_domain: String!\n  }\n\n  extend type User {\n    avatar: String!\n  }\n"]);return bt=function(){return e},e}var Et=Object(ht.a)(bt()),gt=new nt.a({uri:"https://sma2lbao.cn/api/graphql"}),yt=new ut.a({uri:"wss://sma2lbao.cn/api/graphql",options:{reconnect:!0}}),Ot=Object(at.a)((function(e){var t=e.query,n=Object(ot.a)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),yt,gt),jt=Object(ct.a)((function(e,t){var n=t.headers,a=localStorage.getItem("access_token");return{headers:Object(Xe.a)(Object(Xe.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),_t=Object(lt.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.forEach((function(e){var t=e.message,n=e.locations,a=e.path;et.error(t||"\u670d\u52a1\u5668\u7e41\u5fd9"),tt.b(t),console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&(tt.a(n),et.error("\u670d\u52a1\u5668\u7e41\u5fd9"),console.log("[Network error]: ".concat(n)))})),wt=new rt.a({typeDefs:Et,cache:pt,link:Object(it.a)([_t,jt,Ot]),connectToDevTools:!0}),St=function(){return r.a.createElement(u.a,{theme:v},r.a.createElement(l.a,null),r.a.createElement(m.a,{maxSnack:3},r.a.createElement(s.a,{client:wt},r.a.createElement(Ve,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pt=n(169);n(273);Pt.initializeApp({apiKey:"AIzaSyCizAPnqkLpEsJzaiOTsvl0L-Dy8_tYhvA",authDomain:"miss-806b9.firebaseapp.com",databaseURL:"https://miss-806b9.firebaseio.com",projectId:"miss-806b9",storageBucket:"miss-806b9.appspot.com",messagingSenderId:"235168205247",appId:"1:235168205247:web:205b138db89e2819cdf90a",measurementId:"G-8DLV2JEGMF"}),Pt.analytics(),c.a({enabled:!0,dsn:"https://dd33ce2bcf8742db81848a0a8809cca8@o394912.ingest.sentry.io/5245935"}),o.a.render(r.a.createElement(St,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,n){"use strict";var a=n(20),r=function(){var e=Object(a.f)();return{push:function(t,n){e.push(t,n)},gotoHome:function(){e.push("".concat("/home"))},gotoProfile:function(t){e.push("".concat("/profile","/").concat(t))},gotoMovie:function(t){e.push("".concat("/movie","/").concat(t))},gotoMovieHome:function(){e.push("/movie-home")},gotoMoviePlay:function(t){e.push("".concat("/movie-play","/").concat(t))},gotoMovieUpload:function(){e.push("".concat("/movie-upload"))},gotoAuthCompletion:function(){e.push("".concat("/completion"))}}};n.d(t,"a",(function(){return r}))},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a="https://cdn.dribbble.com/users/5746/screenshots/4143186/dribbble-salvatier-avatar.jpg",r="https://cdn.dribbble.com/users/185738/screenshots/3515176/growthandstrategy.jpg",i="https://cdn.dribbble.com/users/185738/screenshots/3515176/growthandstrategy.jpg"},85:function(e,t,n){"use strict";n.d(t,"d",(function(){return C})),n.d(t,"l",(function(){return z})),n.d(t,"a",(function(){return R})),n.d(t,"m",(function(){return M})),n.d(t,"j",(function(){return L})),n.d(t,"c",(function(){return $})),n.d(t,"f",(function(){return U})),n.d(t,"e",(function(){return F})),n.d(t,"b",(function(){return W})),n.d(t,"h",(function(){return G})),n.d(t,"n",(function(){return K})),n.d(t,"g",(function(){return V})),n.d(t,"i",(function(){return Z})),n.d(t,"k",(function(){return te}));var a,r,i=n(29),o=n(34),c=n.n(o),l=n(104),u=n(54),s=n(55);n(165);function m(){var e=Object(i.a)(["\n  subscription reviewCreated($type: ReviewMedium!, $medium_id: ID!) {\n    review_created(type: $type, medium_id: $medium_id) {\n      content\n      create_at\n      author {\n        nickname\n        avatar\n      }\n    }\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(i.a)(["\n  query playlistsPaginated(\n    $query: PaginatedQuery\n    $author_uid: String\n    $author_username: String\n  ) {\n    playlists_paginated(\n      query: $query\n      author_uid: $author_uid\n      author_username: $author_username\n    ) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          title\n          description\n          cover\n          create_at\n        }\n      }\n    }\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(i.a)(["\n  query moviesPaginated($query: PaginatedQuery) {\n    movies_paginated(query: $query) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          title\n          sub_title\n          alias_title\n          cover\n          description\n          author {\n            ...Author\n          }\n        }\n      }\n    }\n  }\n  ","\n"]);return p=function(){return e},e}function f(){var e=Object(i.a)(["\n  query movie($id: ID!) {\n    movie(id: $id) {\n      credits {\n        avatar\n        name\n        description\n      }\n      author {\n        ...Author\n      }\n      cover\n      title\n      update_at\n      sub_title\n      id\n      description\n      create_at\n      alias_title\n      posters\n      region\n      sources {\n        url\n        super_quality_url\n        preview_url\n        posters\n        name\n        medium_quality_url\n        low_quality_url\n        id\n        high_quality_url\n        duration\n        description\n        alias_name\n        create_at\n        update_at\n      }\n    }\n  }\n  ","\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n  query userUrges {\n    user_urges {\n      nickname\n      avatar\n      username\n      uid\n      description\n    }\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(i.a)(["\n  query movieUrges {\n    movie_urges {\n      title\n      sub_title\n      cover\n      description\n      author {\n        ...Author\n      }\n    }\n  }\n  ","\n"]);return h=function(){return e},e}function b(){var e=Object(i.a)(["\n  query currentTopic {\n    current_topic {\n      title\n      description\n      top_movies {\n        description\n        title\n        sub_title\n        create_at\n        update_at\n        cover\n        posters\n        author {\n          ...Author\n        }\n      }\n      top_movie {\n        description\n        title\n        sub_title\n        create_at\n        update_at\n        cover\n        posters\n        author {\n          ...Author\n        }\n      }\n    }\n  }\n  ","\n"]);return b=function(){return e},e}function E(){var e=Object(i.a)(["\n  query me {\n    me {\n      ...Me\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function g(){var e=Object(i.a)(["\n  query hasUsername($username: String!) {\n    has_username(username: $username)\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(i.a)(["\n  query platformAuthWay {\n    platform_auth_way {\n      platform\n      url\n      http_domain @client\n    }\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(i.a)(["\n  mutation updateUser($user: UpdateUserInput!) {\n    update_user(user: $user) {\n      ...Me\n    }\n  }\n  ","\n"]);return O=function(){return e},e}function j(){var e=Object(i.a)(["\n  mutation createUserWithCode($user: CreateUserWithCodeInput!) {\n    create_user_with_code(user: $user) {\n      username\n      avatar\n    }\n  }\n"]);return j=function(){return e},e}function _(){var e=Object(i.a)(["\n  mutation sendRegisterEmail($email: String!) {\n    send_register_email(email: $email)\n  }\n"]);return _=function(){return e},e}function w(){var e=Object(i.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password)\n  }\n"]);return w=function(){return e},e}function S(){var e=Object(i.a)(["\n  fragment Author on User {\n    uid\n    avatar\n    nickname\n    username\n  }\n"]);return S=function(){return e},e}function P(){var e=Object(i.a)(["\n  fragment Me on User {\n    uid\n    username\n    email\n    nickname\n    avatar\n    mobile\n    address\n    description\n    create_at\n    update_at\n  }\n"]);return P=function(){return e},e}!function(e){e.Mainland="Mainland",e.America="America",e.Hongkong="Hongkong",e.Taiwan="Taiwan",e.Britain="Britain",e.India="India"}(a||(a={})),function(e){e.Movie="MOVIE"}(r||(r={}));var x=c()(P()),A=c()(S()),k=c()(w());function C(e){return l.a(k,e)}var N=c()(_());function z(e){return l.a(N,e)}var I=c()(j());function R(e){return l.a(I,e)}var T=c()(O(),x);function M(e){return l.a(T,e)}var D=c()(y());function L(e){return u.a(D,e)}var q=c()(g());function $(e){return u.a(q,e)}var B=c()(E(),x);function U(e){return u.a(B,e)}function F(e){return s.a(B,e)}var H=c()(b(),A);function W(e){return u.a(H,e)}var Y=c()(h(),A);function G(e){return u.a(Y,e)}var J=c()(v());function K(e){return u.a(J,e)}var Q=c()(f(),A);function V(e){return u.a(Q,e)}var X=c()(p(),A);function Z(e){return u.a(X,e)}var ee=c()(d());function te(e){return u.a(ee,e)}c()(m())},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,r=n(52),i=n(0),o=n(279),c=n(274),l=n(144),u=Object(o.a)((function(e){return Object(c.a)({root:{height:function(e){return e.height||"auto"},width:function(e){return e.width||"100%"},fontSize:0,overflow:"hidden"},aspect:{paddingTop:function(e){return e.aspectRatio?"calc(1 / ".concat(e.aspectRatio," * 100%)"):0},position:"relative",backgroundColor:"transparent"},image:{position:function(e){return e.aspectRatio?"absolute":"relative"},width:"100%",height:"100%",top:0,left:0,objectFit:"cover"},container:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}})}));!function(e){e[e.Loading=0]="Loading",e[e.Success=1]="Success",e[e.Failuare=-1]="Failuare"}(a||(a={}));var s=function(e){var t=u(e),n=e.src,o=e.alt,c=i.useState(a.Loading),s=Object(r.a)(c,2),m=s[0],d=s[1],p=function(){d(a.Success)},f=function(){d(a.Failuare)};return i.createElement("div",{className:t.root},e.aspectRatio&&i.createElement("div",{className:t.aspect},n&&m!==a.Failuare&&i.createElement("img",{alt:o,className:t.image,src:n,onLoad:p,onError:f}),m!==a.Success&&i.createElement("div",{className:t.container},m===a.Loading&&i.createElement(l.a,{variant:"rect",animation:"wave",height:"100%",width:"100%"}),m===a.Failuare&&i.createElement(l.a,{variant:"rect",animation:"wave",height:"100%",width:"100%"}))),!e.aspectRatio&&i.createElement(i.Fragment,null,n&&m!==a.Failuare&&i.createElement("img",{className:t.image,src:n,alt:"",onLoad:p,onError:f}),m!==a.Success&&i.createElement("div",{className:t.container},m===a.Loading&&i.createElement(l.a,{variant:"rect",animation:"wave",height:"100%",width:"100%"}),m===a.Failuare&&i.createElement(l.a,{variant:"rect",animation:"wave",height:"100%",width:"100%"}))))};t.b=s}},[[217,3,4]]]);
//# sourceMappingURL=main.1a739e6a.chunk.js.map