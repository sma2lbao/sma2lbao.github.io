(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[20],{617:function(e,t,a){"use strict";a.r(t);var n=a(356),i=a(0),r=a(71),o=a(83),l=a(72);function d(){return i.createElement(l.a,{title:"TODO Filter."})}function s(){return i.createElement(l.b,{title:"TODO Sort."})}var c=a(275),u=a(270),g=a(569),p=a(338),m=a(362),v=a(101),f=a(447),b=a(448),E=a(570),_=a(50);a.d(t,"default",(function(){return y}));var h=Object(c.a)((function(e){return Object(u.a)({content:{margin:"0 auto",padding:e.spacing(8),background:e.palette.background.paper},aider:{backgroundColor:"#fff",width:"100%",padding:e.spacing(2,2),borderLeft:"1px solid",borderColor:e.palette.divider},gridRoot:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridGap:e.spacing(1,1),gridAutoFlow:"row dense"},gridCard:{gridRow:"1 span",gridColumn:"1 span"},footer:{padding:e.spacing(2),textAlign:"center"},scollButton:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})}));function y(e){var t,a,l,c,u=Object(_.n)({variables:{query:{first:16}}}),y=u.data,C=u.loading,O=u.fetchMore,k=h(),w=e.window,N=Object(g.a)({target:w?w():void 0,disableHysteresis:!0,threshold:500});return i.createElement(o.d,null,i.createElement(o.b,null,i.createElement(o.c,{className:k.content},i.createElement(p.a,{className:k.gridRoot},null===y||void 0===y||null===(t=y.movies_paginated)||void 0===t||null===(a=t.edges)||void 0===a?void 0:a.map((function(e){return i.createElement("div",{key:e.cursor,className:k.gridCard},i.createElement(r.a,e.node))}))),(null===y||void 0===y||null===(l=y.movies_paginated)||void 0===l||null===(c=l.pageInfo)||void 0===c?void 0:c.hasNextPage)&&i.createElement(p.a,{className:k.footer},i.createElement(m.a,{onClick:function(){var e,t;O({variables:{query:{last:8,after:null===y||void 0===y||null===(e=y.movies_paginated)||void 0===e||null===(t=e.pageInfo)||void 0===t?void 0:t.endCursor}},updateQuery:function(e,t){var a,i=t.fetchMoreResult;if(null===i||void 0===i||null===(a=i.movies_paginated)||void 0===a?void 0:a.edges){var r=i.movies_paginated,o=r.edges;return{movies_paginated:{pageInfo:r.pageInfo,totalCount:r.totalCount,edges:[].concat(Object(n.a)(e.movies_paginated.edges),Object(n.a)(o)),__typename:e.movies_paginated.__typename}}}return e}})},disabled:C},i.createElement(v.a,{color:"textSecondary",variant:"caption"},C?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u66f4\u591a")))),i.createElement(o.a,{sticky:!0,className:k.aider},i.createElement(s,null),i.createElement(d,null)),i.createElement(f.a,{in:N},i.createElement(b.a,{size:"small",className:k.scollButton},i.createElement(E.a,null)))))}}}]);
//# sourceMappingURL=20.8b3a5505.chunk.js.map