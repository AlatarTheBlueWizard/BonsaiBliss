parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=function(e){if(e.currentStyle)var t=e.currentStyle["background-color"];else if(window.getComputedStyle)t=document.defaultView.getComputedStyle(e,null).getPropertyValue("background-color");if(-1==t.search("rgb"))return t;var n=function(e){return("0"+parseInt(e).toString(16)).slice(-2)};return"#"+n((t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+n(t[2])+n(t[3])},t=document.querySelectorAll(".cd-color-swatch");t.forEach(function(t){var n=document.createElement("b");n.innerText=e(t),t.parentNode.appendChild(n)});var n=document.querySelector("#buttons .cd-box"),o=n.innerHTML,r=document.createElement("div");r.classList.add("cd-box"),n.parentNode.appendChild(r),buttonsHtmlText=o.split("</button>"),buttonsHtmlText.map(function(e){if(e.indexOf("button")>=0){var t=e.split('class="'),n=t[0]+'class="';block2=t[1].split('"');var o=document.createElement("p");o.appendChild(document.createTextNode(n));var c=document.createElement("span");c.appendChild(document.createTextNode(block2[0])),o.appendChild(c),r.appendChild(o),o.appendChild(document.createTextNode('"'+block2[1]+"</button>"))}});var c=document.querySelector("#typography h1"),l=c.children[0],a=c.nextElementSibling,d=a.children[0];function i(e,t){var n=document.defaultView.getComputedStyle(e,null),o=Math.round(n.fontSize.replace("px",""))+"px",r=n.fontFamily.split(",")[0].replace(/\'/g,"").replace(/\"/g,""),c=n.fontWeight;t.innerText=c+" "+r+" "+o}i(c,l),i(a,d),window.addEventListener("resize",function(){i(c,l),i(a,d)});var u=document.querySelectorAll("main section"),s=document.querySelector(".cd-main-nav");function p(e,t,n){if(!(n<=0)){var o=(t-e.scrollTop)/n*10;setTimeout(function(){e.scrollTop=e.scrollTop+o,e.scrollTop!==t&&p(e,t,n-10)},10)}}function m(){u.forEach(function(e){var t=e,n=document.defaultView.getComputedStyle(t,null),o=t.height,r=n.marginTop.replace("px",""),c=document.querySelector('.cd-main-nav a[href="#'+t.id+'"]');parseInt(t.offsetTop-document.querySelector(".cd-main-nav").height-r)<=window.scrollY&&parseInt(t.offsetTop+o-r)>window.scrollY+1?c.classList.add("selected"):c.classList.remove("selected")})}s.innerHTML="",u.forEach(function(e){var t=document.createElement("li");t.innerHTML='<a href="#'.concat(e.id,'">').concat(e.children[0].innerHTML,"</a>"),s.appendChild(t)}),document.querySelector(".cd-nav-trigger").addEventListener("click",function(){document.querySelector("header").classList.toggle("nav-is-visible")}),document.querySelectorAll('.cd-main-nav a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector("header");t.classList.remove("nav-is-visible");var n=document.querySelector(this.hash),o=document.defaultView.getComputedStyle(n,null).marginTop.replace("px",""),r=t.scrollHeight;p(document.body,parseInt(n.offsetTop-r-o),200)})}),window.addEventListener("scroll",function(e){m(e.target)});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.f2d5935b.js.map