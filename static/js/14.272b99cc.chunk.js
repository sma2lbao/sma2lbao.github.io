(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[14],{402:function(e,t,a){"use strict";var n=a(64),r=a(0),o=a(404),l=a.n(o),i=a(277),c=a(272),u=a(160),d=Object(i.a)((function(e){return Object(c.a)({player:{width:"100% !important",height:"100% !important"}})})),s=function(e){var t=d(),a=e.url,o=Object(n.a)(e,["url"]);return r.createElement(u.a,{ratio:1.6},r.createElement(l.a,Object.assign({className:t.player},o,{url:a})))};s.defaultProps={controls:!0};a.d(t,"a",(function(){return s}))},620:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),o=a(277),l=a(272),i=a(402),c=a(342),u=a(85),d=a(359),s=a(68),m=a(101),v=a(325),f=a(346),g=a(65),p=a.n(g),b=Object(o.a)((function(e){return Object(l.a)({avatar:{marginRight:e.spacing(2)},main:{flex:1},infoItem:{"& + &":{marginLeft:e.spacing(2)}},commentText:{marginTop:e.spacing(1)}})}));var E=function(e){var t=b();return r.createElement(c.a,null,r.createElement(c.a,{display:"flex"},r.createElement(f.a,{className:t.avatar,src:e.author.avatar}),r.createElement("div",{className:t.main},r.createElement(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(m.a,null,e.author.nickname),r.createElement(m.a,{variant:"caption"},p()(e.create_at).format("YYYY-MM-DD HH:mm"))),r.createElement(c.a,{display:"flex"}))),r.createElement(m.a,{variant:"body2",className:t.commentText},e.content))},h=a(460),y=function(e){var t=r.useState(""),a=Object(n.a)(t,2),o=a[0],l=a[1],i=function(){l("")};return r.createElement("div",null,r.createElement(h.a,{value:o,onChange:function(e){return l(e.target.value)},placeholder:""}),r.createElement(v.a,{onClick:function(){e.onSubmit&&e.onSubmit(o,i)},disabled:!o},"Send"))},j=a(50),O=a(77),w=Object(o.a)((function(e){return Object(l.a)({item:{padding:e.spacing(2,0),"& + &":{borderTop:"1px solid ".concat(e.palette.divider)}},commentTitle:{padding:e.spacing(1,0)}})}));function C(){var e,t,a,o,l,i,u=w(),f=r.useContext(me),g=Object(n.a)(f,2)[1],p=g?+(null===g||void 0===g?void 0:g.id):-1,b=Object(j.t)({variables:{query:{last:16},type:j.a.Medium,type_id:p},skip:-1===p}),h=b.data,C=b.loading,k=b.fetchMore,_=b.error;Object(j.s)({variables:{type:j.a.Medium,type_id:p},skip:-1===p,onSubscriptionData:function(e){var t,a=e.client,n=null===(t=e.subscriptionData.data)||void 0===t?void 0:t.review_created;a.writeQuery({query:j.b,variables:{query:{last:16},type:j.a.Medium,type_id:p},data:Object.assign({},h,{reviews_paginated:Object(s.a)(Object(s.a)({},null===h||void 0===h?void 0:h.reviews_paginated),{},{edges:[{cursor:Date.now(),__typename:"ReviewEdge",node:n}].concat(Object(d.a)(null===h||void 0===h?void 0:h.reviews_paginated.edges))})})})}});var x=Object(j.f)(),P=Object(n.a)(x,1)[0];return r.createElement(c.a,null,r.createElement(y,{onSubmit:function(e,t){P({variables:{review:{content:e,type:j.a.Medium,type_id:p}}}),t()}}),r.createElement(m.a,{variant:"subtitle2",className:u.commentTitle}),r.createElement("div",null,(null===h||void 0===h||null===(e=h.reviews_paginated)||void 0===e||null===(t=e.edges)||void 0===t?void 0:t.length)?r.createElement("div",null,null===h||void 0===h||null===(a=h.reviews_paginated)||void 0===a||null===(o=a.edges)||void 0===o?void 0:o.map((function(e,t){return r.createElement(c.a,{marginY:1,key:t},r.createElement(E,e.node))})),(null===h||void 0===h||null===(l=h.reviews_paginated)||void 0===l||null===(i=l.pageInfo)||void 0===i?void 0:i.hasNextPage)&&r.createElement(c.a,{textAlign:"center"},r.createElement(v.a,{onClick:function(){k({variables:{type:j.a.Medium,type_id:p,query:{last:8,before:null===h||void 0===h?void 0:h.reviews_paginated.pageInfo.endCursor}},updateQuery:function(e,t){var a,n=t.fetchMoreResult;if(null===n||void 0===n||null===(a=n.reviews_paginated)||void 0===a?void 0:a.edges){var r=n.reviews_paginated,o=r.edges;return{reviews_paginated:{pageInfo:r.pageInfo,totalCount:r.totalCount,edges:[].concat(Object(d.a)(e.reviews_paginated.edges),Object(d.a)(o)),__typename:e.reviews_paginated.__typename}}}return e}})},disabled:C},r.createElement(m.a,{color:"textSecondary",variant:"caption"},C?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u66f4\u591a")))):r.createElement(O.a,{error:!!_,loading:C,placeholder:!0})))}var k=a(76),_=a(335),x=a(336),P=a(19),T=a(59);function M(){var e=Object(P.h)().id,t=Object(j.v)({variables:{shadow_id:e}}),a=t.data,n=t.error;return t.loading?r.createElement("div",null,"loading"):n?r.createElement("div",null,"error"):r.createElement(c.a,{py:2},r.createElement(m.a,{variant:"subtitle1",gutterBottom:!0},"\u63a5\u4e0b\u6765\u64ad\u653e"),(null===a||void 0===a?void 0:a.shadow_next_urges_by_shadow.length)?r.createElement(_.a,{cellHeight:"auto",cols:4},a.shadow_next_urges_by_shadow.map((function(e,t){return r.createElement(x.a,{cols:1,key:t},r.createElement(k.a,e))}))):r.createElement("div",null,r.createElement(T.b,{title:"\u6682\u65e0\u53ef\u64ad\u653e\u8d44\u6e90"})))}var N=a(317),S=a(578),R=a(579),L=a(580),D=a(31),I=Object(o.a)((function(e){return Object(l.a)({root:{},header:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},infoItem:{"& + &":{marginLeft:e.spacing(1)}},toolBox:{display:"flex",alignItems:"center",marginRight:e.spacing(2)},toolText:{marginLeft:e.spacing(.5)},description:{marginBottom:e.spacing(1)}})}));function F(){var e=I(),t=r.useContext(me),a=Object(n.a)(t,2),o=a[0],l=a[1],i=Object(D.b)({owner_uid:null===o||void 0===o?void 0:o.shadow.author.uid}),u=i.following,d=i.toggleFollow,s=Object(j.F)({fetchPolicy:"network-only",variables:{medium_id:Number(null===l||void 0===l?void 0:l.id)}}),g=Object(n.a)(s,2),b=g[0],E=g[1].data,h=Object(j.e)({update:function(e){e.modify({fields:{vote:function(){},shadow:function(){}}})}}),y=Object(n.a)(h,1)[0],O=function(e){var t=e;(null===E||void 0===E?void 0:E.vote.status)===t&&e!==j.c.Default&&(t=j.c.Default),y({variables:{vote:{medium_id:l?+l.id:-1,status:t}}})};return r.useEffect((function(){(null===l||void 0===l?void 0:l.id)&&b()}),[l,b]),r.createElement("div",null,r.createElement(c.a,{className:e.header},r.createElement("div",null,r.createElement(m.a,{variant:"subtitle1"},null===o||void 0===o?void 0:o.shadow.title),r.createElement(c.a,{display:"flex"},r.createElement(m.a,{variant:"caption",className:e.infoItem},"\u89c2\u770b: TODO"),r.createElement(m.a,{variant:"caption",className:e.infoItem},"\u53d1\u5e03\u65f6\u95f4:"," ",p()(null===o||void 0===o?void 0:o.shadow.create_at).format("YYYY-MM-DD HH:mm")))),r.createElement(c.a,{display:"flex",alignItems:"center"},r.createElement(c.a,{className:e.toolBox},r.createElement(N.a,{color:(null===E||void 0===E?void 0:E.vote.status)===j.c.Likd?"primary":"default",size:"small",onClick:function(){return O(j.c.Likd)}},r.createElement(S.a,{fontSize:"small"})),r.createElement(m.a,{className:e.toolText},null===l||void 0===l?void 0:l.vote_like_count)),r.createElement(c.a,{className:e.toolBox},r.createElement(N.a,{color:(null===E||void 0===E?void 0:E.vote.status)===j.c.Dislike?"primary":"default",size:"small",onClick:function(){return O(j.c.Dislike)}},r.createElement(R.a,{fontSize:"small"})),r.createElement(m.a,{className:e.toolText},null===l||void 0===l?void 0:l.vote_dislike_count)),r.createElement(N.a,{size:"small"},r.createElement(L.a,{fontSize:"small"})))),r.createElement(m.a,{className:e.description,variant:"body2"},null===o||void 0===o?void 0:o.shadow.description),r.createElement(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(c.a,{display:"flex",alignItems:"center"},r.createElement(f.a,{src:null===o||void 0===o?void 0:o.shadow.author.avatar}),r.createElement(c.a,{ml:1},r.createElement(m.a,{variant:"subtitle2"},null===o||void 0===o?void 0:o.shadow.author.nickname),r.createElement(m.a,{variant:"caption"},null===o||void 0===o?void 0:o.shadow.author.description))),u?r.createElement(v.a,{onClick:d},"\u5df2\u5173\u6ce8"):r.createElement(v.a,{onClick:d},"\u5173\u6ce8")))}var Y=a(64),z=a(309),H=a(589),W=a(633);function B(e){var t=e.duration,a=e.currentTime,n=e.onChange,o=function(e){var t=p.a.duration(e,"ms").hours()+"",a=p.a.duration(e,"ms").minutes()+"",n=p.a.duration(e,"ms").seconds()+"";return t.padStart(2,"0")+":"+a.padStart(2,"0")+":"+n.padStart(2,"0")},l=o(t);return r.createElement(c.a,{display:"flex"},r.createElement(W.a,{min:0,max:t,value:a,valueLabelDisplay:"auto",valueLabelFormat:function(e){return o(e)},onChange:function(e,t){n(t)},onMouseMove:function(e){},disabled:0===t}),r.createElement(m.a,null,o(a),"/"),r.createElement(m.a,null,l))}var U=a(585),V=a(581),q=a(582),A=a(583),J=a(584);function Q(e){var t=e.volume,a=e.muted,o=e.onClickMuted,l=e.onVolumeChange,i=r.useRef(null),c=r.useState(!1),u=Object(n.a)(c,2),d=u[0],s=u[1];return r.createElement("span",{ref:i,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},r.createElement(N.a,{onClick:o},a&&r.createElement(V.a,null),!a&&0===t&&r.createElement(q.a,null),!a&&t>0&&t<=.5&&r.createElement(A.a,null),!a&&t>.5&&r.createElement(J.a,null)),r.createElement(U.a,{placement:"top",open:d,anchorEl:i.current,transition:!0,disablePortal:!0},r.createElement("div",{style:{height:80}},r.createElement(W.a,{step:.01,min:0,max:1,value:t,valueLabelDisplay:"off",orientation:"vertical",onChange:function(e,t){l(t)}}))))}var G,K,X,Z=a(586),$=a(587),ee=a(588);function te(e){var t=e.status,a=e.onPlay,n=e.onPause;return r.createElement(c.a,null,(t===X.Ready||t===X.Pause)&&r.createElement(N.a,{onClick:a},r.createElement(Z.a,null)),t===X.Playing&&r.createElement(N.a,{onClick:n},r.createElement($.a,null)),t===X.Waiting&&r.createElement(N.a,null,r.createElement(ee.a,null)))}!function(e){e[e.S075=.75]="S075",e[e.F125=1.25]="F125",e[e.F150=1.5]="F150",e[e.F200=2]="F200"}(G||(G={})),function(e){e.M3U8="m3u8",e.NORMAL="normal"}(K||(K={})),function(e){e[e.Loading=0]="Loading",e[e.Ready=1]="Ready",e[e.Waiting=2]="Waiting",e[e.Playing=3]="Playing",e[e.Pause=4]="Pause",e[e.Ended=5]="Ended",e[e.Error=6]="Error"}(X||(X={}));var ae=a(282),ne=a(273),re=Object(ae.a)((function(e){return Object(ne.a)({root:{width:300,minHeight:450,backgroundColor:"#fff"}})}));function oe(){var e=re(),t=r.useRef(null),a=r.useState(!1),o=Object(n.a)(a,2),l=o[0],i=o[1];return r.createElement("div",{className:e.root},r.createElement("div",null,r.createElement(m.a,null,"Speed"),r.createElement("div",{ref:t,style:{background:"red"},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},r.createElement(m.a,null,"Normal"),r.createElement(m.a,null,">"),r.createElement(U.a,{placement:"left-end",open:l,anchorEl:t.current,transition:!0,disablePortal:!0},(function(){return r.createElement(z.a,{onClickAway:function(){return i(!1)}},r.createElement("div",{style:{width:200,height:40,background:"blue"},onClick:function(){return console.log("yi")}},"yi"))})))))}var le=a(462),ie=a.n(le),ce=Object(o.a)((function(e){return Object(l.a)({root:{position:"relative",minHeight:700},setting:{},wrap:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},position:{position:"absolute",right:0,bottom:"calc(100% + ".concat(e.spacing(1),"px)")}})}));function ue(e){var t=e.mediaType,a=e.src,o=e.onDurationChange,l=e.onTimeUpdate,i=e.onProgress,c=e.onVolumeChange,u=e.onLoadedMetadata,d=e.onRateChange,m=e.onWaiting,v=e.onPlaying,f=e.onPause,g=e.onEnded,p=e.onError,b=e.onCanPlay,E=Object(Y.a)(e,["mediaType","src","onDurationChange","onTimeUpdate","onProgress","onVolumeChange","onLoadedMetadata","onRateChange","onWaiting","onPlaying","onPause","onEnded","onError","onCanPlay"]),h=r.useRef(null),y=ce(),j=r.useState(!1),O=Object(n.a)(j,2),w=O[0],C=O[1],k=r.useState({status:X.Loading,volume:1,muted:!1,playbackRate:1,duration:0,currentTime:0,cache:0}),_=Object(n.a)(k,2),x=_[0],P=_[1],T=r.useState(t===K.M3U8?"":a),M=Object(n.a)(T,1)[0];r.useEffect((function(){if(t===K.M3U8&&h.current){var e=new ie.a;e.loadSource(a),e.attachMedia(h.current)}}),[t,a]);return r.createElement("div",{className:y.root},r.createElement("video",Object.assign({},E,{src:M,ref:h,onWaiting:function(e){m&&m(e),P(Object(s.a)(Object(s.a)({},x),{},{status:X.Waiting}))},onPlaying:function(e){v&&v(e),P(Object(s.a)(Object(s.a)({},x),{},{status:X.Playing}))},onPause:function(e){f&&f(e),P(Object(s.a)(Object(s.a)({},x),{},{status:X.Pause}))},onEnded:function(e){g&&g(e),P(Object(s.a)(Object(s.a)({},x),{},{status:X.Ended}))},onError:function(e){p&&p(e),P(Object(s.a)(Object(s.a)({},x),{},{status:X.Error}))},onCanPlay:function(e){b&&b(e),P(Object(s.a)(Object(s.a)({},x),{},{status:X.Ready}))},onLoadedMetadata:function(e){u&&u(e);var t=e.currentTarget,a=t.volume,n=t.muted,r=t.playbackRate;P(Object(s.a)(Object(s.a)({},x),{},{volume:a,muted:n,playbackRate:r}))},onVolumeChange:function(e){c&&c(e),P(Object(s.a)(Object(s.a)({},x),{},{volume:+e.currentTarget.volume,muted:!!e.currentTarget.muted}))},onProgress:function(e){i&&i(e);var t=e.currentTarget,a=t.buffered,n=t.duration;if(a&&0!==a.length){var r=a.end(a.length-1),o=r>n?1e3*n:1e3*r;P(Object(s.a)(Object(s.a)({},x),{},{cache:o}))}},onTimeUpdate:function(e){l&&l(e);var t=1e3*e.currentTarget.currentTime;P(Object(s.a)(Object(s.a)({},x),{},{currentTime:t}))},onDurationChange:function(e){o&&o(e);var t=1e3*e.currentTarget.duration;P(Object(s.a)(Object(s.a)({},x),{},{duration:t}))},onRateChange:function(e){d&&d(e),P(Object(s.a)(Object(s.a)({},x),{},{playbackRate:+e.currentTarget.playbackRate}))}})),r.createElement(te,{status:x.status,onPlay:function(){h.current&&h.current.play()},onPause:function(){h.current&&h.current.pause()}}),r.createElement(Q,{volume:x.volume,muted:x.muted,onClickMuted:function(){return e=!x.muted,void(h.current&&(h.current.muted=e));var e},onVolumeChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"small",a=e;"percent"===t&&(a/=100),h.current&&(h.current.volume=a)}(e)}}),r.createElement(B,{duration:x.duration,currentTime:x.currentTime,onChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms",a=e;"ms"===t&&(a/=1e3),h.current&&(h.current.currentTime=a)}(e)}}),r.createElement(z.a,{onClickAway:function(){return C(!1)}},r.createElement("div",{className:y.wrap},r.createElement(N.a,{className:y.setting,size:"small",onClick:function(){return C(!0)}},r.createElement(H.a,null)),w&&r.createElement("div",{className:y.position},r.createElement(oe,null)))))}ue.defaultProps={autoPlay:!1,controls:!1,controlsList:"nodownload nofullscreen noremoteplayback",loop:!1,muted:!1,playsInline:!1,width:200,height:100,preload:"auto"};var de=a(46);a.d(t,"ShadowPlayContext",(function(){return me})),a.d(t,"default",(function(){return ve}));var se=Object(o.a)((function(e){return Object(l.a)({root:{height:"100%"},body:{backgroundColor:e.palette.background.paper,display:"flex",margin:"0 auto"},content:{padding:e.spacing(2,5),borderRight:"1px solid ".concat(e.palette.divider)},aider:{padding:e.spacing(2,4),height:"100%",overflow:"auto"}})})),me=r.createContext([void 0,void 0]);function ve(){var e=se(),t=Object(P.h)().id,a=r.useState(),o=Object(n.a)(a,2),l=o[0],d=o[1],s=Object(j.w)({variables:{id:t}}).data;return r.useEffect((function(){(null===s||void 0===s?void 0:s.shadow.sources.length)&&d(s.shadow.sources[0])}),[s]),r.createElement(c.a,{className:e.root},r.createElement(me.Provider,{value:[s,l]},r.createElement(u.d,null,r.createElement(u.b,null,r.createElement(i.a,{controls:!0,playing:!0,url:null===l||void 0===l?void 0:l.url,light:(null===l||void 0===l?void 0:l.cover)?null===l||void 0===l?void 0:l.cover:de.e}))),r.createElement(u.b,{className:e.body},r.createElement(u.c,{className:e.content},r.createElement(F,null),r.createElement(M,null)),r.createElement(u.a,{sticky:!0,className:e.aider},r.createElement(C,null)))))}}}]);
//# sourceMappingURL=14.272b99cc.chunk.js.map