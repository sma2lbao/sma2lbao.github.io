(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[15],{358:function(e,t,n){"use strict";var a=n(129);var r=n(156);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},405:function(e,t,n){"use strict";var a=n(5),r=n(2),o=n(0),i=(n(8),n(4)),d=n(7),s=n(150),l=n(14),c=o.forwardRef((function(e,t){var n=e.children,d=e.classes,c=e.className,u=e.color,b=void 0===u?"default":u,g=e.component,p=void 0===g?"button":g,m=e.disabled,f=void 0!==m&&m,h=e.disableFocusRipple,v=void 0!==h&&h,y=e.focusVisibleClassName,E=e.size,w=void 0===E?"large":E,O=e.variant,x=void 0===O?"round":O,j=Object(a.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(s.a,Object(r.a)({className:Object(i.a)(d.root,c,"round"!==x&&d.extended,"large"!==w&&d["size".concat(Object(l.a)(w))],f&&d.disabled,{primary:d.primary,secondary:d.secondary,inherit:d.colorInherit}[b]),component:p,disabled:f,focusRipple:!v,focusVisibleClassName:Object(i.a)(d.focusVisible,y),ref:t},j),o.createElement("span",{className:d.label},n))}));t.a=Object(d.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(c)},454:function(e,t,n){"use strict";var a=n(2),r=n(62),o=n(5),i=n(0),d=(n(8),n(126)),s=n(34),l=n(51),c=n(39),u=n(12),b={entering:{transform:"none"},entered:{transform:"none"}},g={enter:s.b.enteringScreen,exit:s.b.leavingScreen},p=i.forwardRef((function(e,t){var n=e.children,s=e.disableStrictModeCompat,p=void 0!==s&&s,m=e.in,f=e.onEnter,h=e.onEntered,v=e.onEntering,y=e.onExit,E=e.onExited,w=e.onExiting,O=e.style,x=e.timeout,j=void 0===x?g:x,C=e.TransitionComponent,k=void 0===C?d.a:C,S=Object(o.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=Object(l.a)(),N=R.unstable_strictMode&&!p,T=i.useRef(null),_=Object(u.a)(n.ref,t),z=Object(u.a)(N?T:void 0,_),I=function(e){return function(t,n){if(e){var a=N?[T.current,t]:[t,n],o=Object(r.a)(a,2),i=o[0],d=o[1];void 0===d?e(i):e(i,d)}}},M=I(v),A=I((function(e,t){Object(c.b)(e);var n=Object(c.a)({style:O,timeout:j},{mode:"enter"});e.style.webkitTransition=R.transitions.create("transform",n),e.style.transition=R.transitions.create("transform",n),f&&f(e,t)})),V=I(h),F=I(w),L=I((function(e){var t=Object(c.a)({style:O,timeout:j},{mode:"exit"});e.style.webkitTransition=R.transitions.create("transform",t),e.style.transition=R.transitions.create("transform",t),y&&y(e)})),$=I(E);return i.createElement(k,Object(a.a)({appear:!0,in:m,nodeRef:N?T:void 0,onEnter:A,onEntered:V,onEntering:M,onExit:L,onExited:$,onExiting:F,timeout:j},S),(function(e,t){return i.cloneElement(n,Object(a.a)({style:Object(a.a)({transform:"scale(0)",visibility:"exited"!==e||m?void 0:"hidden"},b[e],O,n.props.style),ref:z},t))}))}));t.a=p},623:function(e,t,n){"use strict";n.r(t);var a=n(358),r=n(0),o=n.n(r),i=n(73),d=n(81),s=n(70);function l(){return r.createElement(s.a,{title:"TODO Filter."})}function c(){return r.createElement(s.b,{title:"TODO Sort."})}var u=n(275),b=n(270),g=n(2),p=n(5);function m(e,t){var n=t.disableHysteresis,a=void 0!==n&&n,r=t.threshold,o=void 0===r?100:r,i=t.target,d=e.current;return i&&(e.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),!(!a&&void 0!==d&&e.current<d)&&e.current>o}var f="undefined"!==typeof window?window:null;var h=n(339),v=n(322),y=n(101),E=n(454),w=n(405),O=n(27),x=Object(O.a)(o.a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp"),j=n(50);n.d(t,"default",(function(){return k}));var C=Object(u.a)((function(e){return Object(b.a)({content:{margin:"0 auto",padding:e.spacing(8),background:e.palette.background.paper},aider:{backgroundColor:"#fff",width:"100%",padding:e.spacing(2,2),borderLeft:"1px solid",borderColor:e.palette.divider},gridRoot:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridGap:e.spacing(1,1),gridAutoFlow:"row dense"},gridCard:{gridRow:"1 span",gridColumn:"1 span"},footer:{padding:e.spacing(2),textAlign:"center"},scollButton:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})}));function k(e){var t,n,o,s,u=Object(j.q)({variables:{query:{first:16}}}),b=u.data,O=u.loading,k=u.fetchMore,S=C(),R=e.window,N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,n=void 0===t?m:t,a=e.target,o=void 0===a?f:a,i=Object(p.a)(e,["getTrigger","target"]),d=r.useRef(),s=r.useState((function(){return n(d,i)})),l=s[0],c=s[1];return r.useEffect((function(){var e=function(){c(n(d,Object(g.a)({target:o},i)))};return e(),o.addEventListener("scroll",e),function(){o.removeEventListener("scroll",e)}}),[o,n,JSON.stringify(i)]),l}({target:R?R():void 0,disableHysteresis:!0,threshold:500});return r.createElement(d.d,null,r.createElement(d.b,null,r.createElement(d.c,{className:S.content},r.createElement(h.a,{className:S.gridRoot},null===b||void 0===b||null===(t=b.shadows_paginated)||void 0===t||null===(n=t.edges)||void 0===n?void 0:n.map((function(e){return r.createElement("div",{key:e.cursor,className:S.gridCard},r.createElement(i.a,e.node))}))),(null===b||void 0===b||null===(o=b.shadows_paginated)||void 0===o||null===(s=o.pageInfo)||void 0===s?void 0:s.hasNextPage)&&r.createElement(h.a,{className:S.footer},r.createElement(v.a,{onClick:function(){var e,t;k({variables:{query:{last:8,after:null===b||void 0===b||null===(e=b.shadows_paginated)||void 0===e||null===(t=e.pageInfo)||void 0===t?void 0:t.endCursor}},updateQuery:function(e,t){var n,r=t.fetchMoreResult;if(null===r||void 0===r||null===(n=r.shadows_paginated)||void 0===n?void 0:n.edges){var o=r.shadows_paginated,i=o.edges;return{shadows_paginated:{pageInfo:o.pageInfo,totalCount:o.totalCount,edges:[].concat(Object(a.a)(e.shadows_paginated.edges),Object(a.a)(i)),__typename:e.shadows_paginated.__typename}}}return e}})},disabled:O},r.createElement(y.a,{color:"textSecondary",variant:"caption"},O?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u66f4\u591a")))),r.createElement(d.a,{sticky:!0,className:S.aider},r.createElement(c,null),r.createElement(l,null)),r.createElement(E.a,{in:N},r.createElement(w.a,{size:"small",className:S.scollButton},r.createElement(x,null)))))}}}]);
//# sourceMappingURL=15.ab575fcd.chunk.js.map