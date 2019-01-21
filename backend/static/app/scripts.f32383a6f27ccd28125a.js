var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var r={};for(var s in t[a.util.objId(e)]=r,e)e.hasOwnProperty(s)&&(r[s]=a.util.clone(e[s],t));return r;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(r=[],t[a.util.objId(e)]=r,e.forEach(function(e,n){r[n]=a.util.clone(e,t)}),r)}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var s=(r=r||a.languages)[e];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(s[i]=n[i]);return s}var l={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var i in n)n.hasOwnProperty(i)&&(l[i]=n[i]);l[o]=s[o]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,n,r){for(var s in r=r||{},e)e.hasOwnProperty(s)&&(t.call(e,s,e[s],n||s),"Object"!==a.util.type(e[s])||r[a.util.objId(e[s])]?"Array"!==a.util.type(e[s])||r[a.util.objId(e[s])]||(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,s,r)):(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var s,i=r.elements||e.querySelectorAll(r.selector),l=0;s=i[l++];)a.highlightElement(s,!0===t,r.callback)},highlightElement:function(t,n,r){for(var s,i,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),i=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&/pre/i.test((l=t.parentNode).nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var o={element:t,language:s,grammar:i,code:t.textContent};if(a.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(a.hooks.run("before-highlight",o),o.element.textContent=o.code,a.hooks.run("after-highlight",o)),void a.hooks.run("complete",o);if(a.hooks.run("before-highlight",o),n&&_self.Worker){var u=new Worker(a.filename);u.onmessage=function(e){o.highlightedCode=e.data,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(o.element),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},u.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=a.highlight(o.code,o.grammar,o.language),a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},highlight:function(e,t,r){var s={code:e,grammar:t,language:r};return a.hooks.run("before-tokenize",s),s.tokens=a.tokenize(s.code,s.grammar),a.hooks.run("after-tokenize",s),n.stringify(a.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,n,r,s,i,l){var o=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==l)return;var g=n[u];g="Array"===a.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var d=g[c],p=d.inside,m=!!d.lookbehind,f=!!d.greedy,h=0,b=d.alias;if(f&&!d.pattern.global){var y=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var k=r,w=s;k<t.length;w+=t[k].length,++k){var v=t[k];if(t.length>e.length)return;if(!(v instanceof o)){if(f&&k!=t.length-1){if(d.lastIndex=w,!(j=d.exec(e)))break;for(var P=j.index+(m?j[1].length:0),F=j.index+j[0].length,x=k,A=w,S=t.length;x<S&&(A<F||!t[x].type&&!t[x-1].greedy);++x)P>=(A+=t[x].length)&&(++k,w=A);if(t[k]instanceof o)continue;_=x-k,v=e.slice(w,A),j.index-=w}else{d.lastIndex=0;var j=d.exec(v),_=1}if(j){m&&(h=j[1]?j[1].length:0),F=(P=j.index+h)+(j=j[0].slice(h)).length;var N=v.slice(0,P),C=v.slice(F),E=[k,_];N&&(++k,w+=N.length,E.push(N));var $=new o(u,p?a.tokenize(j,p):j,b,j,f);if(E.push($),C&&E.push(C),Array.prototype.splice.apply(t,E),1!=_&&a.matchGrammar(e,t,n,k,w,!0,u),i)break}else if(i)break}}}}},tokenize:function(e,t,n){var r=[e],s=t.rest;if(s){for(var i in s)t[i]=s[i];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var s={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if(e.alias){var i="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,i)}a.hooks.run("wrap",s);var l=Object.keys(s.attributes).map(function(e){return e+'="'+(s.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(l?" "+l:"")+">"+s.content+"</"+s.tag+">"},!_self.document)return _self.addEventListener?(a.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.immediateClose;_self.postMessage(a.highlight(t.code,a.languages[n],n)),r&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),Prism.languages.javascript["template-string"].inside.interpolation.inside.rest=Prism.languages.javascript,Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,n=t.getAttribute("data-src"),r=t,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(a=(t.className.match(s)||[,""])[1]),!a){var i=(n.match(/\.(\w+)$/)||[,""])[1];a=e[i]||i}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading\u2026",t.appendChild(l);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(l.textContent=o.responseText,Prism.highlightElement(l)):l.textContent=o.status>=400?"\u2716 Error "+o.status+" while fetching file: "+o.statusText:"\u2716 Error: File does not exist or is empty")},o.send(null)}),Prism.plugins.toolbar&&Prism.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight)),Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,string:[{pattern:/@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,greedy:!0}],"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i}),Prism.languages.insertBefore("csharp","class-name",{"generic-method":{pattern:/\w+\s*<[^>\r\n]+?>\s*(?=\()/,inside:{function:/^\w+/,"class-name":{pattern:/\b[A-Z]\w*(?:\.\w+)*\b/,inside:{punctuation:/\./}},keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}}),Prism.languages.dotnet=Prism.languages.csharp,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));