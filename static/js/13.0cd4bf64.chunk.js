(this.webpackJsonpmiss=this.webpackJsonpmiss||[]).push([[13],{393:function(e,t,l){"use strict";var n=l(25),o=l(0),r=l(403),a=(l(442),l(274)),i=l(269),c=Object(a.a)((function(e){return Object(i.a)({root:{},editor:{minHeight:220}})})),s=function(e){var t="RichEditor-styleButton";e.active&&(t+=" RichEditor-activeButton");return o.createElement("span",{className:t,onMouseDown:function(t){t.preventDefault(),e.onToggle(e.style)}},e.label)},u=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],d=function(e){var t=e.editorState,l=t.getSelection(),n=t.getCurrentContent().getBlockForKey(l.getStartKey()).getType();return o.createElement("div",{className:"RichEditor-controls"},u.map((function(t){return o.createElement(s,{key:t.label,active:t.style===n,label:t.label,onToggle:e.onToggle,style:t.style})})))},y=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],b=function(e){var t=e.editorState.getCurrentInlineStyle();return o.createElement("div",{className:"RichEditor-controls"},y.map((function(l){return o.createElement(s,{key:l.label,active:t.has(l.style),label:l.label,onToggle:e.onToggle,style:l.style})})))},g=o.forwardRef((function(e,t){var l=c(),a=e.raw,i=e.onBlur,s=e.placeholder,u=o.useState((function(){return a?r.EditorState.createWithContent(Object(r.convertFromRaw)(JSON.parse(a))):r.EditorState.createEmpty()})),y=Object(n.a)(u,2),g=y[0],m=y[1];o.useImperativeHandle(t,(function(){return{getRawString:function(){return JSON.stringify(Object(r.convertToRaw)(g.getCurrentContent()))}}}));return o.createElement("div",{className:l.root},o.createElement(d,{editorState:g,onToggle:function(e){m(r.RichUtils.toggleBlockType(g,e))}}),o.createElement(b,{editorState:g,onToggle:function(e){m(r.RichUtils.toggleInlineStyle(g,e))}}),o.createElement("div",{className:l.editor},o.createElement(r.Editor,{blockStyleFn:function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return""}},customStyleMap:{CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}},editorState:g,handleKeyCommand:function(e,t){var l=r.RichUtils.handleKeyCommand(t,e);return l?(m(l),"handled"):"not-handled"},keyBindingFn:function(e){if(9===e.keyCode){var t=r.RichUtils.onTab(e,g,4);return t!==g&&m(t),null}return Object(r.getDefaultKeyBinding)(e)},onChange:m,onBlur:i,placeholder:s,spellCheck:!0})))}));l.d(t,"a",(function(){return g}));t.b=g},589:function(e,t,l){"use strict";l.r(t);var n=l(0),o=l(393);t.default=function(){return n.createElement("div",null,n.createElement("div",null,n.createElement(o.b,null)))}}}]);
//# sourceMappingURL=13.0cd4bf64.chunk.js.map