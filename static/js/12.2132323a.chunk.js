(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[12],{363:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(0),l=n(78),c=n(357),o=n(309),i=n(262),u=n(60),s=n(66),m=n(69),d=n(51),f=n(352);function b(){var e=Object(l.a)(["\n  mutation($username: String!, $password: String!) {\n    access_token(username: $username, password: $password)\n  }\n"]);return b=function(){return e},e}var g=Object(u.b)(b());function p(){var e=Object(d.f)(),t=Object(m.useSnackbar)().enqueueSnackbar,n=Object(s.a)(g,{onCompleted:function(n){t("\u767b\u5f55\u6210\u529f"),localStorage.setItem("access_token",n.access_token),e.push("/home")},onError:function(e){console.log(e)}}),l=Object(a.a)(n,2),u=l[0],b=l[1].loading,p=r.useState(""),h=Object(a.a)(p,2),v=h[0],E=h[1],j=r.useState(""),O=Object(a.a)(j,2),k=O[0],w=O[1];return r.createElement("div",null,r.createElement("form",null,r.createElement(c.a,{id:"username",label:"\u7528\u6237\u540d",value:v,onChange:function(e){return E(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",fullWidth:!0,margin:"normal"}),r.createElement(c.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:k,onChange:function(e){return w(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",fullWidth:!0,margin:"normal"}),r.createElement(o.a,{variant:"contained",onClick:function(){u({variables:{username:v,password:k}})},disabled:b},b?"\u767b\u5f55\u4e2d":"\u767b\u5f55")),r.createElement(i.a,{onClick:function(){var n=window.open("http://localhost:108/auth/github","github","width=450,height=450,toolbar=0,menubar=0,location=0,status=0");if(n){var a=setInterval((function(){n.postMessage({type:"access_token",signal:"\u5929\u738b\u76d6\u5730\u864e"},"http://localhost:108")}),1e3);window.addEventListener("message",(function(r){var l=r.data;l&&"access_token_callback"===l.type&&"\u5b9d\u5854\u9547\u6cb3\u5996"===l.signal&&(clearInterval(a),n&&n.close(),t(l.data.access_token?"\u767b\u5f55\u6210\u529f":l.data.error||"\u767b\u5f55\u5931\u8d25"),localStorage.setItem("access_token",l.data.access_token),e.push("/home"))}))}}},r.createElement(f.a,null)))}var h=n(284);function v(){var e=Object(l.a)(["\n  mutation(\n    $username: String!\n    $password: String!\n    $email: String!\n    $code: String!\n  ) {\n    add_user_with_code(\n      user: {\n        username: $username\n        password: $password\n        email: $email\n        code: $code\n      }\n    ) {\n      uid\n    }\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(l.a)(["\n  mutation($email: String!) {\n    send_email_opt(email: $email)\n  }\n"]);return E=function(){return e},e}var j=Object(u.b)(E()),O=Object(u.b)(v());function k(){var e=Object(m.useSnackbar)().enqueueSnackbar,t=r.useState(""),n=Object(a.a)(t,2),l=n[0],i=n[1],u=r.useState(""),d=Object(a.a)(u,2),f=d[0],b=d[1],g=r.useState(""),p=Object(a.a)(g,2),v=p[0],E=p[1],k=r.useState(""),w=Object(a.a)(k,2),S=w[0],C=w[1],_=Object(s.a)(j,{onCompleted:function(t){console.log(t),e("\u53d1\u9001\u6210\u529f")},onError:function(t){console.error(t),e("\u53d1\u9001\u5931\u8d25")}}),$=Object(a.a)(_,1)[0],y=Object(s.a)(O,{onError:function(t){console.error(t),e("\u6ce8\u518c\u5931\u8d25")},onCompleted:function(t){console.log(t),e("\u6ce8\u518c\u6210\u529f")}}),x=Object(a.a)(y,1)[0];return r.createElement("div",null,r.createElement("form",null,r.createElement(c.a,{id:"username",label:"\u7528\u6237\u540d",required:!0,value:l,onChange:function(e){return i(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",fullWidth:!0,margin:"normal"}),r.createElement(c.a,{id:"password",label:"\u5bc6\u7801",type:"password",required:!0,value:f,onChange:function(e){return b(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",fullWidth:!0,margin:"normal"}),r.createElement(c.a,{id:"email",label:"\u90ae\u7bb1",type:"email",required:!0,value:v,onChange:function(e){return E(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",fullWidth:!0,margin:"normal"}),r.createElement(h.a,null,r.createElement(c.a,{id:"code",label:"\u9a8c\u8bc1\u7801",value:S,onChange:function(e){return C(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",margin:"normal"}),r.createElement(o.a,{variant:"contained",onClick:function(){$({variables:{email:v}})}},"\u83b7\u53d6\u9a8c\u8bc1\u7801")),r.createElement(o.a,{variant:"contained",fullWidth:!0,onClick:function(){x({variables:{username:l,password:f,email:v,code:S}})}},"\u6ce8\u518c")))}var w=n(87),S=n.n(w),C=n(139),_=n(40),$=n(120),y=n(119),x=Object(C.autoPlay)(S.a),W=Object($.a)((function(e){return Object(y.a)({image:{width:"100%",height:"100%"}})}));function q(e){var t=W(),n=e.images;return r.createElement("div",null,r.createElement(x,{enableMouseEvents:!0,index:0},n.map((function(e,n){return r.createElement("div",{className:t.image,key:n},r.createElement(_.a,{src:e}))}))))}q.defaultProps={images:["https://pic1.zhimg.com/v2-cc17d8b31fe162fdbfadba1d18b7836e_1200x500.jpg","http://n.sinaimg.cn/collect/crawl/20160224/ZFh0-fxprucv9824132.jpg"]};var I=q;n.d(t,"default",(function(){return z}));var N=Object($.a)((function(e){return Object(y.a)({root:{width:"100%",height:"100vh",fontSize:0,overflow:"hidden"},left:{flex:1,backgroundColor:e.palette.primary.main},right:{flex:1,backgroundColor:e.palette.background.paper,display:"flex",alignItems:"center",justifyContent:"center"},main:{width:300}})}));function z(){var e=N(),t=r.useState(0),n=Object(a.a)(t,2),l=n[0],c=n[1];return r.createElement(h.a,{className:e.root,display:"flex"},r.createElement("div",{className:e.left},r.createElement(I,null)),r.createElement("div",{className:e.right},r.createElement("div",{className:e.main},r.createElement(o.a,{onClick:function(e){return c(0)}},"\u767b\u5f55"),r.createElement(o.a,{onClick:function(e){return c(1)}},"\u6ce8\u518c"),r.createElement("div",null,0===l&&r.createElement(p,null),1===l&&r.createElement(k,null)))))}}}]);
//# sourceMappingURL=12.2132323a.chunk.js.map