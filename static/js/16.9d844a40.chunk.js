(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[16],{374:function(e,t,a){"use strict";var n=a(85),r=a(0),l=a(388),o=a.n(l),i=a(276),c=a(271),u=Object(i.a)((function(e){return Object(c.a)({root:{width:"100%",paddingTop:"calc(56.25%)",position:"relative"},player:{width:"100% !important",height:"100% !important",position:"absolute",top:0,left:0}})})),s=function(e){var t=u(),a=e.url,l=Object(n.a)(e,["url"]);return r.createElement("div",{className:t.root},r.createElement(o.a,Object.assign({},l,{className:t.player,url:a})))};s.defaultProps={controls:!0};a.d(t,"a",(function(){return s}))},617:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),l=a(276),o=a(271),i=a(374),c=a(341),u=a(82),s=a(359),d=a(101),m=a(324),v=a(345),g=Object(l.a)((function(e){return Object(o.a)({avatar:{marginRight:e.spacing(2)},main:{flex:1},infoItem:{"& + &":{marginLeft:e.spacing(2)}},commentText:{marginTop:e.spacing(1)}})}));var p=function(){var e=g();return r.createElement(c.a,null,r.createElement(c.a,{display:"flex"},r.createElement(v.a,{className:e.avatar},"L"),r.createElement("div",{className:e.main},r.createElement(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(d.a,null,"\u6635\u79f0"),r.createElement(d.a,{variant:"caption"},"2020\u5e7410\u670801\u65e5")),r.createElement(c.a,{display:"flex"},r.createElement(d.a,{variant:"caption",className:e.infoItem},"like 2"),r.createElement(d.a,{variant:"caption",className:e.infoItem},"dislike 0")))),r.createElement(d.a,{variant:"body2",className:e.commentText},"\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002\u4f60\u7684\u8bc4\u8bba\u5185\u5bb9\u3002"))},f=a(465),E=function(e){var t=r.useState(""),a=Object(n.a)(t,2),l=a[0],o=a[1];return r.createElement("div",null,r.createElement(f.a,{value:l,onChange:function(e){return o(e.target.value)},placeholder:""}),r.createElement(m.a,{onClick:function(){e.onSubmit&&e.onSubmit(l)},disabled:!!l},"Send"))},b=a(50),h=a(75),y=Object(l.a)((function(e){return Object(o.a)({item:{padding:e.spacing(2,0),"& + &":{borderTop:"1px solid ".concat(e.palette.divider)}},commentTitle:{padding:e.spacing(1,0)}})}));function O(){var e,t,a,l,o,i,u=y(),v=r.useContext(de),g=Object(n.a)(v,2)[1],f=g?+(null===g||void 0===g?void 0:g.id):-1,O=Object(b.p)({variables:{query:{last:16},type:b.a.Medium,type_id:f},skip:-1===f}),j=O.data,C=O.loading,w=O.fetchMore,k=O.error,x=Object(b.e)(),P=Object(n.a)(x,1)[0];return r.createElement(c.a,null,r.createElement(E,{onSubmit:function(e){P({variables:{review:{content:e,type:b.a.Medium,type_id:f}}})}}),r.createElement(d.a,{variant:"subtitle2",className:u.commentTitle}),r.createElement("div",null,(null===j||void 0===j||null===(e=j.reviews_paginated)||void 0===e||null===(t=e.edges)||void 0===t?void 0:t.length)?r.createElement("div",null,null===j||void 0===j||null===(a=j.reviews_paginated)||void 0===a||null===(l=a.edges)||void 0===l?void 0:l.map((function(e){return r.createElement("div",{key:e.cursor},r.createElement(p,null))})),(null===j||void 0===j||null===(o=j.reviews_paginated)||void 0===o||null===(i=o.pageInfo)||void 0===i?void 0:i.hasNextPage)&&r.createElement(m.a,{onClick:function(){w({variables:{type:b.a.Medium,type_id:f,query:{last:8,after:null===j||void 0===j?void 0:j.reviews_paginated.pageInfo.endCursor}},updateQuery:function(e,t){var a,n=t.fetchMoreResult;if(null===n||void 0===n||null===(a=n.reviews_paginated)||void 0===a?void 0:a.edges){var r=n.reviews_paginated,l=r.edges;return{reviews_paginated:{pageInfo:r.pageInfo,totalCount:r.totalCount,edges:[].concat(Object(s.a)(e.reviews_paginated.edges),Object(s.a)(l)),__typename:e.reviews_paginated.__typename}}}return e}})},disabled:C},r.createElement(d.a,{color:"textSecondary",variant:"caption"},C?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u66f4\u591a"))):r.createElement(h.a,{error:!!k,loading:C,placeholder:!0})))}var j=a(74),C=a(334),w=a(335),k=a(19),x=a(59);function P(){var e=Object(k.h)().id,t=Object(b.r)({variables:{shadow_id:e}}),a=t.data,n=t.error;return t.loading?r.createElement("div",null,"loading"):n?r.createElement("div",null,"error"):r.createElement(c.a,{py:2},r.createElement(d.a,{variant:"subtitle1",gutterBottom:!0},"\u63a5\u4e0b\u6765\u64ad\u653e"),(null===a||void 0===a?void 0:a.shadow_next_urges_by_shadow.length)?r.createElement(C.a,{cellHeight:"auto",cols:4},a.shadow_next_urges_by_shadow.map((function(e,t){return r.createElement(w.a,{cols:1,key:t},r.createElement(j.a,e))}))):r.createElement("div",null,r.createElement(x.b,{title:"\u6682\u65e0\u53ef\u64ad\u653e\u8d44\u6e90"})))}var T=a(315),N=a(583),_=a(584),M=a(458),S=a(64),R=a.n(S),L=a(29),I=Object(l.a)((function(e){return Object(o.a)({root:{},header:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},infoItem:{"& + &":{marginLeft:e.spacing(1)}},toolBox:{display:"flex",alignItems:"center",marginRight:e.spacing(2)},toolText:{marginLeft:e.spacing(.5)},description:{marginBottom:e.spacing(1)}})}));function D(){var e=I(),t=r.useContext(de),a=Object(n.a)(t,2),l=a[0],o=a[1],i=Object(L.b)({owner_uid:null===l||void 0===l?void 0:l.shadow.author.uid}),u=i.following,s=i.toggleFollow,g=Object(b.d)(),p=Object(n.a)(g,1)[0],f=function(){p({variables:{vote:{medium_id:o?+o.id:-1,status:b.b.Likd}}})};return r.createElement("div",null,r.createElement(c.a,{className:e.header},r.createElement("div",null,r.createElement(d.a,{variant:"subtitle1"},null===l||void 0===l?void 0:l.shadow.title),r.createElement(c.a,{display:"flex"},r.createElement(d.a,{variant:"caption",className:e.infoItem},"\u89c2\u770b: TODO"),r.createElement(d.a,{variant:"caption",className:e.infoItem},"\u53d1\u5e03\u65f6\u95f4:"," ",R()(null===l||void 0===l?void 0:l.shadow.create_at).format("YYYY-MM-DD HH:mm")))),r.createElement(c.a,{display:"flex",alignItems:"center"},r.createElement(c.a,{className:e.toolBox},r.createElement(T.a,{size:"small",onClick:f},r.createElement(N.a,{fontSize:"small"})),r.createElement(d.a,{className:e.toolText},"TODO")),r.createElement(c.a,{className:e.toolBox},r.createElement(T.a,{size:"small",onClick:f},r.createElement(_.a,{fontSize:"small"})),r.createElement(d.a,{className:e.toolText},"TODO")),r.createElement(T.a,{size:"small"},r.createElement(M.a,{fontSize:"small"})))),r.createElement(d.a,{className:e.description,variant:"body2"},null===l||void 0===l?void 0:l.shadow.description),r.createElement(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(c.a,{display:"flex",alignItems:"center"},r.createElement(v.a,{src:null===l||void 0===l?void 0:l.shadow.author.avatar}),r.createElement(c.a,{ml:1},r.createElement(d.a,{variant:"subtitle2"},null===l||void 0===l?void 0:l.shadow.author.nickname),r.createElement(d.a,{variant:"caption"},null===l||void 0===l?void 0:l.shadow.author.description))),u?r.createElement(m.a,{onClick:s},"\u5df2\u5173\u6ce8"):r.createElement(m.a,{onClick:s},"\u5173\u6ce8")))}var F=a(71),z=a(85),W=a(308),B=a(593),U=a(631);function H(e){var t=e.duration,a=e.currentTime,n=e.onChange,l=function(e){var t=R.a.duration(e,"ms").hours()+"",a=R.a.duration(e,"ms").minutes()+"",n=R.a.duration(e,"ms").seconds()+"";return t.padStart(2,"0")+":"+a.padStart(2,"0")+":"+n.padStart(2,"0")},o=l(t);return r.createElement(c.a,{display:"flex"},r.createElement(U.a,{min:0,max:t,value:a,valueLabelDisplay:"auto",valueLabelFormat:function(e){return l(e)},onChange:function(e,t){n(t)},onMouseMove:function(e){},disabled:0===t}),r.createElement(d.a,null,l(a),"/"),r.createElement(d.a,null,o))}var V=a(589),Y=a(585),A=a(586),q=a(587),J=a(588);function Q(e){var t=e.volume,a=e.muted,l=e.onClickMuted,o=e.onVolumeChange,i=r.useRef(null),c=r.useState(!1),u=Object(n.a)(c,2),s=u[0],d=u[1];return r.createElement("span",{ref:i,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},r.createElement(T.a,{onClick:l},a&&r.createElement(Y.a,null),!a&&0===t&&r.createElement(A.a,null),!a&&t>0&&t<=.5&&r.createElement(q.a,null),!a&&t>.5&&r.createElement(J.a,null)),r.createElement(V.a,{placement:"top",open:s,anchorEl:i.current,transition:!0,disablePortal:!0},r.createElement("div",{style:{height:80}},r.createElement(U.a,{step:.01,min:0,max:1,value:t,valueLabelDisplay:"off",orientation:"vertical",onChange:function(e,t){o(t)}}))))}var G,K,X,Z=a(590),$=a(591),ee=a(592);function te(e){var t=e.status,a=e.onPlay,n=e.onPause;return r.createElement(c.a,null,(t===X.Ready||t===X.Pause)&&r.createElement(T.a,{onClick:a},r.createElement(Z.a,null)),t===X.Playing&&r.createElement(T.a,{onClick:n},r.createElement($.a,null)),t===X.Waiting&&r.createElement(T.a,null,r.createElement(ee.a,null)))}!function(e){e[e.S075=.75]="S075",e[e.F125=1.25]="F125",e[e.F150=1.5]="F150",e[e.F200=2]="F200"}(G||(G={})),function(e){e.M3U8="m3u8",e.NORMAL="normal"}(K||(K={})),function(e){e[e.Loading=0]="Loading",e[e.Ready=1]="Ready",e[e.Waiting=2]="Waiting",e[e.Playing=3]="Playing",e[e.Pause=4]="Pause",e[e.Ended=5]="Ended",e[e.Error=6]="Error"}(X||(X={}));var ae=a(281),ne=a(272),re=Object(ae.a)((function(e){return Object(ne.a)({root:{width:300,minHeight:450,backgroundColor:"#fff"}})}));function le(){var e=re(),t=r.useRef(null),a=r.useState(!1),l=Object(n.a)(a,2),o=l[0],i=l[1];return r.createElement("div",{className:e.root},r.createElement("div",null,r.createElement(d.a,null,"Speed"),r.createElement("div",{ref:t,style:{background:"red"},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},r.createElement(d.a,null,"Normal"),r.createElement(d.a,null,">"),r.createElement(V.a,{placement:"left-end",open:o,anchorEl:t.current,transition:!0,disablePortal:!0},(function(){return r.createElement(W.a,{onClickAway:function(){return i(!1)}},r.createElement("div",{style:{width:200,height:40,background:"blue"},onClick:function(){return console.log("yi")}},"yi"))})))))}var oe=a(467),ie=a.n(oe),ce=Object(l.a)((function(e){return Object(o.a)({root:{position:"relative",minHeight:700},setting:{},wrap:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},position:{position:"absolute",right:0,bottom:"calc(100% + ".concat(e.spacing(1),"px)")}})}));function ue(e){var t=e.mediaType,a=e.src,l=e.onDurationChange,o=e.onTimeUpdate,i=e.onProgress,c=e.onVolumeChange,u=e.onLoadedMetadata,s=e.onRateChange,d=e.onWaiting,m=e.onPlaying,v=e.onPause,g=e.onEnded,p=e.onError,f=e.onCanPlay,E=Object(z.a)(e,["mediaType","src","onDurationChange","onTimeUpdate","onProgress","onVolumeChange","onLoadedMetadata","onRateChange","onWaiting","onPlaying","onPause","onEnded","onError","onCanPlay"]),b=r.useRef(null),h=ce(),y=r.useState(!1),O=Object(n.a)(y,2),j=O[0],C=O[1],w=r.useState({status:X.Loading,volume:1,muted:!1,playbackRate:1,duration:0,currentTime:0,cache:0}),k=Object(n.a)(w,2),x=k[0],P=k[1],N=r.useState(t===K.M3U8?"":a),_=Object(n.a)(N,1)[0];r.useEffect((function(){if(t===K.M3U8&&b.current){var e=new ie.a;e.loadSource(a),e.attachMedia(b.current)}}),[t,a]);return r.createElement("div",{className:h.root},r.createElement("video",Object.assign({},E,{src:_,ref:b,onWaiting:function(e){d&&d(e),P(Object(F.a)(Object(F.a)({},x),{},{status:X.Waiting}))},onPlaying:function(e){m&&m(e),P(Object(F.a)(Object(F.a)({},x),{},{status:X.Playing}))},onPause:function(e){v&&v(e),P(Object(F.a)(Object(F.a)({},x),{},{status:X.Pause}))},onEnded:function(e){g&&g(e),P(Object(F.a)(Object(F.a)({},x),{},{status:X.Ended}))},onError:function(e){p&&p(e),P(Object(F.a)(Object(F.a)({},x),{},{status:X.Error}))},onCanPlay:function(e){f&&f(e),P(Object(F.a)(Object(F.a)({},x),{},{status:X.Ready}))},onLoadedMetadata:function(e){u&&u(e);var t=e.currentTarget,a=t.volume,n=t.muted,r=t.playbackRate;P(Object(F.a)(Object(F.a)({},x),{},{volume:a,muted:n,playbackRate:r}))},onVolumeChange:function(e){c&&c(e),P(Object(F.a)(Object(F.a)({},x),{},{volume:+e.currentTarget.volume,muted:!!e.currentTarget.muted}))},onProgress:function(e){i&&i(e);var t=e.currentTarget,a=t.buffered,n=t.duration;if(a&&0!==a.length){var r=a.end(a.length-1),l=r>n?1e3*n:1e3*r;P(Object(F.a)(Object(F.a)({},x),{},{cache:l}))}},onTimeUpdate:function(e){o&&o(e);var t=1e3*e.currentTarget.currentTime;P(Object(F.a)(Object(F.a)({},x),{},{currentTime:t}))},onDurationChange:function(e){l&&l(e);var t=1e3*e.currentTarget.duration;P(Object(F.a)(Object(F.a)({},x),{},{duration:t}))},onRateChange:function(e){s&&s(e),P(Object(F.a)(Object(F.a)({},x),{},{playbackRate:+e.currentTarget.playbackRate}))}})),r.createElement(te,{status:x.status,onPlay:function(){b.current&&b.current.play()},onPause:function(){b.current&&b.current.pause()}}),r.createElement(Q,{volume:x.volume,muted:x.muted,onClickMuted:function(){return e=!x.muted,void(b.current&&(b.current.muted=e));var e},onVolumeChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"small",a=e;"percent"===t&&(a/=100),b.current&&(b.current.volume=a)}(e)}}),r.createElement(H,{duration:x.duration,currentTime:x.currentTime,onChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms",a=e;"ms"===t&&(a/=1e3),b.current&&(b.current.currentTime=a)}(e)}}),r.createElement(W.a,{onClickAway:function(){return C(!1)}},r.createElement("div",{className:h.wrap},r.createElement(T.a,{className:h.setting,size:"small",onClick:function(){return C(!0)}},r.createElement(B.a,null)),j&&r.createElement("div",{className:h.position},r.createElement(le,null)))))}ue.defaultProps={autoPlay:!1,controls:!1,controlsList:"nodownload nofullscreen noremoteplayback",loop:!1,muted:!1,playsInline:!1,width:200,height:100,preload:"auto"};a.d(t,"ShadowPlayContext",(function(){return de})),a.d(t,"default",(function(){return me}));var se=Object(l.a)((function(e){return Object(o.a)({root:{height:"100%"},body:{backgroundColor:e.palette.background.paper,display:"flex",margin:"0 auto"},content:{padding:e.spacing(2,5),borderRight:"1px solid ".concat(e.palette.divider)},aider:{padding:e.spacing(2,4),height:"100%",overflow:"auto"}})})),de=r.createContext([void 0,void 0]);function me(){var e=se(),t=Object(k.h)().id,a=r.useState(),l=Object(n.a)(a,2),o=l[0],s=l[1],d=Object(b.s)({variables:{id:t}}).data;return r.useEffect((function(){(null===d||void 0===d?void 0:d.shadow.sources.length)&&s(d.shadow.sources[0])}),[d]),r.createElement(c.a,{className:e.root},r.createElement(de.Provider,{value:[d,o]},r.createElement(u.d,null,r.createElement(u.b,null,r.createElement(i.a,{url:null===o||void 0===o?void 0:o.url}))),r.createElement(u.b,{className:e.body},r.createElement(u.c,{className:e.content},r.createElement(D,null),r.createElement(P,null)),r.createElement(u.a,{sticky:!0,className:e.aider},r.createElement(O,null)))))}}}]);
//# sourceMappingURL=16.9d844a40.chunk.js.map