(()=>{var e,t,n,r,i={6505:(e,t,n)=>{"use strict";var r=n(7378),i=n(1542),a=n(1892),o=n.n(a),s=n(5760),c=n.n(s),l=n(8311),u=n.n(l),m=n(8192),f=n.n(m),d=n(8060),p=n.n(d),g=n(4865),b=n.n(g),h=n(6992),v={};v.styleTagTransform=b(),v.setAttributes=f(),v.insert=u().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p();o()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;var x=n(1602),y=n(9086),E=n(755),w=n(5870),S="SET_BACKGROUND",k="SET_COMPLEXITY",O="SET_TIME",A="SET_ALL_TIME",T="SET_COUNT_ITEMS",I="ADD_CHOOSEN_ITEM",j="RESET_OPENS_ITEMS",N="RESET_CHOOSEN_ITEMS",Z="ADD_OPENS_ITEM",_="SET_PICTURES",L="TOGGLE_SHOW_LEARN",C="TOGGLE_START_GAME",G="TOGGLE_WIN",U="TOGGLE_LOOSE",M=function(e){return e.pathname.split("").slice(1).join("")},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n(8365);return e.keys().map((function(t){return e(t)}))}(),Q={RAIN:"rain",SEA:"sea",FIRE:"fire"},P={EASY:"easy",MIDDLE:"middle",HARD:"hard"},R=[" Перед вами будет представлено игровое поле из четного количества квадратов,\n  за каждым из которых скрыта определенная картинка. Кликнув по квадрату, вы\n  увидите, какая картинка за ним закреплена.","Кликнув по следующему квадрату воможны 2 сценария:","1) Если выбранные квадраты скрывают одинаковые картинки, то они останутся открытыми","2) Если выбранные квадраты скрывают разные картинки, то через пол секунды они закроются."," Ваша задача найти за определенный промежуток времени все\n  пары картинок. Удачи!!!"];function z(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=S,X=k,Y=O,V=A,K=T,F=I,$=j,ee=N,te=Z,ne=_,re=L,ie=C,ae=G,oe=U,se={background:Q.SEA,complexityGame:P.EASY,countItems:12,pictures:H.filter((function(e,t){return t<6})),isShowLearn:!0,isStartGame:!1,isWin:!1,isLoose:!1,time:30,allTime:30,opensItems:[],chosenItems:[]};const ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case B:return J(J({},e),{},{background:t.background});case X:return J(J({},e),{},{complexityGame:t.complexityGame});case Y:return J(J({},e),{},{time:t.time});case V:return J(J({},e),{},{allTime:t.allTime});case re:return J(J({},e),{},{isShowLearn:t.isShowLearn});case ie:return J(J({},e),{},{isStartGame:t.isStartGame});case K:return J(J({},e),{},{countItems:t.countItems});case ne:return J(J({},e),{},{pictures:z(t.pictures)});case $:return J(J({},e),{},{opensItems:[]});case te:return J(J({},e),{},{opensItems:z(e.opensItems.concat([t.item]))});case ee:return J(J({},e),{},{chosenItems:[]});case F:return J(J({},e),{},{chosenItems:z(e.chosenItems.concat([t.item]))});case ae:return J(J({},e),{},{isStartGame:!1,isWin:t.isWin});case oe:return J(J({},e),{},{isStartGame:!1,isLoose:t.isLoose});default:return J({},e)}};var le=(0,E.UY)({info:ce}),ue=(0,E.MT)(le,(0,E.md)(w.Z)),me=n(6740),fe=S,de=k,pe=O,ge=A,be=T,he=I,ve=j,xe=N,ye=Z,Ee=_,we=L,Se=C,ke=G,Oe=U,Ae=function(e){return{type:pe,time:e}},Te=function(e){return{type:ke,isWin:e}},Ie=function(e){return{type:Oe,isLoose:e}},je=function(e){return{type:we,isSHowLearn:e}},Ne=function(e){return{type:Se,isStartGame:e}},Ze=function(){return{type:xe}},_e=function(e,t,n,r){var i;e(function(e){return{type:be,countItems:e}}(t)),e({type:ge,allTime:n}),e(Ae(n)),e((i=r.concat(r).sort((function(){return.5-Math.random()})),{type:Ee,pictures:i}))},Le=function(e){return function(t){switch(t(Ne(!1)),t(Ie(!1)),t(Te(!1)),t({type:de,complexityGame:e}),t(Ze()),t({type:ve}),e){case P.EASY:_e(t,12,30,H.filter((function(e,t){return t<6})));break;case P.MIDDLE:_e(t,16,45,H.filter((function(e,t){return t<8})));break;case P.HARD:_e(t,20,60,H.filter((function(e,t){return t<10})));break;default:_e(t,12,30,H.filter((function(e,t){return t<6})))}}},Ce=n(1627),Ge={};Ge.styleTagTransform=b(),Ge.setAttributes=f(),Ge.insert=u().bind(null,"head"),Ge.domAPI=c(),Ge.insertStyleElement=p();o()(Ce.Z,Ge);const Ue=Ce.Z&&Ce.Z.locals?Ce.Z.locals:void 0;const Me=function(){var e=(0,y.v9)((function(e){return null==e?void 0:e.info.background})),t=(0,y.I0)(),n=function(e){return t(function(e){return{type:fe,background:e}}(e))};return r.createElement("div",{className:Ue.panelBackground},Object.keys(Q).map((function(t){return function(t,i){return r.createElement("button",{key:i,onClick:function(){return n(t)},className:e===t?"active":null},t)}(Q[t],t)})))};var He=n(5721),Qe=n(6452),Pe=n(6066),Re=n(8723),ze={};ze.styleTagTransform=b(),ze.setAttributes=f(),ze.insert=u().bind(null,"head"),ze.domAPI=c(),ze.insertStyleElement=p();o()(Re.Z,ze);const De=Re.Z&&Re.Z.locals?Re.Z.locals:void 0;const qe=function(){return r.createElement("nav",{className:De.gameComplex},Object.keys(P).map((function(e){return r.createElement(x.OL,{key:e,to:"/".concat(P[e])},P[e])})))};var Je=n(7046),We={};We.styleTagTransform=b(),We.setAttributes=f(),We.insert=u().bind(null,"head"),We.domAPI=c(),We.insertStyleElement=p();o()(Je.Z,We);const Be=Je.Z&&Je.Z.locals?Je.Z.locals:void 0;var Xe=n(5677),Ye=n(2322),Ve=n(3992),Ke=n(4438),Fe=n(7203),$e={hidden:{opacity:0,scale:0,transition:{duration:.8}},visible:{opacity:1,scale:1,transition:{duration:.8}}},et=function(){var e=(0,y.I0)(),t=(0,y.v9)((function(e){return null==e?void 0:e.info.complexityGame}));return(0,r.useEffect)((function(){e(Ie(!0))}),[]),r.createElement("div",{className:Be.result},r.createElement(Pe.E.div,{className:Be.result__loose,initial:"hidden",animate:"visible",exit:$e.hidden,variants:$e},r.createElement("p",null,"Loose((("),r.createElement("img",{src:Xe,alt:"winner"}),r.createElement("button",{onClick:function(){return e(Le(t))},className:Be.play_again},"play again")))},tt=function(){var e=(0,y.v9)((function(e){return{time:null==e?void 0:e.info.time,allTime:null==e?void 0:e.info.allTime,complexityGame:null==e?void 0:e.info.complexityGame}})),t=e.time,n=e.allTime,i=e.complexityGame,a=(0,y.I0)();return(0,r.useEffect)((function(){a(Te(!0))}),[]),r.createElement("div",{className:Be.result},r.createElement(Pe.E.div,{className:Be.result__win,initial:"hidden",animate:"visible",exit:$e.hidden,variants:$e},r.createElement("div",{className:Be},r.createElement("p",null,"Win!!!"),r.createElement("p",{className:Be},"You result:"," ",n-t," ","seconds")),r.createElement("img",{src:Ye,alt:"winner"}),r.createElement("button",{onClick:function(){return a(Le(i))},className:Be.play_again},"play again")))},nt=function(){var e=(0,y.I0)();return r.createElement("div",{className:Be.info},r.createElement(Pe.E.div,{className:Be.info__content,initial:"hidden",animate:"visible",exit:$e.hidden,variants:$e},r.createElement("div",null,R.map((function(e){return r.createElement("p",{key:e},e,r.createElement("br",null))}))),r.createElement("div",{className:Be.info__images},r.createElement("img",{className:Be.info__img,src:Ve,alt:"before"}),r.createElement("img",{src:Ke,alt:"",width:60}),r.createElement("img",{className:Be.info__img,src:Fe,alt:"after"})),r.createElement("button",{onClick:function(){return e(je(!1))},className:Be.btn_open_game},"ok")))},rt=n(4743),it={};it.styleTagTransform=b(),it.setAttributes=f(),it.insert=u().bind(null,"head"),it.domAPI=c(),it.insertStyleElement=p();o()(rt.Z,it);const at=rt.Z&&rt.Z.locals?rt.Z.locals:void 0;var ot={hidden:{opacity:0,transition:{duration:.2}},visible:{opacity:1,transition:{duration:.2}}};const st=function(e){var t=e.pictures,n=e.isStartGame,i=e.handlerCLickItem,a=e.opensItems,o=e.chosenItems,s=e.isShowLearn;return t.map((function(e,t){return r.createElement(Pe.E.div,{key:t,layoutId:!s&&"gridItem",style:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, .9)",cursor:o.length>1||a.includes(t)?"not-allowed":"pointer"},onClick:n?function(){return i(t)}:null,className:at.gridItem},r.createElement(Qe.M,{initial:!1},function(e,t,n){return t.includes(e)||n.includes(e)}(t,a,o)&&r.createElement(Pe.E.img,{src:e,alt:e,initial:"hidden",animate:"visible",exit:"hidden",variants:ot,style:{width:"85%",height:"85%"}})))}))};function ct(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return lt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const ut=function(){var e=(0,y.v9)((function(e){return null==e?void 0:e.info})),t=e.countItems,n=e.opensItems,i=ct((0,r.useState)(0),2),a=i[0],o=i[1];return(0,r.useEffect)((function(){if(n.length)var e=Math.round(n.length/t*100),r=setInterval((function(){o((function(t){return t+1<e?t+1:(clearInterval(r),t)}))}),10);else o(0)}),[n.length]),r.createElement("progress",{className:at.progressbar,value:a,max:100})};function mt(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function ft(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){mt(a,r,i,o,s,"next",e)}function s(e){mt(a,r,i,o,s,"throw",e)}o(void 0)}))}}var dt;const pt=function(){var e=(0,me.TH)(),t=(0,y.I0)(),n=(0,y.v9)((function(e){return null==e?void 0:e.info})),i=n.time,a=n.isStartGame,o=n.countItems,s=n.pictures,c=n.opensItems,l=n.chosenItems,u=n.isShowLearn,m=M(e),f=function(e){return t(function(e){return{type:ye,item:e}}(e))},d=function(){return t(Ze())};(0,r.useEffect)((function(){!function(e){t(Le(e))}(m)}),[e.pathname]),(0,r.useEffect)((function(){2===l.length&&(!function(e,t){return Array.isArray(e)&&Array.isArray(t)?t[e[0]]===t[e[1]]&&e[0]!==e[1]:null}(l,s)?setTimeout((function(){return d()}),500):(l.map((function(e){return f(e)})),d()))}),[l]);var p=(0,He._)();return(0,r.useEffect)(ft(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}if(!(i<11)){e.next=6;break}return e.next=4,p.start({scale:2,transition:{duration:.25}});case 4:return e.next=6,p.start({scale:1,transition:{duration:.25}});case 6:return i>0&&(dt=setTimeout((function(){return t(Ae(i-1))}),1e3)),e.abrupt("return");case 8:clearTimeout(dt);case 9:case"end":return e.stop()}}),e)}))),[a,i]),r.createElement("div",{className:at.game},r.createElement(Qe.M,null,function(e){return 0===e}(i)&&r.createElement(et,null),function(e,t){return e.length===t}(c,o)&&r.createElement(tt,null),u&&r.createElement(nt,{toggleShowLearn:function(){return t(je(!1))}})),r.createElement(qe,null),r.createElement("p",{className:"".concat(at.time," ").concat(i<11&&at.redTime)},"time:"," ",r.createElement(Pe.E.span,{animate:p},i)),r.createElement(Pe.E.div,{className:m===P.HARD?at.gameGridHard:at.gameGridEasy},r.createElement(st,{pictures:s,isStartGame:a,handlerCLickItem:function(e){!c.includes(e)&&l.length<2&&t({type:he,item:e})},opensItems:c,chosenItems:l,isShowLearn:u})),r.createElement(ut,null))};var gt=n(795),bt={};bt.styleTagTransform=b(),bt.setAttributes=f(),bt.insert=u().bind(null,"head"),bt.domAPI=c(),bt.insertStyleElement=p();o()(gt.Z,bt);const ht=gt.Z&&gt.Z.locals?gt.Z.locals:void 0;const vt=function(){var e=(0,me.TH)(),t=(0,y.I0)(),n=(0,y.v9)((function(e){return null==e?void 0:e.info.isStartGame})),i=M(e);return r.createElement("div",{className:ht.panelStartGame},r.createElement("button",{onClick:function(){return t(Ne(!0))},className:"".concat(ht.startGame," ").concat(n&&ht.active)},"Start"),r.createElement("button",{onClick:function(){return t(Le(i))}},"Reset"))};var xt=n(6168),yt=n(3563),Et={};Et.styleTagTransform=b(),Et.setAttributes=f(),Et.insert=u().bind(null,"head"),Et.domAPI=c(),Et.insertStyleElement=p();o()(yt.Z,Et);const wt=yt.Z&&yt.Z.locals?yt.Z.locals:void 0;var St=n(3995),kt=n(787),Ot=n(6398),At=n(3674),Tt=n(9136);function It(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return jt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Nt=function(){var e;switch((0,y.v9)((function(e){return null==e?void 0:e.info.background}))){case Q.SEA:e=Ot;break;case Q.FIRE:e=At;break;case Q.RAIN:e=Tt;break;default:e=Ot}var t=It((0,xt.Z)(e,{interrupt:!0}),2),n=t[0],i=t[1],a=i.stop,o=i.isPlaying;return(0,r.useMemo)((function(){return a()}),[e]),r.createElement("div",{className:wt.sound},r.createElement("img",{onClick:o?function(){return a()}:function(){return n()},src:o?St:kt,alt:""}))};var Zt=n(2956),_t={};_t.styleTagTransform=b(),_t.setAttributes=f(),_t.insert=u().bind(null,"head"),_t.domAPI=c(),_t.insertStyleElement=p();o()(Zt.Z,_t);const Lt=Zt.Z&&Zt.Z.locals?Zt.Z.locals:void 0;const Ct=function(){var e=(0,me.s0)();(0,r.useEffect)((function(){e("/".concat(P.EASY))}),[]);var t=(0,y.v9)((function(e){return null==e?void 0:e.info.background}));return r.createElement("div",{className:"".concat(Lt.wrapper," ").concat(Lt[t])},r.createElement(Nt,null),r.createElement(vt,null),r.createElement(pt,null),r.createElement(Me,null))};var Gt=n(5482),Ut={};Ut.styleTagTransform=b(),Ut.setAttributes=f(),Ut.insert=u().bind(null,"head"),Ut.domAPI=c(),Ut.insertStyleElement=p();o()(Gt.Z,Ut);Gt.Z&&Gt.Z.locals&&Gt.Z.locals;const Mt=function(){return r.createElement(x.UT,null,r.createElement(y.zt,{store:ue},r.createElement(Ct,null)))};i.render(r.createElement(r.StrictMode,null,r.createElement(Mt,null)),document.getElementById("root"))},1627:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,".zqyqbRiwR6lKTv7NZ6fD{display:flex;flex:1 1 33.33%;flex-direction:column;align-items:center;justify-content:center;height:inherit;min-height:300px}@media (max-width: 1200px){.zqyqbRiwR6lKTv7NZ6fD{order:3}}\n",""]),o.locals={panelBackground:"zqyqbRiwR6lKTv7NZ6fD"};const s=o},4743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,".vrk0JhSJuhLksW8yZkJm{display:flex;flex:1 1 33.33%;flex-direction:column;align-items:center;justify-content:center;height:inherit;min-height:500px}.lFqaF6Q5Nf7a5KnOBi6l,.hNtO8OLbXW4HEDYrOtRY,.fgU1erpxx9jXcenJ3IGo{display:flex;flex-wrap:wrap;justify-content:center;width:calc(4 * calc(100vh / 8))}.fgU1erpxx9jXcenJ3IGo{width:calc(5 * calc(100vh / 8))}.kjS4tU1tIZQQ0dDergsp{border:1px solid white;width:calc(100vh / 8);height:calc(100vh / 8);box-sizing:border-box;cursor:pointer}.nvU2aaT7eAWV4l07i0RA{font-size:calc(20px + 5 * ((100vw - 320px) / 1600));margin:40px 0;text-shadow:1px 0 1px #000,\r 0 1px 1px #000,\r -1px 0 1px #000,\r 0 -1px 1px #000;text-transform:uppercase;color:white}.nvU2aaT7eAWV4l07i0RA span{display:inline-block;font-size:calc(20px + 5 * ((100vw - 320px) / 1600))}.iDJAk14MEHxONC3wLnUG{color:red}.YXMlLZWSci3JM56ChgHA{margin-top:40px;border-radius:30px;width:20vw;height:25px;min-width:280px}.YXMlLZWSci3JM56ChgHA::-webkit-progress-bar{border-radius:30px;background:rgba(255,255,255,0.5)}.YXMlLZWSci3JM56ChgHA::-webkit-progress-value{border-radius:30px;background:rgba(9,104,9,0.8)}.YXMlLZWSci3JM56ChgHA::-moz-progress-bar{border-radius:30px;background:rgba(9,104,9,0.8)}@media (max-width: 1200px){.lFqaF6Q5Nf7a5KnOBi6l,.hNtO8OLbXW4HEDYrOtRY,.fgU1erpxx9jXcenJ3IGo{order:2;width:calc(4 * calc(100vh / 8))}.nvU2aaT7eAWV4l07i0RA{order:2}.YXMlLZWSci3JM56ChgHA{order:4}}\n",""]),o.locals={game:"vrk0JhSJuhLksW8yZkJm",gameGridEasy:"lFqaF6Q5Nf7a5KnOBi6l",gameGridMiddle:"hNtO8OLbXW4HEDYrOtRY",gameGridHard:"fgU1erpxx9jXcenJ3IGo",gridItem:"kjS4tU1tIZQQ0dDergsp",time:"nvU2aaT7eAWV4l07i0RA",redTime:"iDJAk14MEHxONC3wLnUG",progressbar:"YXMlLZWSci3JM56ChgHA"};const s=o},8723:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,".X8HUqlAmqxeTNEnqbJQw{display:flex;flex-direction:row;justify-content:space-between;margin:0 -10px}.X8HUqlAmqxeTNEnqbJQw a{margin:0 10px}@media (max-width: 1200px){.X8HUqlAmqxeTNEnqbJQw{flex-direction:column;order:1}.X8HUqlAmqxeTNEnqbJQw a{margin:10px 0}}\n",""]),o.locals={gameComplex:"X8HUqlAmqxeTNEnqbJQw"};const s=o},2956:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a),s=n(1678),c=n.n(s),l=new URL(n(438),n.b),u=new URL(n(9476),n.b),m=new URL(n(1097),n.b),f=o()(i()),d=c()(l),p=c()(u),g=c()(m);f.push([e.id,".Z1fToNYa19hrQStnu1MT{position:relative;display:flex;padding:20px;min-height:100vh;transition:background 0.3s linear}.Z1fToNYa19hrQStnu1MT.t25ckWL8t53JtLow3QWo{background:url("+d+") center/cover}.Z1fToNYa19hrQStnu1MT.A5QJA1GJRRALrXQl6hGe{background:url("+p+") center/cover}.Z1fToNYa19hrQStnu1MT.GuyEpNTXwRudOssR_iik{background:url("+g+") center/cover}@media (max-width: 1200px){.Z1fToNYa19hrQStnu1MT{flex-direction:column}}\n",""]),f.locals={wrapper:"Z1fToNYa19hrQStnu1MT",sea:"t25ckWL8t53JtLow3QWo",fire:"A5QJA1GJRRALrXQl6hGe",rain:"GuyEpNTXwRudOssR_iik"};const b=f},795:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,".PS6_vIA3dotpvVzhCsPj{display:flex;flex:1 1 33.33%;flex-direction:column;align-items:center;justify-content:center;height:inherit;min-height:300px}button{margin:30px 0}.CfPtGngsiXkrQuB2tW6R button:hover{transform:scale(0.9)}.ffXkgUveEHlkjm79xYQm{position:relative;bottom:0;animation:h79PebIUKoAPo8ebYeat 0.8s infinite}button.ffXkgUveEHlkjm79xYQm:hover{transform:none}.ffXkgUveEHlkjm79xYQm.XC93ZwjP93rxQoWQi3b1{animation:none}@keyframes h79PebIUKoAPo8ebYeat{0%{bottom:0}50%{bottom:25px}100%{bottom:0}}@media (max-width: 1200px){.PS6_vIA3dotpvVzhCsPj{order:1}}\n",""]),o.locals={panelStartGame:"PS6_vIA3dotpvVzhCsPj",controls:"CfPtGngsiXkrQuB2tW6R",startGame:"ffXkgUveEHlkjm79xYQm",jump:"h79PebIUKoAPo8ebYeat",active:"XC93ZwjP93rxQoWQi3b1"};const s=o},7046:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,".u2OuZNBi8IJqaCwUS2bB,.Zl3Vdtg0ZIlfTpj5pO7o{position:absolute;left:0;top:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%;text-align:center;background:rgba(0,0,0,0.8);transition:all 0.8s ease 0s;animation:WEbXLjweDgBb3upV3CkN 0.8s}@media (max-width: 1200px){.u2OuZNBi8IJqaCwUS2bB,.Zl3Vdtg0ZIlfTpj5pO7o{justify-content:flex-start;padding:50px 0 0}}@keyframes WEbXLjweDgBb3upV3CkN{0%{opacity:0}100%{opacity:1}}.Zl3Vdtg0ZIlfTpj5pO7o p,.u2OuZNBi8IJqaCwUS2bB p{font-size:calc(15px + 8 * ((100vw - 320px) / 1600));text-shadow:1px 0 1px #fff,\r 0 1px 1px #fff,\r -1px 0 1px #fff,\r 0 -1px 1px #fff;text-transform:none;color:black}.u2OuZNBi8IJqaCwUS2bB p{font-size:calc(20px + 10 * ((100vw - 320px) / 1600));margin-bottom:20px;font-family:Arial, Helvetica, sans-serif}.VHCh3h91NquKzIhU9Wel{display:flex;align-items:center;margin:10px -20px 0}@media (max-width: 960px){.VHCh3h91NquKzIhU9Wel{flex-direction:column}}@media (max-width: 1200px){.JA4533Lc5HQsjFQwSKCb{transform:scale(0.7) rotate(90deg)}}.LCjzZKLKHNNVphGoc_4R{margin:20px;width:17.8vw;min-width:100px;max-width:330px}.Zl3Vdtg0ZIlfTpj5pO7o button:hover{transform:none}.u2OuZNBi8IJqaCwUS2bB img{border:2px solid black;border-radius:35px;width:30vw;height:auto;min-width:200px;box-shadow:0 0 20px black;background:black}.HxobJCdO582Av7MTPQwi,.oYsm_iduDSHeQ3dD8hjL,.gUU0BpqvQOu4ejlc3dhA{display:flex;flex-direction:column;align-items:center;justify-content:center;border:7px solid black;padding:70px 150px;max-width:1000px;background:rgba(255,255,255,0.8)}@media (max-width: 600px){.HxobJCdO582Av7MTPQwi,.oYsm_iduDSHeQ3dD8hjL,.gUU0BpqvQOu4ejlc3dhA{padding:70px 20px}}.gUU0BpqvQOu4ejlc3dhA{padding:40px 70px;text-align:left}.gUU0BpqvQOu4ejlc3dhA p{margin-bottom:10px;line-height:1.2;text-indent:25px}@media (max-width: 1200px){.gUU0BpqvQOu4ejlc3dhA{padding:20px}}.ak3cLhvIco02xzSG1z4G,.ObDmw1G111WXHzzzz4tN{font-size:calc(15px + 5 * ((100vw - 320px) / 1600));margin-top:40px;min-width:120px;font-family:Arial, Helvetica, sans-serif}.ObDmw1G111WXHzzzz4tN{margin-bottom:0}.ak3cLhvIco02xzSG1z4G:hover{transform:none}\n",""]),o.locals={result:"u2OuZNBi8IJqaCwUS2bB",info:"Zl3Vdtg0ZIlfTpj5pO7o",move:"WEbXLjweDgBb3upV3CkN",info__images:"VHCh3h91NquKzIhU9Wel",info__arr:"JA4533Lc5HQsjFQwSKCb",info__img:"LCjzZKLKHNNVphGoc_4R",result__loose:"HxobJCdO582Av7MTPQwi",result__win:"oYsm_iduDSHeQ3dD8hjL",info__content:"gUU0BpqvQOu4ejlc3dhA",play_again:"ak3cLhvIco02xzSG1z4G",btn_open_game:"ObDmw1G111WXHzzzz4tN"};const s=o},3563:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,".MyQ4kHp3VfVgjBcnaoch img{filter:brightness(0) invert(1);cursor:pointer}.MyQ4kHp3VfVgjBcnaoch{position:absolute;left:2.6%;top:6.48%;border:none;padding:0;min-width:0;background:none}@media (max-width: 500px){.MyQ4kHp3VfVgjBcnaoch{left:20px;top:20px;transform:scale(0.7)}}.MyQ4kHp3VfVgjBcnaoch:hover{transform:none}\n",""]),o.locals={sound:"MyQ4kHp3VfVgjBcnaoch"};const s=o},5482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,'*{margin:0;border:0;padding:0}*,*::before,*::after{box-sizing:border-box}:focus,:active{outline:none}a:focus,a:active{outline:none}nav,footer,header,aside{display:block}html,body{width:100%;height:100%;font-size:14px;line-height:1}input,button,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{border:0;padding:0}a,a:visited{text-decoration:none}a:hover{text-decoration:none}ul li{list-style:none}img{vertical-align:top}h1,h2,h3,h4,h5,h6{font-weight:inherit;font-size:inherit}*{font-family:"Sansita Swashed", cursive;font-weight:700;font-size:15px}html,body{height:100vh}button,a{font-size:calc(15px + 17 * ((100vw - 320px) / 1600));border:3px solid white;border-radius:15px;padding:1.85vh 2vw;min-width:170px;text-align:center;text-transform:uppercase;color:white;background:black;transition:transform 0.5s ease 0s}a.active,button.active{border:3px solid green;box-shadow:0 0 50px rgba(0,128,0,0.5);color:green;transition:all 0.8s ease 0s}a.active:hover,button.active:hover{transform:none}button:hover{transform:scale(0.9);cursor:pointer}\n',""]);const s=o},6992:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4933),i=n.n(r),a=n(3476),o=n.n(a)()(i());o.push([e.id,'body{margin:0;font-family:-apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,\r Menlo,\r Monaco,\r Consolas,\r "Courier New",\r monospace}\n',""]);const s=o},8365:(e,t,n)=>{var r={"./1.svg":7743,"./10.svg":6337,"./2.svg":1708,"./3.svg":1448,"./4.svg":1064,"./5.svg":9618,"./6.svg":5704,"./7.svg":8901,"./8.svg":8334,"./9.svg":53};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=8365},7203:(e,t,n)=>{"use strict";e.exports=n.p+"images/afterbb114dc655ce3a1d07d4.png"},4438:(e,t,n)=>{"use strict";e.exports=n.p+"images/arr1f59385bc42c2af0f825.png"},9476:(e,t,n)=>{"use strict";e.exports=n.p+"images/back_fire50a2a75b8cef3aebed7e.jpg"},1097:(e,t,n)=>{"use strict";e.exports=n.p+"images/back_rain6fea3c534748090bd46a.jpg"},438:(e,t,n)=>{"use strict";e.exports=n.p+"images/back_sead1b0892f9be837ae4b0f.jpg"},3992:(e,t,n)=>{"use strict";e.exports=n.p+"images/beforea0606cf53bbb0fd3242a.png"},5677:(e,t,n)=>{"use strict";e.exports=n.p+"images/loose239f89624d152dbe485d.gif"},7743:(e,t,n)=>{"use strict";e.exports=n.p+"images/15a1176ae1207ceaa89e2.svg"},6337:(e,t,n)=>{"use strict";e.exports=n.p+"images/108837c61c4c87fb2ee679.svg"},1708:(e,t,n)=>{"use strict";e.exports=n.p+"images/29f7ff5e468a9bca0776a.svg"},1448:(e,t,n)=>{"use strict";e.exports=n.p+"images/3889a44e277165289600c.svg"},1064:(e,t,n)=>{"use strict";e.exports=n.p+"images/44a54998889e6581ff03f.svg"},9618:(e,t,n)=>{"use strict";e.exports=n.p+"images/5dfdc3dc1374242a81f57.svg"},5704:(e,t,n)=>{"use strict";e.exports=n.p+"images/65de6ce85d075e6771e56.svg"},8901:(e,t,n)=>{"use strict";e.exports=n.p+"images/73549a983e4b3667ca812.svg"},8334:(e,t,n)=>{"use strict";e.exports=n.p+"images/800a91ec4ccd64cbd783c.svg"},53:(e,t,n)=>{"use strict";e.exports=n.p+"images/9a25c03655bf916bf138b.svg"},787:(e,t,n)=>{"use strict";e.exports=n.p+"images/sound-off6f6bfb9eac26cf82bb32.svg"},3995:(e,t,n)=>{"use strict";e.exports=n.p+"images/speaker-volumed21cd86e2477c9c2660d.svg"},2322:(e,t,n)=>{"use strict";e.exports=n.p+"images/win0feba87ea2723ef383bc.gif"},3674:(e,t,n)=>{"use strict";e.exports=n.p+"images/audio_fire4b20d77a27992c9faba4.mp3"},9136:(e,t,n)=>{"use strict";e.exports=n.p+"images/audio_raind007ef0da21e7c0bfab1.mp3"},6398:(e,t,n)=>{"use strict";e.exports=n.p+"images/audio_seaafda38ef15f5ba95c07e.mp3"}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,exports:{}};return i[e](n,n.exports,o),n.exports}o.m=i,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);o.r(i);var a={};t=t||[null,n({}),n([]),n(n)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(i,a),i},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".a134ea0cdc358408ab75.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var a,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=e),r[e]=[t];var m=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var i=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),s&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.O(void 0,[683],(()=>o(1202)));var s=o.O(void 0,[683],(()=>o(6505)));s=o.O(s)})();