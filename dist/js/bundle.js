!function(){"use strict";var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},y=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function A(t){return"none"!==window.getComputedStyle(t).display}function L(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function N(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var S=!1;try{var B=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("test",null,B)}catch(t){}var H=!!S&&{passive:!0};function D(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],a)}}function O(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},S=t.useLocalStorage;if(S){var B=navigator.userAgent,H=new Date;try{(b=l.localStorage)?(b.setItem(H,H),S=b.getItem(H)==H,b.removeItem(H)):S=!1,S||(b={})}catch(t){S=!1}S&&(b.tnsApp&&b.tnsApp!==B&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=B)}var I=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=l[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),S),P=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),S),W=b.tMQ?r(b.tMQ):o(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),S),z=b.tTf?r(b.tTf):o(b,"tTf",L("transform"),S),q=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(z),S),j=b.tTDu?r(b.tTDu):o(b,"tTDu",L("transitionDuration"),S),F=b.tTDe?r(b.tTDe):o(b,"tTDe",L("transitionDelay"),S),_=b.tADu?r(b.tADu):o(b,"tADu",L("animationDuration"),S),V=b.tADe?r(b.tADe):o(b,"tADe",L("animationDelay"),S),G=b.tTE?r(b.tTE):o(b,"tTE",N(j,"Transition"),S),Q=b.tAE?r(b.tAE):o(b,"tAE",N(_,"Animation"),S),X=l.console&&"function"==typeof l.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(K[e]=i,!a||!a.nodeName)return void(X&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=a(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,ut,lt="horizontal"===t.axis,st=n.createElement("div"),ct=n.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,ht=pt.length,mt=Dn(),yt=!1;J&&$n(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt,Tt,Et,At=t.autoWidth,Lt=Pn("fixedWidth"),Nt=Pn("edgePadding"),St=Pn("gutter"),Bt=Rn(),Ht=Pn("center"),Dt=At?1:Math.floor(Pn("items")),Ot=Pn("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Rt=Pn("arrowKeys"),It=Pn("speed"),Pt=t.rewind,Wt=!Pt&&t.loop,zt=Pn("autoHeight"),qt=Pn("controls"),jt=Pn("controlsText"),Ft=Pn("nav"),_t=Pn("touch"),Vt=Pn("mouseDrag"),Gt=Pn("autoplay"),Qt=Pn("autoplayTimeout"),Xt=Pn("autoplayText"),Yt=Pn("autoplayHoverPause"),Kt=Pn("autoplayResetOnVisibility"),Jt=(null,Tt=Pn("nonce"),Et=document.createElement("style"),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Ut=t.lazyload,Zt=t.lazyloadSelector,$t=[],te=Wt?(Ct=function(){if(At||Lt&&!kt)return ht-1;var e=Lt?"fixedWidth":"items",n=[];if((Lt||t[e]<ht)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Lt||a<ht)&&n.push(a)}return n.length||n.push(0),Math.ceil(Lt?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-ht)/2):4*Ct-ht,Mt=Math.max(Ct,Mt),In("edgePadding")?Mt+1:Mt):0,ee=Z?ht+2*te:ht+te,ne=!(!Lt&&!At||Wt),ie=Lt?Ei():null,ae=!Z||!Wt,re=lt?"left":"top",oe="",ue="",le=Lt?function(){return Ht&&!Wt?ht-1:Math.ceil(-ie/(Lt+St))}:At?function(){for(var t=0;t<ee;t++)if(gt[t]>=-ie)return t}:function(){return Ht&&Z&&!Wt?ht-1:Wt||Z?Math.max(0,ee-Math.ceil(Dt)):ee-1},se=Sn(Pn("startIndex")),ce=se,fe=(Nn(),0),de=At?null:le(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,he=!pe||"?",me=!1,ye=t.onInit,ge=new k,xe=" tns-slider tns-"+t.mode,be=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),we=Pn("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||At)&&Zn(),Ee=!1,Ae={click:ki,keydown:function(t){t=Fi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||ki(t,-1):Ke.disabled||ki(t,1))}},Le={click:function(t){if(me){if(ve)return;Di()}for(var e=_i(t=Fi(t));e!==$e&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=an=Number(x(e,"data-nav")),i=Lt||At?n*ht/en:n*Dt;Oi(Re?n:Math.min(Math.ceil(i),ht-1),t),rn===n&&(fn&&zi(),an=-1)}},keydown:function(t){t=Fi(t);var e=n.activeElement;if(g(e,"data-nav")){var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));i>=0&&(0===i?a>0&&ji(Ze[a-1]):1===i?a<en-1&&ji(Ze[a+1]):(an=a,Oi(a,t)))}}},Ne={mouseover:function(){fn&&(Ii(),dn=!0)},mouseout:function(){dn&&(Ri(),dn=!1)}},Se={visibilitychange:function(){n.hidden?fn&&(Ii(),pn=!0):pn&&(Ri(),pn=!1)}},Be={keydown:function(t){t=Fi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&ki(t,0===e?-1:1)}},He={touchstart:Xi,touchmove:Yi,touchend:Ji,touchcancel:Ji},De={mousedown:Xi,mousemove:Yi,mouseup:Ji,mouseleave:Ji},Oe=In("controls"),ke=In("nav"),Re=!!At||t.navAsThumbnails,Ie=In("autoplay"),Pe=In("touch"),We=In("mouseDrag"),ze="tns-slide-active",qe="tns-slide-cloned",je="tns-complete",Fe={load:function(t){li(_i(t))},error:function(t){var e;e=_i(t),m(e,"failed"),si(e)}},_e="force"===t.preventScrollOnTouch;if(Oe)var Ve,Ge,Qe=t.controlsContainer,Xe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Ke=t.nextButton,Je=t.prevButton?t.prevButton.outerHTML:"",Ue=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=At?ht:Zi(),nn=0,an=-1,rn=Hn(),on=rn,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Ie)var cn,fn,dn,vn,pn,hn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Pe||We)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Ln(we||Te),z&&(re=z,oe="translate",q?(oe+=lt?"3d(":"3d(0px, ",ue=lt?", 0px, 0px)":", 0px)"):(oe+=lt?"X(":"Y(",ue=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(In("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be),xe+=P||At?" tns-subpixel":" tns-no-subpixel",xe+=I?" tns-calc":" tns-no-calc",At&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,ft.className+=xe,Z?((ot=n.createElement("div")).id=be+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct),zt&&((ot||ct).className+=" tns-ah"),dt.insertBefore(st,ft),ct.appendChild(ft),v(pt,(function(t,e){m(t,"tns-item"),t.id||(t.id=be+"-item"+e),!Z&&rt&&m(t,rt),w(t,{"aria-hidden":"true",tabindex:"-1"})})),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var r=a%ht,o=pt[r].cloneNode(!0);if(m(o,qe),C(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=pt[ht-1-r].cloneNode(!0);m(u,qe),C(u,"id"),e.appendChild(u)}}ft.insertBefore(e,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=se,n=se+Math.min(ht,Dt);e<n;e++){var i=pt[e];i.style.left=100*(e-se)/Dt+"%",m(i,nt),y(i,rt)}if(lt&&(P||At?(f(Jt,"#"+be+" > .tns-item","font-size:"+l.getComputedStyle(pt[0]).fontSize+";",d(Jt)),f(Jt,"#"+be,"font-size:0;",d(Jt))):Z&&v(pt,(function(t,e){t.style.marginLeft=function(t){return I?I+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}))),W){if(j){var a=ot&&t.autoHeight?_n(t.speed):"";f(Jt,"#"+be+"-mw",a,d(Jt))}a=Wn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Jt,"#"+be+"-iw",a,d(Jt)),Z&&(a=lt&&!At?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(a+=_n(It)),f(Jt,"#"+be,a,d(Jt))),a=lt&&!At?qn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=jn(t.gutter)),Z||(j&&(a+=_n(It)),_&&(a+=Vn(It))),a&&f(Jt,"#"+be+" > .tns-item",a,d(Jt))}else Z&&zt&&(ot.style[j]=It/1e3+"s"),ct.style.cssText=Wn(Nt,St,Lt,zt),Z&&lt&&!At&&(ft.style.width=zn(Lt,St,Dt)),a=lt&&!At?qn(Lt,St,Dt):"",St&&(a+=jn(St)),a&&f(Jt,"#"+be+" > .tns-item",a,d(Jt));if(J&&W)for(var r in J){r=parseInt(r);var o=J[r],u=(a="",""),s="",c="",p="",h=At?null:Pn("items",r),g=Pn("fixedWidth",r),x=Pn("speed",r),b=Pn("edgePadding",r),w=Pn("autoHeight",r),C=Pn("gutter",r);j&&ot&&Pn("autoHeight",r)&&"speed"in o&&(u="#"+be+"-mw{"+_n(x)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+be+"-iw{"+Wn(b,C,g,x,w)+"}"),Z&&lt&&!At&&("fixedWidth"in o||"items"in o||Lt&&"gutter"in o)&&(c="width:"+zn(g,C,h)+";"),j&&"speed"in o&&(c+=_n(x)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in o||Lt&&"gutter"in o||!Z&&"items"in o)&&(p+=qn(g,C,h)),"gutter"in o&&(p+=jn(C)),!Z&&"speed"in o&&(j&&(p+=_n(x)),_&&(p+=Vn(x))),p&&(p="#"+be+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&Jt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Jt.cssRules.length)}}(),Gn();var En=Wt?Z?function(){var t=fe,e=de;t+=Ot,e-=Ot,Nt?(t+=1,e-=1):Lt&&(Bt+St)%(Lt+St)&&(e-=1),te&&(se>e?se-=ht:se<t&&(se+=ht))}:function(){if(se>de)for(;se>=fe+ht;)se-=ht;else if(se<fe)for(;se<=de-ht;)se+=ht}:function(){se=Math.max(fe,Math.min(de,se))},An=Z?function(){var t,e,n,i,a,r,o,u,l,s,c;Mi(ft,""),j||!It?(Ni(),It&&A(ft)||Di()):(t=ft,e=re,n=oe,i=ue,a=Ai(),r=It,o=Di,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),lt||Ui()}:function(){$t=[];var t={};t[G]=t[Q]=Di,O(pt[ce],t),D(pt[se],t),Si(ce,nt,it,!0),Si(se,rt,nt),G&&Q&&It&&A(ft)||Di()};return{version:"2.9.4",getInfo:ta,events:ge,goTo:Oi,play:function(){Gt&&!fn&&(Wi(),vn=!1)},pause:function(){fn&&(zi(),vn=!0)},isOn:yt,updateSliderHeight:hi,refresh:Gn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),O(l,{resize:Jn}),Rt&&O(n,Be),Qe&&O(Qe,Ae),$e&&O($e,Le),O(ft,Ne),O(ft,Se),mn&&O(mn,{click:qi}),Gt&&clearInterval(cn),Z&&G){var e={};e[G]=Di,O(ft,e)}_t&&O(ft,He),Vt&&O(ft,De);var i=[vt,Xe,Je,Ue,tn,yn];for(var a in Y.forEach((function(e,n){var a="container"===e?st:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),Y=nt=it=at=rt=lt=st=ct=ft=dt=vt=pt=ht=ut=mt=At=Lt=Nt=St=Bt=Dt=Ot=kt=Rt=It=Pt=Wt=zt=Jt=Ut=gt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=pe=he=me=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Le=Ne=Se=Be=He=De=Oe=ke=Re=Ie=Pe=We=ze=je=Fe=xt=qt=jt=Qe=Xe=Ye=Ke=Ve=Ge=Ft=$e=tn=Ze=en=nn=an=rn=on=un=ln=sn=Gt=Qt=hn=Xt=Yt=mn=yn=Kt=gn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=_t=Vt=null,this)"rebuild"!==a&&(this[a]=null);yt=!1},rebuild:function(){return R(a(t,K))}}}function Ln(t){t&&(qt=Ft=_t=Vt=Rt=Gt=Yt=Kt=!1)}function Nn(){for(var t=Z?se-te:se;t<0;)t+=ht;return t%ht+1}function Sn(t){return t=t?Math.max(0,Math.min(Wt?ht-1:ht-Dt,t)):0,Z?t+te:t}function Bn(t){for(null==t&&(t=se),Z&&(t-=te);t<0;)t+=ht;return Math.floor(t%ht)}function Hn(){var t,e=Bn();return t=Re?e:Lt||At?Math.ceil((e+1)*en/ht-1):Math.floor(e/Dt),!Wt&&Z&&se===de&&(t=en-1),t}function Dn(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function On(t){return"top"===t?"afterbegin":"beforeend"}function kn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||kn(t.parentNode)}}function Rn(){var t=Nt?2*Nt-St:0;return kn(dt)-t}function In(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function Pn(e,n){if(null==n&&(n=mt),"items"===e&&Lt)return Math.floor((Bt+St)/(Lt+St))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=Pn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Wn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&j&&i&&(r+=_n(i)),r}function zn(t,e,n){return t?(t+e)*ee+"px":I?I+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function qn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ee:n;i=I?I+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function jn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function _n(t){return Fn(j,18)+"transition-duration:"+t/1e3+"s;"}function Vn(t){return Fn(_,17)+"animation-duration:"+t/1e3+"s;"}function Gn(){if(In("autoHeight")||At||!lt){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;Ut||(e&&e.indexOf("data:image")<0?(t.src="",D(t,Fe),m(t,"loading"),t.src=e):li(t))})),e((function(){di(M(t),(function(){xt=!0}))})),In("autoHeight")&&(t=ci(se,Math.min(se+Dt-1,ee-1))),Ut?Qn():e((function(){di(M(t),Qn)}))}else Z&&Li(),Yn(),Kn()}function Qn(){if(At&&ht>1){var t=Wt?se:ht-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Xn():setTimeout((function(){e()}),16)}()}else Xn()}function Xn(){lt&&!At||(mi(),At?(ie=Ei(),Me&&(Te=Zn()),de=le(),Ln(we||Te)):Ui()),Z&&Li(),Yn(),Kn()}function Yn(){if(yi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+ht+"</div>"),bt=st.querySelector(".tns-liveregion .current"),Ie){var e=Gt?"stop":"start";mn?w(mn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(On(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Xt[0]+"</button>"),mn=st.querySelector("[data-action]")),mn&&D(mn,{click:qi}),Gt&&(Wi(),Yt&&D(ft,Ne),Kt&&D(ft,Se))}if(ke){if($e)w($e,{"aria-label":"Carousel Pagination"}),v(Ze=$e.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<ht;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(On(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if($i(),j){var r=j.substring(0,j.length-18).toLowerCase(),o="transition: all "+It/1e3+"s";r&&(o="-"+r+"-"+o),f(Jt,"[aria-controls^="+be+"-item]",o,d(Jt))}w(Ze[rn],{"aria-label":ln+(rn+1)+sn}),C(Ze[rn],"tabindex"),m(Ze[rn],un),D($e,Le)}Oe&&(Qe||Ye&&Ke||(st.insertAdjacentHTML(On(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+jt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+jt[1]+"</button></div>"),Qe=st.querySelector(".tns-controls")),Ye&&Ke||(Ye=Qe.children[0],Ke=Qe.children[1]),t.controlsContainer&&w(Qe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Ye,Ke],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Ye,{"data-controls":"prev"}),w(Ke,{"data-controls":"next"})),Ve=xi(Ye),Ge=xi(Ke),Ci(),Qe?D(Qe,Ae):(D(Ye,Ae),D(Ke,Ae))),ti()}function Kn(){if(Z&&G){var e={};e[G]=Di,D(ft,e)}_t&&D(ft,He,t.preventScrollOnTouch),Vt&&D(ft,De),Rt&&D(n,Be),"inner"===U?ge.on("outerResized",(function(){Un(),ge.emit("innerLoaded",ta())})):(J||Lt||At||zt||!lt)&&D(l,{resize:Jn}),zt&&("outer"===U?ge.on("innerLoaded",fi):we||fi()),ui(),we?ii():Te&&ni(),ge.on("indexChanged",vi),"inner"===U&&ge.emit("innerLoaded",ta()),"function"==typeof ye&&ye(ta()),yt=!0}function Jn(t){e((function(){Un(Fi(t))}))}function Un(e){if(yt){"outer"===U&&ge.emit("outerResized",ta(e)),mt=Dn();var i,a=ut,r=!1;J&&($n(),(i=a!==ut)&&ge.emit("newBreakpointStart",ta(e)));var o,u,l=Dt,s=we,c=Te,p=Rt,h=qt,g=Ft,x=_t,b=Vt,w=Gt,C=Yt,M=Kt,A=se;if(i){var L=Lt,N=zt,S=jt,B=Ht,H=Xt;if(!W)var k=St,R=Nt}if(Rt=Pn("arrowKeys"),qt=Pn("controls"),Ft=Pn("nav"),_t=Pn("touch"),Ht=Pn("center"),Vt=Pn("mouseDrag"),Gt=Pn("autoplay"),Yt=Pn("autoplayHoverPause"),Kt=Pn("autoplayResetOnVisibility"),i&&(we=Pn("disable"),Lt=Pn("fixedWidth"),It=Pn("speed"),zt=Pn("autoHeight"),jt=Pn("controlsText"),Xt=Pn("autoplayText"),Qt=Pn("autoplayTimeout"),W||(Nt=Pn("edgePadding"),St=Pn("gutter"))),Ln(we),Bt=Rn(),lt&&!At||we||(mi(),lt||(Ui(),r=!0)),(Lt||At)&&(ie=Ei(),de=le()),(i||Lt)&&(Dt=Pn("items"),Ot=Pn("slideBy"),(u=Dt!==l)&&(Lt||At||(de=le()),En())),i&&we!==s&&(we?ii():function(){if(Ce){if(Jt.disabled=!1,ft.className+=xe,Li(),Wt)for(var t=te;t--;)Z&&E(pt[t]),E(pt[ee-t-1]);if(!Z)for(var e=se,n=se+ht;e<n;e++){var i=pt[e],a=e<se+Dt?nt:rt;i.style.left=100*(e-se)/Dt+"%",m(i,a)}ei(),Ce=!1}}()),Me&&(i||Lt||At)&&(Te=Zn())!==c&&(Te?(Ni(Ai(Sn(0))),ni()):(function(){if(Ee){if(Nt&&W&&(ct.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)Z&&y(pt[e],t),y(pt[ee-e-1],t);ei(),Ee=!1}}(),r=!0)),Ln(we||Te),Gt||(Yt=Kt=!1),Rt!==p&&(Rt?D(n,Be):O(n,Be)),qt!==h&&(qt?Qe?E(Qe):(Ye&&E(Ye),Ke&&E(Ke)):Qe?T(Qe):(Ye&&T(Ye),Ke&&T(Ke))),Ft!==g&&(Ft?(E($e),$i()):T($e)),_t!==x&&(_t?D(ft,He,t.preventScrollOnTouch):O(ft,He)),Vt!==b&&(Vt?D(ft,De):O(ft,De)),Gt!==w&&(Gt?(mn&&E(mn),fn||vn||Wi()):(mn&&T(mn),fn&&zi())),Yt!==C&&(Yt?D(ft,Ne):O(ft,Ne)),Kt!==M&&(Kt?D(n,Se):O(n,Se)),i){if(Lt===L&&Ht===B||(r=!0),zt!==N&&(zt||(ct.style.height="")),qt&&jt!==S&&(Ye.innerHTML=jt[0],Ke.innerHTML=jt[1]),mn&&Xt!==H){var I=Gt?1:0,P=mn.innerHTML,z=P.length-H[I].length;P.substring(z)===H[I]&&(mn.innerHTML=P.substring(0,z)+Xt[I])}}else Ht&&(Lt||At)&&(r=!0);if((u||Lt&&!At)&&(en=Zi(),$i()),(o=se!==A)?(ge.emit("indexChanged",ta()),r=!0):u?o||vi():(Lt||At)&&(ui(),yi(),ai()),u&&!Z&&function(){for(var t=se+Math.min(ht,Dt),e=ee;e--;){var n=pt[e];e>=se&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-se)/Dt+"%",m(n,nt),y(n,rt)):n.style.left&&(n.style.left="",m(n,rt),y(n,nt)),y(n,it)}setTimeout((function(){v(pt,(function(t){y(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!W&&(Nt===R&&St===k||(ct.style.cssText=Wn(Nt,St,Lt,It,zt)),lt)){Z&&(ft.style.width=zn(Lt,St,Dt));var q=qn(Lt,St,Dt)+jn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Jt,d(Jt)-1),f(Jt,"#"+be+" > .tns-item",q,d(Jt))}zt&&fi(),r&&(Li(),ce=se)}i&&ge.emit("newBreakpointEnd",ta(e))}}function Zn(){if(!Lt&&!At)return ht<=(Ht?Dt-(Dt-1)/2:Dt);var t=Lt?(Lt+St)*ht:gt[ht],e=Nt?Bt+2*Nt:Bt+St;return Ht&&(e-=Lt?(Bt-Lt)/2:(Bt-(gt[se+1]-gt[se]-St))/2),t<=e}function $n(){for(var t in ut=0,J)t=parseInt(t),mt>=t&&(ut=t)}function ti(){!Gt&&mn&&T(mn),!Ft&&$e&&T($e),qt||(Qe?T(Qe):(Ye&&T(Ye),Ke&&T(Ke)))}function ei(){Gt&&mn&&E(mn),Ft&&$e&&E($e),qt&&(Qe?E(Qe):(Ye&&E(Ye),Ke&&E(Ke)))}function ni(){if(!Ee){if(Nt&&(ct.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)Z&&m(pt[e],t),m(pt[ee-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Jt.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),C(ft,["style"]),Wt)for(var t=te;t--;)Z&&T(pt[t]),T(pt[ee-t-1]);if(lt&&Z||C(ct,["style"]),!Z)for(var e=se,n=se+ht;e<n;e++){var i=pt[e];C(i,["style"]),y(i,nt),y(i,rt)}ti(),Ce=!0}}function ai(){var t=ri();bt.innerHTML!==t&&(bt.innerHTML=t)}function ri(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Ai());var e,n,i,a=se;if(Ht||Nt?(At||Lt)&&(n=-(parseFloat(t)+Nt),i=n+Bt+2*Nt):At&&(n=gt[se],i=n+Bt),At)gt.forEach((function(t,r){r<ee&&((Ht||Nt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Lt){var r=Lt+St;Ht||Nt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Bt/r)-1}else if(Ht||Nt){var o=Dt-1;if(Ht?(a-=o/2,e=se+o/2):e=se+o,Nt){var u=Nt*Dt/Bt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Dt-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function ui(){if(Ut&&!we){var t=oi();t.push(Zt),ci.apply(null,t).forEach((function(t){if(!h(t,je)){var e={};e[G]=function(t){t.stopPropagation()},D(t,e),D(t,Fe),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function li(t){m(t,"loaded"),si(t)}function si(t){m(t,je),y(t,"loading"),O(t,Fe)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,oi());e((function(){di(t,hi)}))}function di(t,n){return xt?n():(t.forEach((function(e,n){!Ut&&e.complete&&si(e),h(e,je)&&t.splice(n,1)})),t.length?void e((function(){di(t,n)})):n())}function vi(){ui(),yi(),ai(),Ci(),function(){if(Ft&&(rn=an>=0?an:Hn(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];w(t,{tabindex:"-1","aria-label":ln+(on+1)}),y(t,un),w(e,{"aria-label":ln+(rn+1)+sn}),C(e,"tabindex"),m(e,un),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=zt?pi(se,Dt):pi(te,ht),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function yi(){var t=oi(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?g(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),m(t,ze)):g(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,ze))}))}function gi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===gi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(qt&&!Pt&&!Wt){var t=Ve?Ye.disabled:bi(Ye),e=Ge?Ke.disabled:bi(Ke),n=se<=fe,i=!Pt&&se>=de;n&&!t&&wi(Ve,Ye,!0),!n&&t&&wi(Ve,Ye,!1),i&&!e&&wi(Ge,Ke,!0),!i&&e&&wi(Ge,Ke,!1)}}function Mi(t,e){j&&(t.style[j]=e)}function Ti(t){return null==t&&(t=se),At?(Bt-(Nt?St:0)-(gt[t+1]-gt[t]-St))/2:Lt?(Bt-Lt)/2:(Dt-1)/2}function Ei(){var t=Bt+(Nt?St:0)-(Lt?(Lt+St)*ee:gt[ee]);return Ht&&!Wt&&(t=Lt?-(Lt+St)*(ee-1)-Ti():Ti(ee-1)-gt[ee-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=se),lt&&!At)if(Lt)e=-(Lt+St)*t,Ht&&(e+=Ti());else{var n=z?ee:Dt;Ht&&(t-=Ti()),e=100*-t/n}else e=-gt[t],Ht&&At&&(e+=Ti());return ne&&(e=Math.max(e,ie)),e+(!lt||At||Lt?"px":"%")}function Li(t){Mi(ft,"0s"),Ni(t)}function Ni(t){null==t&&(t=Ai()),ft.style[re]=oe+t+ue}function Si(t,e,n,i){var a=t+Dt;Wt||(a=Math.min(a,ee));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-se)/Dt+"%"),at&&F&&(o.style[F]=o.style[V]=at*(r-t)/1e3+"s"),y(o,e),m(o,n),i&&$t.push(o)}}function Bi(t,e){ae&&En(),(se!==ce||e)&&(ge.emit("indexChanged",ta()),ge.emit("transitionStart",ta()),zt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),me=!0,An())}function Hi(t){return t.toLowerCase().replace(/-/g,"")}function Di(t){if(Z||me){if(ge.emit("transitionEnd",ta(t)),!Z&&$t.length>0)for(var e=0;e<$t.length;e++){var n=$t[e];n.style.left="",V&&F&&(n.style[V]="",n.style[F]=""),y(n,it),m(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Hi(t.propertyName)===Hi(re)){if(!ae){var i=se;En(),se!==i&&(ge.emit("indexChanged",ta()),Li())}"inner"===U&&ge.emit("innerLoaded",ta()),me=!1,ce=se}}}function Oi(t,e){if(!Te)if("prev"===t)ki(e,-1);else if("next"===t)ki(e,1);else{if(me){if(ve)return;Di()}var n=Bn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?ht-Dt-n:ht-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ht-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Dt){var a=i>0?1:-1;i+=se+i-ht>=fe?ht*a:2*ht*a*-1}se+=i,Z&&Wt&&(se<fe&&(se+=ht),se>de&&(se-=ht)),Bn(se)!==Bn(ce)&&Bi(e)}}function ki(t,e){if(me){if(ve)return;Di()}var n;if(!e){for(var i=_i(t=Fi(t));i!==Qe&&[Ye,Ke].indexOf(i)<0;)i=i.parentNode;var a=[Ye,Ke].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Pt){if(se===fe&&-1===e)return void Oi("last",t);if(se===de&&1===e)return void Oi("first",t)}e&&(se+=Ot*e,At&&(se=Math.floor(se)),Bi(n||t&&"keydown"===t.type?t:null))}function Ri(){cn=setInterval((function(){ki(null,hn)}),Qt),fn=!0}function Ii(){clearInterval(cn),fn=!1}function Pi(t,e){w(mn,{"data-action":t}),mn.innerHTML=gn[0]+t+gn[1]+e}function Wi(){Ri(),mn&&Pi("stop",Xt[1])}function zi(){Ii(),mn&&Pi("start",Xt[0])}function qi(){fn?(zi(),vn=!0):(Wi(),vn=!1)}function ji(t){t.focus()}function Fi(t){return Vi(t=t||l.event)?t.changedTouches[0]:t}function _i(t){return t.target||l.event.srcElement}function Vi(t){return t.type.indexOf("touch")>=0}function Gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Qi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Xi(t){if(me){if(ve)return;Di()}Gt&&fn&&Ii(),Mn=!0,bn&&(i(bn),bn=null);var e=Fi(t);ge.emit(Vi(t)?"touchStart":"dragStart",ta(t)),!Vi(t)&&["img","a"].indexOf(gi(_i(t)))>=0&&Gi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,Z&&(xn=parseFloat(ft.style[re].replace(oe,"")),Mi(ft,"0s"))}function Yi(t){if(Mn){var n=Fi(t);Cn.x=n.clientX,Cn.y=n.clientY,Z?bn||(bn=e((function(){Ki(t)}))):("?"===he&&(he=Qi()),he&&(_e=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&_e&&t.preventDefault()}}function Ki(t){if(he){if(i(bn),Mn&&(bn=e((function(){Ki(t)}))),"?"===he&&(he=Qi()),he){!_e&&Vi(t)&&(_e=!0);try{t.type&&ge.emit(Vi(t)?"touchMove":"dragMove",ta(t))}catch(t){}var n=xn,a=Tn(Cn,wn);!lt||Lt||At?(n+=a,n+="px"):(n+=z?a*Dt*100/((Bt+St)*ee):100*a/(Bt+St),n+="%"),ft.style[re]=oe+n+ue}}else Mn=!1}function Ji(n){if(Mn){bn&&(i(bn),bn=null),Z&&Mi(ft,""),Mn=!1;var a=Fi(n);Cn.x=a.clientX,Cn.y=a.clientY;var r=Tn(Cn,wn);if(Math.abs(r)){if(!Vi(n)){var o=_i(n);D(o,{click:function t(e){Gi(e),O(o,{click:t})}})}Z?bn=e((function(){if(lt&&!At){var t=-r*Dt/(Bt+St);t=r>0?Math.floor(t):Math.ceil(t),se+=t}else{var e=-(xn+r);if(e<=0)se=fe;else if(e>=gt[ee-1])se=de;else for(var i=0;i<ee&&e>=gt[i];)se=i,e>gt[i]&&r<0&&(se+=1),i++}Bi(n,r),ge.emit(Vi(n)?"touchEnd":"dragEnd",ta(n))})):he&&ki(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(_e=!1),pe&&(he="?"),Gt&&!fn&&Ri()}function Ui(){(ot||ct).style.height=gt[se+Dt]-gt[se]+"px"}function Zi(){var t=Lt?(Lt+St)*ht/Bt:ht/Dt;return Math.min(Math.ceil(t),ht)}function $i(){if(Ft&&!Re&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=T);t<e;)n(Ze[t]),t++;nn=en}}function ta(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Qe,hasControls:Oe,prevButton:Ye,nextButton:Ke,items:Dt,slideBy:Ot,cloneCount:te,slideCount:ht,slideCountNew:ee,index:se,indexCached:ce,displayIndex:Nn(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Jt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)},I=R({container:".projects__slider",items:4,mouseDrag:!0,swipeAngle:!1,speed:400,autoWidth:!0,autoHeight:!0,controls:!1});document.querySelector(".projects__arrow-left").addEventListener("click",(()=>{I.goTo("prev")})),document.querySelector(".projects__arrow-right").addEventListener("click",(()=>{I.goTo("next")}))}();
//# sourceMappingURL=bundle.js.map