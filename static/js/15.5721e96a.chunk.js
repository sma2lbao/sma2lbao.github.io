(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[15],{574:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(269),r=a(264),c=a(437),i=a.n(c),o=Object(l.a)((function(e){return Object(r.a)({root:{width:"100%",paddingTop:"calc(56.25%)",position:"relative"},player:{width:"100% !important",height:"100% !important",position:"absolute",top:0,left:0}})})),u=function(){var e=o();return n.createElement("div",null,n.createElement("div",{className:e.root},n.createElement(i.a,{className:e.player,url:"https://www.youtube.com/watch?v=ysz5S6PUM-U"})))},m=a(332),s=a(95),d=a(94),E=a(334),v=Object(l.a)((function(e){return Object(r.a)({avatar:{marginRight:e.spacing(2)},main:{flex:1},infoItem:{"& + &":{marginLeft:e.spacing(2)}},commentText:{marginTop:e.spacing(1)}})}));var g=function(){var e=v();return n.createElement(m.a,null,n.createElement(m.a,{display:"flex"},n.createElement(E.a,{className:e.avatar},"L"),n.createElement("div",{className:e.main},n.createElement(m.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},n.createElement(d.a,null,"\u6635\u79f0"),n.createElement(d.a,{variant:"caption"},"2020\u5e7410\u670801\u65e5")),n.createElement(m.a,{display:"flex"},n.createElement(d.a,{variant:"caption",className:e.infoItem},"like 2"),n.createElement(d.a,{variant:"caption",className:e.infoItem},"dislike 0")))),n.createElement(d.a,{variant:"body2",className:e.commentText},"\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002"))},f=a(393);function p(){return n.createElement("div",null,n.createElement(f.a,{placeholder:""}))}var b=Object(l.a)((function(e){return Object(r.a)({item:{padding:e.spacing(2,0),"& + &":{borderTop:"1px solid ".concat(e.palette.divider)}},commentTitle:{padding:e.spacing(1,0)}})}));function y(){var e=b();return n.createElement(m.a,null,n.createElement(p,null),n.createElement(d.a,{variant:"subtitle2",className:e.commentTitle}),n.createElement("div",null,n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null)),n.createElement("div",{className:e.item},n.createElement(g,null))))}var h=a(74),O=a(325),j=a(326),N=a(54),C=a(21),T=a(145);function P(){var e=Object(C.g)().id,t=Object(N.j)({variables:{movie_id:e}}),a=t.data,l=t.error;return t.loading?n.createElement("div",null,"loading"):l?n.createElement("div",null,"error"):n.createElement(m.a,{py:2},n.createElement(d.a,{variant:"subtitle1",gutterBottom:!0},"\u63a5\u4e0b\u6765\u64ad\u653e"),(null===a||void 0===a?void 0:a.movie_next_urges_by_movie.length)?n.createElement(O.a,{cellHeight:"auto",cols:4},a.movie_next_urges_by_movie.map((function(e,t){return n.createElement(j.a,{cols:1,key:t},n.createElement(h.a,null))}))):n.createElement("div",null,n.createElement(T.b,{title:"\u6682\u65e0\u53ef\u64ad\u653e\u8d44\u6e90"})))}var k=a(307),x=a(323),w=a(554),M=a(555),R=a(386),L=a(61),S=a.n(L),I=a(48),_=Object(l.a)((function(e){return Object(r.a)({root:{},header:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},infoItem:{"& + &":{marginLeft:e.spacing(1)}},toolBox:{display:"flex",alignItems:"center",marginRight:e.spacing(2)},toolText:{marginLeft:e.spacing(.5)},description:{marginBottom:e.spacing(1)}})}));function D(){var e=_(),t=n.useContext(de),a=Object(I.a)({owner_uid:null===t||void 0===t?void 0:t.movie.author.uid}),l=a.following,r=a.toggleFollow;return n.createElement("div",null,n.createElement(m.a,{className:e.header},n.createElement("div",null,n.createElement(d.a,{variant:"subtitle1"},null===t||void 0===t?void 0:t.movie.title),n.createElement(m.a,{display:"flex"},n.createElement(d.a,{variant:"caption",className:e.infoItem},"\u89c2\u770b: TODO"),n.createElement(d.a,{variant:"caption",className:e.infoItem},"\u53d1\u5e03\u65f6\u95f4:"," ",S()(null===t||void 0===t?void 0:t.movie.create_at).format("YYYY-MM-DD HH:mm")))),n.createElement(m.a,{display:"flex",alignItems:"center"},n.createElement(m.a,{className:e.toolBox},n.createElement(k.a,{size:"small"},n.createElement(w.a,null)),n.createElement(d.a,{className:e.toolText},"TODO")),n.createElement(m.a,{className:e.toolBox},n.createElement(k.a,{size:"small"},n.createElement(M.a,null)),n.createElement(d.a,{className:e.toolText},"TODO")),n.createElement(k.a,{size:"small"},n.createElement(R.a,null)))),n.createElement(d.a,{className:e.description,variant:"body2"},null===t||void 0===t?void 0:t.movie.description),n.createElement(m.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},n.createElement(m.a,{display:"flex",alignItems:"center"},n.createElement(E.a,{src:null===t||void 0===t?void 0:t.movie.author.avatar}),n.createElement(m.a,{ml:1},n.createElement(d.a,{variant:"subtitle2"},null===t||void 0===t?void 0:t.movie.author.nickname),n.createElement(d.a,{variant:"caption"},null===t||void 0===t?void 0:t.movie.author.description))),l?n.createElement(x.a,{onClick:r},"\u5df2\u5173\u6ce8"):n.createElement(x.a,{onClick:r},"\u5173\u6ce8")))}var F=a(78),U=a(31),W=a(77),B=a(300),z=a(564),H=a(589);function V(e){var t=e.duration,a=e.currentTime,l=e.onChange,r=function(e){var t=S.a.duration(e,"ms").hours()+"",a=S.a.duration(e,"ms").minutes()+"",n=S.a.duration(e,"ms").seconds()+"";return t.padStart(2,"0")+":"+a.padStart(2,"0")+":"+n.padStart(2,"0")},c=r(t);return n.createElement(m.a,{display:"flex"},n.createElement(H.a,{min:0,max:t,value:a,valueLabelDisplay:"auto",valueLabelFormat:function(e){return r(e)},onChange:function(e,t){l(t)},onMouseMove:function(e){},disabled:0===t}),n.createElement(d.a,null,r(a),"/"),n.createElement(d.a,null,c))}var Y=a(560),A=a(556),J=a(557),q=a(558),G=a(559);function K(e){var t=e.volume,a=e.muted,l=e.onClickMuted,r=e.onVolumeChange,c=n.useRef(null),i=n.useState(!1),o=Object(U.a)(i,2),u=o[0],m=o[1];return n.createElement("span",{ref:c,onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},n.createElement(k.a,{onClick:l},a&&n.createElement(A.a,null),!a&&0===t&&n.createElement(J.a,null),!a&&t>0&&t<=.5&&n.createElement(q.a,null),!a&&t>.5&&n.createElement(G.a,null)),n.createElement(Y.a,{placement:"top",open:u,anchorEl:c.current,transition:!0,disablePortal:!0},n.createElement("div",{style:{height:80}},n.createElement(H.a,{step:.01,min:0,max:1,value:t,valueLabelDisplay:"off",orientation:"vertical",onChange:function(e,t){r(t)}}))))}var Q,X,Z,$=a(561),ee=a(562),te=a(563);function ae(e){var t=e.status,a=e.onPlay,l=e.onPause;return n.createElement(m.a,null,(t===Z.Ready||t===Z.Pause)&&n.createElement(k.a,{onClick:a},n.createElement($.a,null)),t===Z.Playing&&n.createElement(k.a,{onClick:l},n.createElement(ee.a,null)),t===Z.Waiting&&n.createElement(k.a,null,n.createElement(te.a,null)))}!function(e){e[e.S075=.75]="S075",e[e.F125=1.25]="F125",e[e.F150=1.5]="F150",e[e.F200=2]="F200"}(Q||(Q={})),function(e){e.M3U8="m3u8",e.NORMAL="normal"}(X||(X={})),function(e){e[e.Loading=0]="Loading",e[e.Ready=1]="Ready",e[e.Waiting=2]="Waiting",e[e.Playing=3]="Playing",e[e.Pause=4]="Pause",e[e.Ended=5]="Ended",e[e.Error=6]="Error"}(Z||(Z={}));var ne=a(274),le=a(265),re=Object(ne.a)((function(e){return Object(le.a)({root:{width:300,minHeight:450,backgroundColor:"#fff"}})}));function ce(){var e=re(),t=n.useRef(null),a=n.useState(!1),l=Object(U.a)(a,2),r=l[0],c=l[1];return n.createElement("div",{className:e.root},n.createElement("div",null,n.createElement(d.a,null,"Speed"),n.createElement("div",{ref:t,style:{background:"red"},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},n.createElement(d.a,null,"Normal"),n.createElement(d.a,null,">"),n.createElement(Y.a,{placement:"left-end",open:r,anchorEl:t.current,transition:!0,disablePortal:!0},(function(){return n.createElement(B.a,{onClickAway:function(){return c(!1)}},n.createElement("div",{style:{width:200,height:40,background:"blue"},onClick:function(){return console.log("yi")}},"yi"))})))))}var ie=a(444),oe=a.n(ie),ue=Object(l.a)((function(e){return Object(r.a)({root:{position:"relative",minHeight:700},setting:{},wrap:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},position:{position:"absolute",right:0,bottom:"calc(100% + ".concat(e.spacing(1),"px)")}})}));function me(e){var t=e.mediaType,a=e.src,l=e.onDurationChange,r=e.onTimeUpdate,c=e.onProgress,i=e.onVolumeChange,o=e.onLoadedMetadata,u=e.onRateChange,m=e.onWaiting,s=e.onPlaying,d=e.onPause,E=e.onEnded,v=e.onError,g=e.onCanPlay,f=Object(W.a)(e,["mediaType","src","onDurationChange","onTimeUpdate","onProgress","onVolumeChange","onLoadedMetadata","onRateChange","onWaiting","onPlaying","onPause","onEnded","onError","onCanPlay"]),p=n.useRef(null),b=ue(),y=n.useState(!1),h=Object(U.a)(y,2),O=h[0],j=h[1],N=n.useState({status:Z.Loading,volume:1,muted:!1,playbackRate:1,duration:0,currentTime:0,cache:0}),C=Object(U.a)(N,2),T=C[0],P=C[1],x=n.useState(t===X.M3U8?"":a),w=Object(U.a)(x,1)[0];n.useEffect((function(){if(t===X.M3U8&&p.current){var e=new oe.a;e.loadSource(a),e.attachMedia(p.current)}}),[t,a]);return n.createElement("div",{className:b.root},n.createElement("video",Object.assign({},f,{src:w,ref:p,onWaiting:function(e){m&&m(e),P(Object(F.a)(Object(F.a)({},T),{},{status:Z.Waiting}))},onPlaying:function(e){s&&s(e),P(Object(F.a)(Object(F.a)({},T),{},{status:Z.Playing}))},onPause:function(e){d&&d(e),P(Object(F.a)(Object(F.a)({},T),{},{status:Z.Pause}))},onEnded:function(e){E&&E(e),P(Object(F.a)(Object(F.a)({},T),{},{status:Z.Ended}))},onError:function(e){v&&v(e),P(Object(F.a)(Object(F.a)({},T),{},{status:Z.Error}))},onCanPlay:function(e){g&&g(e),P(Object(F.a)(Object(F.a)({},T),{},{status:Z.Ready}))},onLoadedMetadata:function(e){o&&o(e);var t=e.currentTarget,a=t.volume,n=t.muted,l=t.playbackRate;P(Object(F.a)(Object(F.a)({},T),{},{volume:a,muted:n,playbackRate:l}))},onVolumeChange:function(e){i&&i(e),P(Object(F.a)(Object(F.a)({},T),{},{volume:+e.currentTarget.volume,muted:!!e.currentTarget.muted}))},onProgress:function(e){c&&c(e);var t=e.currentTarget,a=t.buffered,n=t.duration;if(a&&0!==a.length){var l=a.end(a.length-1),r=l>n?1e3*n:1e3*l;P(Object(F.a)(Object(F.a)({},T),{},{cache:r}))}},onTimeUpdate:function(e){r&&r(e);var t=1e3*e.currentTarget.currentTime;P(Object(F.a)(Object(F.a)({},T),{},{currentTime:t}))},onDurationChange:function(e){l&&l(e);var t=1e3*e.currentTarget.duration;P(Object(F.a)(Object(F.a)({},T),{},{duration:t}))},onRateChange:function(e){u&&u(e),P(Object(F.a)(Object(F.a)({},T),{},{playbackRate:+e.currentTarget.playbackRate}))}})),n.createElement(ae,{status:T.status,onPlay:function(){p.current&&p.current.play()},onPause:function(){p.current&&p.current.pause()}}),n.createElement(K,{volume:T.volume,muted:T.muted,onClickMuted:function(){return e=!T.muted,void(p.current&&(p.current.muted=e));var e},onVolumeChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"small",a=e;"percent"===t&&(a/=100),p.current&&(p.current.volume=a)}(e)}}),n.createElement(V,{duration:T.duration,currentTime:T.currentTime,onChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms",a=e;"ms"===t&&(a/=1e3),p.current&&(p.current.currentTime=a)}(e)}}),n.createElement(B.a,{onClickAway:function(){return j(!1)}},n.createElement("div",{className:b.wrap},n.createElement(k.a,{className:b.setting,size:"small",onClick:function(){return j(!0)}},n.createElement(z.a,null)),O&&n.createElement("div",{className:b.position},n.createElement(ce,null)))))}me.defaultProps={autoPlay:!1,controls:!1,controlsList:"nodownload nofullscreen noremoteplayback",loop:!1,muted:!1,playsInline:!1,width:200,height:100,preload:"auto"};a.d(t,"MoviePlayContext",(function(){return de})),a.d(t,"default",(function(){return Ee}));var se=Object(l.a)((function(e){return Object(r.a)({root:{height:"100%"},body:{backgroundColor:e.palette.background.paper,display:"flex",margin:"0 auto"},content:{padding:e.spacing(2,5),borderRight:"1px solid ".concat(e.palette.divider)},aider:{padding:e.spacing(2,4),height:"100%",overflow:"auto"}})})),de=n.createContext(void 0);function Ee(){var e=se(),t=Object(C.g)().id,a=Object(N.k)({variables:{id:t}}).data;return n.createElement(m.a,{className:e.root},n.createElement(de.Provider,{value:a},n.createElement(s.d,null,n.createElement(s.b,null,n.createElement(u,null))),n.createElement(s.b,{className:e.body},n.createElement(s.c,{className:e.content},n.createElement(D,null),n.createElement(P,null)),n.createElement(s.a,{sticky:!0,className:e.aider},n.createElement(y,null)))))}}}]);
//# sourceMappingURL=15.5721e96a.chunk.js.map