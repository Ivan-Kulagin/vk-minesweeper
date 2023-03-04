(function(e){function t(t){for(var n,a,s=t[0],o=t[1],f=t[2],u=0,c=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&c.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(c.length)c.shift()();return l.push.apply(l,f||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],n=!0,s=1;s<i.length;s++){var o=i[s];0!==r[o]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},l=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vk-minesweeper/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=o;l.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Minesweeper")]),t("div",{staticStyle:{"margin-bottom":"20px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.uiScale,expression:"uiScale"}],attrs:{type:"range",min:"10",max:"50"},domProps:{value:e.uiScale},on:{__r:function(t){e.uiScale=t.target.value}}})]),t("div",{staticClass:"game_container",style:{transform:`scale(${e.uiScale/10})`},on:{mouseleave:e.fearOff}},[t("div",{staticClass:"score_container"},[t("div",{staticStyle:{display:"flex"}},[t("div",{class:"digit d-"+e.minesRemaining[0]}),t("div",{class:"digit d-"+e.minesRemaining[1]}),t("div",{class:"digit d-"+e.minesRemaining[2]})]),t("button",{staticClass:"smile happy",class:{fear:e.fear,won:e.won,lost:e.lost},on:{click:e.restartGame}}),t("div",{staticStyle:{display:"flex"}},[t("div",{class:"digit d-"+e.timePassed[0]}),t("div",{class:"digit d-"+e.timePassed[1]}),t("div",{class:"digit d-"+e.timePassed[2]})])]),e._l(e.field,(function(i,n){return t("div",{key:n,staticStyle:{display:"flex","flex-direction":"row"}},e._l(i,(function(i,r){return t("Square",{key:16*n+r,staticClass:"box",class:{close:"field_init"===e.fieldState},attrs:{pos:{x:r,y:n},mine:i.mine,detonate:i.detonate,nearby:i.nearby,mark:i.mark,"marked-mine":i.markedMine,hidden:i.hidden},on:{"check-square":e.checkSquare,"check-mark":e.checkMark,"flags-update":e.flagsUpdate,"smile-fear":e.smileFear}})})),1)}))],2)])},l=[];i("5377"),i("14d9");const a=e=>{let t=[];const i=e.length;for(let n=0;n<i;n++){let i=Math.round(Math.random()*(e.length-1));t.push(e[i]),e.splice(i,1)}return t},s=(e,t)=>{let i=[];for(let n=0;n<e.length;n+=t)i.push(e.slice(n,n+t));return i},o=(e,t)=>{const i=e.y*t+e.x;let n=[i,i+t,i-t];return i%t!==t-1&&n.push(i+1,i+1+t,i+1-t),i%t!==0&&n.push(i-1,i-1+t,i-1-t),n=n.filter(e=>e>-1&&e<256),n},f=(e,t,i,n)=>{const r=[...Array(e*t-i).fill({mine:!1,hidden:!0}),...Array(i).fill({mine:!0,hidden:!0})],l=a(r),f=l.map((e,t)=>e.mine?-1:t).filter(e=>-1!==e),u=o(n,e),c=f.filter(e=>!u.includes(e)),h=a(c);for(let a=0;a<u.length;a++){let e=u[a];if(l[e].mine){let t=h[a];l[t]={...l[t],mine:!0},l[e]={...l[e],mine:!1}}}const m=s(l,e);return d(m)},d=e=>{const t=[...e];for(let i=0;i<t.length;i++)for(let e=0;e<t[i].length;e++)if(!t[i][e].mine){let n=0;t[i+1]&&t[i+1][e].mine&&n++,t[i+1]&&t[i+1][e+1]&&t[i+1][e+1].mine&&n++,t[i+1]&&t[i+1][e-1]&&t[i+1][e-1].mine&&n++,t[i][e+1]&&t[i][e+1].mine&&n++,t[i][e-1]&&t[i][e-1].mine&&n++,t[i-1]&&t[i-1][e].mine&&n++,t[i-1]&&t[i-1][e+1]&&t[i-1][e+1].mine&&n++,t[i-1]&&t[i-1][e-1]&&t[i-1][e-1].mine&&n++,t[i][e]={...t[i][e],nearby:n}}return t};var u=function(){var e=this,t=e._self._c;return t("button",{class:e.hidden?[{flag:"flag"===e.mark,question:"question"===e.mark,close:!e.mark,"mine-x":e.markedMine}]:["undefined"!==typeof e.nearby&&"nb-"+e.nearby,{mine:e.mine,"mine-a":e.detonate}],on:{click:function(t){return e.checkSquare(e.pos)},contextmenu:function(t){return t.preventDefault(),e.checkMark(e.pos)},mousedown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.hidden&&!e.mark&&e.$emit("smile-fear",!0))},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.$emit("smile-fear",!1)}}})},c=[],h={name:"Square",props:{hidden:{type:Boolean,default:!0},mine:{type:Boolean},markedMine:{type:Boolean},detonate:{type:Boolean},nearby:{type:Number},mark:{type:[String,null],default:null,validator(e){return["flag","question",null].includes(e)}},pos:{type:Object}},watch:{mark(e){e&&("flag"===e?this.$emit("flags-update",1):"question"===e&&this.$emit("flags-update",-1))}},methods:{checkSquare(e){this.$emit("check-square",e)},checkMark(e){this.$emit("check-mark",e)}}},m=h,p=(i("8237"),i("2877")),y=Object(p["a"])(m,u,c,!1,null,"4f6f0f93",null),g=y.exports;const k="field_init",v="field_ingame",S="field_over";var b={name:"App",components:{Square:g},data(){return{field:Array(16).fill(Array(16).fill({mine:!1,hidden:!0})),fieldState:k,lastClick:null,timerFunction:null,mines:40,timer:0,flags:0,won:!1,lost:!1,fear:!1,uiScale:17}},methods:{startTimer(){this.timerFunction=setInterval(()=>this.timer++,1e3)},smileFear(e){this.fear=e},fearOff(){this.fear=!1},restartGame(){this.field=Array(16).fill(Array(16).fill({mine:!1,hidden:!0})),this.fieldState=k,this.lastClick=null,clearInterval(this.timerFunction),this.timer=0,this.mines=40,this.flags=0,this.won=!1,this.lost=!1},flagsUpdate(e){this.flags+=e},checkMark(e){if(this.fieldState===v){this.$forceUpdate();let t=this.field[e.y][e.x]["mark"],i=this.field[e.y][e.x]["hidden"];!t&&i?this.field[e.y][e.x]={...this.field[e.y][e.x],mark:"flag"}:"flag"===t?this.field[e.y][e.x]={...this.field[e.y][e.x],mark:"question"}:"question"===t&&(this.field[e.y][e.x]={...this.field[e.y][e.x],mark:null})}},checkSquare(e){this.lastClick=e,this.fieldState===v?(this.$forceUpdate(),this.revealSquare(e)):this.fieldState===k&&(this.createGameField(this.lastClick),this.fieldState=v,this.startTimer(),this.revealSquare(e))},getNeighbors(e){let t,i,n,r,l,a,s,o,[f,d]=[e.x,e.y];this.field[d-1]&&(t={...this.field[d-1][f],pos:{y:d-1,x:f}},this.field[d-1][f+1]&&(i={...this.field[d-1][f+1],pos:{y:d-1,x:f+1}}),this.field[d-1][f-1]&&(n={...this.field[d-1][f-1],pos:{y:d-1,x:f-1}})),this.field[d][f+1]&&(r={...this.field[d][f+1],pos:{y:d,x:f+1}}),this.field[d][f-1]&&(l={...this.field[d][f-1],pos:{y:d,x:f-1}}),this.field[d+1]&&(a={...this.field[d+1][f],pos:{y:d+1,x:f}},this.field[d+1][f+1]&&(s={...this.field[d+1][f+1],pos:{y:d+1,x:f+1}}),this.field[d+1][f-1]&&(o={...this.field[d+1][f-1],pos:{y:d+1,x:f-1}}));let u={N:t,NE:i,E:r,SE:s,S:a,SW:o,W:l,NW:n};return Object.values(u).filter(e=>e&&e.hidden)},revealSquare(e){let t=this.field[e.y][e.x];if(!t.mark&&(t.hidden=!1,t.mine&&this.looseGame(e),0===this.getSafeSquaresRemaining()&&this.winGame(),!(t.nearby>0)&&0===t.nearby)){let t=this.getNeighbors(e);for(let e of t){if(null===e||void 0===e||!e.pos)return;if(null!==e&&void 0!==e&&e.mine)return;this.revealSquare(e.pos)}}},createGameField(e){this.field=f(16,16,40,e)},looseGame(e){this.field[e.y][e.x]={...this.field[e.y][e.x],detonate:!0};let t=this.field.flat().filter(e=>e.mine&&"flag"===e.mark);for(let i of t)i.markedMine=!0;this.fieldState=S,this.lost=!0,clearInterval(this.timerFunction)},winGame(){let e=this.field.flat().filter(e=>e.mine);for(let t of e)t.mark="flag";this.fieldState=S,this.won=!0,clearInterval(this.timerFunction)},getSafeSquaresRemaining(){let e=this.field.flat().filter(e=>!e.mine&&e.hidden).length;return e}},computed:{minesRemaining(){return String(this.mines>this.flags?this.mines-this.flags:0).padStart(3,"0").split("")},timePassed(){return String(this.timer<1e3?this.timer:999).padStart(3,"0").split("")}}},x=b,w=(i("67f2"),Object(p["a"])(x,r,l,!1,null,null,null)),_=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(_)}).$mount("#app")},"67f2":function(e,t,i){"use strict";i("ce83")},8237:function(e,t,i){"use strict";i("8288")},8288:function(e,t,i){},ce83:function(e,t,i){}});
//# sourceMappingURL=app.d1236cef.js.map