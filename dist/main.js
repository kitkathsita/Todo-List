(()=>{"use strict";var n,e,t,r,o,i,a,s,c,p,l,d,u,f,v={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,":root {\n  --dark-pink: #FF8DC7;\n  --light-pink: #FFACC7;\n  --belge: #FFDDD2;\n  --peach: #FFB9B9;\n  --white: #F9F9F9;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  border: 0%;\n  padding: 0%;\n  margin: 0%;\n}\n\n#bigContent {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 100vh;\n}\n\n.right {\n  background-color: var(--white);\n  padding: 20px;\n  font-family: 'Ubuntu Condensed', sans-serif;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n  background-color: var(--dark-pink);\n  margin: 0%;\n  padding: 20px;\n  gap: 10px;\n}\n\n#title > h1 {\n  margin: 0%;\n  font-family: 'Ubuntu Condensed', sans-serif;\n  font-size: min(40px, 10vw);\n}\n\n#title > span {\n  font-size: 40px;\n}\n\n#clasification {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.option, .project {\n  font-size: 20px;\n  background-color: white;\n  padding: 10px;\n  cursor: pointer;\n  border: 2px solid white;\n  border-radius: 10px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.option:hover, .project:hover {\n  border: 2px solid var(--light-pink);\n}\n\n.first{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.first>h2 {\n  font-size: 30px;\n  margin: 0%;\n  padding: 15px 0px 15px 0px;\n}\n\n.first>i {\n  font-size: 30px;\n  padding: 0px 15px 0px 15px;\n  cursor: pointer;\n}\n\n.first>i:hover{\n  color: var(--dark-pink);\n}\n\n.option>i, .project>i {\n  font-size: 20px;\n  color: black;\n}\n\n.option>p, .project>p {\n  margin: 0%;\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return v[n](t,t.exports,m),t.exports}m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),i=m.n(o),a=m(565),s=m.n(a),c=m(216),p=m.n(c),l=m(589),d=m.n(l),u=m(426),(f={}).styleTagTransform=d(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();