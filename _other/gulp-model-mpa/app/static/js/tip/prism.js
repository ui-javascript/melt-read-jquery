"use strict";var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var u=/\blang(?:uage)?-(\w+)\b/i,t=0,N=_self.Prism={util:{encode:function(e){return e instanceof l?new l(e.type,N.util.encode(e.content),e.alias):"Array"===N.util.type(e)?e.map(N.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(N.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=N.util.clone(e[a]));return t;case"Array":return e.map&&e.map(function(e){return N.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=N.util.clone(N.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var r=(n=n||N.languages)[a];if(2==arguments.length){for(var s in t=e)t.hasOwnProperty(s)&&(r[s]=t[s]);return r}var i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);i[l]=r[l]}return N.languages.DFS(N.languages,function(e,t){t===n[a]&&e!=a&&(this[e]=i)}),n[a]=i},DFS:function(e,t,a,n){for(var r in n=n||{},e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],a||r),"Object"!==N.util.type(e[r])||n[N.util.objId(e[r])]?"Array"!==N.util.type(e[r])||n[N.util.objId(e[r])]||(n[N.util.objId(e[r])]=!0,N.languages.DFS(e[r],t,r,n)):(n[N.util.objId(e[r])]=!0,N.languages.DFS(e[r],t,null,n)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};N.hooks.run("before-highlightall",a);for(var n,r=a.elements||document.querySelectorAll(a.selector),s=0;n=r[s++];)N.highlightElement(n,!0===e,a.callback)},highlightElement:function(e,t,a){for(var n,r,s=e;s&&!u.test(s.className);)s=s.parentNode;s&&(n=(s.className.match(u)||[,""])[1],r=N.languages[n]),e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+n,s=e.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(u,"").replace(/\s+/g," ")+" language-"+n);var i=e.textContent,l={element:e,language:n,grammar:r,code:i};if(i&&r)if(N.hooks.run("before-highlight",l),t&&_self.Worker){var o=new Worker(N.filename);o.onmessage=function(e){l.highlightedCode=e.data,N.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a&&a.call(l.element),N.hooks.run("after-highlight",l),N.hooks.run("complete",l)},o.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else l.highlightedCode=N.highlight(l.code,l.grammar,l.language),N.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a&&a.call(e),N.hooks.run("after-highlight",l),N.hooks.run("complete",l);else N.hooks.run("complete",l)},highlight:function(e,t,a){var n=N.tokenize(e,t);return l.stringify(N.util.encode(n),a)},tokenize:function(e,t,a){var n=N.Token,r=[e],s=t.rest;if(s){for(var i in s)t[i]=s[i];delete t.rest}e:for(var i in t)if(t.hasOwnProperty(i)&&t[i]){var l=t[i];l="Array"===N.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],c=u.inside,g=!!u.lookbehind,p=!!u.greedy,d=0,m=u.alias;u=u.pattern||u;for(var f=0;f<r.length;f++){var h=r[f];if(r.length>e.length)break e;if(!(h instanceof n)){u.lastIndex=0;var y=1;if(!(x=u.exec(h))&&p&&f!=r.length-1){var v=r[f+1].matchedStr||r[f+1],b=h+v;if(f<r.length-2&&(b+=r[f+2].matchedStr||r[f+2]),u.lastIndex=0,!(x=u.exec(b)))continue;if((P=x.index+(g?x[1].length:0))>=h.length)continue;var k=x.index+x[0].length,w=h.length+v.length;y=3,k<=w&&(y=2,b=b.slice(0,w)),h=b}if(x){g&&(d=x[1].length);k=(P=x.index+d)+(x=x[0].slice(d)).length;var P,x,A=h.slice(0,P),j=h.slice(k),_=[f,y];A&&_.push(A);var S=new n(i,c?N.tokenize(x,c):x,m,x);_.push(S),j&&_.push(j),Array.prototype.splice.apply(r,_)}}}}}return r},hooks:{all:{},add:function(e,t){var a=N.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=N.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}}},l=N.Token=function(e,t,a,n){this.type=e,this.content=t,this.alias=a,this.matchedStr=n||null};if(l.stringify=function(t,a,e){if("string"==typeof t)return t;if("Array"===N.util.type(t))return t.map(function(e){return l.stringify(e,a,t)}).join("");var n={type:t.type,content:l.stringify(t.content,a,e),tag:"span",classes:["token",t.type],attributes:{},language:a,parent:e};if("comment"==n.type&&(n.attributes.spellcheck="true"),t.alias){var r="Array"===N.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(n.classes,r)}N.hooks.run("wrap",n);var s="";for(var i in n.attributes)s+=(s?" ":"")+i+'="'+(n.attributes[i]||"")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'" '+s+">"+n.content+"</"+n.tag+">"},!_self.document)return _self.addEventListener&&_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,r=t.immediateClose;_self.postMessage(N.highlight(n,N.languages[a],a)),r&&_self.close()},!1),_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(N.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",N.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var t,a=e.getAttribute("data-src"),n=e,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;n&&!r.test(n.className);)n=n.parentNode;if(n&&(t=(e.className.match(r)||[,""])[1]),!t){var s=(a.match(/\.(\w+)$/)||[,""])[1];t=o[s]||s}var i=document.createElement("code");i.className="language-"+t,e.textContent="",i.textContent="Loading…",e.appendChild(i);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(i.textContent=l.responseText,Prism.highlightElement(i)):400<=l.status?i.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:i.textContent="✖ Error: File does not exist or is empty")},l.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight));