(()=>{"use strict";var e,t={247:()=>{const e=window.wp.blocks,t=window.wp.element,r=(window.React,window.wp.blockEditor);(0,e.registerBlockType)("custom-block-lab/sample",{edit:function(e){let{attributes:s,setAttributes:o}=e;const{message:a}=s;return(0,t.createElement)("div",(0,r.useBlockProps)(),(0,t.createElement)(r.RichText,{className:"message",tagName:"p",value:a,onChange:e=>o({message:e}),placeholder:"テキストを入力"}))},save:function(e){let{attributes:s}=e;const{message:o}=s;return(0,t.createElement)("div",r.useBlockProps.save(),(0,t.createElement)("p",{className:"message"},o))}})}},r={};function s(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,s),a.exports}s.m=t,e=[],s.O=(t,r,o,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(s.O).every((e=>s.O[e](r[c])))?r.splice(c--,1):(l=!1,a<n&&(n=a));if(l){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={953:0,974:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],l=r[1],c=r[2],i=0;if(n.some((t=>0!==e[t]))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(c)var u=c(s)}for(t&&t(r);i<n.length;i++)a=n[i],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},r=self.webpackChunkcustom_block_lab=self.webpackChunkcustom_block_lab||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=s.O(void 0,[974],(()=>s(247)));o=s.O(o)})();