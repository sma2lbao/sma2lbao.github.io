(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[12],{376:function(e,t,n){"use strict";var c=n(26),r=n(0),a=n(50),l=n(274),i=n(269),o=n(336),u=n(100),s=n(549),d=Object(l.a)((function(e){return Object(i.a)({root:{display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:function(e){var t;return null!==(t=e.width)&&void 0!==t?t:"100%"},height:function(e){var t;return null!==(t=e.height)&&void 0!==t?t:"100%"},color:e.palette.text.secondary,flex:1},icon:e.custom.base.icon.large})})),f=function(e){var t=e.onComplete,n=e.onError,l=e.children,i=e.component,f=e.custom,m=d(e),v=r.createRef(),p=Object(a.t)({onCompleted:function(e){t&&t(e.upload_file_oss)},onError:function(e){n&&n(e.message)}}),h=Object(c.a)(p,2),E=h[0],b=h[1].loading,g=i||"div";return r.createElement(g,{role:"button",onClick:function(){var e;b||(null===(e=v.current)||void 0===e||e.click())}},r.createElement("input",{ref:v,style:{display:"none"},type:"file",accept:"*",onChange:function(e){var t=e.currentTarget,n=t.validity,r=Object(c.a)(t.files,1)[0];n.valid&&E({variables:{file:r}})}}),f?{children:l}:r.createElement(o.a,{className:m.root},r.createElement("div",null,r.createElement(s.a,{className:m.icon})),r.createElement(u.a,{variant:"h6"},b?"\u4e0a\u4f20\u4e2d...":"\u70b9\u51fb\u4e0a\u4f20")))};f.defaultProps={custom:!1},n.d(t,"a",(function(){return f}))},549:function(e,t,n){"use strict";var c=n(0),r=n.n(c),a=n(25);t.a=Object(a.a)(r.a.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload")},585:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(376);t.default=function(){return c.createElement("div",null,c.createElement("div",null,c.createElement(r.a,null)))}}}]);
//# sourceMappingURL=12.6a971730.chunk.js.map