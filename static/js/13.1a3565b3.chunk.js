(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[13],{424:function(e,a,t){"use strict";t.r(a);var n=t(50),l=t(0),r=t.n(l),c=t(417),o=t(328),i=t(312),s=t(99),u=t(81),m=t(47),d=t(23),E=Object(d.a)(r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");function b(){var e=Object(m.a)(),a=Object(u.h)(),t=a.data,r=a.loading;console.log(t,r);var d=Object(s.b)().enqueueSnackbar,b=Object(u.d)({onCompleted:function(a){d("\u767b\u5f55\u6210\u529f"),localStorage.setItem("access_token",null===a||void 0===a?void 0:a.login),e.gotoHome()},onError:function(e){console.log(e)}}),p=Object(n.a)(b,2),f=p[0],v=p[1].loading,g=l.useState(""),_=Object(n.a)(g,2),h=_[0],A=_[1],P=l.useState(""),C=Object(n.a)(P,2),O=C[0],R=C[1];return l.createElement("div",null,l.createElement("form",null,l.createElement(c.a,{id:"username",label:"\u7528\u6237\u540d",value:h,onChange:function(e){return A(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",fullWidth:!0,margin:"normal"}),l.createElement(c.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:O,onChange:function(e){return R(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",fullWidth:!0,margin:"normal"}),l.createElement(o.a,{variant:"contained",onClick:function(){f({variables:{username:h,password:O}})},disabled:v},v?"\u767b\u5f55\u4e2d":"\u767b\u5f55")),null===t||void 0===t?void 0:t.platform_auth_way.map((function(a,t){return l.createElement("div",{key:t},l.createElement(i.a,{onClick:function(){return function(a,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_FIREBASE_MEASUREMENTID:"G-8DLV2JEGMF",REACT_APP_FIREBASE_STORAGEBUCKET:"miss-806b9.appspot.com",REACT_APP_FIREBASE_AUTHDOMAIN:"miss-806b9.firebaseapp.com",REACT_APP_FIREBASE_MESSAGINGSENDERID:"235168205247",REACT_APP_FIREBASE_PROJECTID:"miss-806b9",REACT_APP_FIREBASE_APPID:"1:235168205247:web:205b138db89e2819cdf90a",REACT_APP_SENTRY_DSN:"https://dd33ce2bcf8742db81848a0a8809cca8@o394912.ingest.sentry.io/5245935",REACT_APP_FIREBASE_APIKEY:"AIzaSyCizAPnqkLpEsJzaiOTsvl0L-Dy8_tYhvA",REACT_APP_HTTP_URL:"https://sma2lbao.cn/api/graphql",REACT_APP_FIREBASE_DATABASEURL:"https://miss-806b9.firebaseio.com",REACT_APP_WEBSOCKET_URL:"wss://sma2lbao.cn/api/graphql",REACT_APP_UPLOAD_URL:"https://sma2lbao.cn/api/graphql"}).REACT_APP_HTTP_DOMAIN_URL||"",l=window.open(n+t,a,"width=450,height=450,toolbar=0,menubar=0,location=0,status=0");if(l){var r=setInterval((function(){l.postMessage({type:"access_token"},n)}),1e3);window.addEventListener("message",(function(a){var t=a.data;t&&"access_token_callback"===t.type&&(clearInterval(r),l&&l.close(),d(t.data.access_token?"\u767b\u5f55\u6210\u529f":t.data.error||"\u767b\u5f55\u5931\u8d25"),localStorage.setItem("access_token",t.data.access_token),e.gotoHome())}))}}(a.platform,a.url)}},l.createElement(E,null)))})))}var p=t(337);function f(){var e=Object(s.b)().enqueueSnackbar,a=l.useState(""),t=Object(n.a)(a,2),r=t[0],i=t[1],m=l.useState(""),d=Object(n.a)(m,2),E=d[0],b=d[1],f=l.useState(""),v=Object(n.a)(f,2),g=v[0],_=v[1],h=l.useState(""),A=Object(n.a)(h,2),P=A[0],C=A[1],O=Object(u.c)({variables:{username:r}}),R=O.data,S=O.loading;console.log("_changeUsername: ",r,R,S);var j=Object(u.j)({onCompleted:function(a){console.log(a),e("\u53d1\u9001\u6210\u529f")},onError:function(a){console.error(a),e("\u53d1\u9001\u5931\u8d25")}}),T=Object(n.a)(j,1)[0],k=Object(u.a)({onError:function(a){console.error(a),e("\u6ce8\u518c\u5931\u8d25")},onCompleted:function(a){console.log(a),e("\u6ce8\u518c\u6210\u529f")}}),I=Object(n.a)(k,1)[0];return l.createElement("div",null,l.createElement("form",null,l.createElement(c.a,{id:"username",label:"\u7528\u6237\u540d",required:!0,value:r,onChange:function(e){i(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",fullWidth:!0,margin:"normal"}),l.createElement(c.a,{id:"password",label:"\u5bc6\u7801",type:"password",required:!0,value:E,onChange:function(e){return b(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",fullWidth:!0,margin:"normal"}),l.createElement(c.a,{id:"email",label:"\u90ae\u7bb1",type:"email",required:!0,value:g,onChange:function(e){return _(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",fullWidth:!0,margin:"normal"}),l.createElement(p.a,null,l.createElement(c.a,{id:"code",label:"\u9a8c\u8bc1\u7801",value:P,onChange:function(e){return C(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",margin:"normal"}),l.createElement(o.a,{variant:"contained",onClick:function(){T({variables:{email:g}})}},"\u83b7\u53d6\u9a8c\u8bc1\u7801")),l.createElement(o.a,{variant:"contained",fullWidth:!0,onClick:function(){I({variables:{user:{username:r,password:E,email:g,code:P}}})}},"\u6ce8\u518c")))}var v=t(176),g=t.n(v),_=t(179),h=t(84),A=t(276),P=t(271),C=Object(_.autoPlay)(g.a),O=Object(A.a)((function(e){return Object(P.a)({image:{width:"100%",height:"100%"}})}));function R(e){var a=O(),t=e.images;return l.createElement("div",null,l.createElement(C,{enableMouseEvents:!0,index:0},t.map((function(e,t){return l.createElement("div",{className:a.image,key:t},l.createElement(h.b,{src:e}))}))))}R.defaultProps={images:["https://pic1.zhimg.com/v2-cc17d8b31fe162fdbfadba1d18b7836e_1200x500.jpg","http://n.sinaimg.cn/collect/crawl/20160224/ZFh0-fxprucv9824132.jpg"]};var S=R;t.d(a,"default",(function(){return T}));var j=Object(A.a)((function(e){return Object(P.a)({root:{width:"100%",height:"100vh",fontSize:0,overflow:"hidden"},left:{flex:1,backgroundColor:e.palette.primary.main},right:{flex:1,backgroundColor:e.palette.background.paper,display:"flex",alignItems:"center",justifyContent:"center"},main:{width:300}})}));function T(){var e=j(),a=l.useState(0),t=Object(n.a)(a,2),r=t[0],c=t[1];return l.createElement(p.a,{className:e.root,display:"flex"},l.createElement("div",{className:e.left},l.createElement(S,null)),l.createElement("div",{className:e.right},l.createElement("div",{className:e.main},l.createElement(o.a,{onClick:function(e){return c(0)}},"\u767b\u5f55"),l.createElement(o.a,{onClick:function(e){return c(1)}},"\u6ce8\u518c"),l.createElement("div",null,0===r&&l.createElement(b,null),1===r&&l.createElement(f,null)))))}}}]);
//# sourceMappingURL=13.1a3565b3.chunk.js.map