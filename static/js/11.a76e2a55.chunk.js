(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[11],{284:function(e,t,a){"use strict";var n=a(0),r=a(115),l=a(117),c=a(6),o=Object(r.a)((function(e){return Object(l.a)({root:{width:"100%"}})}));function i(e){var t=o();return n.createElement("div",{className:Object(c.a)(t.root,e.className)},e.children)}var m=Object(r.a)((function(e){return Object(l.a)({root:{maxWidth:1600}})}));function u(e){var t=m();return n.createElement("div",{className:Object(c.a)(t.root,e.className)},e.children)}var s=Object(r.a)((function(e){return Object(l.a)({root:{maxWidth:1200}})}));function E(e){var t=s();return n.createElement("div",{style:Object.assign({},e.width?{width:e.width}:{}),className:Object(c.a)(t.root,e.className)},e.children)}var d=Object(r.a)((function(e){return Object(l.a)({root:{maxWidth:400}})}));function b(e){var t=d();return n.createElement("div",{className:Object(c.a)(t.root,e.className)},e.children)}a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return E})),a.d(t,"a",(function(){return b}))},348:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(124),l=a(0),c=a.n(l),o=a(115),i=a(117),m=a(276),u=a(345),s=a(329),E=a(58),d=a(228),b=a(270),f=a(271),v=a(350),p=a(327),j=a(73),O=Object(o.a)((function(e){return Object(i.a)({root:{padding:e.spacing(1,0)},box:{padding:e.spacing(2,0),"& + &":{borderTop:"1px solid ".concat(e.palette.divider)}}})}));function g(){var e=O();return c.a.createElement(m.a,{className:e.root},c.a.createElement(m.a,{className:e.box},c.a.createElement(d.a,{variant:"subtitle1",gutterBottom:!0},"\u5e73\u5747\u8bc4\u5206"),c.a.createElement(v.a,{readOnly:!0,value:2,precision:.5,icon:c.a.createElement(p.a,{fontSize:"inherit"})})),c.a.createElement(m.a,{className:e.box},c.a.createElement(d.a,{variant:"subtitle1",gutterBottom:!0},"\u89c6\u9891\u56fe\u7247"),c.a.createElement(b.a,{cellHeight:"auto",cols:4},c.a.createElement(f.a,{cols:1},c.a.createElement(j.b,null)),c.a.createElement(f.a,{cols:1},c.a.createElement(j.b,null)),c.a.createElement(f.a,{cols:1},c.a.createElement(j.b,null)),c.a.createElement(f.a,{cols:1},c.a.createElement(j.b,null)),c.a.createElement(f.a,{cols:1},c.a.createElement(j.b,null)))),c.a.createElement(m.a,{className:e.box},c.a.createElement(d.a,{variant:"subtitle1"},"\u7cbe\u5f69\u70b9\u8bc4")))}var h=a(6),N=Object(o.a)((function(e){return Object(i.a)({root:{height:"100%"},default:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(5),color:e.palette.text.secondary},emptyIcon:{fontSize:150}})}));function x(e){var t=N(),a=e.html;return l.createElement(m.a,{className:t.root},a?l.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):l.createElement(m.a,{className:t.default},l.createElement("i",{className:Object(h.a)("iconfont icon-404",t.emptyIcon)}),l.createElement(d.a,null,"\u8be5\u8d44\u6e90\u6ca1\u6709\u4ecb\u7ecd")))}var y=Object(o.a)((function(e){return Object(i.a)({root:{padding:e.spacing(2,0)}})}));function k(){var e=y();return l.createElement(m.a,{className:e.root},l.createElement(d.a,{variant:"subtitle1",gutterBottom:!0},"\u559c\u6b22\u8be5\u89c6\u9891\u7684\u4e5f\u559c\u6b22"),l.createElement(b.a,{cellHeight:"auto",cols:4},l.createElement(f.a,null,l.createElement(j.b,null)),l.createElement(f.a,null,l.createElement(j.b,null)),l.createElement(f.a,null,l.createElement(j.b,null)),l.createElement(f.a,null,l.createElement(j.b,null)),l.createElement(f.a,null,l.createElement(j.b,null)),l.createElement(f.a,null,l.createElement(j.b,null))))}var w=a(261),I=a(328),C=a(229),S=a(295),B=a(305),H=a(287),W=a(309),z=a(258),D=a(296),J=Object(o.a)((function(e){return Object(i.a)({root:{backgroundColor:e.palette.background.paper}})}));function R(){var e=J();return l.createElement(m.a,{className:e.root},l.createElement(w.a,{subheader:l.createElement(I.a,null,"\u6f14\u804c\u8868")},[1,2,3,4].map((function(e,t){return l.createElement(C.a,{key:t},l.createElement(S.a,null,l.createElement(B.a,{src:""})),l.createElement(H.a,{primary:"\u59d3\u540d",secondary:"\u4ecb\u7ecd"}),l.createElement(W.a,null,l.createElement(z.a,null,l.createElement(D.a,null))))}))))}var T=a(284),$=a(74),_=a(100);function q(){var e=Object(r.a)(["\n  query($id: Int!) {\n    movie(id: $id) {\n      title\n      cover\n      posters\n      actors\n      description\n      author {\n        nickname\n        avatar\n      }\n    }\n  }\n"]);return q=function(){return e},e}a.d(t,"default",(function(){return A}));var L=Object(o.a)((function(e){return Object(i.a)({body:{display:"flex",margin:"0 auto"},main:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper,padding:e.spacing(1,6),borderRight:"1px solid ".concat(e.palette.divider),flex:4},aider:{flex:1},content:{flex:1}})})),M=Object($.b)(q());function A(){var e=Object(_.b)(M,{variables:{id:1}}),t=e.data,a=e.error;console.log(t,a);var r=L(),c=l.useState(0),o=Object(n.a)(c,2),i=o[0],d=o[1];return l.createElement(m.a,null,l.createElement(T.d,null,l.createElement(E.a,{aspectRatio:16/9,src:t&&t.movie&&t.movie.cover})),l.createElement(T.b,{className:r.body},l.createElement(T.c,{className:r.main},l.createElement(u.a,{value:i,onChange:function(e,t){return d(t)}},l.createElement(s.a,{label:"\u4fe1\u606f"}),l.createElement(s.a,{label:"\u76f8\u5173\u63a8\u8350"}),l.createElement(s.a,{label:"\u5173\u4e8e"})),l.createElement("div",{className:r.content},0===i&&l.createElement(g,null),1===i&&l.createElement(k,null),2===i&&l.createElement(x,{html:t&&t.movie&&t.movie.description}))),l.createElement(T.a,{className:r.aider},l.createElement(R,null))))}}}]);
//# sourceMappingURL=11.a76e2a55.chunk.js.map