(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[13],{383:function(e,t,a){"use strict";var n=a(68),r=a(0),o=a(396),i=a.n(o),l=a(283),c=a(278),u=a(158),d=Object(l.a)((function(e){return Object(c.a)({player:{width:"100% !important",height:"100% !important",background:"#000"}})})),s=function(e){var t=d(),a=e.url,o=Object(n.a)(e,["url"]),l=null===a||void 0===a?void 0:a.toString().endsWith(".m3u8"),c=r.createRef();return r.createElement(u.a,{ratio:16/9},r.createElement(i.a,Object.assign({ref:c,className:t.player},o,{url:a,config:{file:{forceHLS:l,attributes:{controlsList:"nodownload noremoteplayback",disablePictureInPicture:!0,onContextMenu:function(e){return e.preventDefault()}}},youtube:{playerVars:{autoplay:o.playing,modestbranding:1,rel:0,showinfo:0,controls:o.controls},embedOptions:{}}}})))};s.defaultProps={controls:!0,playing:!0};var m=a(17),v=a(317),f=a(201),b=a(586),p=a(642),g=a(585),E=Object(l.a)((function(e){return Object(c.a)({wrap:{position:"relative",width:"100%"},tool:{position:"absolute",right:e.spacing(1),top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",justifyContent:"space-between",maxHeight:"50%",overflow:"auto",background:"rgba(0, 0, 0, .1)",backdropFilter:"blur(8px)",color:"#fff",padding:e.spacing(1),borderRadius:e.shape.borderRadius,visibility:"hidden","$wrap:hover &":{visibility:"initial"}},grouped:{border:"none","&:not(:first-child)":{borderRadius:e.shape.borderRadius},"&:first-child":{borderRadius:e.shape.borderRadius}}})}));function h(e){return function(t){var a=E(),o=t.youtubeUrl,i=Object(n.a)(t,["youtubeUrl"]),l=i&&i.url?i.url:void 0,c=r.useState(l),u=Object(m.a)(c,2),d=u[0],s=u[1],h=r.useState(),y=Object(m.a)(h,2),j=y[0],O=y[1],w=o&&i&&i.url&&i.url!==o;return r.useEffect((function(){s("youtube"===j?o:l)}),[j,l,o]),r.createElement("div",{className:a.wrap},r.createElement(e,Object.assign({},i,{url:d})),w&&r.createElement("div",{className:a.tool},r.createElement(v.a,{theme:function(){return Object(f.a)({palette:{type:"dark"}})}},r.createElement(p.a,{classes:{grouped:a.grouped},orientation:"vertical",value:j,exclusive:!0,onChange:function(e,t){O(t)}},r.createElement(g.a,{value:"youtube"},r.createElement(b.a,null))))))}}a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}))},626:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(0),o=a(283),i=a(278),l=a(383),c=a(351),u=a(313),d=a(83),s=a(365),m=a(31),v=a(103),f=a(332),b=a(355),p=a(70),g=a.n(p),E=Object(o.a)((function(e){return Object(i.a)({avatar:{marginRight:e.spacing(2)},main:{flex:1},infoItem:{"& + &":{marginLeft:e.spacing(2)}},commentText:{marginTop:e.spacing(1)}})}));var h=function(e){var t=E();return r.createElement(c.a,null,r.createElement(c.a,{display:"flex"},r.createElement(b.a,{className:t.avatar,src:e.author.avatar}),r.createElement("div",{className:t.main},r.createElement(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(v.a,null,e.author.nickname),r.createElement(v.a,{variant:"caption"},g()(e.create_at).format("YYYY-MM-DD HH:mm"))),r.createElement(c.a,{display:"flex"}))),r.createElement(v.a,{variant:"body2",className:t.commentText},e.content))},y=a(419),j=function(e){var t=r.useState(""),a=Object(n.a)(t,2),o=a[0],i=a[1],l=function(){i("")};return r.createElement("div",null,r.createElement(y.a,{value:o,onChange:function(e){return i(e.target.value)},placeholder:""}),r.createElement(f.a,{variant:"outlined",onClick:function(){e.onSubmit&&e.onSubmit(o,l)},disabled:!o},"\u63d0\u4ea4"))},O=a(53),w=a(75),C=Object(o.a)((function(e){return Object(i.a)({item:{padding:e.spacing(2,0),"& + &":{borderTop:"1px solid ".concat(e.palette.divider)}},commentTitle:{padding:e.spacing(1,0)}})}));function k(){var e,t,a,o,i,l,u=C(),d=r.useContext(pe),b=Object(n.a)(d,2)[1],p=b?+(null===b||void 0===b?void 0:b.id):-1,g=Object(O.t)({variables:{query:{last:16},type:O.a.Medium,type_id:p},skip:-1===p}),E=g.data,y=g.loading,k=g.fetchMore,_=g.error;Object(O.s)({variables:{type:O.a.Medium,type_id:p},skip:-1===p,onSubscriptionData:function(e){var t,a=e.client,n=null===(t=e.subscriptionData.data)||void 0===t?void 0:t.review_created;a.writeQuery({query:O.b,variables:{query:{last:16},type:O.a.Medium,type_id:p},data:Object.assign({},E,{reviews_paginated:Object(m.a)(Object(m.a)({},null===E||void 0===E?void 0:E.reviews_paginated),{},{edges:[{cursor:Date.now(),__typename:"ReviewEdge",node:n}].concat(Object(s.a)(null===E||void 0===E?void 0:E.reviews_paginated.edges))})})})}});var x=Object(O.f)(),P=Object(n.a)(x,1)[0];return r.createElement(c.a,null,r.createElement(j,{onSubmit:function(e,t){P({variables:{review:{content:e,type:O.a.Medium,type_id:p}}}),t()}}),r.createElement(v.a,{variant:"subtitle2",className:u.commentTitle}),r.createElement("div",null,(null===E||void 0===E||null===(e=E.reviews_paginated)||void 0===e||null===(t=e.edges)||void 0===t?void 0:t.length)?r.createElement("div",null,null===E||void 0===E||null===(a=E.reviews_paginated)||void 0===a||null===(o=a.edges)||void 0===o?void 0:o.map((function(e,t){return r.createElement(c.a,{marginY:1,key:t},r.createElement(h,e.node))})),(null===E||void 0===E||null===(i=E.reviews_paginated)||void 0===i||null===(l=i.pageInfo)||void 0===l?void 0:l.hasNextPage)&&r.createElement(c.a,{textAlign:"center"},r.createElement(f.a,{onClick:function(){k({variables:{type:O.a.Medium,type_id:p,query:{last:8,before:null===E||void 0===E?void 0:E.reviews_paginated.pageInfo.endCursor}},updateQuery:function(e,t){var a,n=t.fetchMoreResult;if(null===n||void 0===n||null===(a=n.reviews_paginated)||void 0===a?void 0:a.edges){var r=n.reviews_paginated,o=r.edges;return{reviews_paginated:{pageInfo:r.pageInfo,totalCount:r.totalCount,edges:[].concat(Object(s.a)(e.reviews_paginated.edges),Object(s.a)(o)),__typename:e.reviews_paginated.__typename}}}return e}})},disabled:y},r.createElement(v.a,{color:"textSecondary",variant:"caption"},y?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u66f4\u591a")))):r.createElement(w.a,{error:!!_,loading:y,placeholder:!0,placeholderTitle:"\u6682\u65e0\u8bc4\u8bba"})))}var _=a(76),x=a(345),P=a(346),T=a(22),R=a(64),S=a(30);function M(){var e=Object(T.h)().id,t=Object(S.c)(),a=Object(O.w)({variables:{shadow_id:e}}),n=a.data,o=a.error;return a.loading?r.createElement("div",null,"loading"):o?r.createElement("div",null,"error"):r.createElement(c.a,{py:2},r.createElement(v.a,{variant:"subtitle1",gutterBottom:!0},"\u63a5\u4e0b\u6765\u64ad\u653e"),(null===n||void 0===n?void 0:n.shadow_next_urges_by_shadow.length)?r.createElement(x.a,{cellHeight:"auto",cols:4},n.shadow_next_urges_by_shadow.map((function(e,a){return r.createElement(P.a,{cols:1,key:a},r.createElement(_.a,Object.assign({},e,{onClickRoot:function(){return t.gotoShadow(e.id)},onClickAuthor:function(){return t.gotoProfile(e.author.username)}})))}))):r.createElement("div",null,r.createElement(R.b,{title:"\u6682\u65e0\u53ef\u64ad\u653e\u8d44\u6e90"})))}var N=a(324),L=a(469),D=a(470),I=a(471),Y=Object(o.a)((function(e){return Object(i.a)({root:{},header:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},infoItem:{"& + &":{marginLeft:e.spacing(1)}},toolBox:{display:"flex",alignItems:"center",marginRight:e.spacing(2)},toolText:{marginLeft:e.spacing(.5)},description:{marginBottom:e.spacing(1)}})}));function F(){var e=Y(),t=r.useContext(pe),a=Object(n.a)(t,2),o=a[0],i=a[1],l=Object(S.b)({owner_uid:null===o||void 0===o?void 0:o.shadow.author.uid}),u=l.following,d=l.toggleFollow,s=Object(O.G)({fetchPolicy:"network-only",variables:{medium_id:Number(null===i||void 0===i?void 0:i.id)}}),m=Object(n.a)(s,2),p=m[0],E=m[1].data,h=Object(O.e)({update:function(e){e.modify({fields:{vote:function(){},shadow:function(){}}})}}),y=Object(n.a)(h,1)[0],j=function(e){var t=e;(null===E||void 0===E?void 0:E.vote.status)===t&&e!==O.c.Default&&(t=O.c.Default),y({variables:{vote:{medium_id:i?+i.id:-1,status:t}}})};return r.useEffect((function(){(null===i||void 0===i?void 0:i.id)&&p()}),[i,p]),r.createElement("div",null,r.createElement(c.a,{className:e.header},r.createElement("div",null,r.createElement(v.a,{variant:"subtitle1"},null===o||void 0===o?void 0:o.shadow.title),r.createElement(c.a,{display:"flex"},r.createElement(v.a,{variant:"caption",className:e.infoItem},"\u89c2\u770b: TODO"),r.createElement(v.a,{variant:"caption",className:e.infoItem},"\u53d1\u5e03\u65f6\u95f4:"," ",g()(null===o||void 0===o?void 0:o.shadow.create_at).format("YYYY-MM-DD HH:mm")))),r.createElement(c.a,{display:"flex",alignItems:"center"},r.createElement(c.a,{className:e.toolBox},r.createElement(N.a,{color:(null===E||void 0===E?void 0:E.vote.status)===O.c.Likd?"primary":"default",size:"small",onClick:function(){return j(O.c.Likd)}},r.createElement(L.a,{fontSize:"small"})),r.createElement(v.a,{className:e.toolText},null===i||void 0===i?void 0:i.vote_like_count)),r.createElement(c.a,{className:e.toolBox},r.createElement(N.a,{color:(null===E||void 0===E?void 0:E.vote.status)===O.c.Dislike?"primary":"default",size:"small",onClick:function(){return j(O.c.Dislike)}},r.createElement(D.a,{fontSize:"small"})),r.createElement(v.a,{className:e.toolText},null===i||void 0===i?void 0:i.vote_dislike_count)),r.createElement(N.a,{size:"small"},r.createElement(I.a,{fontSize:"small"})))),r.createElement(v.a,{className:e.description,variant:"body2"},(null===i||void 0===i?void 0:i.description)||(null===o||void 0===o?void 0:o.shadow.description)),r.createElement(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.createElement(c.a,{display:"flex",alignItems:"center"},r.createElement(b.a,{src:null===o||void 0===o?void 0:o.shadow.author.avatar}),r.createElement(c.a,{ml:1},r.createElement(v.a,{variant:"subtitle2"},null===o||void 0===o?void 0:o.shadow.author.nickname),r.createElement(v.a,{variant:"caption"},null===o||void 0===o?void 0:o.shadow.author.description))),u?r.createElement(f.a,{onClick:d},"\u5df2\u5173\u6ce8"):r.createElement(f.a,{onClick:d},"\u5173\u6ce8")))}var H=a(68),U=a(316),W=a(594),z=a(639);function B(e){var t=e.duration,a=e.currentTime,n=e.onChange,o=function(e){var t=g.a.duration(e,"ms").hours()+"",a=g.a.duration(e,"ms").minutes()+"",n=g.a.duration(e,"ms").seconds()+"";return t.padStart(2,"0")+":"+a.padStart(2,"0")+":"+n.padStart(2,"0")},i=o(t);return r.createElement(c.a,{display:"flex"},r.createElement(z.a,{min:0,max:t,value:a,valueLabelDisplay:"auto",valueLabelFormat:function(e){return o(e)},onChange:function(e,t){n(t)},onMouseMove:function(e){},disabled:0===t}),r.createElement(v.a,null,o(a),"/"),r.createElement(v.a,null,i))}var V=a(336),A=a(587),q=a(588),J=a(589),Q=a(590);function G(e){var t=e.volume,a=e.muted,o=e.onClickMuted,i=e.onVolumeChange,l=r.useRef(null),c=r.useState(!1),u=Object(n.a)(c,2),d=u[0],s=u[1];return r.createElement("span",{ref:l,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},r.createElement(N.a,{onClick:o},a&&r.createElement(A.a,null),!a&&0===t&&r.createElement(q.a,null),!a&&t>0&&t<=.5&&r.createElement(J.a,null),!a&&t>.5&&r.createElement(Q.a,null)),r.createElement(V.a,{placement:"top",open:d,anchorEl:l.current,transition:!0,disablePortal:!0},r.createElement("div",{style:{height:80}},r.createElement(z.a,{step:.01,min:0,max:1,value:t,valueLabelDisplay:"off",orientation:"vertical",onChange:function(e,t){i(t)}}))))}var $,K,X,Z=a(591),ee=a(592),te=a(593);function ae(e){var t=e.status,a=e.onPlay,n=e.onPause;return r.createElement(c.a,null,(t===X.Ready||t===X.Pause)&&r.createElement(N.a,{onClick:a},r.createElement(Z.a,null)),t===X.Playing&&r.createElement(N.a,{onClick:n},r.createElement(ee.a,null)),t===X.Waiting&&r.createElement(N.a,null,r.createElement(te.a,null)))}!function(e){e[e.S075=.75]="S075",e[e.F125=1.25]="F125",e[e.F150=1.5]="F150",e[e.F200=2]="F200"}($||($={})),function(e){e.M3U8="m3u8",e.NORMAL="normal"}(K||(K={})),function(e){e[e.Loading=0]="Loading",e[e.Ready=1]="Ready",e[e.Waiting=2]="Waiting",e[e.Playing=3]="Playing",e[e.Pause=4]="Pause",e[e.Ended=5]="Ended",e[e.Error=6]="Error"}(X||(X={}));var ne=a(289),re=a(279),oe=Object(ne.a)((function(e){return Object(re.a)({root:{width:300,minHeight:450,backgroundColor:e.palette.background.paper}})}));function ie(){var e=oe(),t=r.useRef(null),a=r.useState(!1),o=Object(n.a)(a,2),i=o[0],l=o[1];return r.createElement("div",{className:e.root},r.createElement("div",null,r.createElement(v.a,null,"Speed"),r.createElement("div",{ref:t,style:{background:"red"},onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},r.createElement(v.a,null,"Normal"),r.createElement(v.a,null,">"),r.createElement(V.a,{placement:"left-end",open:i,anchorEl:t.current,transition:!0,disablePortal:!0},(function(){return r.createElement(U.a,{onClickAway:function(){return l(!1)}},r.createElement("div",{style:{width:200,height:40,background:"blue"},onClick:function(){return console.log("yi")}},"yi"))})))))}var le=a(472),ce=a.n(le),ue=Object(o.a)((function(e){return Object(i.a)({root:{position:"relative",minHeight:700},setting:{},wrap:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},position:{position:"absolute",right:0,bottom:"calc(100% + ".concat(e.spacing(1),"px)")}})}));function de(e){var t=e.mediaType,a=e.src,o=e.onDurationChange,i=e.onTimeUpdate,l=e.onProgress,c=e.onVolumeChange,u=e.onLoadedMetadata,d=e.onRateChange,s=e.onWaiting,v=e.onPlaying,f=e.onPause,b=e.onEnded,p=e.onError,g=e.onCanPlay,E=Object(H.a)(e,["mediaType","src","onDurationChange","onTimeUpdate","onProgress","onVolumeChange","onLoadedMetadata","onRateChange","onWaiting","onPlaying","onPause","onEnded","onError","onCanPlay"]),h=r.useRef(null),y=ue(),j=r.useState(!1),O=Object(n.a)(j,2),w=O[0],C=O[1],k=r.useState({status:X.Loading,volume:1,muted:!1,playbackRate:1,duration:0,currentTime:0,cache:0}),_=Object(n.a)(k,2),x=_[0],P=_[1],T=r.useState(t===K.M3U8?"":a),R=Object(n.a)(T,1)[0];r.useEffect((function(){if(t===K.M3U8&&h.current){var e=new ce.a;e.loadSource(a),e.attachMedia(h.current)}}),[t,a]);return r.createElement("div",{className:y.root},r.createElement("video",Object.assign({},E,{src:R,ref:h,onWaiting:function(e){s&&s(e),P(Object(m.a)(Object(m.a)({},x),{},{status:X.Waiting}))},onPlaying:function(e){v&&v(e),P(Object(m.a)(Object(m.a)({},x),{},{status:X.Playing}))},onPause:function(e){f&&f(e),P(Object(m.a)(Object(m.a)({},x),{},{status:X.Pause}))},onEnded:function(e){b&&b(e),P(Object(m.a)(Object(m.a)({},x),{},{status:X.Ended}))},onError:function(e){p&&p(e),P(Object(m.a)(Object(m.a)({},x),{},{status:X.Error}))},onCanPlay:function(e){g&&g(e),P(Object(m.a)(Object(m.a)({},x),{},{status:X.Ready}))},onLoadedMetadata:function(e){u&&u(e);var t=e.currentTarget,a=t.volume,n=t.muted,r=t.playbackRate;P(Object(m.a)(Object(m.a)({},x),{},{volume:a,muted:n,playbackRate:r}))},onVolumeChange:function(e){c&&c(e),P(Object(m.a)(Object(m.a)({},x),{},{volume:+e.currentTarget.volume,muted:!!e.currentTarget.muted}))},onProgress:function(e){l&&l(e);var t=e.currentTarget,a=t.buffered,n=t.duration;if(a&&0!==a.length){var r=a.end(a.length-1),o=r>n?1e3*n:1e3*r;P(Object(m.a)(Object(m.a)({},x),{},{cache:o}))}},onTimeUpdate:function(e){i&&i(e);var t=1e3*e.currentTarget.currentTime;P(Object(m.a)(Object(m.a)({},x),{},{currentTime:t}))},onDurationChange:function(e){o&&o(e);var t=1e3*e.currentTarget.duration;P(Object(m.a)(Object(m.a)({},x),{},{duration:t}))},onRateChange:function(e){d&&d(e),P(Object(m.a)(Object(m.a)({},x),{},{playbackRate:+e.currentTarget.playbackRate}))}})),r.createElement(ae,{status:x.status,onPlay:function(){h.current&&h.current.play()},onPause:function(){h.current&&h.current.pause()}}),r.createElement(G,{volume:x.volume,muted:x.muted,onClickMuted:function(){return e=!x.muted,void(h.current&&(h.current.muted=e));var e},onVolumeChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"small",a=e;"percent"===t&&(a/=100),h.current&&(h.current.volume=a)}(e)}}),r.createElement(B,{duration:x.duration,currentTime:x.currentTime,onChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms",a=e;"ms"===t&&(a/=1e3),h.current&&(h.current.currentTime=a)}(e)}}),r.createElement(U.a,{onClickAway:function(){return C(!1)}},r.createElement("div",{className:y.wrap},r.createElement(N.a,{className:y.setting,size:"small",onClick:function(){return C(!0)}},r.createElement(W.a,null)),w&&r.createElement("div",{className:y.position},r.createElement(ie,null)))))}de.defaultProps={autoPlay:!1,controls:!1,controlsList:"nodownload nofullscreen noremoteplayback",loop:!1,muted:!1,playsInline:!1,width:200,height:100,preload:"auto"};var se=a(48),me=a(352),ve=a(110);a.d(t,"ShadowPlayContext",(function(){return pe})),a.d(t,"default",(function(){return ge}));var fe=Object(l.b)(l.a),be=Object(o.a)((function(e){return Object(i.a)({root:{height:"100%"},body:{backgroundColor:e.palette.background.paper,display:"flex",margin:"0 auto"},content:{padding:e.spacing(2,5),borderRight:"1px solid ".concat(e.palette.divider)},aider:{padding:e.spacing(2,4),height:"100%",overflow:"auto"}})})),pe=r.createContext([void 0,void 0]);function ge(){var e=be(),t=Object(T.h)().id,a=Object(T.g)(),o=r.useState(!0),i=Object(n.a)(o,2),l=i[0],s=i[1],m=(a.state||{medium_id:void 0}).medium_id,v=r.useState(),f=Object(n.a)(v,2),b=f[0],p=f[1],g=Object(O.x)({variables:{id:t}}).data;return r.useEffect((function(){var e,t;if(null===g||void 0===g||null===(e=g.shadow)||void 0===e||null===(t=e.sources)||void 0===t?void 0:t.length){var a=g.shadow.sources.find((function(e){return+e.id===+m}));p(a||g.shadow.sources[0])}}),[g,m]),r.createElement(c.a,{className:e.root},r.createElement(ve.a,null,r.createElement("title",null,null===g||void 0===g?void 0:g.shadow.title)),r.createElement(pe.Provider,{value:[g,b]},r.createElement(d.d,null,r.createElement(d.b,null,r.createElement(u.a,{in:l,style:{width:"100%"}},r.createElement(me.a,{severity:"warning",onClose:function(){return s(!1)}},"\u670d\u52a1\u5668\u914d\u7f6e\u4f4e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u52a0\u8f7d..."))),r.createElement(d.b,null,r.createElement(fe,{controls:!0,playing:!0,youtubeUrl:null===b||void 0===b?void 0:b.youtube_url,url:null===b||void 0===b?void 0:b.url,light:(null===b||void 0===b?void 0:b.cover)?null===b||void 0===b?void 0:b.cover:se.e}))),r.createElement(d.b,{className:e.body},r.createElement(d.c,{className:e.content},r.createElement(F,null),r.createElement(M,null)),r.createElement(d.a,{sticky:!0,className:e.aider},r.createElement(k,null)))))}}}]);
//# sourceMappingURL=13.212cefa8.chunk.js.map