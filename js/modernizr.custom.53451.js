window.Modernizr=function(F,H,J){function K(e,f){var g=e.charAt(0).toUpperCase()+e.substr(1),h=(e+" "+Y.join(g+" ")+g).split(" ");return I(h,f)}function I(c,e){for(var f in c){if(U[c[f]]!==J){return e=="pfx"?c[f]:!0}}return !1}function G(c,d){return !!~(""+c).indexOf(d)}function aj(c,d){return typeof c===d}function ai(c,d){return ah(X.join(c+";")+(d||""))}function ah(b){U.cssText=b}var L="2.0.6",N={},P=!0,Q=H.documentElement,R=H.head||H.getElementsByTagName("head")[0],S="modernizr",T=H.createElement(S),U=T.style,V,W=Object.prototype.toString,X=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),Y="Webkit Moz O ms Khtml".split(" "),Z={},aa={},ab={},ac=[],ad=function(b,g,i,l){var m,n,o,p=H.createElement("div");if(parseInt(i,10)){while(i--){o=H.createElement("div"),o.id=l?l[i]:S+(i+1),p.appendChild(o)}}m=["&shy;","<style>",b,"</style>"].join(""),p.id=S,p.innerHTML+=m,Q.appendChild(p),n=g(p,b),p.parentNode.removeChild(p);return !!n},ae,af={}.hasOwnProperty,ag;!aj(af,J)&&!aj(af.call,J)?ag=function(c,d){return af.call(c,d)}:ag=function(c,d){return d in c&&aj(c.constructor.prototype[d],J)};var M=function(b,e){var g=b.join(""),h=e.length;ad(g,function(f,j){var k=H.styleSheets[H.styleSheets.length-1],l=k.cssRules&&k.cssRules[0]?k.cssRules[0].cssText:k.cssText||"",m=f.childNodes,n={};while(h--){n[m[h].id]=m[h]}N.csstransforms3d=n.csstransforms3d.offsetLeft===9},h,e)}([,["@media (",X.join("transform-3d),("),S,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);Z.csstransforms=function(){return !!I(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},Z.csstransforms3d=function(){var b=!!I(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);b&&"webkitPerspective" in Q.style&&(b=N.csstransforms3d);return b},Z.csstransitions=function(){return K("transitionProperty")};for(var O in Z){ag(Z,O)&&(ae=O.toLowerCase(),N[ae]=Z[O](),ac.push((N[ae]?"":"no-")+ae))}ah(""),T=V=null,F.attachEvent&&function(){var b=H.createElement("div");b.innerHTML="<elem></elem>";return b.childNodes.length!==1}()&&function(c,t){function ao(d){var e=-1;while(++e<x){d.createElement(w[e])}}c.iepp=c.iepp||{};var u=c.iepp,v=u.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",w=v.split("|"),x=w.length,y=new RegExp("(^|\\s)("+v+")","gi"),z=new RegExp("<(/*)("+v+")","gi"),A=/^\s*[\{\}]\s*$/,B=new RegExp("(^|[^\\n]*?\\s)("+v+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),C=t.createDocumentFragment(),D=t.documentElement,E=D.firstChild,ak=t.createElement("body"),al=t.createElement("style"),am=/print|all/,an;u.getCSS=function(d,i){if(d+""===J){return""}var j=-1,k=d.length,l,m=[];while(++j<k){l=d[j];if(l.disabled){continue}i=l.media||i,am.test(i)&&m.push(u.getCSS(l.imports,i),l.cssText),i="all"}return m.join("")},u.parseCSS=function(d){var e=[],f;while((f=B.exec(d))!=null){e.push(((A.exec(f[1])?"\n":f[1])+f[2]+f[3]).replace(y,"$1.iepp_$2")+f[4])}return e.join("\n")},u.writeHTML=function(){var b=-1;an=an||t.body;while(++b<x){var f=t.getElementsByTagName(w[b]),g=f.length,h=-1;while(++h<g){f[h].className.indexOf("iepp_")<0&&(f[h].className+=" iepp_"+w[b])}}C.appendChild(an),D.appendChild(ak),ak.className=an.className,ak.id=an.id,ak.innerHTML=an.innerHTML.replace(z,"<$1font")},u._beforePrint=function(){al.styleSheet.cssText=u.parseCSS(u.getCSS(t.styleSheets,"all")),u.writeHTML()},u.restoreHTML=function(){ak.innerHTML="",D.removeChild(ak),D.appendChild(an)},u._afterPrint=function(){u.restoreHTML(),al.styleSheet.cssText=""},ao(t),ao(C);u.disablePP||(E.insertBefore(al,E.firstChild),al.media="print",al.className="iepp-printshim",c.attachEvent("onbeforeprint",u._beforePrint),c.attachEvent("onafterprint",u._afterPrint))}(F,H),N._version=L,N._prefixes=X,N._domPrefixes=Y,N.testProp=function(b){return I([b])},N.testAllProps=K,N.testStyles=ad,Q.className=Q.className.replace(/\bno-js\b/,"")+(P?" js "+ac.join(" "):"");return N}(this,this.document),function(I,K,M){function aa(b){return !b||b=="loaded"||b=="complete"}function Z(){var c=1,d=-1;while(af.length- ++d){if(af[d].s&&!(c=af[d].r)){break}}c&&U()}function Y(b){var e=K.createElement("script"),f;e.src=b.s,e.onreadystatechange=e.onload=function(){!f&&aa(e.readyState)&&(f=1,Z(),e.onload=e.onreadystatechange=null)},ac(function(){f||(f=1,Z())},X.errorTimeout),b.e?e.onload():ad.parentNode.insertBefore(e,ad)}function W(b){var f=K.createElement("link"),g;f.href=b.s,f.rel="stylesheet",f.type="text/css";if(!b.e&&(am||ah)){var h=function(c){ac(function(){if(!g){try{c.sheet.cssRules.length?(g=1,Z()):h(c)}catch(a){a.code==1000||a.message=="security"||a.message=="denied"?(g=1,ac(function(){Z()},0)):h(c)}}},0)};h(f)}else{f.onload=function(){g||(g=1,ac(function(){Z()},0))},b.e&&f.onload()}ac(function(){g||(g=1,Z())},X.errorTimeout),!b.e&&ad.parentNode.insertBefore(f,ad)}function U(){var b=af.shift();ag=1,b?b.t?ac(function(){b.t=="c"?W(b):Y(b)},0):(b(),Z()):ag=0}function S(b,g,j,k,m,n){function p(){!s&&aa(q.readyState)&&(t.r=s=1,!ag&&Z(),q.onload=q.onreadystatechange=null,ac(function(){ak.removeChild(q)},0))}var q=K.createElement(b),s=0,t={t:j,s:g,e:n};q.src=q.data=g,!ai&&(q.style.display="none"),q.width=q.height="0",b!="object"&&(q.type=j),q.onload=q.onreadystatechange=p,b=="img"?q.onerror=p:b=="script"&&(q.onerror=function(){t.e=t.r=1,U()}),af.splice(k,0,t),ak.insertBefore(q,ai?null:ad),ac(function(){s||(ak.removeChild(q),t.r=t.e=s=1,Z())},X.errorTimeout)}function Q(e,f,g){var h=f=="c"?ap:ao;ag=0,f=f||"j",N(e)?S(h,e,f,this.i++,ab,g):(af.splice(this.i++,0,e),af.length==1&&U());return this}function O(){var b=X;b.loader={load:Q,i:0};return b}var ab=K.documentElement,ac=I.setTimeout,ad=K.getElementsByTagName("script")[0],ae={}.toString,af=[],ag=0,ah="MozAppearance" in ab.style,ai=ah&&!!K.createRange().compareNode,aj=ah&&!ai,ak=ai?ab:ad.parentNode,al=I.opera&&ae.call(I.opera)=="[object Opera]",am="webkitAppearance" in ab.style,an=am&&"async" in K.createElement("script"),ao=ah?"object":al||an?"img":"script",ap=am?"img":ao,J=Array.isArray||function(b){return ae.call(b)=="[object Array]"},L=function(b){return Object(b)===b},N=function(b){return typeof b=="string"},P=function(b){return ae.call(b)=="[object Function]"},R=[],T={},V,X;X=function(c){function k(i){var o=i.split("!"),p=R.length,q=o.pop(),r=o.length,s={url:q,origUrl:q,prefixes:o},t,u;for(u=0;u<r;u++){t=T[o[u]],t&&(s=t(s))}for(u=0;u<p;u++){s=R[u](s)}return s}function j(f,o,p,q,r){var s=k(f),t=s.autoCallback;if(!s.bypass){o&&(o=P(o)?o:o[f]||o[q]||o[f.split("/").pop().split("?")[0]]);if(s.instead){return s.instead(f,o,p,q,r)}p.load(s.url,s.forceCSS||!s.forceJS&&/css$/.test(s.url)?"c":M,s.noexec),(P(o)||P(t))&&p.load(function(){O(),o&&o(s.origUrl,r,q),t&&t(s.origUrl,r,q)})}}function d(e,o){function p(b){if(N(b)){j(b,t,o,0,q)}else{if(L(b)){for(u in b){b.hasOwnProperty(u)&&j(b[u],t,o,u,q)}}}}var q=!!e.test,r=q?e.yep:e.nope,s=e.load||e.both,t=e.callback,u;p(r),p(s),e.complete&&o.load(e.complete)}var l,m,n=this.yepnope.loader;if(N(c)){j(c,0,n,0)}else{if(J(c)){for(l=0;l<c.length;l++){m=c[l],N(m)?j(m,0,n,0):J(m)?X(m):L(m)&&d(m,n)}}else{L(c)&&d(c,n)}}},X.addPrefix=function(c,d){T[c]=d},X.addFilter=function(b){R.push(b)},X.errorTimeout=10000,K.readyState==null&&K.addEventListener&&(K.readyState="loading",K.addEventListener("DOMContentLoaded",V=function(){K.removeEventListener("DOMContentLoaded",V,0),K.readyState="complete"},0)),I.yepnope=O()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};